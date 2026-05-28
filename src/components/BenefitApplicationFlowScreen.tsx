import { useEffect, useState } from "react"
import type { DashboardBenefit } from "./DashboardCategory"

type BenefitApplicationFlowScreenProps = {
  benefit: DashboardBenefit
  onBack: () => void
}

const applicationSteps = [
  {
    title: "ไปที่สำนักงานเขตบางกะปิ",
    description: "AI เลือกจุดบริการใกล้คุณที่สุดจากที่อยู่ในกรุงเทพ",
  },
  {
    title: "ยื่นเอกสารให้เจ้าหน้าที่ตรวจสอบ",
    description: "แจ้งชื่อสิทธิ์นี้ แล้วให้เจ้าหน้าที่ช่วยตรวจเอกสารที่เตรียมไว้",
  },
  {
    title: "รอผลการพิจารณา",
    description: "ติดตามผลผ่าน SMS หรือช่องทางที่เจ้าหน้าที่แจ้งไว้",
  },
]

const applicationChannels = [
  {
    title: "สมัครออนไลน์",
    description: "เหมาะสำหรับสมัครทันทีผ่านเว็บไซต์",
    detail: "เริ่มได้ทันที",
    loadingText: "ระบบกำลังพาคุณไปยังเว็บไซต์หน่วยงาน",
    readyText: "พร้อมเปิดเว็บไซต์สมัครออนไลน์",
    recommended: true,
  },
  {
    title: "สำนักงานเขตบางกะปิ",
    description: "เหมาะสำหรับผู้ที่ต้องการให้เจ้าหน้าที่ช่วยตรวจเอกสาร",
    detail: "2.1 กม. • เปิด 08:30-16:30",
    loadingText: "ระบบกำลังเตรียมข้อมูลการเดินทางไปสำนักงานเขต",
    readyText: "พร้อมเปิดข้อมูลสำนักงานเขต",
    recommended: false,
  },
  {
    title: "โทรสอบถามหน่วยงาน",
    description: "สอบถามข้อมูลเพิ่มเติมก่อนสมัคร",
    detail: "เช็กเอกสารก่อนออกจากบ้าน",
    loadingText: "ระบบกำลังเตรียมช่องทางติดต่อหน่วยงาน",
    readyText: "พร้อมติดต่อหน่วยงาน",
    recommended: false,
  },
]

const smartTips = [
  "AI พบว่าสำนักงานเขตใกล้คุณมีคิวสั้นช่วง 09:00-10:00",
  "ควรเตรียมสำเนาเอกสารเพิ่มไว้ 1 ชุด",
  "คุณสามารถเริ่มสมัครออนไลน์ได้บางส่วนโดยไม่ต้องเดินทางทันที",
]

const districtOffice = {
  name: "สำนักงานเขตบางกะปิ",
  distance: "2.1 กม.",
  hours: "เปิด 08:30-16:30",
  waitTime: "คาดว่ารอประมาณ 20 นาที",
  suggestedTime: "แนะนำให้ไปช่วง 09:00",
}

function BenefitApplicationFlowScreen({
  benefit,
  onBack,
}: BenefitApplicationFlowScreenProps) {
  const [isChannelSheetOpen, setIsChannelSheetOpen] = useState(false)
  const [selectedChannel, setSelectedChannel] = useState<
    (typeof applicationChannels)[number] | null
  >(null)
  const [channelStatus, setChannelStatus] = useState<
    "idle" | "loading" | "ready"
  >("idle")

  useEffect(() => {
    if (!selectedChannel || channelStatus !== "loading") {
      return undefined
    }

    const transitionTimer = window.setTimeout(() => {
      setChannelStatus("ready")
    }, 1200)

    return () => window.clearTimeout(transitionTimer)
  }, [channelStatus, selectedChannel])

  const openChannelSheet = () => {
    setIsChannelSheetOpen(true)
    setSelectedChannel(null)
    setChannelStatus("idle")
  }

  const closeChannelSheet = () => {
    setIsChannelSheetOpen(false)
    setSelectedChannel(null)
    setChannelStatus("idle")
  }

  const chooseChannel = (channel: (typeof applicationChannels)[number]) => {
    setSelectedChannel(channel)
    setChannelStatus("loading")
  }

  return (
    <div className="relative h-[548px] animate-[screen-in_420ms_ease-out_both] overflow-hidden rounded-[32px] bg-gradient-to-br from-[#FBFFFF] via-[#F0FCFB] to-[#DDF6FF] shadow-[0_24px_70px_rgba(21,140,132,0.16)] sm:h-[566px] sm:rounded-[34px]">
      <div className="pointer-events-none absolute -right-14 -top-16 h-52 w-52 rounded-full bg-[#7DE8FF]/22 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-[#19A79D]/12 blur-3xl" />

      <div className="dashboard-scroll relative h-full overflow-y-auto overflow-x-hidden px-4 pb-7 pt-4 sm:px-5">
        <div className="mb-4 flex items-center justify-between">
          <button
            type="button"
            aria-label="ย้อนกลับ"
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-[16px] border border-white/80 bg-white/72 text-[#123B3B] shadow-[0_10px_24px_rgba(18,59,59,0.08)] backdrop-blur-xl transition hover:bg-white active:scale-95"
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

          <span className="rounded-full border border-[#BDF9FF]/80 bg-white/64 px-3.5 py-2 text-[11px] font-extrabold leading-none text-[#117D78] shadow-sm backdrop-blur-xl">
            AI Guided Application
          </span>
        </div>

        <section className="relative overflow-hidden rounded-[30px] border border-white/80 bg-gradient-to-br from-[#EFFFFF] via-white to-[#BDF9FF] p-5 shadow-[0_24px_58px_rgba(21,140,132,0.15),inset_0_1px_0_rgba(255,255,255,0.72)]">
          <div className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full bg-[#7DE8FF]/32 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-4 h-40 w-40 rounded-full bg-[#19A79D]/12 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/84 bg-white/64 px-3.5 py-2 text-[11px] font-extrabold leading-none text-[#12877F] shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#19A79D] shadow-[0_0_12px_rgba(25,167,157,0.36)]" />
              เอกสารพร้อมแล้ว
            </span>

            <h1 className="headline-font mt-6 text-[31px] font-extrabold leading-[1.1] text-[#123B3B]">
              AI ช่วยตรวจความพร้อมให้แล้ว
            </h1>
            <p className="mt-3 text-[14px] font-semibold leading-[1.7] text-[#496B6D]">
              คุณพร้อมเข้าสู่ขั้นตอนสมัครสำหรับ :
               <span className="block mt-1">{benefit.title}</span>
            </p>

            <div className="mt-5 flex items-center gap-2">
              {[1, 2, 3, 4].map((step) => (
                <span
                  key={step}
                  className="h-2 flex-1 rounded-full bg-gradient-to-r from-[#19A79D] to-[#7DE8FF] shadow-[0_4px_12px_rgba(25,167,157,0.16)]"
                />
              ))}
            </div>

            <div className="mt-5 rounded-[22px] border border-white/82 bg-white/64 p-4 shadow-[0_14px_28px_rgba(18,59,59,0.07),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-xl">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] font-extrabold leading-none text-[#178E8A]/74">
                    จุดบริการที่ AI แนะนำ
                  </p>
                  <h2 className="mt-2 text-[16px] font-extrabold leading-snug text-[#123B3B]">
                    {districtOffice.name}
                  </h2>
                </div>
                <span className="shrink-0 rounded-full bg-[#19A79D]/12 px-2.5 py-1.5 text-[11px] font-extrabold leading-none text-[#12877F]">
                  {districtOffice.distance}
                </span>
              </div>

              <div className="min-w-[140px] rounded-3xl border border-teal-100 bg-white/70 p-4">
                <ContextStat label="เวลาทำการ" value={districtOffice.hours} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-[28px] border border-white/82 bg-white/72 p-5 shadow-[0_18px_42px_rgba(18,59,59,0.08)] backdrop-blur-xl">
          <p className="text-[11px] font-extrabold leading-none text-[#178E8A]/76">
            AI city guidance
          </p>
          <h2 className="headline-font mt-3 text-[21px] font-extrabold leading-tight text-[#123B3B]">
            ไปเวลานี้จะสบายกว่า
          </h2>
          <p className="mt-3 text-[13.5px] font-medium leading-[1.72] text-[#496B6D]">
            {districtOffice.suggestedTime} เพราะคุณอยู่ใกล้จุดบริการ
            และยังมีเวลาพอให้เจ้าหน้าที่ช่วยตรวจเอกสาร หากต้องแก้ไขเล็กน้อย
          </p>
          <div className="mt-4 rounded-[18px] border border-[#D7EEEE] bg-[#F8FFFF]/80 p-3">
            <p className="text-[12.5px] font-bold leading-[1.6] text-[#315F61]">
              AI ช่วยลดโอกาสพลาดก่อนเดินทาง: ตรวจสำเนาเอกสาร ชื่อผู้สมัคร
              และเลขบัญชีให้ตรงกันอีกครั้ง
            </p>
          </div>
        </section>

        <section className="mt-5 rounded-[28px] border border-white/82 bg-white/70 p-5 shadow-[0_18px_42px_rgba(18,59,59,0.07)] backdrop-blur-xl">
          <SectionTitle eyebrow="ขั้นตอนสมัคร" title="ทำตามนี้ได้เลย" />

          <div className="mt-4 flex flex-col gap-2.5">
            {applicationSteps.map((step, index) => (
              <ApplicationStepCard
                key={step.title}
                description={step.description}
                index={index + 1}
                title={step.title}
              />
            ))}
          </div>
        </section>

        <section className="mt-4 rounded-[28px] border border-white/82 bg-white/70 p-5 shadow-[0_18px_42px_rgba(18,59,59,0.07)] backdrop-blur-xl">
          <SectionTitle eyebrow="ช่องทางสมัคร" title="ช่องทางสำหรับคุณ" />

          <div className="mt-4 grid grid-cols-1 gap-3">
            {applicationChannels.map((channel) => (
              <ChannelCard
                key={channel.title}
                description={channel.description}
                title={channel.title}
              />
            ))}
          </div>
        </section>

        <section className="mt-4 rounded-[28px] border border-[#BDF9FF]/72 bg-gradient-to-br from-[#F4FFFF] via-white to-[#E8FAFA] p-5 shadow-[0_22px_48px_rgba(21,140,132,0.12)]">
          <SectionTitle eyebrow="AI smart tips" title="สิ่งที่ช่วยให้วันสมัครง่ายขึ้น" />

          <div className="mt-4 flex flex-col gap-2.5">
            {smartTips.map((tip) => (
              <div
                key={tip}
                className="flex items-start gap-3 rounded-[18px] border border-[#D7EEEE] bg-white/74 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)]"
              >
                <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#19A79D] shadow-[0_0_12px_rgba(25,167,157,0.26)]" />
                <p className="text-[12.8px] font-bold leading-[1.55] text-[#315F61]">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mt-5 overflow-hidden rounded-[28px] border border-[#BDF9FF]/72 bg-[#123B3B] p-5 text-white shadow-[0_26px_58px_rgba(18,59,59,0.22)]">
          <div className="pointer-events-none absolute -right-14 -top-16 h-44 w-44 rounded-full bg-[#7DE8FF]/16 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-14 left-4 h-36 w-36 rounded-full bg-[#19A79D]/18 blur-3xl" />

          <div className="relative">
            <p className="text-[12px] font-extrabold leading-none text-[#BDF9FF]/84">
              พร้อมดำเนินการต่อ
            </p>
            <h2 className="headline-font mt-3 text-[24px] font-extrabold leading-tight">
              คุณพร้อมสมัครแล้ว
            </h2>
            <p className="mt-2 text-[13px] font-medium leading-[1.68] text-white/68">
              AI จะพาคุณไปยังช่องทางที่เหมาะที่สุด และช่วยจำสิ่งที่ต้องตรวจไว้ก่อนสมัคร
            </p>

            <div className="mt-4 rounded-[18px] border border-white/14 bg-white/10 p-3 backdrop-blur-xl">
              <p className="text-[12px] font-bold leading-[1.55] text-white/72">
                แนะนำ: เริ่มออนไลน์ก่อน แล้วไปสำนักงานเขตเฉพาะกรณีที่ต้องยื่นเอกสารตัวจริง
              </p>
            </div>

            <button
              type="button"
              onClick={openChannelSheet}
              className="mt-5 w-full rounded-[20px] bg-white px-5 py-3.5 text-[14px] font-extrabold leading-none text-[#107F79] shadow-[0_16px_30px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#F3FFFF] active:translate-y-0 active:scale-[0.985]"
            >
              เปิดช่องทางสมัคร →
            </button>

            {benefit.agency && (
              <p className="mt-3 text-center text-[11.5px] font-bold leading-snug text-white/58">
                หน่วยงานดูแล: {benefit.agency}
              </p>
            )}
          </div>
        </section>
      </div>

      {isChannelSheetOpen && (
        <ApplicationChannelsSheet
          channelStatus={channelStatus}
          onChooseChannel={chooseChannel}
          onClose={closeChannelSheet}
          selectedChannel={selectedChannel}
        />
      )}
    </div>
  )
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-[11px] font-extrabold leading-none text-[#178E8A]/74">
        {eyebrow}
      </p>
      <h2 className="headline-font mt-2 text-[20px] font-extrabold leading-tight text-[#123B3B]">
        {title}
      </h2>
    </div>
  )
}

function ApplicationChannelsSheet({
  channelStatus,
  onChooseChannel,
  onClose,
  selectedChannel,
}: {
  channelStatus: "idle" | "loading" | "ready"
  onChooseChannel: (channel: (typeof applicationChannels)[number]) => void
  onClose: () => void
  selectedChannel: (typeof applicationChannels)[number] | null
}) {
  return (
    <div className="absolute inset-0 z-30 flex items-end bg-[#0B3D3D]/18 px-3 pb-3 backdrop-blur-[2px]">
      <button
        type="button"
        aria-label="ปิดช่องทางสมัคร"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <div className="relative flex max-h-[calc(100%-1.5rem)] w-full animate-[screen-in_260ms_ease-out_both] flex-col overflow-hidden rounded-[32px] border border-white/72 bg-gradient-to-br from-white/96 via-[#FAFFFF]/94 to-[#EFFFFF]/94 shadow-[0_24px_54px_rgba(18,59,59,0.18)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full bg-[#7DE8FF]/18 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-14 left-2 h-36 w-36 rounded-full bg-[#19A79D]/7 blur-3xl" />

        <div className="dashboard-scroll relative min-h-0 overflow-y-auto overscroll-contain px-5 pb-8 pt-5">
          <div className="relative flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="inline-flex rounded-full bg-[#19A79D]/10 px-3 py-1.5 text-[10.5px] font-extrabold leading-none text-[#12877F]">
                AI แนะนำ
              </p>
              <h3 className="headline-font mt-4 text-[24px] font-extrabold leading-tight text-[#123B3B]">
                เลือกทางที่ง่ายที่สุด
              </h3>
              <p className="mt-2 text-[12.5px] font-medium leading-[1.62] text-[#6A8284]">
                จากข้อมูลของคุณ เริ่มออนไลน์ก่อนน่าจะสะดวกที่สุด
              </p>
            </div>

            <button
              type="button"
              aria-label="ปิด"
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/80 text-[#123B3B] shadow-[0_8px_18px_rgba(18,59,59,0.06)] transition hover:bg-white active:scale-95"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  d="m4 4 8 8M12 4l-8 8"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>

          <div className="relative mt-6 flex flex-col gap-4">
            {applicationChannels.map((channel) => (
              <ApplicationChannelActionCard
                key={channel.title}
                channel={channel}
                isSelected={selectedChannel?.title === channel.title}
                onChoose={() => onChooseChannel(channel)}
              />
            ))}
          </div>

          {selectedChannel && (
            <div className="relative mt-5 overflow-hidden rounded-[24px] border border-[#BDF9FF]/44 bg-[#F4FFFF]/72 p-4 shadow-[0_12px_26px_rgba(21,140,132,0.07),inset_0_1px_0_rgba(255,255,255,0.82)]">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    channelStatus === "ready"
                      ? "bg-[#19A79D] text-white"
                      : "bg-[#19A79D]/12 text-[#12877F]"
                  }`}
                >
                  {channelStatus === "ready" ? (
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m3.4 8.2 2.6 2.6 6.6-6.8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.2"
                      />
                    </svg>
                  ) : (
                    <span className="h-4 w-4 animate-[processing-spinner_1.2s_linear_infinite] rounded-full border-2 border-[#19A79D]/22 border-t-[#19A79D]" />
                  )}
                </span>

                <div className="min-w-0">
                  <p className="text-[12px] font-extrabold leading-none text-[#178E8A]">
                    {selectedChannel.title}
                  </p>
                  <p className="mt-1.5 text-[12.5px] font-bold leading-[1.55] text-[#315F61]">
                    {channelStatus === "ready"
                      ? selectedChannel.readyText
                      : selectedChannel.loadingText}
                  </p>
                </div>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={onClose}
            className="relative mt-5 w-full rounded-[18px] bg-white/58 px-5 py-3 text-[13px] font-extrabold leading-none text-[#12877F] transition hover:bg-white/86 active:scale-[0.985]"
          >
            กลับไปดูคำแนะนำ
          </button>
        </div>
      </div>
    </div>
  )
}

function ApplicationChannelActionCard({
  channel,
  isSelected,
  onChoose,
}: {
  channel: (typeof applicationChannels)[number]
  isSelected: boolean
  onChoose: () => void
}) {
  return (
    <button
      type="button"
      onClick={onChoose}
      className={`flex w-full items-center justify-between gap-4 rounded-[24px] border text-left transition hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] ${
        channel.recommended
          ? "border-[#BDF9FF]/70 bg-gradient-to-br from-white via-[#F3FFFF] to-[#E6FAFA] p-4 shadow-[0_18px_34px_rgba(21,140,132,0.12),inset_0_1px_0_rgba(255,255,255,0.92)]"
          : "border-white/64 bg-white/58 p-3.5 shadow-[0_10px_22px_rgba(18,59,59,0.04),inset_0_1px_0_rgba(255,255,255,0.76)] hover:bg-white/82"
      } ${
        isSelected
          ? "ring-2 ring-[#19A79D]/20"
          : ""
      }`}
    >
      <span className="min-w-0">
        <span className="flex flex-wrap items-center gap-2">
          <span
            className={`block font-extrabold leading-snug text-[#123B3B] ${
              channel.recommended ? "text-[15px]" : "text-[13.5px]"
            }`}
          >
            {channel.title}
          </span>
          {channel.recommended && (
            <span className="rounded-full bg-[#19A79D] px-2.5 py-1 text-[10px] font-extrabold leading-none text-white shadow-[0_8px_16px_rgba(25,167,157,0.16)]">
              เหมาะกับคุณ
            </span>
          )}
        </span>
        <span className="mt-1.5 block text-[12px] font-medium leading-[1.55] text-[#5F7A7C]">
          {channel.description}
        </span>
        <span
          className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[10.8px] font-extrabold leading-none ${
            channel.recommended
              ? "bg-[#19A79D]/10 text-[#12877F]"
              : "bg-[#E9F7F6] text-[#5E8081]"
          }`}
        >
          {channel.detail}
        </span>
      </span>

      <span
        className={`flex shrink-0 items-center justify-center rounded-full ${
          isSelected
            ? "h-10 w-10 bg-[#19A79D] text-white"
            : channel.recommended
              ? "h-10 w-10 bg-white text-[#12877F] shadow-[0_8px_18px_rgba(21,140,132,0.1)]"
              : "h-8 w-8 bg-[#E6F8F7] text-[#12877F]"
        }`}
      >
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            d="M6 3.5 10.5 8 6 12.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </span>
    </button>
  )
}

function ContextStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[16px] border border-[#E0F3F2] bg-white/64 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)]">
      <p className="text-[10px] font-extrabold leading-none text-[#178E8A]/64">
        {label}
      </p>
      <p className="mt-1.5 text-[11.5px] font-bold leading-snug text-[#315F61]">
        {value}
      </p>
    </div>
  )
}

function ApplicationStepCard({
  description,
  index,
  title,
}: {
  description: string
  index: number
  title: string
}) {
  return (
    <div className="flex gap-3 rounded-[20px] border border-[#D7EEEE] bg-[#F8FFFF]/84 p-3.5 shadow-[0_10px_22px_rgba(18,59,59,0.045),inset_0_1px_0_rgba(255,255,255,0.9)]">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#123B3B] text-[12px] font-extrabold leading-none text-white shadow-[0_8px_16px_rgba(18,59,59,0.16)]">
        {index}
      </span>
      <div className="min-w-0">
        <h3 className="text-[14px] font-bold leading-snug text-[#123B3B]">
          {title}
        </h3>
        <p className="mt-1 text-[12.5px] font-medium leading-[1.58] text-[#617C7E]">
          {description}
        </p>
      </div>
    </div>
  )
}

function ChannelCard({
  description,
  title,
}: {
  description: string
  title: string
}) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between gap-3 rounded-[20px] border border-[#D7EEEE] bg-white/76 p-3.5 text-left shadow-[0_12px_26px_rgba(18,59,59,0.05),inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:-translate-y-0.5 hover:bg-[#F8FFFF] active:translate-y-0 active:scale-[0.985]"
    >
      <span className="min-w-0">
        <span className="block text-[13.5px] font-bold leading-snug text-[#123B3B]">
          {title}
        </span>
        <span className="mt-1 block text-[12px] font-medium leading-[1.55] text-[#6B8385]">
          {description}
        </span>
      </span>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E6F8F7] text-[#12877F]">
        <svg
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path
            d="M6 3.5 10.5 8 6 12.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </span>
    </button>
  )
}

export default BenefitApplicationFlowScreen
