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


  {
    id: "child-support-grant",
    title: "โครงการเงินอุดหนุนบุตร",
    category: "สวัสดิการ",
    subCategory: "สวัสดิการครอบครัว",
    amountSummary: "600 บาท/เดือน",
    shortDescription:
      "เงินช่วยเหลือสำหรับครอบครัวรายได้น้อยที่มีเด็กแรกเกิดถึง 6 ปี",
    eligibility: [
      "เด็กแรกเกิดถึงอายุไม่เกิน 6 ปี",
      "เด็กมีสัญชาติไทยและมีเลขประจำตัวประชาชน",
      "ผู้ปกครองมีสัญชาติไทย",
      "ครอบครัวมีรายได้เฉลี่ยไม่เกิน 100,000 บาทต่อคนต่อปี",
      "ผู้ปกครองดูแลเด็กจริงและอาศัยอยู่ร่วมกัน",
    ],
    requiredDocuments: [
      "แบบคำร้องขอลงทะเบียน ดร.01",
      "แบบรับรองสถานะของครัวเรือน ดร.02",
      "บัตรประชาชนของผู้ปกครอง",
      "สูติบัตรเด็กแรกเกิด",
      "สมุดบัญชีเงินฝาก",
      "สมุดบันทึกสุขภาพแม่และเด็ก",
      "ใบรับรองเงินเดือนหรือหนังสือรับรองรายได้",
      "เอกสารแสดงตัวตนของผู้รับรอง 2 คน",
    ],
    agency: "กรมกิจการเด็กและเยาวชน",
    sourceUrl: "https://th.jobsdb.com/th/career-advice/article/child-support-grant",
    tags: ["hasChild", "lowIncome", "newborn", "familySupport"],
    lifeEvents: ["hasChild", "newParent","financialSupport"],
    targetUsers: ["parent", "lowIncomeFamily","socialSecurityMember"],
    priority: "high",
    reason:
      "เหมาะกับผู้ปกครองที่มีบุตรอายุน้อยและต้องการลดภาระค่าเลี้ยงดูเด็ก",
    nextStep: "ตรวจสอบคุณสมบัติและเตรียมเอกสารเพื่อยื่นลงทะเบียนรับเงินอุดหนุนบุตร",
  },
  {
    id: "elderly-living-allowance",
    title: "เบี้ยยังชีพผู้สูงอายุ",
    category: "สวัสดิการ",
    subCategory: "สวัสดิการผู้สูงอายุ",
    amountSummary: "600-1,000 บาท/เดือน",
    shortDescription:
      "เงินช่วยเหลือรายเดือนสำหรับผู้สูงอายุ เพื่อช่วยดูแลค่าใช้จ่ายพื้นฐานในชีวิตประจำวัน",
    eligibility: [
      "มีสัญชาติไทย",
      "อายุ 60 ปีขึ้นไป",
      "มีชื่ออยู่ในทะเบียนบ้านในพื้นที่ที่ยื่นคำขอ",
      "ไม่ได้รับสวัสดิการหรือสิทธิประโยชน์อื่นในลักษณะเดียวกัน",
    ],
    requiredDocuments: [
      "บัตรประชาชน",
      "ทะเบียนบ้าน",
      "สมุดบัญชีธนาคารสำหรับรับเงิน",
    ],
    agency: "องค์กรปกครองส่วนท้องถิ่น / สำนักงานเขต",
    sourceUrl: "https://www.dla.go.th/",
    tags: ["elderly", "seniorCitizen"],
    lifeEvents: ["retirement", "seniorCitizen"],
    targetUsers: ["seniorCitizen", "lowIncomeSenior"],
    priority: "high",
    reason:
      "เหมาะกับผู้สูงอายุที่ต้องการความช่วยเหลือรายเดือนเพื่อดูแลค่าใช้จ่ายพื้นฐาน",
    nextStep: "ตรวจสอบสิทธิ์และติดต่อสำนักงานเขตเพื่อยื่นลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ",
  },
  {
    id: "state-welfare-card",
    title: "บัตรสวัสดิการแห่งรัฐ",
    category: "สวัสดิการ",
    subCategory: "สวัสดิการรายได้น้อย",
    amountSummary: "ช่วยลดค่าครองชีพรายเดือน",
    shortDescription:
      "สิทธิช่วยเหลือค่าครองชีพสำหรับผู้มีรายได้น้อย เช่น ค่าอุปโภคบริโภค ค่าเดินทาง และส่วนลดบริการจำเป็น",
    eligibility: [
      "มีสัญชาติไทย",
      "มีรายได้และทรัพย์สินอยู่ในเกณฑ์ที่โครงการกำหนด",
      "ไม่เป็นผู้ได้รับสิทธิอื่นที่ซ้ำซ้อนตามเงื่อนไขโครงการ",
    ],
    requiredDocuments: [
      "บัตรประชาชน",
      "ข้อมูลรายได้และสถานะครัวเรือน",
      "เอกสารประกอบตามที่หน่วยรับลงทะเบียนกำหนด",
    ],
    agency: "กระทรวงการคลัง",
    sourceUrl: "https://welfare.mof.go.th/",
    tags: [
      "lowIncome",
      "incomeSupport",
      "financialSupport",
    ],
    lifeEvents: ["lowIncome", "financialCrisis"],
    targetUsers: ["lowIncomeCitizen", "vulnerableFamily", "seniorCitizen"],
    priority: "high",
    reason:
      "เหมาะกับผู้มีรายได้น้อยหรือครัวเรือนที่ต้องการลดภาระค่าครองชีพประจำวัน",
    nextStep: "ตรวจสอบรอบลงทะเบียนและเอกสารที่ต้องใช้ผ่านช่องทางของกระทรวงการคลัง",
  },
  {
    id: "elderly-transport-discount",
    title: "สิทธิลดหย่อนค่าโดยสารสำหรับผู้สูงอายุ",
    category: "สวัสดิการ",
    subCategory: "การเดินทางและการใช้ชีวิตประจำวัน",
    amountSummary: "ลดหย่อนค่าโดยสาร",
    shortDescription:
      "สิทธิช่วยลดภาระค่าเดินทางสำหรับผู้สูงอายุ เพื่อให้เข้าถึงบริการสาธารณะและการเดินทางในเมืองได้ง่ายขึ้น",
    eligibility: [
      "มีสัญชาติไทย",
      "อายุ 60 ปีขึ้นไป",
      "แสดงบัตรประชาชนหรือบัตรผู้สูงอายุตามเงื่อนไขของผู้ให้บริการ",
    ],
    requiredDocuments: [
      "บัตรประชาชน",
      "บัตรผู้สูงอายุ ถ้ามี",
    ],
    agency: "หน่วยงานขนส่งสาธารณะ / กรุงเทพมหานคร",
    sourceUrl: "https://www.bangkok.go.th/",
    tags: ["seniorCitizen", "transportSupport"],
    lifeEvents: ["seniorCitizen", "dailyCommute"],
    targetUsers: ["seniorCitizen", "publicTransportUser"],
    priority: "medium",
    reason:
      "เหมาะกับผู้สูงอายุที่ต้องเดินทางในเมืองและต้องการลดภาระค่าเดินทางประจำวัน",
    nextStep: "ตรวจสอบเงื่อนไขส่วนลดของผู้ให้บริการขนส่ง และเตรียมบัตรประชาชนหรือบัตรผู้สูงอายุไว้แสดงสิทธิ์",
  },
  {
    id: "social-security-unemployment",
    title: "สิทธิประกันสังคม กรณีว่างงาน",
    category: "โอกาส",
    subCategory: "แรงงานและการว่างงาน",
    amountSummary: "เงินทดแทนระหว่างว่างงาน",
    shortDescription:
      "ช่วยเหลือผู้ประกันตนที่ว่างงาน ให้มีเงินทดแทนระหว่างหางานใหม่ตามเงื่อนไขประกันสังคม",
    eligibility: [
      "เป็นผู้ประกันตนตามระบบประกันสังคม",
      "ว่างงานตามเงื่อนไขที่สำนักงานประกันสังคมกำหนด",
      "ขึ้นทะเบียนผู้ว่างงานและรายงานตัวตามกำหนด",
    ],
    requiredDocuments: [
      "บัตรประชาชน",
      "ข้อมูลผู้ประกันตน",
      "ข้อมูลบัญชีธนาคาร",
      "หลักฐานการว่างงานหรือการลาออกตามกรณี",
    ],
    agency: "สำนักงานประกันสังคม",
    sourceUrl: "https://www.sso.go.th/",
    tags: ["unemployed", "jobSeeker", "worker", "socialSecurity"],
    lifeEvents: ["jobLoss", "lookingForJob"],
    targetUsers: ["insuredWorker", "jobSeeker", "unemployedCitizen"],
    priority: "high",
    reason:
      "เหมาะกับผู้ประกันตนที่กำลังว่างงานและต้องการเงินช่วยเหลือระหว่างหางานใหม่",
    nextStep: "ขึ้นทะเบียนผู้ว่างงานและตรวจสอบสิทธิ์ผ่านสำนักงานประกันสังคม",
  },
]
