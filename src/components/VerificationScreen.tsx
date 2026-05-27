type VerificationScreenProps = {
  status: "verifying" | "success"
}

function VerificationScreen({ status }: VerificationScreenProps) {
  const isSuccess = status === "success"
  const title = isSuccess ? "ยืนยันตัวตนสำเร็จ" : "กำลังยืนยันตัวตน..."

  return (
    <div className="flex h-[548px] flex-col items-center justify-center rounded-[32px] bg-gradient-to-br from-[#E9FAF7] via-[#F7FFFF] to-[#D9F2F3] p-6 text-center shadow-xl shadow-[#158C84]/15 sm:h-[566px] sm:rounded-[34px]">
      <div className="relative flex h-36 w-36 items-center justify-center">
        <span
          className={`absolute h-full w-full rounded-full bg-[#19A79D]/12 ${
            isSuccess ? "scale-100" : "animate-ping"
          }`}
        />
        <span
          className={`absolute h-28 w-28 rounded-full bg-[#19A79D]/14 ${
            isSuccess ? "scale-100" : "animate-pulse"
          }`}
        />
        <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl shadow-[#19A79D]/20 ring-1 ring-white/80">
          {isSuccess ? <CheckIcon /> : <SpinnerIcon />}
        </span>
      </div>

      <h2 className="headline-font mt-8 text-[28px] font-extrabold leading-[1.2] text-[#123B3B]">
        {title}
      </h2>

      <p className="mt-3 max-w-[240px] text-[14px] font-normal leading-[1.65] text-[#5A7173]">
        {isSuccess
          ? "พร้อมค้นหาสิทธิ์ที่เหมาะกับคุณแล้ว"
          : "ระบบกำลังตรวจสอบข้อมูลอย่างปลอดภัย"}
      </p>
    </div>
  )
}

function SpinnerIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-12 w-12 animate-spin text-[#19A79D]"
      fill="none"
      viewBox="0 0 48 48"
    >
      <circle
        className="opacity-20"
        cx="24"
        cy="24"
        r="18"
        stroke="currentColor"
        strokeWidth="6"
      />
      <path
        d="M42 24a18 18 0 0 0-18-18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="6"
      />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-12 w-12 text-[#19A79D]"
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        d="M15 24.8 21.2 31 34 17.8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
    </svg>
  )
}

export default VerificationScreen
