import type { ReactNode } from "react"
import BenefitCard from "./BenefitCard"

export type DashboardBenefit = {
  id: string
  title: string
  description: string
  icon: ReactNode
  accentClass: string
  matchScore?: number
  reason?: string
}

type DashboardCategoryProps = {
  title: string
  benefits: DashboardBenefit[]
}

function DashboardCategory({ title, benefits }: DashboardCategoryProps) {
  return (
    <section className="relative z-10">
      <div className="px-1.5">
        <p className="text-[11px] font-extrabold leading-none text-[#178E8A]/70">
          แนะนำจากข้อมูลของคุณ
        </p>
        <h3 className="headline-font mt-2 text-[21px] font-extrabold leading-none text-[#123B3B]">
          {title}
        </h3>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
            accentClass={benefit.accentClass}
            matchScore={benefit.matchScore}
            reason={benefit.reason}
          />
        ))}
      </div>
    </section>
  )
}

export default DashboardCategory
