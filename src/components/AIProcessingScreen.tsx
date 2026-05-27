import { useEffect, useState } from "react"
import PersonalizedDashboardScreen from "./PersonalizedDashboardScreen"

type ProcessingState = {
  label: string
  glowClass: string
  ringClass: string
  arcClass: string
  pulseClass: string
}

const processingStates: ProcessingState[] = [
  {
    label: "AI กำลังวิเคราะห์ข้อมูลของคุณ",
    glowClass: "from-[#BDF9FF]/58 via-[#67D8ED]/34 to-[#19A79D]/20",
    ringClass: "border-[#19A79D]/12 bg-[conic-gradient(from_0deg,rgba(25,167,157,0),rgba(25,167,157,0.12),rgba(125,232,255,0.18),rgba(25,167,157,0))]",
    arcClass: "stroke-[#19A79D]",
    pulseClass: "bg-[#19A79D]/14",
  },
  {
    label: "กำลังจับคู่สิทธิ์และสวัสดิการ",
    glowClass: "from-[#C8FBFF]/62 via-[#55D8F2]/40 to-[#169BBE]/24",
    ringClass: "border-[#4EBFE3]/17 bg-[conic-gradient(from_0deg,rgba(78,191,227,0),rgba(78,191,227,0.16),rgba(189,249,255,0.28),rgba(78,191,227,0))]",
    arcClass: "stroke-[#35AFC2]",
    pulseClass: "bg-[#4EBFE3]/14",
  },
  {
    label: "กำลังค้นหาโอกาสที่เหมาะกับคุณ",
    glowClass: "from-[#D8F7FF]/64 via-[#7DE8FF]/36 to-[#19A79D]/24",
    ringClass: "border-[#7DE8FF]/16 bg-[conic-gradient(from_0deg,rgba(25,167,157,0),rgba(125,232,255,0.14),rgba(25,167,157,0.22),rgba(25,167,157,0))]",
    arcClass: "stroke-[#4EBFE3]",
    pulseClass: "bg-[#7DE8FF]/16",
  },
  {
    label: "AI พบสิทธิ์ที่คุณอาจพลาด",
    glowClass: "from-[#E4FFFF]/70 via-[#7DE8FF]/46 to-[#19A79D]/30",
    ringClass: "border-[#19A79D]/18 bg-[conic-gradient(from_0deg,rgba(25,167,157,0),rgba(189,249,255,0.2),rgba(25,167,157,0.26),rgba(25,167,157,0))]",
    arcClass: "stroke-[#12877F]",
    pulseClass: "bg-[#19A79D]/18",
  },
]

const processingStateDelay = 3600
const dashboardRevealDelay = processingStateDelay * processingStates.length

function AIProcessingScreen() {
  const [stateIndex, setStateIndex] = useState(0)
  const [showDashboard, setShowDashboard] = useState(false)
  const processingState = processingStates[stateIndex]

  useEffect(() => {
    const messageTimer = window.setInterval(() => {
      setStateIndex((index) => (index + 1) % processingStates.length)
    }, processingStateDelay)

    return () => window.clearInterval(messageTimer)
  }, [])

  useEffect(() => {
    const revealTimer = window.setTimeout(() => {
      setShowDashboard(true)
    }, dashboardRevealDelay)

    return () => window.clearTimeout(revealTimer)
  }, [])

  if (showDashboard) {
    return <PersonalizedDashboardScreen />
  }

  return (
    <div className="relative flex h-[548px] animate-[screen-in_420ms_ease-out_both] flex-col items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-br from-[#F7FFFF] via-[#EAFBFA] to-[#D8F2FF] px-6 py-8 text-center shadow-xl shadow-[#158C84]/15 sm:h-[566px] sm:rounded-[34px]">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 animate-[processing-glow_7.4s_ease-in-out_infinite] rounded-full bg-[#74DFF7]/22 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-12 h-56 w-56 animate-[processing-glow_8.2s_ease-in-out_infinite_reverse] rounded-full bg-[#19A79D]/12 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(189,249,255,0.22)_0%,rgba(255,255,255,0)_68%)]" />

      <ProcessingLoader state={processingState} />

      <div className="relative z-10 mt-7 min-h-[92px] max-w-[292px]">
        <p className="text-[12px] font-extrabold leading-none text-[#178E8A]/82">
          เป๋าสิทธิ์ 
        </p>

        <h2
          key={processingState.label}
          className="headline-font mt-4 animate-[processing-message_720ms_ease-out_both] text-[26px] font-extrabold leading-[1.2] text-[#123B3B] sm:text-[28px]"
        >
          {processingState.label}
        </h2>
      </div>

      <div className="relative z-10 mt-5 flex items-center justify-center gap-2">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className="h-2 w-2 rounded-full bg-[#19A79D]/54 animate-[processing-dot_1.35s_ease-in-out_infinite]"
            style={{ animationDelay: `${dot * 180}ms` }}
          />
        ))}
      </div>
    </div>
  )
}

function ProcessingLoader({ state }: { state: ProcessingState }) {
  return (
    <div className="relative flex h-[220px] w-[220px] items-center justify-center sm:h-[232px] sm:w-[232px]">
      <span className="absolute h-[220px] w-[220px] animate-[processing-orb-breathe_5.4s_ease-in-out_infinite] rounded-full bg-[#BDF9FF]/20 blur-2xl sm:h-[232px] sm:w-[232px]" />
      <span
        className={`absolute h-[190px] w-[190px] animate-[processing-radar_6.2s_linear_infinite] rounded-full border opacity-70 transition-all duration-700 sm:h-[202px] sm:w-[202px] ${state.ringClass}`}
      />
      <span className="absolute h-[150px] w-[150px] animate-[processing-ring_5.8s_ease-in-out_infinite] rounded-full border border-[#7DE8FF]/14 sm:h-[158px] sm:w-[158px]" />

      <div className="relative flex h-[88px] w-[88px] animate-[processing-float-minimal_6.8s_ease-in-out_infinite] items-center justify-center rounded-full bg-gradient-to-br from-white via-[#F8FFFF] to-[#E7FAFA] shadow-2xl shadow-[#19A79D]/12 ring-1 ring-white/90">
        <span
          className={`absolute inset-[-28px] animate-[processing-orb-breathe_5.2s_ease-in-out_infinite] rounded-full bg-gradient-to-br blur-2xl transition-all duration-700 ${state.glowClass}`}
        />
        <span
          className={`absolute inset-1 animate-[processing-core-pulse_5s_ease-in-out_infinite] rounded-full transition-colors duration-700 ${state.pulseClass}`}
        />
        <span className="absolute inset-[4px] rounded-full bg-gradient-to-br from-white via-[#FBFFFF] to-[#EAFBFA] shadow-inner shadow-white/80" />

        <svg
          aria-hidden="true"
          className="relative h-11 w-11 animate-[processing-spinner_1.9s_linear_infinite]"
          fill="none"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            r="18"
            className="stroke-[#BDEFF0]/82"
            strokeWidth="5"
          />
          <circle
            cx="22"
            cy="22"
            r="18"
            className={`transition-colors duration-700 ${state.arcClass}`}
            strokeDasharray="24 113"
            strokeLinecap="round"
            strokeWidth="5"
          />
        </svg>
      </div>
    </div>
  )
}

export default AIProcessingScreen
