import { useEffect, useRef, useState } from "react"
import AIRecommendationCard from "./AIRecommendationCard"
import ChatBubble from "./ChatBubble"
import ChatInput from "./ChatInput"
import TypingIndicator from "./TypingIndicator"

type AssistantMessage = {
  id: string
  speaker: "ai" | "user"
  text: string
}

const sampleQuestion = "ผมตกงานอยู่ มีอะไรช่วยได้บ้าง"

const assistantReply =
  "คุณมีสิทธิ์สมัครคอร์สอาชีพฟรีของ กทม.\nและอาจขอรับเงินช่วยเหลือครอบครัวรายได้น้อยได้ครับ 😊"

const recommendationCards = [
  {
    id: "free-ai-course",
    title: "คอร์ส AI ฟรี",
    description: "เรียนออนไลน์ฟรี",
    tone: "blue" as const,
  },
  {
    id: "family-support",
    title: "เงินช่วยเหลือครอบครัว",
    description: "ช่วยลดภาระช่วงตกงาน",
    tone: "teal" as const,
  },
  {
    id: "career-training",
    title: "ทุนอบรมอาชีพ",
    description: "ต่อยอดงานใหม่",
    tone: "warm" as const,
  },
]

function AIAssistantPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [messages, setMessages] = useState<AssistantMessage[]>([
    {
      id: "welcome",
      speaker: "ai",
      text: "สวัสดีครับ ผมช่วยดูสิทธิ์และโอกาสที่เหมาะกับชีวิตคุณได้ ถามได้แบบภาษาธรรมดาเลยครับ",
    },
  ])
  const messageListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messageListRef.current?.scrollTo({
      top: messageListRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [isOpen, isTyping, messages, showRecommendations])

  const askAssistant = (question = inputValue) => {
    const trimmedQuestion = question.trim()

    if (!trimmedQuestion || isTyping) {
      return
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: `user-${Date.now()}`,
        speaker: "user",
        text: trimmedQuestion,
      },
    ])
    setInputValue("")
    setShowRecommendations(false)
    setIsTyping(true)

    window.setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: `ai-${Date.now()}`,
          speaker: "ai",
          text: assistantReply,
        },
      ])
      setIsTyping(false)
      setShowRecommendations(true)
    }, 1250)
  }

  if (!isOpen) {
    return (
      <button
        aria-label="เปิดผู้ช่วย AI"
        className="group absolute bottom-5 right-5 z-30 flex h-[54px] w-[54px] animate-[assistant-orb-float_6.2s_ease-in-out_infinite] items-center justify-center rounded-full text-[#0F7773] opacity-[0.72] transition duration-300 hover:scale-[1.035] hover:opacity-95"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <span className="pointer-events-none absolute inset-[-5px] animate-[assistant-orb-halo_4.4s_ease-in-out_infinite] rounded-full bg-[#7DE8FF]/8 blur-lg" />
        <span className="pointer-events-none absolute inset-[-2px] rounded-full bg-[#19A79D]/4 blur-md" />
        <span className="pointer-events-none absolute inset-0 animate-[assistant-orb-breathe_4.8s_ease-in-out_infinite] rounded-full border border-white/62 bg-white/28 shadow-[0_10px_22px_rgba(18,59,59,0.09),0_4px_10px_rgba(21,140,132,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl" />
        <span className="pointer-events-none absolute inset-[5px] rounded-full bg-gradient-to-br from-white via-[#F2FFFF] to-[#AEEFF5] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-6px_14px_rgba(25,167,157,0.07)]" />
        <span className="pointer-events-none absolute inset-[12px] animate-[assistant-orb-core_5.4s_ease-in-out_infinite] rounded-full bg-[conic-gradient(from_120deg,rgba(255,255,255,0.9),rgba(189,249,255,0.68),rgba(25,167,157,0.2),rgba(255,236,190,0.22),rgba(255,255,255,0.9))] blur-[0.2px]" />
        <span className="pointer-events-none absolute inset-[18px] rounded-full bg-white/44 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl" />
        <span className="pointer-events-none absolute left-3.5 top-3 h-2.5 w-2.5 rounded-full bg-white/48 blur-[1px]" />

        <span className="relative flex flex-col items-center justify-center">
          <span className="text-[13px] font-extrabold leading-none tracking-[0] text-[#103F40] drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
            AI
          </span>
          <span className="mt-0.5 h-0.5 w-4 rounded-full bg-[#19A79D]/24 shadow-[0_0_5px_rgba(25,167,157,0.22)]" />
        </span>
      </button>
    )
  }

  return (
    <section className="absolute inset-x-3 bottom-3 z-30 animate-[assistant-panel-in_360ms_ease-out_both] overflow-hidden rounded-[30px] border border-white/82 bg-[#F8FFFF]/82 shadow-[0_26px_70px_rgba(18,59,59,0.22),inset_0_1px_0_rgba(255,255,255,0.86)] backdrop-blur-2xl">
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#7DE8FF]/24 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-4 h-40 w-40 rounded-full bg-[#19A79D]/12 blur-3xl" />

      <div className="relative flex h-[478px] flex-col p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[18px] bg-gradient-to-br from-white via-[#EFFFFF] to-[#BDF9FF] text-[#12877F] shadow-lg shadow-[#158C84]/12 ring-1 ring-white/80">
              <span className="absolute inset-1 rounded-[15px] bg-[radial-gradient(circle_at_34%_24%,rgba(255,255,255,0.9),rgba(255,255,255,0)_48%)]" />
              <AIOrbIcon />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[15px] font-extrabold leading-none text-[#123B3B]">
                ผู้ช่วยเป๋าสิทธิ์ AI
              </p>
              <p className="mt-1.5 truncate text-[11.5px] font-bold leading-none text-[#178E8A]/78">
                ถามเรื่องสิทธิ์ได้แบบคุยกัน
              </p>
            </div>
          </div>

          <button
            aria-label="ปิดผู้ช่วย AI"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[16px] bg-white/68 text-[#446264] shadow-sm shadow-[#123B3B]/6 transition hover:bg-white"
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="m7 7 10 10M17 7 7 17"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.2"
              />
            </svg>
          </button>
        </div>

        <div
          className="dashboard-scroll mt-4 flex flex-1 flex-col gap-3 overflow-y-auto overflow-x-hidden pr-1"
          ref={messageListRef}
        >
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              speaker={message.speaker}
              className="animate-[chat-in_320ms_ease-out_both]"
            >
              {message.text.split("\n").map((line) => (
                <span className="block" key={line}>
                  {line}
                </span>
              ))}
            </ChatBubble>
          ))}

          {isTyping && (
            <TypingIndicator className="animate-[chat-in_320ms_ease-out_both]" />
          )}

          {showRecommendations && (
            <div className="mt-1 flex flex-col gap-2.5 pl-2">
              <p className="text-[11px] font-extrabold leading-none text-[#178E8A]/72">
                สิทธิ์ที่ AI แนะนำ
              </p>
              {recommendationCards.map((card, index) => (
                <AIRecommendationCard
                  key={card.id}
                  animationDelay={`${index * 110}ms`}
                  title={card.title}
                  description={card.description}
                  tone={card.tone}
                />
              ))}
            </div>
          )}
        </div>

        <div className="relative mt-4">
          <button
            className="mb-2 rounded-full border border-[#BDEFF0]/70 bg-white/56 px-3.5 py-2 text-[12px] font-bold leading-none text-[#12877F] shadow-sm shadow-[#158C84]/6 backdrop-blur-xl transition hover:bg-white/80 disabled:opacity-45"
            disabled={isTyping}
            onClick={() => askAssistant(sampleQuestion)}
            type="button"
          >
            {sampleQuestion}
          </button>

          <ChatInput
            disabled={isTyping}
            onChange={setInputValue}
            onSubmit={() => askAssistant()}
            value={inputValue}
          />
        </div>
      </div>
    </section>
  )
}

function AIOrbIcon() {
  return (
    <svg
      aria-hidden="true"
      className="relative h-7 w-7"
      fill="none"
      viewBox="0 0 32 32"
    >
      <rect
        x="7"
        y="8"
        width="18"
        height="17"
        rx="7"
        fill="currentColor"
        opacity=".12"
      />
      <rect
        x="7"
        y="8"
        width="18"
        height="17"
        rx="7"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 5.5v2.2M11.2 16.2h.1M20.7 16.2h.1M13.2 20c1.8 1.2 3.8 1.2 5.6 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.3"
      />
      <path
        d="m23.5 5.5.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8.8-1.9Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default AIAssistantPanel
