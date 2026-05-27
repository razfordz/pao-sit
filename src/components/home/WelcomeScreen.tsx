import AIAssistantMascot from "../AIAssistantMascot"

type WelcomeScreenProps = {
  onStart: () => void
}

function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="relative flex h-[520px] flex-col overflow-hidden rounded-[32px] bg-gradient-to-br from-[#12877F] via-[#35AFC2] to-[#63C8F0] p-5 shadow-xl shadow-[#158C84]/20 sm:h-[536px] sm:rounded-[34px] sm:p-6">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/18 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-3 h-48 w-48 rounded-full bg-[#BDF9FF]/20 blur-3xl" />
      <span className="absolute right-12 bottom-36 h-1.5 w-1.5 animate-[ai-particle_5.4s_ease-in-out_infinite_1000ms] rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.7)]" />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <span className="inline-block rounded-full border border-white/35 bg-white/20 px-4 py-2 text-[13px] font-bold leading-none text-white/95 shadow-sm shadow-[#123B3B]/8 backdrop-blur">
          สิทธิ์ที่ใช่ สำหรับคุณ
        </span>

        <AIAssistantMascot className="-mr-3 -mt-5 scale-[0.78]" />
      </div>

      <div className="relative z-10 mt-8 sm:mt-9">
        <h2 className="headline-font max-w-[270px] text-[35px] font-extrabold leading-[1.14] text-white drop-shadow-sm">
          ค้นหาสิทธิ์ที่คุณอาจพลาดไป
        </h2>

        <p className="mt-4 text-[15.5px] font-normal leading-[1.65] text-white/88 sm:text-[16px]">
          สร้างโปรไฟล์สั้น ๆ แล้วให้ AI ช่วยค้นหาสวัสดิการและสิทธิ์ที่คุณควรได้รับ
        </p>
      </div>

      <div className="relative z-10 mt-auto pt-6">
        <button
          type="button"
          onClick={onStart}
          className="w-full rounded-[26px] bg-white py-5 text-[17px] font-extrabold leading-none text-[#123B3B] shadow-xl shadow-[#123B3B]/14 ring-1 ring-white/70 transition hover:-translate-y-0.5 hover:bg-[#F3FFFF] hover:shadow-2xl hover:shadow-[#123B3B]/18"
        >
          เริ่มค้นหาสิทธิ์ของฉัน →
        </button>

        <p className="mt-4 text-center text-[12px] font-semibold leading-[1.55] text-white/82">
          AI จะช่วยจับคู่สิทธิ์จากข้อมูลของคุณ
        </p>
      </div>
    </div>
  )
}

export default WelcomeScreen
