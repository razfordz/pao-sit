type BenefitCardProps = {
  title: string
  description: string
  thumbnail: string
  thumbnailAlt: string
  matchScore?: number
  reason?: string
  onSelect?: () => void
}

function BenefitCard({
  title,
  description,
  thumbnail,
  thumbnailAlt,
  reason,
  onSelect,
}: BenefitCardProps) {
  const amountParts = getAmountParts(description)

  return (
    <button
      type="button"
      onClick={onSelect}
      className="premium-benefit-card group relative flex min-h-[292px] w-full overflow-hidden rounded-[30px] border border-white/90 bg-[#123B3B] text-left shadow-[0_22px_48px_rgba(18,59,59,0.14),0_6px_14px_rgba(21,140,132,0.08),inset_0_1px_0_rgba(255,255,255,0.46)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_58px_rgba(21,140,132,0.18),0_8px_18px_rgba(18,59,59,0.09),inset_0_1px_0_rgba(255,255,255,0.58)] active:translate-y-0 active:scale-[0.985]"
    >
      <img
        alt={thumbnailAlt}
        className="absolute inset-0 h-full w-full object-cover object-left-bottom transition duration-500 group-hover:scale-[1.025] blur-[1.0px]"
        loading="lazy"
        src={thumbnail}
      />
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,40,43,0.08)_0%,rgba(4,40,43,0.28)_34%,rgba(5,46,48,0.78)_74%,rgba(4,34,36,0.9)_100%)]" />
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(13,127,121,0.48)_0%,rgba(13,127,121,0.18)_34%,rgba(0,0,0,0)_68%)]" />
      <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      <span className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-inset ring-white/16" />

      <span className="relative mt-auto flex min-h-[190px] w-full flex-col justify-end px-5 pb-5 pt-16">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/48 bg-white/28 px-3.5 py-2 text-[11px] font-extrabold leading-none text-white/90 shadow-[0_10px_24px_rgba(3,32,34,0.18),inset_0_1px_0_rgba(255,255,255,0.32)] backdrop-blur-2xl">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FFEFC8] text-[9px] leading-none text-[#8A6408] shadow-[0_0_10px_rgba(255,239,200,0.34)]">
            ✦
          </span>
          <span>คุณอาจมีสิทธิ์ได้รับความช่วยเหลือ</span>
        </span>

        <span className="mt-5 flex flex-col items-start text-white/98 drop-shadow-[0_3px_14px_rgba(0,0,0,0.26)]">
          {amountParts ? (
            <>
              {amountParts.prefix && (
                <span className="whitespace-nowrap text-[13px] font-bold leading-none text-white/72">
                  {amountParts.prefix}
                </span>
              )}
              <span className="mt-1 whitespace-nowrap text-[44px] font-extrabold leading-[0.98] tracking-[0] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.28)]">
                {amountParts.value}
              </span>
              {amountParts.suffix && (
                <span className="mt-1 whitespace-nowrap text-[15px] font-extrabold leading-none text-white/78">
                  {amountParts.suffix}
                </span>
              )}
            </>
          ) : (
            <span className="text-[32px] font-extrabold leading-[1.08] tracking-[0] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.28)]">
              {description}
            </span>
          )}
        </span>
        <span className="mt-3 block text-[16px] font-bold leading-[1.32] text-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
          {title}
        </span>
        {reason && (
          <span className="mt-3 block text-[13px] font-medium leading-[1.68] text-white/62 drop-shadow-[0_1px_8px_rgba(0,0,0,0.18)]">
            {reason}
          </span>
        )}

        <span className="mt-6 inline-flex w-fit items-center rounded-full bg-white px-4.5 py-2.5 text-[13px] font-bold leading-none text-[#107F79] shadow-[0_10px_22px_rgba(0,0,0,0.16)] transition duration-300 group-hover:translate-x-0.5 group-hover:bg-[#F3FFFF]">
          ตรวจสอบสิทธิ์ →
        </span>
      </span>
    </button>
  )
}

function getAmountParts(description: string) {
  const amountMatch = description.match(/^(.+?)\s*([\d,]+)\s*(.*)$/)

  if (!amountMatch) {
    return null
  }

  return {
    prefix: amountMatch[1].trim(),
    value: amountMatch[2].trim(),
    suffix: amountMatch[3].trim(),
  }
}

export default BenefitCard
