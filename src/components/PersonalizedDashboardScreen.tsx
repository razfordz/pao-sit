import DashboardCategory, {
  type DashboardBenefit,
} from "./DashboardCategory"
import DashboardHeroCard from "./DashboardHeroCard"
import AIAssistantPanel from "./AIAssistantPanel"
import { benefits } from "../data/benefits"
import { userProfile } from "../data/userProfile"
import { matchBenefits, type MatchedBenefit } from "../lib/matchBenefits"

type DashboardCategoryData = {
  id: string
  title: string
  benefits: DashboardBenefit[]
}

const categoryOrder = ["สวัสดิการ", "สุขภาพ", "โอกาส"]

function PersonalizedDashboardScreen() {
  const matchedBenefits = matchBenefits(userProfile, benefits)
  const dashboardCategories = groupBenefitsByCategory(matchedBenefits)

  return (
    <div className="relative h-[548px] animate-[screen-in_420ms_ease-out_both] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#FBFFFF] via-[#EFFBFA] to-[#DCF5FF] shadow-[0_24px_70px_rgba(21,140,132,0.16)] sm:h-[566px] sm:rounded-[34px]">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#7DE8FF]/24 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-[#19A79D]/12 blur-3xl" />
      <div className="pointer-events-none absolute left-8 top-28 h-36 w-36 rounded-full bg-white/70 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0)_38%),radial-gradient(circle_at_92%_8%,rgba(255,255,255,0.72),transparent_28%)]" />

      <div className="dashboard-scroll relative h-full overflow-y-auto overflow-x-hidden overscroll-contain px-4 pb-24 pt-5 sm:px-5">
        <DashboardHeroCard />

        {dashboardCategories.length > 0 ? (
          <div className="mt-11 flex flex-col gap-9 pb-2">
            {dashboardCategories.map((category) => (
              <DashboardCategory
                key={category.id}
                title={category.title}
                benefits={category.benefits}
              />
            ))}
          </div>
        ) : (
          <EmptyMatchedBenefits />
        )}
      </div>

      <AIAssistantPanel />
    </div>
  )
}

function groupBenefitsByCategory(
  matchedBenefits: MatchedBenefit<(typeof benefits)[number]>[],
): DashboardCategoryData[] {
  const benefitsByCategory = new Map<string, DashboardBenefit[]>()

  matchedBenefits.map((benefit) => {
    const categoryBenefits = benefitsByCategory.get(benefit.category) ?? []

    benefitsByCategory.set(benefit.category, [
      ...categoryBenefits,
      toDashboardBenefit(benefit),
    ])
  })

  return categoryOrder
    .map((category) => ({
      id: category,
      title: category,
      benefits: benefitsByCategory.get(category) ?? [],
    }))
    .filter((category) => category.benefits.length > 0)
}

function toDashboardBenefit(
  benefit: MatchedBenefit<(typeof benefits)[number]>,
): DashboardBenefit {
  return {
    id: benefit.id,
    title: benefit.title,
    description: benefit.amount ?? "เหมาะกับโปรไฟล์ของคุณ",
    reason: benefit.reason,
    matchScore: benefit.matchScore,
    icon: getBenefitIcon(benefit),
    accentClass: getBenefitAccentClass(benefit),
  }
}

function getBenefitIcon(benefit: MatchedBenefit<(typeof benefits)[number]>) {
  if (benefit.tags.includes("hasChild")) {
    return <ChildIcon />
  }

  if (benefit.tags.includes("elderly")) {
    return <HomeCareIcon />
  }

  if (benefit.tags.includes("healthSupport")) {
    return <HealthIcon />
  }

  if (benefit.tags.includes("lookingForJob")) {
    return <CareerIcon />
  }

  if (benefit.category === "โอกาส") {
    return <LearningIcon />
  }

  if (benefit.category === "สุขภาพ") {
    return <DentalIcon />
  }

  return <CareerIcon />
}

function getBenefitAccentClass(benefit: MatchedBenefit<(typeof benefits)[number]>) {
  if (benefit.category === "สุขภาพ") {
    return "bg-[#E9F7FF] text-[#2279A8]"
  }

  if (benefit.category === "โอกาส") {
    return "bg-[#EAFBF1] text-[#23875A]"
  }

  if (benefit.tags.includes("hasChild")) {
    return "bg-[#E9FBF8] text-[#168B84]"
  }

  return "bg-[#FFF4DC] text-[#B87512]"
}

function EmptyMatchedBenefits() {
  return (
    <div className="relative z-10 mt-11 rounded-[28px] border border-white/84 bg-white/68 p-6 text-center shadow-[0_18px_42px_rgba(18,59,59,0.08)] backdrop-blur-xl">
      <p className="headline-font text-[21px] font-extrabold leading-tight text-[#123B3B]">
        ยังไม่พบสิทธิ์ที่ตรงกับโปรไฟล์นี้
      </p>
      <p className="mt-3 text-[13.5px] font-bold leading-[1.65] text-[#5D7778]">
        ลองเพิ่มข้อมูลเพิ่มเติมเพื่อให้ AI แนะนำได้แม่นยำขึ้น
      </p>
    </div>
  )
}

function ChildIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M8.2 10.2a3.8 3.8 0 1 1 7.6 0v1.1a3.8 3.8 0 1 1-7.6 0v-1.1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
      <path
        d="M6.2 20c.8-2.6 2.8-4.1 5.8-4.1s5 1.5 5.8 4.1M9.2 7.2 7.7 5.7M14.8 7.2l1.5-1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  )
}

function HomeCareIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4.5 11.3 12 5l7.5 6.3M6.5 10.6V19h11v-8.4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
      <path
        d="M9.3 14.2c1.7-1.7 3.7-1.7 5.4 0M12 12.4v4.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  )
}

function HealthIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 20s-7-4.2-7-10.1A4.1 4.1 0 0 1 12 7a4.1 4.1 0 0 1 7 2.9C19 15.8 12 20 12 20Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
      <path
        d="M12 9.5v5M9.5 12h5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  )
}

function DentalIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M8.5 4.8c1.4 0 2.2.7 3.5.7s2.1-.7 3.5-.7c2.1 0 3.5 1.5 3.5 3.8 0 3-1.2 8-3.1 10.1-.9 1-2.1.6-2.3-.7l-.4-2.2c-.2-1-1.4-1-1.6 0L11.2 18c-.2 1.3-1.4 1.7-2.3.7C7 16.6 5.8 11.6 5.8 8.6c0-2.3 1.4-3.8 2.7-3.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  )
}

function LearningIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="m4 8 8-4 8 4-8 4-8-4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
      <path
        d="M7 10.2v4.2c1.2 1.2 2.9 1.8 5 1.8s3.8-.6 5-1.8v-4.2M19.5 9v5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  )
}

function CareerIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M8.5 7.2V6A2 2 0 0 1 10.5 4h3A2 2 0 0 1 15.5 6v1.2M5.5 8h13A2.5 2.5 0 0 1 21 10.5v6A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-6A2.5 2.5 0 0 1 5.5 8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
      <path
        d="M9 13h6M12 10v6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  )
}

export default PersonalizedDashboardScreen
