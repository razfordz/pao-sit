import { useState } from "react"
import BenefitApplicationFlowScreen from "./BenefitApplicationFlowScreen"
import type { DashboardBenefit } from "./DashboardCategory"
import { userProfile } from "../data/userProfile"

type BenefitDetailScreenProps = {
  benefit: DashboardBenefit
  onBack: () => void
}

function BenefitDetailScreen({ benefit, onBack }: BenefitDetailScreenProps) {
  const eligibility = benefit.eligibility ?? []
  const documents = benefit.requiredDocuments ?? []
  const profileSignals = getProfileSignals()
  const [checkedDocuments, setCheckedDocuments] = useState<string[]>([])
  const [previewDocument, setPreviewDocument] = useState<string | null>(null)
  const [showApplicationFlow, setShowApplicationFlow] = useState(false)
  const amountParts = getAmountParts(benefit.description)
  const preparedCount = checkedDocuments.length
  const isDocumentReady = documents.length > 0 && preparedCount === documents.length
  const progressPercent =
    documents.length > 0 ? (preparedCount / documents.length) * 100 : 0

  const toggleDocument = (document: string) => {
    setCheckedDocuments((currentDocuments) =>
      currentDocuments.includes(document)
        ? currentDocuments.filter((item) => item !== document)
        : [...currentDocuments, document],
    )
  }

  if (showApplicationFlow) {
    return (
      <BenefitApplicationFlowScreen
        benefit={benefit}
        onBack={() => setShowApplicationFlow(false)}
      />
    )
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
            ตรวจสอบสิทธิ์
          </span>
        </div>

        <section className="relative min-h-[270px] overflow-hidden rounded-[30px] border border-white/80 bg-[#123B3B] p-5 text-white shadow-[0_24px_58px_rgba(18,59,59,0.18),inset_0_1px_0_rgba(255,255,255,0.35)]">
          <img
            alt={benefit.title}
            className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-left-bottom opacity-72 blur-[1.2px]"
            src={benefit.thumbnail}
          />
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(11,76,75,0.12)_0%,rgba(8,78,78,0.42)_42%,rgba(4,42,43,0.88)_100%)]" />
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.2),transparent_34%),linear-gradient(120deg,rgba(22,151,142,0.48),rgba(0,0,0,0)_58%)]" />

          <div className="relative flex min-h-[230px] flex-col justify-end">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/44 bg-white/24 px-3.5 py-2 text-[11px] font-extrabold leading-none text-white/92 shadow-[0_10px_22px_rgba(0,0,0,0.18)] backdrop-blur-2xl">
              <span className="h-2 w-2 rounded-full bg-[#FFE9B7] shadow-[0_0_12px_rgba(255,233,183,0.45)]" />
              AI พบว่าสิทธิ์นี้อาจช่วยคุณได้
            </span>

            <AmountDisplay amount={benefit.description} parts={amountParts} />

            <h1 className="mt-3 text-[18px] font-bold leading-[1.35] text-white/84 drop-shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
              {benefit.title}
            </h1>
          </div>
        </section>

        <section className="mt-5 rounded-[28px] border border-white/82 bg-white/72 p-5 shadow-[0_18px_42px_rgba(18,59,59,0.08)] backdrop-blur-xl">
          <p className="text-[11px] font-extrabold leading-none text-[#178E8A]/76">
            เป๋าสิทธิ์ AI วิเคราะห์จากโปรไฟล์นี้
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {profileSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-[#CDEDEC] bg-[#F2FFFF] px-3 py-1.5 text-[11.5px] font-bold leading-none text-[#126F6C]"
              >
                {signal}
              </span>
            ))}
          </div>

          <h2 className="headline-font mt-5 text-[21px] font-extrabold leading-tight text-[#123B3B]">
            ทำไม AI ถึงแนะนำสิทธิ์นี้
          </h2>
          <p className="mt-3 text-[13.5px] font-medium leading-[1.72] text-[#496B6D]">
            {benefit.reason}
            {benefit.shortDescription && (
              <span className="mt-2 block">{benefit.shortDescription}</span>
            )}
          </p>
        </section>

        <section className="mt-4 rounded-[28px] border border-white/82 bg-white/70 p-5 shadow-[0_18px_42px_rgba(18,59,59,0.07)] backdrop-blur-xl">
          <SectionHeader
            eyebrow="AI eligibility check"
            title="คุณอาจเข้าเกณฑ์เบื้องต้น"
          />

          <div className="mt-4 flex flex-col gap-2.5">
            {eligibility.length > 0 ? (
              eligibility.map((item) => (
                <ChecklistItem key={item}>{item}</ChecklistItem>
              ))
            ) : (
              <EmptyInfoMessage>ยังไม่มีข้อมูลคุณสมบัติสำหรับสิทธิ์นี้</EmptyInfoMessage>
            )}
          </div>
        </section>

        <section className="mt-4 rounded-[28px] border border-white/82 bg-white/70 p-5 shadow-[0_18px_42px_rgba(18,59,59,0.07)] backdrop-blur-xl">
          <SectionHeader
            eyebrow="เตรียมเอกสาร"
            title="สิ่งที่ควรมีไว้ก่อนสมัคร"
          />

          <div className="mt-4 rounded-[20px] border border-[#D7EEEE] bg-[#F7FFFF]/72 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[12px] font-extrabold leading-none text-[#126F6C]">
                {isDocumentReady
                  ? "เตรียมเอกสารครบแล้ว 🎉"
                  : `เตรียมแล้ว ${preparedCount} จาก ${documents.length} รายการ`}
              </p>
              <span
                className={`rounded-full px-2.5 py-1 text-[10.5px] font-extrabold leading-none transition ${
                  isDocumentReady
                    ? "bg-[#19A79D] text-white shadow-[0_8px_16px_rgba(25,167,157,0.2)]"
                    : "bg-[#19A79D]/12 text-[#12877F]"
                }`}
              >
                {isDocumentReady ? "ครบแล้ว" : "AI ช่วยเตรียม"}
              </span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#D8F0EF]">
              <span
                className="block h-full rounded-full bg-gradient-to-r from-[#19A79D] to-[#7DE8FF] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p
              className={`mt-3 text-[11.5px] font-bold leading-[1.55] transition ${
                isDocumentReady ? "text-[#12877F]" : "text-[#6D8586]"
              }`}
            >
              {isDocumentReady
                ? "เอกสารครบแล้ว AI พร้อมพาคุณไปดูขั้นตอนสมัครต่อ"
                : "AI กำลังช่วยคุณตรวจสอบความพร้อมของเอกสารก่อนสมัคร"}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {documents.length > 0 ? (
              documents.map((document) => (
                <DocumentChecklistItem
                  key={document}
                  document={document}
                  isChecked={checkedDocuments.includes(document)}
                  onPreview={() => setPreviewDocument(document)}
                  onToggle={() => toggleDocument(document)}
                />
              ))
            ) : (
              <EmptyInfoMessage>ยังไม่มีข้อมูลเอกสารสำหรับสิทธิ์นี้</EmptyInfoMessage>
            )}
          </div>
        </section>

        <section
          className={`mt-4 overflow-hidden rounded-[28px] border p-5 shadow-[0_22px_48px_rgba(21,140,132,0.13)] transition duration-300 ${
            isDocumentReady
              ? "border-[#BDF9FF]/72 bg-gradient-to-br from-[#EFFFFF] via-white to-[#DDF7F7]"
              : "border-white/76 bg-white/58 backdrop-blur-xl"
          }`}
        >
          <p className="text-[12px] font-extrabold leading-none text-[#178E8A]/82">
            ขั้นตอนถัดไป
          </p>
          <h2 className="headline-font mt-3 text-[22px] font-extrabold leading-tight text-[#123B3B]">
            พร้อมตรวจเอกสารและเริ่มสมัคร
          </h2>
          <p className="mt-2 text-[13px] font-medium leading-[1.65] text-[#557375]">
            {isDocumentReady
              ? benefit.nextStep ??
                "ตรวจสอบคุณสมบัติและเตรียมเอกสาร ก่อนติดต่อหน่วยงานที่ดูแลสิทธิ์นี้"
              : "กรุณาเตรียมเอกสารให้ครบก่อนดำเนินการสมัคร เพื่อให้ขั้นตอนถัดไปง่ายและมั่นใจขึ้น"}
          </p>

          <button
            type="button"
            disabled={!isDocumentReady}
            onClick={() => setShowApplicationFlow(true)}
            className={`mt-5 w-full rounded-[20px] px-5 py-3.5 text-[14px] font-extrabold leading-none shadow-[0_16px_30px_rgba(18,59,59,0.14)] transition duration-300 ${
              isDocumentReady
                ? "bg-[#123B3B] text-white hover:-translate-y-0.5 hover:bg-[#0D3030] active:translate-y-0 active:scale-[0.985]"
                : "cursor-not-allowed border border-white/78 bg-[#DDF3F2]/72 text-[#5A7A7B] shadow-[inset_0_1px_0_rgba(255,255,255,0.76)]"
            }`}
          >
            {isDocumentReady ? "ดูขั้นตอนสมัคร →" : "เตรียมเอกสารให้ครบก่อน"}
          </button>

          {benefit.agency && (
            <p className="mt-3 text-center text-[11.5px] font-bold leading-snug text-[#6E8788]">
              หน่วยงานดูแล: {benefit.agency}
            </p>
          )}
          {benefit.sourceUrl && (
            <a
              href={benefit.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-center text-[11.5px] font-bold leading-snug text-[#12877F] underline decoration-[#9BDCD7] underline-offset-4"
            >
              ดูแหล่งข้อมูลสิทธิ์นี้
            </a>
          )}
        </section>
      </div>

      {previewDocument && (
        <DocumentPreviewSheet
          document={previewDocument}
          onClose={() => setPreviewDocument(null)}
        />
      )}
    </div>
  )
}

function DocumentChecklistItem({
  document,
  isChecked,
  onToggle,
  onPreview,
}: {
  document: string
  isChecked: boolean
  onToggle: () => void
  onPreview: () => void
}) {
  return (
    <div
      className={`flex w-full items-center gap-3 rounded-[20px] border p-3.5 shadow-[0_12px_26px_rgba(18,59,59,0.06),inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-xl transition duration-300 ${
        isChecked
          ? "border-[#19A79D]/45 bg-[#ECFFFD]"
          : "border-white/84 bg-white/78 hover:border-[#BDEDEA] hover:bg-white/92"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="group flex min-w-0 flex-1 items-center gap-3 text-left transition active:scale-[0.99]"
      >
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
            isChecked
              ? "border-[#19A79D] bg-[#19A79D] text-white shadow-[0_8px_16px_rgba(25,167,157,0.24)]"
              : "border-[#BFDCDC] bg-white text-transparent group-hover:border-[#19A79D]/55"
          }`}
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
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
        </span>

        <span className="min-w-0 flex-1">
          <span
            className={`block text-[13px] font-extrabold leading-snug transition ${
              isChecked ? "text-[#126F6C]" : "text-[#315F61]"
            }`}
          >
            {document}
          </span>
          <span className="mt-1 block text-[11.2px] font-bold leading-snug text-[#789091]">
            แตะเพื่อทำเครื่องหมายว่าเตรียมแล้ว
          </span>
        </span>
      </button>

      <button
        type="button"
        onClick={onPreview}
        className="shrink-0 rounded-full border border-[#CDEDEC] bg-white/82 px-3 py-2 text-[11px] font-extrabold leading-none text-[#12877F] shadow-sm transition hover:bg-[#EFFFFF] active:scale-95"
      >
        ดูตัวอย่าง
      </button>
    </div>
  )
}

function DocumentPreviewSheet({
  document,
  onClose,
}: {
  document: string
  onClose: () => void
}) {
  return (
    <div className="absolute inset-0 z-30 flex items-end bg-[#082F31]/36 px-3 pb-3 backdrop-blur-[3px]">
      <button
        type="button"
        aria-label="ปิดตัวอย่างเอกสาร"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <div className="relative w-full animate-[screen-in_260ms_ease-out_both] overflow-hidden rounded-[28px] border border-white/84 bg-gradient-to-br from-white via-[#F8FFFF] to-[#E9FAFA] p-5 shadow-[0_24px_58px_rgba(18,59,59,0.22)]">
        <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[#7DE8FF]/24 blur-3xl" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-extrabold leading-none text-[#178E8A]/74">
              ตัวอย่างเอกสาร
            </p>
            <h3 className="headline-font mt-2 text-[20px] font-extrabold leading-tight text-[#123B3B]">
              {document}
            </h3>
          </div>

          <button
            type="button"
            aria-label="ปิด"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#123B3B] shadow-[0_8px_18px_rgba(18,59,59,0.08)] transition hover:bg-[#EEF7F7] active:scale-95"
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

        <div className="relative mt-4 rounded-[22px] border border-[#D7EEEE] bg-white/78 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
          <div className="rounded-[18px] border border-dashed border-[#9BDCD7] bg-[#F4FFFF] p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-[#19A79D]/12 text-[#12877F]">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 3.8h7.2L18 7.6v12.6H7V3.8Z"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M14 4v4h4M9.6 12h4.8M9.6 15h5.8"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.8"
                  />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-extrabold leading-snug text-[#123B3B]">
                  เอกสารควรเห็นชื่อและเลขสำคัญชัดเจน
                </p>
                <p className="mt-1 text-[11.5px] font-medium leading-[1.55] text-[#6B8385]">
                  AI แนะนำให้เตรียมภาพถ่ายหรือสำเนาที่อ่านง่าย
                  และตรวจว่าข้อมูลตรงกับผู้สมัครก่อนยื่น
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full rounded-[18px] bg-[#123B3B] px-5 py-3 text-[13px] font-extrabold leading-none text-white shadow-[0_14px_26px_rgba(18,59,59,0.18)] transition hover:bg-[#0D3030] active:scale-[0.985]"
        >
          เข้าใจแล้ว
        </button>
      </div>
    </div>
  )
}

function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
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

function EmptyInfoMessage({ children }: { children: string }) {
  return (
    <div className="rounded-[18px] border border-[#E0F3F2] bg-[#F8FFFF]/86 p-3 text-[12.8px] font-bold leading-[1.55] text-[#5F7A7C] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
      {children}
    </div>
  )
}

function ChecklistItem({ children }: { children: string }) {
  return (
    <div className="flex items-start gap-3 rounded-[18px] border border-[#E0F3F2] bg-[#F8FFFF]/86 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#19A79D] text-white shadow-[0_6px_14px_rgba(25,167,157,0.22)]">
        <svg
          aria-hidden="true"
          className="h-3.5 w-3.5"
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
      </span>
      <span className="text-[12.8px] font-bold leading-[1.55] text-[#315F61]">
        {children}
      </span>
    </div>
  )
}

function AmountDisplay({
  amount,
  parts,
}: {
  amount: string
  parts: ReturnType<typeof getAmountParts>
}) {
  if (!parts) {
    return (
      <p className="mt-5 max-w-full break-words text-[28px] font-extrabold leading-[1.16] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.28)]">
        {amount}
      </p>
    )
  }

  return (
    <div
      aria-label={amount}
      className="mt-5 flex max-w-full flex-col items-start overflow-visible drop-shadow-[0_4px_18px_rgba(0,0,0,0.28)]"
    >
      {parts.prefix && (
        <span className="max-w-full text-[12.5px] font-bold leading-[1.25] text-white/72">
          {parts.prefix}
        </span>
      )}
      <span className="mt-1 flex max-w-full flex-wrap items-baseline gap-x-2 gap-y-1 overflow-visible">
        <span className="whitespace-nowrap text-[40px] font-extrabold leading-[1.08] text-white">
          {parts.value}
        </span>
        {parts.suffix && (
          <span className="max-w-full break-words text-[14px] font-extrabold leading-[1.35] text-white/78">
            {parts.suffix}
          </span>
        )}
      </span>
    </div>
  )
}

function getAmountParts(description: string) {
  const amountMatch = description.match(/[\d,]+/)

  if (!amountMatch) {
    return null
  }

  const amountStart = amountMatch.index ?? 0
  const amountEnd = amountStart + amountMatch[0].length

  return {
    prefix: description.slice(0, amountStart).trim(),
    value: amountMatch[0].trim(),
    suffix: description.slice(amountEnd).trim(),
  }
}

function getProfileSignals() {
  const signals: string[] = []

  if (userProfile.age) {
    signals.push(`อายุ ${userProfile.age} ปี`)
  }

  if (userProfile.lowIncome) {
    signals.push("รายได้น้อย")
  }

  if (userProfile.employmentStatus === "unemployed") {
    signals.push("กำลังว่างงาน")
  }

  if (userProfile.socialSecurity) {
    signals.push("มีประกันสังคม")
  }

  if (userProfile.hasChild || userProfile.childCount) {
    signals.push(`มีบุตร ${userProfile.childCount ?? 1} คน`)
  }

  if (userProfile.isLookingForJob) {
    signals.push("กำลังหางานใหม่")
  }

  if (userProfile.district) {
    signals.push(`อยู่เขต${userProfile.district}`)
  }

  return signals.length > 0 ? signals : ["ข้อมูลโปรไฟล์ยังไม่ครบ"]
}

export default BenefitDetailScreen
