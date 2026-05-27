type ChatInputProps = {
  disabled?: boolean
  onChange: (value: string) => void
  onSubmit: () => void
  value: string
}

function ChatInput({ disabled = false, onChange, onSubmit, value }: ChatInputProps) {
  return (
    <form
      className="flex items-center gap-2 rounded-[24px] border border-white/86 bg-white/72 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_28px_rgba(18,59,59,0.07)] backdrop-blur-xl"
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit()
      }}
    >
      <input
        aria-label="ถามผู้ช่วย AI"
        className="min-w-0 flex-1 bg-transparent px-2 text-[13.5px] font-bold text-[#123B3B] outline-none placeholder:text-[#6C8385]/72"
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        placeholder="ถามเรื่องสิทธิ์ของคุณ"
        value={value}
      />

      <button
        aria-label="ส่งข้อความ"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[17px] bg-[#123B3B] text-white shadow-lg shadow-[#123B3B]/16 transition duration-300 hover:bg-[#0D3030] disabled:cursor-not-allowed disabled:opacity-45"
        disabled={disabled}
        type="submit"
      >
        <svg
          aria-hidden="true"
          className="h-4.5 w-4.5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="m5 12 13-7-4.2 14-2.2-5.6L5 12Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
    </form>
  )
}

export default ChatInput
