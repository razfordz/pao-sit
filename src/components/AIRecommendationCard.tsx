type AIRecommendationCardProps = {
  animationDelay?: string
  title: string
  description: string
  tone: "teal" | "blue" | "warm"
}

const toneClasses = {
  teal: "bg-[#E9FBF8] text-[#168B84]",
  blue: "bg-[#E9F7FF] text-[#2279A8]",
  warm: "bg-[#FFF4DC] text-[#B87512]",
}

function AIRecommendationCard({
  animationDelay = "0ms",
  title,
  description,
  tone,
}: AIRecommendationCardProps) {
  return (
    <button
      type="button"
      className="group flex min-h-[72px] w-full animate-[recommendation-in_420ms_ease-out_both] items-center gap-3 rounded-[22px] border border-white/88 bg-white/78 p-3 text-left shadow-[0_12px_26px_rgba(18,59,59,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/92"
      style={{ animationDelay }}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] ring-1 ring-white/70 ${toneClasses[tone]}`}
      >
        <SparkIcon />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate text-[14px] font-extrabold leading-snug text-[#123B3B]">
          {title}
        </span>
        <span className="mt-1 block truncate text-[12.5px] font-bold leading-none text-[#5D7778]">
          {description}
        </span>
      </span>
    </button>
  )
}

function SparkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 4.5 13.7 9l4.3 1.7-4.3 1.7L12 17l-1.7-4.6L6 10.7 10.3 9 12 4.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m18.5 15 .7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export default AIRecommendationCard
