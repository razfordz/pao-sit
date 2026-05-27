type AIAssistantMascotProps = {
  className?: string
}

function AIAssistantMascot({ className = "" }: AIAssistantMascotProps) {
  return (
    <div
      aria-label="ผู้ช่วย AI เป๋าสิทธิ์"
      className={`relative h-24 w-24 shrink-0 animate-[assistant-float_5.4s_ease-in-out_infinite] ${className}`}
      role="img"
    >
      <span className="absolute inset-1 animate-[ai-glow_5.2s_ease-in-out_infinite] rounded-full bg-[#5ED6FF]/20 blur-2xl" />
      <span className="absolute left-5 top-3 h-6 w-6 rounded-full bg-white/80 shadow-lg shadow-[#5ED6FF]/20" />
      <span className="absolute right-4 top-1 h-4 w-4 rounded-full bg-[#BFF3FF]/70 shadow-md shadow-[#5ED6FF]/30" />

      <div className="absolute left-1/2 top-3 h-[72px] w-[72px] -translate-x-1/2 rounded-[28px] border border-white/80 bg-gradient-to-br from-white via-[#F7FFFF] to-[#D9F7FF] shadow-2xl shadow-[#2AAFC5]/22">
        <div className="absolute left-1/2 top-4 h-8 w-11 -translate-x-1/2 rounded-[18px] bg-gradient-to-br from-[#123B3B] via-[#165E72] to-[#28C6E8] shadow-inner shadow-white/10">
          <span className="absolute left-3 top-3 h-2.5 w-2.5 animate-[ai-blink_5.8s_ease-in-out_infinite] rounded-full bg-[#BDF9FF] shadow-[0_0_14px_rgba(125,245,255,0.95)]" />
          <span className="absolute right-3 top-3 h-2.5 w-2.5 animate-[ai-blink_5.8s_ease-in-out_infinite] rounded-full bg-[#BDF9FF] shadow-[0_0_14px_rgba(125,245,255,0.95)]" />
          <span className="absolute bottom-2 left-1/2 h-1 w-5 -translate-x-1/2 rounded-full bg-[#BDF9FF]/75" />
        </div>

        <span className="absolute -left-3 top-9 h-6 w-4 rounded-full bg-white shadow-md shadow-[#2AAFC5]/15" />
        <span className="absolute -right-3 top-9 h-6 w-4 rounded-full bg-white shadow-md shadow-[#2AAFC5]/15" />
        <span className="absolute bottom-3 left-1/2 h-2 w-9 -translate-x-1/2 rounded-full bg-[#B7EDF1]" />
      </div>
    </div>
  )
}

export default AIAssistantMascot
