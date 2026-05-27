import type { ReactNode } from "react"

type BenefitCardProps = {
  title: string
  description: string
  icon: ReactNode
  accentClass: string
  matchScore?: number
  reason?: string
}

function BenefitCard({
  title,
  description,
  icon,
  accentClass,
  reason,
}: BenefitCardProps) {
  return (
    <button
      type="button"
      className="premium-benefit-card group relative flex min-h-[96px] w-full items-center gap-4 overflow-hidden rounded-[26px] border border-white/88 bg-white/74 p-4 text-left shadow-[0_12px_28px_rgba(18,59,59,0.055),0_2px_6px_rgba(18,59,59,0.035)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_18px_36px_rgba(21,140,132,0.105),0_4px_10px_rgba(18,59,59,0.045)] active:translate-y-0 active:scale-[0.985]"
    >
      <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      <span className="pointer-events-none absolute -right-10 -top-12 h-24 w-24 rounded-full bg-[#BDF9FF]/20 blur-2xl opacity-0 transition duration-300 group-hover:opacity-100" />

      <span
        className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_8px_18px_rgba(18,59,59,0.055)] ring-1 ring-white/55 transition duration-300 group-hover:scale-[1.035] ${accentClass}`}
      >
        {icon}
      </span>

      <span className="relative min-w-0 flex-1">
        <span className="mb-1.5 flex items-center gap-2">
          <span className="rounded-full bg-[#19A79D]/10 px-2.5 py-1 text-[10.5px] font-extrabold leading-none text-[#12877F]">
            AI จับคู่ให้คุณแล้ว
          </span>
        </span>
        <span className="block truncate text-[16.5px] font-extrabold leading-snug text-[#123B3B]">
          {title}
        </span>
        <span className="mt-1.5 block truncate text-[13.5px] font-bold leading-none text-[#5D7778]">
          {description}
        </span>
        {reason && (
          <span className="mt-1.5 block truncate text-[12px] font-normal leading-none text-[#6A8082]">
            {reason}
          </span>
        )}
      </span>
    </button>
  )
}

export default BenefitCard
