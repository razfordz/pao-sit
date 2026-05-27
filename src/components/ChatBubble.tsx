import type { ReactNode } from "react"

type ChatBubbleProps = {
  children: ReactNode
  className?: string
  speaker: "ai" | "user"
}

function ChatBubble({ children, className = "", speaker }: ChatBubbleProps) {
  const isUser = speaker === "user"

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} ${className}`}
    >
      <div
        className={`max-w-[82%] rounded-[22px] px-4 py-3 text-[13.5px] font-semibold leading-[1.55] shadow-sm ${
          isUser
            ? "rounded-br-[8px] bg-[#123B3B] text-white shadow-[#123B3B]/12"
            : "rounded-tl-[8px] border border-white/75 bg-white/72 text-[#123B3B] shadow-[#158C84]/8 backdrop-blur-xl"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default ChatBubble
