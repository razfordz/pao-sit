import DashboardCategory, {
  type DashboardBenefit,
} from "./DashboardCategory"
import DashboardHeroCard from "./DashboardHeroCard"
import AIAssistantPanel from "./AIAssistantPanel"
import BenefitDetailScreen from "./BenefitDetailScreen"
import { benefits } from "../data/benefits"
import { userProfile } from "../data/userProfile"
import { matchBenefits, type MatchedBenefit } from "../lib/matchBenefits"
import { useState } from "react"

type DashboardCategoryData = {
  id: string
  title: string
  benefits: DashboardBenefit[]
}

const categoryOrder = ["สวัสดิการ", "สุขภาพ", "โอกาส"]

function PersonalizedDashboardScreen() {
  const [selectedBenefit, setSelectedBenefit] =
    useState<DashboardBenefit | null>(null)
  const matchedBenefits = matchBenefits(userProfile, benefits)
  const dashboardCategories = groupBenefitsByCategory(matchedBenefits)

  if (selectedBenefit) {
    return (
      <BenefitDetailScreen
        benefit={selectedBenefit}
        onBack={() => setSelectedBenefit(null)}
      />
    )
  }

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
                onSelectBenefit={setSelectedBenefit}
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

  matchedBenefits.forEach((benefit) => {
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
    description: benefit.amountSummary ?? "เหมาะกับโปรไฟล์ของคุณ",
    reason: getPersonalReason(benefit),
    matchScore: benefit.matchScore,
    thumbnail: benefit.thumbnail ?? `/images/benefits/${benefit.id}.png`,
    shortDescription: benefit.shortDescription,
    eligibility: benefit.eligibility,
    requiredDocuments: benefit.requiredDocuments,
    agency: benefit.agency,
    nextStep: benefit.nextStep,
  }
}

function getPersonalReason(
  benefit: MatchedBenefit<(typeof benefits)[number]>,
) {
  if (
    benefit.tags.includes("elderly") ||
    benefit.tags.includes("seniorCitizen")
  ) {
    return "AI พบว่าสิทธิ์นี้เหมาะกับช่วงวัยผู้สูงอายุและช่วยดูแลค่าใช้จ่ายประจำวัน"
  }

  if (benefit.tags.includes("hasChild") && benefit.tags.includes("lowIncome")) {
    return "เหมาะกับผู้ปกครองที่กำลังมีภาระค่าใช้จ่ายในครอบครัว"
  }

  if (benefit.tags.includes("hasChild")) {
    return "คุณอาจเข้าเกณฑ์ช่วยเหลือครอบครัวและการดูแลบุตร"
  }

  if (
    benefit.tags.includes("lookingForJob") ||
    benefit.tags.includes("jobSeeking") ||
    benefit.tags.includes("unemployed")
  ) {
    return "AI พบว่าสิทธิ์นี้อาจช่วยคุณในช่วงกำลังหางาน"
  }

  if (
    benefit.tags.includes("incomeSupport") ||
    benefit.tags.includes("financialSupport") ||
    benefit.tags.includes("lowIncome")
  ) {
    return "AI พบว่าสิทธิ์นี้ช่วยลดภาระค่าครองชีพและเสริมความมั่นคงทางการเงิน"
  }

  if (benefit.tags.includes("socialSecurity")) {
    return "AI พบว่าสิทธิ์นี้เกี่ยวข้องกับสถานะผู้ประกันตนของคุณ"
  }

  if (benefit.tags.includes("transportSupport")) {
    return "AI พบว่าสิทธิ์นี้อาจช่วยลดค่าเดินทางและค่าใช้จ่ายประจำวัน"
  }

  if (benefit.tags.includes("disabled")) {
    return "AI พบว่าสิทธิ์นี้อาจช่วยสนับสนุนการใช้ชีวิตประจำวันของผู้พิการ"
  }

  if (benefit.tags.includes("healthSupport")) {
    return "สิทธิ์นี้อาจช่วยให้การดูแลสุขภาพของคุณง่ายขึ้น"
  }

  return "AI พบว่าสิทธิ์นี้อาจช่วยคุณได้ในสถานการณ์ตอนนี้"
}

function EmptyMatchedBenefits() {
  return (
    <div className="relative z-10 mt-11 rounded-[28px] border border-white/84 bg-white/68 p-6 text-center shadow-[0_18px_42px_rgba(18,59,59,0.08)] backdrop-blur-xl">
      <p className="headline-font text-[21px] font-extrabold leading-tight text-[#123B3B]">
        ขณะนี้ยังไม่พบสิทธิ์ที่ตรงกับข้อมูลของคุณ
      </p>
      <p className="mt-3 text-[13.5px] font-bold leading-[1.65] text-[#5D7778]">
        ลองเพิ่มข้อมูลเพิ่มเติมเพื่อให้ AI แนะนำได้แม่นยำขึ้น
      </p>
    </div>
  )
}

export default PersonalizedDashboardScreen
