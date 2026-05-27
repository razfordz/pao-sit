import { useEffect, useState } from "react"
import AIChatScreen from "../AIChatScreen"
import VerificationScreen from "../VerificationScreen"

type VerificationStatus = "setup" | "verifying" | "success" | "ai-chat"

const verificationOptions = [
  {
    id: "thaid",
    title: "ยืนยันผ่าน ThaID / ทางรัฐ",
    description: "ดึงข้อมูลพื้นฐานอัตโนมัติ รวดเร็วและแม่นยำ",
    badge: "แนะนำ",
    logos: [
      {
        src: "/images/Thai_Id_Logo.png",
        alt: "ThaID",
      },
      {
        src: "/images/ThangRath_Logo.png",
        alt: "ทางรัฐ",
      },
    ],
  },
  {
    id: "scan",
    title: "สแกนหน้าบัตรประชาชน",
    description: "ถ่ายรูปบัตรเพื่อกรอกข้อมูลให้อัตโนมัติ",
    Icon: IdCardIcon,
  },
  {
    id: "quick",
    title: "กรอกเองแบบเร็ว",
    description: "ตอบคำถามสั้น ๆ ใช้เวลาไม่เกิน 2 นาที",
    Icon: ChatIcon,
  },
]

function ProfileSetupScreen() {
  const [selectedOption, setSelectedOption] = useState("thaid")
  const [verificationStatus, setVerificationStatus] =
    useState<VerificationStatus>("setup")

  useEffect(() => {
    if (verificationStatus === "verifying") {
      const verificationTimer = window.setTimeout(() => {
        setVerificationStatus("success")
      }, 2000)

      return () => window.clearTimeout(verificationTimer)
    }

    if (verificationStatus === "success") {
      const successTimer = window.setTimeout(() => {
        setVerificationStatus("ai-chat")
      }, 1500)

      return () => window.clearTimeout(successTimer)
    }

    return undefined
  }, [verificationStatus])

  const startVerification = () => {
    setVerificationStatus("verifying")
  }

  if (verificationStatus === "verifying") {
    return <VerificationScreen status="verifying" />
  }

  if (verificationStatus === "success") {
    return <VerificationScreen status="success" />
  }

  if (verificationStatus === "ai-chat") {
    return <AIChatScreen />
  }

  return (
    <div className="relative flex h-[548px] animate-[screen-in_420ms_ease-out_both] flex-col overflow-hidden rounded-[32px] bg-gradient-to-br from-[#F1FFFC] via-[#F9FFFF] to-[#D7F3FA] p-5 shadow-xl shadow-[#158C84]/15 sm:h-[566px] sm:rounded-[34px]">
      <div className="pointer-events-none absolute -right-14 -top-16 h-44 w-44 rounded-full bg-[#8EEAFF]/18 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1 h-40 w-40 rounded-full bg-[#19A79D]/10 blur-3xl" />

      <div className="relative z-10">
        <h2 className="headline-font text-[26px] font-extrabold leading-[1.18] text-[#123B3B]">
          เริ่มสร้างโปรไฟล์ของคุณ
        </h2>

        <p className="mt-2 text-[13.5px] font-bold leading-[1.55] text-[#178E8A]">
          AI จะช่วยค้นหาสิทธิ์และบริการที่เหมาะกับคุณ
        </p>
      </div>

      <div className="relative z-10 mt-6 flex flex-1 flex-col gap-3">
        {verificationOptions.map(({ id, title, description, badge, Icon, logos }) => {
          const isSelected = selectedOption === id
          const hasLogos = Boolean(logos)

          return (
            <button
              key={id}
              type="button"
              onClick={() => setSelectedOption(id)}
              className={`group flex min-h-[94px] w-full items-center gap-3.5 rounded-[24px] border bg-white/82 p-4 text-left shadow-sm backdrop-blur-xl transition duration-300 active:scale-[0.985] ${
                isSelected
                  ? "border-[#19A79D] shadow-xl shadow-[#19A79D]/18 ring-4 ring-[#19A79D]/10"
                  : "border-white/85 shadow-[#123B3B]/5 hover:border-[#9BDCD7] hover:bg-white/92"
              }`}
            >
              <span
                className={`flex shrink-0 items-center justify-center transition ${
                  hasLogos ? "h-14 w-14 rounded-[20px]" : "h-12 w-12 rounded-[18px]"
                } ${
                  isSelected
                    ? "bg-[#123B3B] text-white shadow-lg shadow-[#123B3B]/14"
                    : "bg-[#E8F6F5] text-[#168B84] group-hover:bg-[#D9F2F0]"
                }`}
              >
                {logos ? (
                  <span className="flex -space-x-2.5">
                    {logos.map((logo) => (
                      <img
                        key={logo.src}
                        src={logo.src}
                        alt={logo.alt}
                        className="h-8 w-8 rounded-[11px] border border-white bg-white object-cover shadow-sm"
                      />
                    ))}
                  </span>
                ) : (
                  Icon && <Icon />
                )}
              </span>

              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2">
                  <span className="text-[15px] font-bold leading-snug text-[#123B3B]">
                    {title}
                  </span>
                  {badge && (
                    <span className="rounded-full bg-[#19A79D]/12 px-2.5 py-1 text-[11px] font-bold leading-none text-[#12877F]">
                      {badge}
                    </span>
                  )}
                </span>

                <span className="mt-1.5 block text-[12.5px] font-normal leading-[1.55] text-[#627B7D]">
                  {description}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      <div className="relative z-10 pt-4 pb-1">
        <button
          type="button"
          onClick={startVerification}
          className="w-full rounded-[22px] bg-[#123B3B] py-3.5 text-[15.5px] font-bold leading-none text-white shadow-xl shadow-[#123B3B]/20 ring-1 ring-[#BDF9FF]/12 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0D3030] hover:shadow-2xl hover:shadow-[#123B3B]/24 active:translate-y-0 active:scale-[0.985]"
        >
          ดำเนินการต่อ →
        </button>

        <p className="mt-3 text-center text-[11.5px] font-normal leading-[1.55] text-[#6C8385]">
          ข้อมูลของคุณจะถูกใช้เพื่อค้นหาสิทธิ์เท่านั้น
        </p>
      </div>
    </div>
  )
}

function IdCardIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4.5 7.5A2.5 2.5 0 0 1 7 5h10a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 17 19H7a2.5 2.5 0 0 1-2.5-2.5v-9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M8 14.7c.8-1 1.7-1.5 2.8-1.5s2 .5 2.8 1.5M9.2 9.7a1.6 1.6 0 1 0 3.2 0 1.6 1.6 0 0 0-3.2 0ZM15.8 9h1.5M15.8 12h1.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 10.6A5.6 5.6 0 0 1 10.6 5h2.8A5.6 5.6 0 0 1 19 10.6v.8a5.6 5.6 0 0 1-5.6 5.6h-1.8L8 19v-2.4a5.6 5.6 0 0 1-3-5v-1Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M9 10h6M9 13h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  )
}

export default ProfileSetupScreen
