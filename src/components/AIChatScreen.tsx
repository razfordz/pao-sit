import { useEffect, useState } from "react"
import AIAssistantMascot from "./AIAssistantMascot"
import AIProcessingScreen from "./AIProcessingScreen"
import ChatBubble from "./ChatBubble"
import TypingIndicator from "./TypingIndicator"

type ChatMessage = {
  id: string
  speaker: "ai" | "user"
  text: string
}

const aiTypingDelay = 1500
const aiResponseDelay = 1500
const firstAiResponseDelay = 700
const processingTransitionDelay = 1500
const userMessageDelay = 1300

const conversation: ChatMessage[] = [
  {
    id: "greeting",
    speaker: "ai",
    text: "สวัสดีครับ คุณอาร์ม 😊",
  },
  {
    id: "intro",
    speaker: "ai",
    text: "เพื่อช่วยค้นหาสิทธิ์และโอกาสที่เหมาะกับคุณ ขอถามข้อมูลเพิ่มเติมนิดหน่อยครับ",
  },
  {
    id: "work-question",
    speaker: "ai",
    text: "ตอนนี้คุณทำงานอะไรอยู่ครับ?",
  },
  {
    id: "work-answer",
    speaker: "user",
    text: "กำลังหางานอยู่ครับ",
  },
  {
    id: "family-question",
    speaker: "ai",
    text: "มีบุตรหรือคนในครอบครัวที่ต้องดูแลไหมครับ?",
  },
  {
    id: "family-answer",
    speaker: "user",
    text: "มีลูก 1 คนครับ",
  },
  {
    id: "finding-rights",
    speaker: "ai",
    text: "ขอบคุณครับ 😊\nAI กำลังค้นหาสิทธิ์และโอกาสที่เหมาะกับคุณ",
  },
]

function AIChatScreen() {
  const [messageIndex, setMessageIndex] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [showProcessing, setShowProcessing] = useState(false)

  useEffect(() => {
    if (messageIndex >= conversation.length) {
      return
    }

    const nextMessage = conversation[messageIndex]
    const timer = window.setTimeout(
      () => {
        if (nextMessage.speaker === "ai" && !isTyping) {
          setIsTyping(true)
          return
        }

        setVisibleMessages((messages) => [...messages, nextMessage])
        setMessageIndex((index) => index + 1)
        setIsTyping(false)
      },
      getMessageDelay(nextMessage, messageIndex, isTyping),
    )

    return () => window.clearTimeout(timer)
  }, [isTyping, messageIndex])

  useEffect(() => {
    const hasCompletedConversation =
      messageIndex >= conversation.length &&
      visibleMessages.length === conversation.length &&
      !isTyping

    if (!hasCompletedConversation || showProcessing) {
      return undefined
    }

    const processingTimer = window.setTimeout(() => {
      setShowProcessing(true)
    }, processingTransitionDelay)

    return () => window.clearTimeout(processingTimer)
  }, [isTyping, messageIndex, showProcessing, visibleMessages.length])

  if (showProcessing) {
    return <AIProcessingScreen />
  }

  return (
    <div className="relative flex h-[548px] flex-col overflow-hidden rounded-[32px] bg-gradient-to-br from-[#F7FFFF] via-[#EAFBFA] to-[#D8F2FF] p-4 shadow-xl shadow-[#158C84]/15 sm:h-[566px] sm:rounded-[34px] sm:p-5">
      <div className="pointer-events-none absolute -right-14 -top-16 h-44 w-44 rounded-full bg-[#7ADCF5]/22 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-3 h-40 w-40 rounded-full bg-[#19A79D]/12 blur-3xl" />

      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0 pt-2">
          <span className="inline-flex rounded-full border border-white/70 bg-white/55 px-3.5 py-2 text-[11.5px] font-bold leading-none text-[#12877F] shadow-sm shadow-[#158C84]/8 backdrop-blur">
            เป๋าสิทธิ์ AI กำลังคุยกับคุณ
          </span>
          <h2 className="headline-font mt-4 text-[25px] font-extrabold leading-[1.18] text-[#123B3B]">
            มาค้นหาสิทธิ์ที่เหมาะกับชีวิตคุณ
          </h2>
        </div>

        <div className="-mr-2 -mt-1 shrink-0">
          <AIAssistantMascot />
        </div>
      </div>

      <div className="relative mt-4 flex flex-1 flex-col justify-end gap-2.5 overflow-hidden">
        {visibleMessages.map((message) => (
          <ChatBubble
            key={message.id}
            speaker={message.speaker}
            className="animate-[chat-in_360ms_ease-out_both]"
          >
            {message.text.split("\n").map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </ChatBubble>
        ))}

        {isTyping && (
          <TypingIndicator className="animate-[chat-in_360ms_ease-out_both]" />
        )}
      </div>
    </div>
  )
}

function getMessageDelay(
  message: ChatMessage,
  index: number,
  isTyping: boolean,
) {
  if (message.speaker === "user") {
    return userMessageDelay
  }

  if (isTyping) {
    return aiTypingDelay
  }

  return index === 0 ? firstAiResponseDelay : aiResponseDelay
}

export default AIChatScreen
