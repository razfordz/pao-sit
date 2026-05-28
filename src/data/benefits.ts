export type Benefit = {
  id: string
  title: string
  category: "สวัสดิการ" | "สุขภาพ" | "โอกาส"
  thumbnail?: string
  subCategory: string
  amountSummary: string
  shortDescription: string
  eligibility: string[]
  requiredDocuments: string[]
  agency: string
  sourceUrl: string
  tags: string[]
  lifeEvents: string[]
  targetUsers: string[]
  priority: "high" | "medium" | "low"
  reason: string
  nextStep: string
}

export const benefits: Benefit[] = [
  {
    id: "child-poor-family-support",
    title: "เงินสงเคราะห์เด็กในครอบครัวยากจน",
    category: "สวัสดิการ",
    thumbnail: "/images/benefits/child-poor-family-support.png",
    subCategory: "สวัสดิการครอบครัว",
    amountSummary: "สูงสุด 3,000 บาท/ครั้ง",
    shortDescription:
      "ช่วยเหลือครอบครัวยากจนที่มีเด็ก ผ่านเงิน สิ่งของ หรือคำปรึกษา",
    eligibility: [
      "มีเด็กอายุไม่เกิน 18 ปี หรือกำลังศึกษาอายุไม่เกิน 20 ปี",
      "ครอบครัวยากจนหรือประสบปัญหาความเดือดร้อน",
      "เด็กหรือครอบครัวได้รับผลกระทบต่อสวัสดิภาพ",
    ],
    requiredDocuments: [
      "แบบบันทึกข้อมูลผู้ประสบปัญหาทางสังคม",
      "สำเนาบัตรประชาชนของผู้ปกครอง",
      "สำเนาทะเบียนบ้านของผู้ปกครอง",
      "สำเนาบัตรประชาชนของเด็ก",
      "สำเนาทะเบียนบ้านของเด็ก",
      "สำเนาบัญชีธนาคารของผู้ปกครอง",
      "สำเนาบัตรสวัสดิการแห่งรัฐ ถ้ามี",
    ],
    agency: "กรมกิจการเด็กและเยาวชน",
    sourceUrl: "https://welfare.dcy.go.th/",
    tags: [
      "hasChild",
      "lowIncome",
      "familySupport",
      "vulnerableFamily",
      "financialCrisis",
    ],
    lifeEvents: ["hasChild", "financialCrisis", "familyDifficulty"],
    targetUsers: ["parent", "lowIncomeFamily", "vulnerableFamily"],
    priority: "high",
    reason:
      "เหมาะกับครอบครัวที่มีเด็กและกำลังประสบปัญหาทางการเงินหรือความเดือดร้อนเฉพาะหน้า",
    nextStep: "ตรวจสอบคุณสมบัติและเตรียมเอกสารเพื่อยื่นขอความช่วยเหลือ",
  },
  // {
  //   id: "child-support-grant",
  //   title: "โครงการเงินอุดหนุนบุตร",
  //   category: "สวัสดิการ",
  //   subCategory: "สวัสดิการครอบครัว",
  //   amountSummary: "600 บาท/เดือน",
  //   shortDescription:
  //     "เงินช่วยเหลือสำหรับครอบครัวรายได้น้อยที่มีเด็กแรกเกิดถึง 6 ปี",
  //   eligibility: [
  //     "เด็กแรกเกิดถึงอายุไม่เกิน 6 ปี",
  //     "เด็กมีสัญชาติไทยและมีเลขประจำตัวประชาชน",
  //     "ครอบครัวมีรายได้น้อยตามเกณฑ์รัฐ",
  //     "ผู้ปกครองเป็นผู้ดูแลเด็กจริงและอาศัยอยู่กับเด็ก",
  //   ],
  //   requiredDocuments: [
  //     "แบบคำร้องขอลงทะเบียน ดร.01",
  //     "แบบรับรองสถานะของครัวเรือน ดร.02",
  //     "บัตรประชาชนของผู้ปกครอง",
  //     "สูติบัตรเด็กแรกเกิด",
  //     "สมุดบัญชีเงินฝาก",
  //     "สมุดบันทึกสุขภาพแม่และเด็ก",
  //     "ใบรับรองเงินเดือนหรือหนังสือรับรองรายได้",
  //     "เอกสารแสดงตัวตนของผู้รับรอง 2 คน",
  //   ],
  //   agency: "กรมกิจการเด็กและเยาวชน",
  //   sourceUrl: "https://welfare.dcy.go.th/",
  //   tags: ["hasChild", "lowIncome", "familySupport", "newParent"],
  //   lifeEvents: ["hasChild", "newParent"],
  //   targetUsers: ["parent", "lowIncomeFamily"],
  //   priority: "high",
  //   reason:
  //     "เหมาะกับผู้ปกครองที่มีบุตรอายุน้อยและต้องการลดภาระค่าเลี้ยงดูเด็ก",
  //   nextStep: "ตรวจสอบอายุเด็ก รายได้ครัวเรือน และเตรียมเอกสารลงทะเบียน",
  // },
]
