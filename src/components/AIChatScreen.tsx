import { useEffect, useState } from "react"
import AIAssistantMascot from "./AIAssistantMascot"
import AIProcessingScreen from "./AIProcessingScreen"
import ChatBubble from "./ChatBubble"
import ChatInput from "./ChatInput"
import TypingIndicator from "./TypingIndicator"
import { userProfile } from "../data/userProfile"
import { getDistrictOfficeByDistrict } from "../lib/getDistrictOffice"

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
const districtConfirmationDelay = 900
const followUpStartDelay = 1300

const introConversation: ChatMessage[] = [
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
    id: "district-question",
    speaker: "ai",
    text: "ที่พักของคุณอยู่เขตไหนในกรุงเทพครับ?",
  },
]

const followUpConversation: ChatMessage[] = [
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

type ChatPhase = "intro" | "district" | "district-confirmation" | "follow-up"

function AIChatScreen() {
  const [chatPhase, setChatPhase] = useState<ChatPhase>("intro")
  const [messageIndex, setMessageIndex] = useState(0)
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [districtInput, setDistrictInput] = useState("")
  const [showProcessing, setShowProcessing] = useState(false)
  const currentConversation =
    chatPhase === "follow-up" ? followUpConversation : introConversation

  useEffect(() => {
    if (chatPhase !== "intro" && chatPhase !== "follow-up") {
      return
    }

    if (messageIndex >= currentConversation.length) {
      return
    }

    const nextMessage = currentConversation[messageIndex]
    const timer = window.setTimeout(
      () => {
        if (nextMessage.speaker === "ai" && !isTyping) {
          setIsTyping(true)
          return
        }

        setVisibleMessages((messages) => [...messages, nextMessage])
        if (
          chatPhase === "intro" &&
          messageIndex === currentConversation.length - 1
        ) {
          setChatPhase("district")
        } else {
          setMessageIndex((index) => index + 1)
        }
        setIsTyping(false)
      },
      getMessageDelay(nextMessage, messageIndex, isTyping),
    )

    return () => window.clearTimeout(timer)
  }, [chatPhase, currentConversation, isTyping, messageIndex])

  useEffect(() => {
    const hasCompletedConversation =
      chatPhase === "follow-up" &&
      messageIndex >= followUpConversation.length &&
      !isTyping

    if (!hasCompletedConversation || showProcessing) {
      return undefined
    }

    const processingTimer = window.setTimeout(() => {
      setShowProcessing(true)
    }, processingTransitionDelay)

    return () => window.clearTimeout(processingTimer)
  }, [chatPhase, isTyping, messageIndex, showProcessing])

  const submitDistrict = () => {
    const submittedDistrict = districtInput.trim()

    if (!submittedDistrict || chatPhase !== "district") {
      return
    }

    const matchedOffice = getDistrictOfficeByDistrict(
      normalizeDistrictInput(submittedDistrict),
    )

    setDistrictInput("")
    setVisibleMessages((messages) => [
      ...messages,
      {
        id: `district-answer-${Date.now()}`,
        speaker: "user",
        text: submittedDistrict,
      },
    ])
    setIsTyping(true)

    window.setTimeout(() => {
      if (!matchedOffice) {
        setVisibleMessages((messages) => [
          ...messages,
          {
            id: `district-error-${Date.now()}`,
            speaker: "ai",
            text: "ยังไม่พบเขตนี้ในระบบ ลองพิมพ์ชื่อเขตอีกครั้งได้ไหมครับ",
          },
        ])
        setIsTyping(false)
        return
      }

      userProfile.district = matchedOffice.district
      userProfile.location = `เขต${matchedOffice.district} กรุงเทพมหานคร`
      setChatPhase("district-confirmation")
      setVisibleMessages((messages) => [
        ...messages,
        {
          id: `district-confirmation-${Date.now()}`,
          speaker: "ai",
          text: `ขอบคุณครับ ผมจะใช้เขต${matchedOffice.district}เพื่อแนะนำสำนักงานเขตและช่องทางสมัครที่ใกล้คุณที่สุด`,
        },
      ])
      setIsTyping(false)

      window.setTimeout(() => {
        setMessageIndex(0)
        setChatPhase("follow-up")
      }, followUpStartDelay)
    }, districtConfirmationDelay)
  }

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

      {chatPhase === "district" && (
        <div className="relative z-10 mt-3">
          <ChatInput
            disabled={isTyping}
            onChange={setDistrictInput}
            onSubmit={submitDistrict}
            value={districtInput}
          />
        </div>
      )}
    </div>
  )
}

function normalizeDistrictInput(district: string) {
  return district
    .replace(/^เขต/, "")
    .replace(/กรุงเทพมหานคร/g, "")
    .replace(/กรุงเทพฯ/g, "")
    .replace(/กรุงเทพ/g, "")
    .trim()
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
