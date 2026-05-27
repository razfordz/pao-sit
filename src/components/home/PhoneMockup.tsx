import { useState } from "react"
import PhoneStatusBar from "../PhoneStatusBar"
import PhoneWelcomeCard from "./PhoneWelcomeCard"

function PhoneMockup() {
  const [screen, setScreen] = useState<"welcome" | "profile">("welcome")
  const canGoBack = screen === "profile"

  return (
    <section className="flex justify-center lg:justify-end">
      <div className="relative h-[710px] w-full max-w-[382px] animate-[phone-float_7s_ease-in-out_infinite] overflow-hidden rounded-[54px] border-[10px] border-[#123B3B] bg-[#F8FFFF] px-4 pb-5 pt-3 shadow-2xl shadow-[#123B3B]/20 sm:h-[760px] sm:max-w-[404px] sm:rounded-[58px] sm:border-[12px]">
        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 animate-[demo-glow_8s_ease-in-out_infinite] rounded-full bg-[#8EEAFF]/22 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-4 h-44 w-44 animate-[demo-glow_9s_ease-in-out_infinite_reverse] rounded-full bg-[#19A79D]/12 blur-3xl" />

        <PhoneStatusBar />

        <div
          className={`relative z-10 mb-4 mt-2 flex items-center ${
            canGoBack ? "justify-between" : "justify-start"
          }`}
        >
          <button
            type="button"
            aria-label="ย้อนกลับ"
            onClick={() => setScreen("welcome")}
            disabled={!canGoBack}
            className={`flex h-11 w-11 items-center justify-center rounded-[18px] bg-white text-[#123B3B] shadow shadow-[#123B3B]/10 transition hover:bg-[#EEF7F7] ${
              canGoBack ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 6 9 12l6 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
              />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            <img
              src="/images/Logo.png"
              alt="เป๋าสิทธิ์"
              className="h-10 w-10 rounded-[16px]"
            />
            <p className="text-[15px] font-extrabold leading-none text-[#123B3B]">
              เป๋าสิทธิ์
            </p>
          </div>

          {canGoBack && <div className="h-11 w-11" />}
        </div>

        <PhoneWelcomeCard
          screen={screen}
          onStart={() => setScreen("profile")}
        />
      </div>
    </section>
  )
}

export default PhoneMockup
