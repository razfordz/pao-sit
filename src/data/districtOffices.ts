export type DistrictOffice = {
  id: string
  district: string
  name: string
  address: string
  phone: string
  openHours: string
  lat: number
  lng: number
  recommendedTime?: string
  availableServices: string[]
  googleMapsUrl: string
}

export const pathumwanOffice = {
  id: "pathumwan",
  district: "ปทุมวัน",
  name: "สำนักงานเขตปทุมวัน",
  address: 
    "833 ถนนพระราม 1 แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330",
  phone: "02-214-3004",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7424,
  lng: 100.5268,
  recommendedTime:
    "แนะนำช่วงเช้า 08:00–10:00 เพื่อลดเวลารอ",
  availableServices: [
    "บัตรประชาชน",
    "ทะเบียนบ้าน",
    "แจ้งย้ายที่อยู่",
    "สวัสดิการผู้สูงอายุ",
    "จดทะเบียนพาณิชย์",
    "รับเรื่องร้องเรียน",
  ],

  googleMapsUrl:
    "https://maps.google.com/?q=13.7424,100.5268",
} 

export const bangrakOffice = {
    id: "bangrak",
    district: "บางรัก",
    name: "สำนักงานเขตบางรัก",
    address:
        "12 ถนนเจริญกรุง แขวงมหาพฤฒาราม เขตบางรัก กรุงเทพมหานคร 10500",
    phone: "02-236-1395",
    openHours: "จันทร์–ศุกร์ 08:00–16:00",
    lat: 13.7246,
    lng: 100.5201,
    recommendedTime:
        "แนะนำช่วงเช้า 08:00–10:00 เพื่อลดเวลารอ",
    availableServices: [
        "บัตรประชาชน",
        "ทะเบียนบ้าน",
        "แจ้งย้ายที่อยู่",
        "สวัสดิการผู้สูงอายุ",
        "จดทะเบียนพาณิชย์",
        "รับเรื่องร้องเรียน",
    ],
    googleMapsUrl:
        "https://maps.google.com/?q=13.7246,100.5201",
}

export const pomprapsattruphaiOffice = {
    id: "pomprapsattruphai",
    district: "ป้อมปราบศัตรูพ่าย",
    name: "สำนักงานเขตป้อมปราบศัตรูพ่าย",
    address:
        "50 ถนนศุภมิตร แขวงวัดเทพศิรินทร์ เขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 10100",
    phone: "02-281-0281",
    openHours: "จันทร์–ศุกร์ 08:00–16:00",
    lat: 13.7525,
    lng: 100.5119,
    recommendedTime:
        "แนะนำช่วงเช้า 08:00–10:00 เพื่อลดเวลารอ",
    availableServices: [
        "บัตรประชาชน",
        "ทะเบียนบ้าน",
        "แจ้งย้ายที่อยู่",
        "สวัสดิการผู้สูงอายุ",
        "จดทะเบียนพาณิชย์",
        "รับเรื่องร้องเรียน",
    ],
    googleMapsUrl:
        "https://maps.google.com/?q=13.7525,100.5119",
}