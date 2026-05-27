function PhoneStatusBar() {
  return (
    <div className="relative z-10 flex h-7 items-center justify-between px-5 text-[#123B3B]">
      <span className="text-[13px] font-extrabold leading-none tracking-normal">
        9:41
      </span>

      <div className="flex items-center gap-1.5 text-[#123B3B]">
        <svg
          aria-hidden="true"
          className="h-3.5 w-4"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <rect x="1" y="8.5" width="2.5" height="4" rx="1" />
          <rect x="5.5" y="6.5" width="2.5" height="6" rx="1" />
          <rect x="10" y="4" width="2.5" height="8.5" rx="1" />
          <rect x="14.5" y="1.5" width="2.5" height="11" rx="1" />
        </svg>

        <svg
          aria-hidden="true"
          className="h-3.5 w-4"
          fill="none"
          viewBox="0 0 18 14"
        >
          <path
            d="M2.4 5.3a10.2 10.2 0 0 1 13.2 0M5 8a6.1 6.1 0 0 1 8 0m-5.3 2.6a2 2 0 0 1 2.6 0"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.7"
          />
        </svg>

        <svg
          aria-hidden="true"
          className="h-3.5 w-[25px]"
          fill="none"
          viewBox="0 0 28 14"
        >
          <rect
            x="1"
            y="2.5"
            width="22"
            height="9"
            rx="2.8"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M25 5.4v3.2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
          <rect x="3.5" y="5" width="16.5" height="4" rx="1.4" fill="currentColor" />
        </svg>
      </div>
    </div>
  )
}

export default PhoneStatusBar
