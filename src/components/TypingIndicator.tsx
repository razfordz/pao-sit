type TypingIndicatorProps = {
  className?: string
}

function TypingIndicator({ className = "" }: TypingIndicatorProps) {
  return (
    <div className={`flex justify-start ${className}`}>
      <div
        aria-label="AI กำลังพิมพ์"
        className="flex items-center gap-1.5 rounded-[20px] rounded-tl-[8px] border border-white/75 bg-white/72 px-4 py-3 shadow-sm shadow-[#158C84]/8 backdrop-blur-xl"
      >
        {[0, 160, 320].map((delay) => (
          <span
            key={delay}
            className="h-2 w-2 animate-bounce rounded-full bg-[#19A79D]"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </div>
  )
}

export default TypingIndicator
