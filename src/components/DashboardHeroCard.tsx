function DashboardHeroCard() {
  return (
    <section className="premium-hero-card relative z-10 min-h-[278px] shrink-0 overflow-hidden rounded-[34px] bg-gradient-to-br from-[#F2FFFF] via-[#A5F0F4] to-[#3FC4BC] p-6 text-[#123B3B] shadow-[0_28px_70px_rgba(22,139,132,0.22),0_9px_22px_rgba(18,59,59,0.08)] sm:min-h-[292px] sm:p-7">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 animate-[dashboard-glow_7s_ease-in-out_infinite] rounded-full bg-white/58 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-2 h-56 w-56 animate-[dashboard-glow_8s_ease-in-out_infinite_reverse] rounded-full bg-[#FFE5AE]/26 blur-3xl" />
      <div className="pointer-events-none absolute left-10 top-20 h-36 w-36 rounded-full bg-[#19A79D]/14 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.58),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(255,246,221,0.3),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.36),rgba(255,255,255,0.08)_50%,rgba(20,132,126,0.08))]" />
      <div className="pointer-events-none absolute inset-[1px] rounded-[33px] ring-1 ring-white/58" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />

      <span className="absolute right-9 top-9 h-2 w-2 animate-[dashboard-particle_4.8s_ease-in-out_infinite] rounded-full bg-white/80" />
      <span className="absolute right-24 top-20 h-1.5 w-1.5 animate-[dashboard-particle_5.6s_ease-in-out_infinite] rounded-full bg-[#FFF1CA]/82 [animation-delay:420ms]" />
      <span className="absolute bottom-12 right-14 h-2.5 w-2.5 animate-[dashboard-particle_6.2s_ease-in-out_infinite] rounded-full bg-[#E9FFFF]/86 [animation-delay:860ms]" />

      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/68 bg-white/46 px-3.5 py-2 text-[12px] font-extrabold leading-none text-[#0F7773] shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_8px_18px_rgba(18,59,59,0.06)] backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-[#19A79D] shadow-[0_0_14px_rgba(25,167,157,0.45)]" />
          พบสิทธิ์ที่เหมาะกับคุณ
        </div>

        <div className="mt-6">
          <p className="text-[17px] font-extrabold leading-tight text-[#135C5C]/88">
            คุณอาจพลาดสิทธิ์กว่า
          </p>
          <h2 className="headline-font mt-2 text-[42px] font-extrabold leading-[1.02] text-[#103F40] drop-shadow-[0_1px_0_rgba(255,255,255,0.42)] sm:text-[46px]">
            68,000 บาท
          </h2>
          <p className="mt-4 max-w-[270px] text-[15px] font-bold leading-snug text-[#245F62]/78">
            AI พบสิทธิ์และโอกาสที่เหมาะกับคุณ
          </p>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/76 bg-white/62 px-4 py-2.5 text-[13px] font-extrabold leading-none text-[#12877F] shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_10px_20px_rgba(18,59,59,0.07)] backdrop-blur-xl">
            ดูรายละเอียด
          </span>
          <span className="rounded-full border border-white/62 bg-white/30 px-4 py-2.5 text-[13px] font-bold leading-none text-[#176D6D]/86 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)] backdrop-blur-xl">
            พร้อมสมัคร
          </span>
        </div>
      </div>
    </section>
  )
}

export default DashboardHeroCard
