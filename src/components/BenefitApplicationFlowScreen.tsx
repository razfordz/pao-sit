import { useEffect, useState } from "react"
import type { DistrictOffice } from "../data/districtOffices"
import { userProfile } from "../data/userProfile"
import { getDistrictOfficeByDistrict } from "../lib/getDistrictOffice"
import type { DashboardBenefit } from "./DashboardCategory"

type BenefitApplicationFlowScreenProps = {
  benefit: DashboardBenefit
  onBack: () => void
}

type OfficeDisplayData = Pick<
  DistrictOffice,
  | "name"
  | "address"
  | "phone"
  | "openHours"
  | "recommendedTime"
  | "availableServices"
  | "googleMapsUrl"
>

const defaultDistrictOffice: OfficeDisplayData = {
  name: "ยังไม่พบสำนักงานเขตที่ตรงกับพื้นที่ของคุณ",
  address: "ระบบจะแนะนำสำนักงานเขตให้เมื่อมีข้อมูลพื้นที่เพิ่มเติม",
  phone: "ยังไม่มีข้อมูลเบอร์โทร",
  openHours: "ยังไม่มีข้อมูลเวลาเปิดทำการ",
  recommendedTime: "AI จะแนะนำช่วงเวลาที่เหมาะสมเมื่อพบสำนักงานเขต",
  availableServices: [] as string[],
  googleMapsUrl: "",
}

type ApplicationChannel = {
  action: "online" | "office" | "phone"
  title: string
  description: string
  detail: string
  loadingText: string
  readyText: string
  recommended: boolean
  mapsUrl?: string
  sourceUrl?: string
}

function getOnlineApplicationChannel(benefit: DashboardBenefit): ApplicationChannel {
  return {
    action: "online",
    title: "สมัครออนไลน์",
    description: benefit.sourceUrl
      ? `เริ่มจากแหล่งข้อมูลของ${benefit.agency ?? "หน่วยงานที่ดูแล"}`
      : "เริ่มตรวจสอบช่องทางออนไลน์ที่เกี่ยวข้องกับสิทธิ์นี้",
    detail: benefit.agency ?? "ตรวจสอบหน่วยงานที่ดูแล",
    loadingText: `กำลังเตรียมช่องทางสมัครสำหรับ${benefit.title}...`,
    readyText: benefit.sourceUrl
      ? "พร้อมเปิดแหล่งข้อมูลสิทธิ์นี้"
      : "ยังไม่มีลิงก์แหล่งข้อมูลสำหรับสิทธิ์นี้",
    recommended: true,
    sourceUrl: benefit.sourceUrl,
  }
}

function getApplicationSteps(benefit: DashboardBenefit, officeName: string) {
  return [
    {
      title: `ตรวจข้อมูลสิทธิ์ ${benefit.title}`,
      description:
        benefit.nextStep ??
        "AI แนะนำให้ตรวจเงื่อนไขและช่องทางสมัครของสิทธิ์นี้ก่อนดำเนินการ",
    },
    {
      title: `ติดต่อ${benefit.agency ?? officeName}`,
      description: `ใช้เอกสารที่เตรียมไว้ และแจ้งเจ้าหน้าที่ว่าต้องการสมัคร${benefit.title}`,
    },
    {
      title: "ติดตามผลการสมัคร",
      description:
        "ติดตามผลผ่านช่องทางที่หน่วยงานแจ้งไว้ และเก็บหลักฐานการยื่นสมัครไว้ตรวจสอบภายหลัง",
    },
  ]
}

function getApplicationChannels(
  benefit: DashboardBenefit,
  districtOffice: OfficeDisplayData,
): ApplicationChannel[] {
  return [
    getOnlineApplicationChannel(benefit),
    {
      action: "office",
      title: districtOffice.name,
      description: "เหมาะสำหรับผู้ที่ต้องการให้เจ้าหน้าที่ช่วยตรวจเอกสาร",
      detail: districtOffice.openHours,
      loadingText: "ระบบกำลังเตรียมข้อมูลการเดินทางไปสำนักงานเขต",
      readyText: "พร้อมเปิดข้อมูลสำนักงานเขต",
      recommended: false,
      mapsUrl: districtOffice.googleMapsUrl,
    },
    {
      action: "phone",
      title: "โทรสอบถามหน่วยงาน",
      description: "สอบถามข้อมูลเพิ่มเติมก่อนสมัคร",
      detail: districtOffice.phone,
      loadingText: "ระบบกำลังเตรียมช่องทางติดต่อหน่วยงาน",
      readyText: "พร้อมติดต่อหน่วยงาน",
      recommended: false,
    },
  ]
}

function getSmartTips(districtOffice: OfficeDisplayData) {
  return [
    districtOffice.recommendedTime ??
      "AI จะแนะนำช่วงเวลาที่เหมาะสมเมื่อพบข้อมูลสำนักงานเขต",
    "ควรเตรียมสำเนาเอกสารเพิ่มไว้ 1 ชุด",
    districtOffice.availableServices.length > 0
      ? `${districtOffice.name}รองรับบริการ: ${districtOffice.availableServices
          .slice(0, 3)
          .join(", ")}`
      : "คุณสามารถเริ่มสมัครออนไลน์ได้บางส่วนโดยไม่ต้องเดินทางทันที",
  ]
}

function hasUsablePhone(phone: string) {
  return phone.trim().length > 0 && !phone.startsWith("ยังไม่มี")
}

function BenefitApplicationFlowScreen({
  benefit,
  onBack,
}: BenefitApplicationFlowScreenProps) {
  const matchedDistrictOffice = getDistrictOfficeByDistrict(userProfile.district)
  const districtOffice: OfficeDisplayData =
    matchedDistrictOffice ?? defaultDistrictOffice
  const applicationSteps = getApplicationSteps(
    benefit,
    matchedDistrictOffice ? districtOffice.name : "สำนักงานเขตที่เหมาะสม",
  )
  const applicationChannels = getApplicationChannels(benefit, districtOffice)
  const smartTips = getSmartTips(districtOffice)
  const [isChannelSheetOpen, setIsChannelSheetOpen] = useState(false)
  const [isOfficeDetailOpen, setIsOfficeDetailOpen] = useState(false)
  const [selectedChannel, setSelectedChannel] =
    useState<ApplicationChannel | null>(null)
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
    setIsOfficeDetailOpen(false)
    setSelectedChannel(null)
    setChannelStatus("idle")
  }

  const closeChannelSheet = () => {
    setIsChannelSheetOpen(false)
    setIsOfficeDetailOpen(false)
    setSelectedChannel(null)
    setChannelStatus("idle")
  }

  const chooseChannel = (channel: ApplicationChannel) => {
    setIsOfficeDetailOpen(false)
    setSelectedChannel(channel)

    if (channel.action === "office") {
      setChannelStatus("idle")
      setIsOfficeDetailOpen(true)
      return
    }

    if (channel.action === "phone") {
      if (hasUsablePhone(districtOffice.phone)) {
        // Required for native phone handoff in this prototype flow.
        // eslint-disable-next-line react-hooks/immutability
        window.location.href = `tel:${districtOffice.phone}`
        setChannelStatus("ready")
        return
      }

      setSelectedChannel({
        ...channel,
        readyText: "ยังไม่มีเบอร์ติดต่อสำหรับสำนักงานเขตนี้",
      })
      setChannelStatus("ready")
      return
    }

    if (channel.action === "online" && channel.sourceUrl) {
      window.open(channel.sourceUrl, "_blank", "noopener,noreferrer")
    }

    setChannelStatus("loading")
  }

  const openGoogleMaps = () => {
    if (!districtOffice.googleMapsUrl) {
      return
    }

    window.open(districtOffice.googleMapsUrl, "_blank", "noopener,noreferrer")
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
                {matchedDistrictOffice && (
                  <span className="shrink-0 rounded-full bg-[#19A79D]/12 px-2.5 py-1.5 text-[11px] font-extrabold leading-none text-[#12877F]">
                    เขต{matchedDistrictOffice.district}
                  </span>
                )}
              </div>

              <p className="mt-3 text-[12px] font-medium leading-[1.6] text-[#5F7A7C]">
                {districtOffice.address}
              </p>

              <div className="mt-3 grid grid-cols-1 gap-2">
                <ContextStat label="เวลาทำการ" value={districtOffice.openHours} />
                <ContextStat label="โทร" value={districtOffice.phone} />
              </div>

              {districtOffice.googleMapsUrl && (
                <button
                  type="button"
                  onClick={openGoogleMaps}
                  className="mt-3 inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#9BDCD7]/80 bg-white/94 px-4.5 py-3 text-[13px] font-extrabold leading-none text-[#0F6F6B] shadow-[0_14px_28px_rgba(18,59,59,0.12),0_4px_10px_rgba(25,167,157,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#7CCFCA] hover:bg-white hover:shadow-[0_18px_34px_rgba(18,59,59,0.14),0_6px_14px_rgba(25,167,157,0.1),inset_0_1px_0_rgba(255,255,255,1)] active:translate-y-0 active:scale-[0.985]"
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    className="h-9 w-9 shrink-0 object-contain"
                    src="/images/Googlemap_Logo.png"
                  />
                  <span>เปิดใน Google Maps →</span>
                </button>
              )}
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
            {matchedDistrictOffice
              ? `${districtOffice.recommendedTime} เพราะคุณอยู่ใกล้จุดบริการ และยังมีเวลาพอให้เจ้าหน้าที่ช่วยตรวจเอกสาร หากต้องแก้ไขเล็กน้อย`
              : "AI จะช่วยแนะนำสำนักงานเขตและช่วงเวลาที่เหมาะสม เมื่อมีข้อมูลพื้นที่ของคุณเพิ่มเติม"}
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
                แนะนำ: {benefit.nextStep ?? "เริ่มตรวจสอบช่องทางสมัครออนไลน์ก่อน แล้วติดต่อหน่วยงานหากต้องยื่นเอกสารตัวจริง"}
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
            {benefit.sourceUrl && (
              <p className="mt-2 text-center text-[11.5px] font-bold leading-snug text-white/58">
                แหล่งข้อมูล: {benefit.sourceUrl}
              </p>
            )}
          </div>
        </section>
      </div>

      {isChannelSheetOpen && (
        <ApplicationChannelsSheet
          applicationChannels={applicationChannels}
          channelStatus={channelStatus}
          districtOffice={districtOffice}
          isOfficeDetailOpen={isOfficeDetailOpen}
          onChooseChannel={chooseChannel}
          onClose={closeChannelSheet}
          onOpenGoogleMaps={openGoogleMaps}
          onShowChannels={() => setIsOfficeDetailOpen(false)}
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
  applicationChannels,
  channelStatus,
  districtOffice,
  isOfficeDetailOpen,
  onChooseChannel,
  onClose,
  onOpenGoogleMaps,
  onShowChannels,
  selectedChannel,
}: {
  applicationChannels: ApplicationChannel[]
  channelStatus: "idle" | "loading" | "ready"
  districtOffice: OfficeDisplayData
  isOfficeDetailOpen: boolean
  onChooseChannel: (channel: ApplicationChannel) => void
  onClose: () => void
  onOpenGoogleMaps: () => void
  onShowChannels: () => void
  selectedChannel: ApplicationChannel | null
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

          {isOfficeDetailOpen ? (
            <DistrictOfficeDetailPanel
              districtOffice={districtOffice}
              onBack={onShowChannels}
              onOpenGoogleMaps={onOpenGoogleMaps}
            />
          ) : (
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
          )}

          {selectedChannel && !isOfficeDetailOpen && (
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
  channel: ApplicationChannel
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

function DistrictOfficeDetailPanel({
  districtOffice,
  onBack,
  onOpenGoogleMaps,
}: {
  districtOffice: OfficeDisplayData
  onBack: () => void
  onOpenGoogleMaps: () => void
}) {
  return (
    <div className="relative mt-6 rounded-[26px] border border-[#BDF9FF]/52 bg-white/72 p-4 shadow-[0_16px_34px_rgba(21,140,132,0.09),inset_0_1px_0_rgba(255,255,255,0.86)]">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-extrabold leading-none text-[#178E8A]/74">
            รายละเอียดสำนักงานเขต
          </p>
          <h4 className="mt-2 text-[18px] font-extrabold leading-tight text-[#123B3B]">
            {districtOffice.name}
          </h4>
        </div>

        <button
          type="button"
          onClick={onBack}
          className="shrink-0 rounded-full bg-[#E9F7F6] px-3 py-2 text-[11px] font-extrabold leading-none text-[#12877F] transition hover:bg-[#DDF3F2] active:scale-95"
        >
          เปลี่ยน
        </button>
      </div>

      <p className="mt-3 text-[12.5px] font-medium leading-[1.62] text-[#5F7A7C]">
        {districtOffice.address}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-2">
        <ContextStat label="เวลาทำการ" value={districtOffice.openHours} />
        <ContextStat label="โทร" value={districtOffice.phone} />
        <ContextStat
          label="ช่วงเวลาที่แนะนำ"
          value={
            districtOffice.recommendedTime ??
            "AI จะแนะนำช่วงเวลาที่เหมาะสมเมื่อมีข้อมูลเพิ่มเติม"
          }
        />
      </div>

      {districtOffice.availableServices.length > 0 && (
        <div className="mt-4">
          <p className="text-[11px] font-extrabold leading-none text-[#178E8A]/72">
            บริการที่รองรับ
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {districtOffice.availableServices.map((service) => (
              <span
                key={service}
                className="rounded-full bg-[#E9F7F6] px-3 py-1.5 text-[11px] font-bold leading-none text-[#315F61]"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      )}

      {districtOffice.googleMapsUrl && (
        <button
          type="button"
          onClick={onOpenGoogleMaps}
          className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#9BDCD7]/80 bg-white/94 px-4.5 py-3 text-[13px] font-extrabold leading-none text-[#0F6F6B] shadow-[0_14px_28px_rgba(18,59,59,0.12),0_4px_10px_rgba(25,167,157,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-[#7CCFCA] hover:bg-white active:translate-y-0 active:scale-[0.985]"
        >
          <img
            alt=""
            aria-hidden="true"
            className="h-7 w-7 shrink-0 object-contain"
            src="/images/Googlemap_Logo.png"
          />
          <span>เปิดใน Google Maps →</span>
        </button>
      )}
    </div>
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

export default BenefitApplicationFlowScreen
