import BenefitCard from "./BenefitCard"

export type DashboardBenefit = {
  id: string
  title: string
  description: string
  thumbnail: string
  matchScore?: number
  reason?: string
  recommendationReason?: string
  shortDescription?: string
  eligibility?: string[]
  requiredDocuments?: string[]
  agency?: string
  sourceUrl?: string
  nextStep?: string
}

type DashboardCategoryProps = {
  title: string
  benefits: DashboardBenefit[]
  onSelectBenefit?: (benefit: DashboardBenefit) => void
}

function DashboardCategory({
  title,
  benefits,
  onSelectBenefit,
}: DashboardCategoryProps) {
  return (
    <section className="relative z-10">
      <div className="px-1.5">
        <p className="text-[11px] font-extrabold leading-none text-[#178E8A]/70">
          สิทธิ์ที่อาจเหมาะกับคุณ
        </p>
        <h3 className="headline-font mt-2 text-[21px] font-extrabold leading-none text-[#123B3B]">
          {title}
        </h3>
      </div>

      <div className="mt-4 flex flex-col gap-5">
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            title={benefit.title}
            description={benefit.description}
            thumbnail={benefit.thumbnail}
            thumbnailAlt={benefit.title}
            matchScore={benefit.matchScore}
            reason={benefit.recommendationReason ?? benefit.reason}
            onSelect={() => onSelectBenefit?.(benefit)}
          />
        ))}
      </div>
    </section>
  )
}

export default DashboardCategory
