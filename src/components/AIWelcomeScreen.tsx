import AIAssistantMascot from "./AIAssistantMascot"

const lifeCategories = [
  "📚 การศึกษา",
  "💼 งานและอาชีพ",
  "🏥 สุขภาพ",
  "💰 สวัสดิการครอบครัว",
]

function AIWelcomeScreen() {
  return (
    <div className="relative flex h-[548px] flex-col overflow-hidden rounded-[32px] bg-gradient-to-br from-[#F7FFFF] via-[#EAFBFA] to-[#D8F2FF] p-4 shadow-xl shadow-[#158C84]/15 sm:h-[566px] sm:rounded-[34px] sm:p-5">
      <div className="pointer-events-none absolute -right-14 -top-16 h-44 w-44 rounded-full bg-[#7ADCF5]/22 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-3 h-40 w-40 rounded-full bg-[#19A79D]/12 blur-3xl" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0 pt-2">
          <span className="inline-flex rounded-full border border-white/70 bg-white/55 px-3.5 py-2 text-[11.5px] font-bold leading-none text-[#12877F] shadow-sm shadow-[#158C84]/8 backdrop-blur">
            เป๋าสิทธิ์ AI พร้อมช่วยคุณแล้ว
          </span>
          <h2 className="headline-font mt-4 text-[27px] font-extrabold leading-[1.16] text-[#123B3B]">
            สวัสดีครับ คุณอาร์ม 😊
          </h2>
        </div>

        <div className="-mr-2 -mt-1 shrink-0">
          <AIAssistantMascot />
        </div>
      </div>

      <div className="relative mt-4 rounded-[26px] border border-white/75 bg-white/58 p-3.5 shadow-lg shadow-[#158C84]/10 backdrop-blur-xl">
        <p className="text-[16px] font-extrabold leading-[1.48] text-[#123B3B]">
          AI กำลังค้นหาสิทธิ์และโอกาสที่เหมาะกับชีวิตคุณ
        </p>
        <p className="mt-1.5 text-[12.5px] font-normal leading-[1.6] text-[#5A7173]">
          เราจะช่วยสรุปสิ่งที่ควรรู้ให้อ่านง่าย และแนะนำขั้นตอนต่อไปแบบไม่ซับซ้อน
        </p>
      </div>

      <div className="relative mt-3 grid grid-cols-2 gap-2.5">
        {lifeCategories.map((category) => (
          <div
            key={category}
            className="rounded-[19px] border border-white/80 bg-white/66 px-3 py-2.5 text-[12.5px] font-bold leading-snug text-[#123B3B] shadow-sm shadow-[#158C84]/8 backdrop-blur"
          >
            {category}
          </div>
        ))}
      </div>

      <div className="relative mt-3 rounded-[26px] bg-gradient-to-br from-[#123B3B] via-[#15585B] to-[#178E8A] p-4 text-white shadow-xl shadow-[#123B3B]/20">
        <p className="text-[12px] font-bold leading-none text-[#BDF9FF]/80">
          อินไซต์ส่วนตัว
        </p>
        <p className="headline-font mt-2.5 text-[24px] font-extrabold leading-[1.14]">
          คุณอาจพลาดสิทธิ์กว่า 68,000 บาท
        </p>
        <p className="mt-2 text-[12.5px] font-normal leading-[1.55] text-white/78">
          จากข้อมูลเบื้องต้น มีหลายสิทธิ์ที่อาจช่วยแบ่งเบาภาระของคุณและครอบครัว
        </p>
      </div>

      <div className="relative mt-auto pt-3">
        <button
          type="button"
          className="w-full rounded-[24px] bg-[#123B3B] py-4 text-[16px] font-bold leading-none text-white shadow-lg shadow-[#123B3B]/18 transition hover:bg-[#0D3030]"
        >
          ดูสิทธิ์ของฉัน
        </button>
      </div>
    </div>
  )
}

export default AIWelcomeScreen
