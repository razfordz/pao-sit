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

export const bangsueOffice: DistrictOffice = {
  id: "bangsue",
  district: "บางซื่อ",
  name: "สำนักงานเขตบางซื่อ",
  address: 
    "99 ซอย กานต์ประภา แขวงบางซื่อ บางซื่อ กรุงเทพมหานคร 10800",
  phone: "02-586-9977",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.8095412,
  lng: 100.5372298,
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
    "https://maps.app.goo.gl/HKDn1KkiQCeF3p7G7",
} 

export const chatuchakOffice: DistrictOffice = {
  id: "chatuchak",
  district: "จตุจักร",
  name: "สำนักงานเขตจตุจักร",
  address: 
    "5 ซอย วิภาวดีรังสิต 34 แขวงจตุจักร เขตจตุจักร กรุงเทพมหานคร 10900",
  phone: "02-513-3444",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.8286689,
  lng: 100.5599649,
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
    "https://maps.app.goo.gl/2nNNkt3CP6YtdppW9",
} 

export const latphraoOffice: DistrictOffice = {
  id: "latphrao",
  district: "ลาดพร้าว",
  name: "สำนักงานเขตลาดพร้าว",
  address: 
    "208 ซอย นาคนิวาส 8 แขวงลาดพร้าว ลาดพร้าว กรุงเทพมหานคร 10230",
  phone: "02-539-7780",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.8035054,
  lng: 100.6073947,
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
    "https://maps.app.goo.gl/jR2Jf1ZpSYq9z2sL8",
} 

export const donMueangOffice: DistrictOffice = {
  id: "donmueang",
  district: "ดอนเมือง",
  name: "สำนักงานเขตดอนเมือง",
  address: 
    "999 ถนน เชิดวุฒากาศ แขวงดอนเมือง ดอนเมือง กรุงเทพมหานคร 10210",
  phone: "02-539-7780",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.9099604,
  lng: 100.5946798,
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
    "https://maps.app.goo.gl/gTc7p9un4hRyqUdB8",
} 

export const lakSiOffice: DistrictOffice = {
  id: "laksi",
  district: "หลักสี่",
  name: "สำนักงานเขตหลักสี่",
  address: 
    "999 ซอย แจ้งวัฒนะ 10 แขวงทุ่งสองห้อง เขตหลักสี่ กรุงเทพมหานคร 10210",
  phone: "02-982-2081",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.8874875,
  lng: 100.5789384,
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
    "https://maps.app.goo.gl/qgeZbxLY6uzFFeXo6",
}

export const saimaiOffice: DistrictOffice = {
  id: "saimai",
  district: "สายไหม",
  name: "สำนักงานเขตสายไหม",
  address: 
    "222 ถนน สุขาภิบาล ๕ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220",
  phone: "02-158-7350",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.8951535,
  lng: 100.660503,
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
    "https://maps.app.goo.gl/CffYC1iJAc5CqETQ8",
}

export const bangkhenOffice: DistrictOffice = {
  id: "bangkhen",
  district: "บางเขน",
  name: "สำนักงานเขตบางเขน",
  address: 
    "14 ถนน พหลโยธิน แขวงอนุสาวรีย์ เขตบางเขน กรุงเทพมหานคร 10220",
  phone: "02-521-0666",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.8733871,
  lng: 100.5960769,
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
    "https://maps.app.goo.gl/4nyBDere8BsY7kPJ8",
}

export const phranakhonOffice: DistrictOffice = {
  id: "phranakhon",
  district: "พระนคร",
  name: "สำนักงานเขตพระนคร",
  address: 
    " 78 ถนน สามเสน แขวงวัดสามพระยา เขตพระนคร กรุงเทพมหานคร 10200",
  phone: "02-628-9063",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7648878,
  lng: 100.4987564,
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
    "https://maps.app.goo.gl/4nyBDere8BsY7kPJ8",
}

export const dusithonOffice: DistrictOffice = {
  id: "dusit",
  district: "ดุสิต",
  name: "สำนักงานเขตดุสิต",
  address: 
    "ถนน สุโขทัย แขวงดุสิต เขตดุสิต กรุงเทพมหานคร 10300",
  phone: "02-243-5311",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7771476,
  lng: 100.5205822,
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
    "https://maps.app.goo.gl/fvwwuSmRRBno8nxDA",
}

export const pomprapsattruphaiOffice: DistrictOffice = {
  id: "pomprapsattruphai",
  district: "ป้อมปราบศัตรูพ่าย",
  name: "สำนักงานเขตป้อมปราบศัตรูพ่าย",
  address: 
    "50 ถนน ศุภมิตร แขวงวัดโสมนัส เขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 10100",
  phone: "02-282-4902",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7581428,
  lng: 100.5130792,
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
    "https://maps.app.goo.gl/8m8fWTHAtijniEeR9",
}

export const samphanthawongOffice: DistrictOffice = {
  id: "samphanthawong",
  district: "สัมพันธวงศ์",
  name: "สำนักงานเขตสัมพันธวงศ์",
  address: 
    "37 ถนน โยธา แขวงตลาดน้อย เขตสัมพันธวงศ์ กรุงเทพมหานคร 10100",
  phone: "02-233-1224",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7315476,
  lng: 100.5139127,
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
    "https://maps.app.goo.gl/EMAKDoBo4XT5qkgd9",
}

export const phayathaiOffice: DistrictOffice = {
  id: "phayathai",
  district: "พญาไท",
  name: "สำนักงานเขตพญาไท",
  address: 
    "13 ซอย อารีย์ 2 แขวงพญาไท เขตพญาไท กรุงเทพมหานคร 10400",
  phone: "02-279-4141",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7798317,
  lng: 100.5425982,
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
    "https://maps.app.goo.gl/EyRntExdB5evSP1X8",
}

export const ratchathewiOffice: DistrictOffice = {
  id: "ratchathewi",
  district: "ราชเทวี",
  name: "สำนักงานเขตราชเทวี",
  address: 
    "10 ถนน พญาไท แขวงทุ่งพญาไท เขตราชเทวี กรุงเทพมหานคร 10400",
  phone: "02-354-4200",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7591307,
  lng: 100.5342104,
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
    "https://maps.app.goo.gl/oSxQyjVk2Yt397vz9",
}

export const huaikhwangOffice: DistrictOffice = {
  id: "huaikhwang",
  district: "ห้วยขวาง",
  name: "สำนักงานเขตห้วยขวาง",
  address: 
    "2 ถนน ประชาอุทิศ แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพมหานคร 10310",
  phone: "02-277-9100",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7766222,
  lng: 100.5793542,
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
    "https://maps.app.goo.gl/j7e8CE63cosbB2Pf6",
}

export const dindaengOffice: DistrictOffice = {
  id: "dindaeng",
  district: "ดินแดง",
  name: "สำนักงานเขตดินแดง",
  address: 
    "1 ถนน ประชาสงเคราะห์ แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400",
  phone: "02-245-2658",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7625035,
  lng: 100.555271,
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
    "https://maps.app.goo.gl/hrFxyftax1dai2QW7",
}

export const wangthonglangOffice: DistrictOffice = {
  id: "wangthonglang",
  district: "วังทองหลาง",
  name: "สำนักงานเขตวังทองหลาง",
  address: 
    "999 ซอย รามคำแหง 39 แขวงพลับพลา เขตวังทองหลาง กรุงเทพมหานคร 10310",
  phone: "02-538-5350",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7641955,
  lng: 100.6058171,
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
    "https://maps.app.goo.gl/AXp3UMPezr3tJY7t9",
}

export const khlongsamwaOffice: DistrictOffice = {
  id: "khlongsamwa",
  district: "คลองสามวา",
  name: "สำนักงานเขตคลองสามวา",
  address: 
    "111 ถนน เลียบคลองสอง แขวงบางชัน เขตคลองสามวา กรุงเทพมหานคร 10510",
  phone: "02-548-0326",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.8599755,
  lng: 100.7041948,
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
    "https://maps.app.goo.gl/ZLXnFpsFtpNWWxv87",
}

export const minburiOffice: DistrictOffice = {
  id: "minburi",
  district: "มีนบุรี",
  name: "สำนักงานเขตมีนบุรี",
  address: 
    "333 ถนน สีหบุรานุกิจ แขวงมีนบุรี เขตมีนบุรี กรุงเทพมหานคร 10510",
  phone: "02-540-7160",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.8135273,
  lng: 100.7313091,
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
    "https://maps.app.goo.gl/ojSC7gBsmjNXtYge8",
}

export const latkrabangOffice: DistrictOffice = {
  id: "latkrabang",
  district: "ลาดกระบัง",
  name: "สำนักงานเขตลาดกระบัง",
  address: 
    "1471 1 ถนน ลาดกระบัง แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520",
  phone: "02-326-9149",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.722357,
  lng: 100.7597523,
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
    "https://maps.app.goo.gl/DorMEaHxNxNYtAbe7",
}

export const nongchokOffice: DistrictOffice = {
  id: "nongchok",
  district: "หนองจอก",
  name: "สำนักงานเขตหนองจอก",
  address: 
    "16 ถนน เชื่อมสัมพันธ์ แขวงกระทุ่มราย เขตหนองจอก กรุงเทพมหานคร 10530",
  phone: "02-543-1143",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.8560652,
  lng: 100.8628601,
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
    "https://maps.app.goo.gl/bZ7KGrF4Me4gRv2bA",
}

export const bungkumOffice: DistrictOffice = {
  id: "bungkum",
  district: "บึงกุ่ม",
  name: "สำนักงานเขตบึงกุ่ม",
  address: 
    "999 ถนน เสรีไทย แขวงคลองกุ่ม เขตบึงกุ่ม กรุงเทพมหานคร 10240",
  phone: "02-364-7000",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7852767,
  lng: 100.6696489,
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
    "https://maps.app.goo.gl/SmrDyU4pjG3jALCg9",
}

export const khannayaoOffice: DistrictOffice = {
  id: "khannayao",
  district: "คันนายาว",
  name: "สำนักงานเขตคันนายาว",
  address: 
    "9 01 กาญจนาภิเษก 11/5 แขวงคันนายาว เขตคันนายาว กรุงเทพมหานคร 10230",
  phone: "02-379-9961",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7993035,
  lng: 100.6826801,
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
    "https://maps.app.goo.gl/XLaCFtom6QJ3Epvk6",
}

export const saphansungOffice: DistrictOffice = {
  id: "saphansung",
  district: "สะพานสูง",
  name: "สำนักงานเขตสะพานสูง",
  address: 
    "ซอย รามคำแหง 118 แขวงสะพานสูง สะพานสูง กรุงเทพมหานคร 10240",
  phone: "02-372-2919",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7689109,
  lng: 100.6857041,
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
    "https://maps.app.goo.gl/Z7QRrCMCSwmnEHQu6",
}

export const prawetOffice: DistrictOffice = {
  id: "prawet",
  district: "ประเวศ",
  name: "สำนักงานเขตประเวศ",
  address: 
    "33 เฉลิมพระเกียรติ ร. 9 ซอย 81 แขวงประเวศ เขตประเวศ กรุงเทพมหานคร 10250",
  phone: "02-328-7149",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7172432,
  lng: 100.6946855,
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
    "https://maps.app.goo.gl/bmb1CNbr4rSabpZh9",
}

export const bangkapiOffice: DistrictOffice = {
  id: "bangkapi",
  district: "บางกะปิ",
  name: "สำนักงานเขตบางกะปิ",
  address: 
    "189 ถนน ลาดพร้าว แขวงคลองจั่น บางกะปิ กรุงเทพมหานคร 10240",
  phone: "02-377-5494",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7656562,
  lng: 100.6476572,
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
    "https://maps.app.goo.gl/61Uctm8xzSkcojyy5",
}

export const pathumwanOffice: DistrictOffice = {
  id: "pathumwan",
  district: "ปทุมวัน",
  name: "สำนักงานเขตปทุมวัน",
  address: 
    "12/1-4 ซอย รองเมือง 5 รองเมือง เขตปทุมวัน กรุงเทพมหานคร 10330",
  phone: "02-214-3004",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7447578,
  lng: 100.5221591,
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
    "https://maps.app.goo.gl/Ga8qeTs7uJEEAbs29",
}

export const bangrakOffice: DistrictOffice = {
  id: "bangrak",
  district: "บางรัก",
  name: "สำนักงานเขตบางรัก",
  address: 
    "5 ถนน นเรศ แขวงสี่พระยา เขตบางรัก กรุงเทพมหานคร 10500",
  phone: "02-236-1395",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7306738,
  lng: 100.5234838,
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
    "https://maps.app.goo.gl/DXoJnkjfKTULr6YT8",
}

export const yannawaOffice: DistrictOffice = {
  id: "yannawa",
  district: "ยานนาวา",
  name: "สำนักงานเขตยานนาวา",
  address: 
    "209/1 ซอย นราธิวาสราชนครินทร์ 28 แขวงช่องนนทรี เขตยานนาวา กรุงเทพมหานคร 10120",
  phone: "02-294-4422",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.6962282,
  lng: 100.5423893,
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
    "https://maps.app.goo.gl/kvCU5NeWPohx54UJ9",
}

export const bangkholaemOffice: DistrictOffice = {
  id: "bangkholaem",
  district: "บางคอแหลม",
  name: "สำนักงานเขตบางคอแหลม",
  address: 
    "193 พระราม 3 ซอย 7 แขวงบางคอแหลม เขตบางคอแหลม กรุงเทพมหานคร 10120",
  phone: "02-291-3800",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.6929471,
  lng: 100.5025396,
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
    "https://maps.app.goo.gl/vq2hXahSuzJaDt7i8",
}

export const khlongtoeiOffice: DistrictOffice = {
  id: "khlongtoei",
  district: "คลองเตย",
  name: "สำนักงานเขตคลองเตย",
  address: 
    "599 สามแยกกล้วยน้ำไท แขวงคลองเตย เขตคลองเตย กรุงเทพมหานคร 10110",
  phone: "02-240-2121",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7084967,
  lng: 100.5860902,
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
    "https://maps.app.goo.gl/yAJAw7U3srFFHTif8",
}

export const wattanaOffice: DistrictOffice = {
  id: "wattana",
  district: "วัฒนา",
  name: "สำนักงานเขตวัฒนา",
  address: 
    "แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110",
  phone: "02-391-1436",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7424465,
  lng: 100.586054,
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
    "https://maps.app.goo.gl/B9CybvTHyEFKaX2L7",
}

export const sathonOffice: DistrictOffice = {
  id: "sathon",
  district: "สาทร",
  name: "สำนักงานเขตสาทร",
  address: 
    "59 ซอย จันทน์ 18/7 แขวงทุ่งวัดดอน เขตสาทร กรุงเทพมหานคร 10120",
  phone: "02-212-8112",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7079734,
  lng: 100.5263191,
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
    "https://maps.app.goo.gl/aHBtnqQm6FQZi6LU8",
}

export const phrakhanongOffice: DistrictOffice = {
  id: "phrakhanong",
  district: "พระโขนง",
  name: "สำนักงานเขตพระโขนง",
  address: 
    "1792 ถนน สุขุมวิท แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพมหานคร 10260",
  phone: "02-311-2510",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7024601,
  lng: 100.602014,
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
    "https://maps.app.goo.gl/XRaEsok2BnKkgWHE9",
}

export const suanluangOffice: DistrictOffice = {
  id: "suanluang",
  district: "สวนหลวง",
  name: "สำนักงานเขตสวนหลวง",
  address: 
    "1792 ถนน สุขุมวิท แขวงพระโขนงใต้ เขตพระโขนง กรุงเทพมหานคร 10260",
  phone: "02-322-7293",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7024601,
  lng: 100.602014,
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
    "https://maps.app.goo.gl/XRaEsok2BnKkgWHE9",
}

export const bangnaOffice: DistrictOffice = {
  id: "bangna",
  district: "บางนา",
  name: "สำนักงานเขตบางนา",
  address: 
    "888 ถนน สรรพาวุธ แขวงบางนาเหนือ เขตบางนา กรุงเทพมหานคร 10260",
  phone: "02-173-5253",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.6811801,
  lng: 100.592124,
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
    "https://maps.app.goo.gl/MjQcmXUhLZGwVyX38",
}

export const talingchanOffice: DistrictOffice = {
  id: "talingchan",
  district: "ตลิ่งชัน",
  name: "สำนักงานเขตตลิ่งชัน",
  address: 
    "สำนักงานเขตตลิ่งชัน 333 ถนน ชักพระ แขวงคลองชักพระ เขตตลิ่งชัน กรุงเทพมหานคร 10170",
  phone: "02-424-1415",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7767307,
  lng: 100.4565104,
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
    "https://maps.app.goo.gl/SpEHoDUBnaEbxZsx7",
}

export const bangphlatOffice: DistrictOffice = {
  id: "bangphlat",
  district: "บางพลัด",
  name: "สำนักงานเขตบางพลัด",
  address: 
    "39 ถนน จรัญสนิทวงศ์ แขวงบางอ้อ บางพลัด กรุงเทพมหานคร 10700",
  phone: "02-424-3777",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7939037,
  lng: 100.505066,
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
    "https://maps.app.goo.gl/Hemnbbhg9xtXTgxq7",
}

export const bangkoknoiOffice: DistrictOffice = {
  id: "bangkoknoi",
  district: "บางกอกน้อย",
  name: "สำนักงานเขตบางกอกน้อย",
  address: 
    "9 99 ถนน บางขุนนนท์ แขวงบางขุนนนท์ เขตบางกอกน้อย กรุงเทพมหานคร 10700",
  phone: "02-424-0056",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.770777,
  lng: 100.4680679,
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
    "https://maps.app.goo.gl/fjzNfEn4iyfycBmx9",
}

export const bangkokyaiOffice: DistrictOffice = {
  id: "bangkokyai",
  district: "บางกอกใหญ่",
  name: "สำนักงานเขตบางกอกใหญ่",
  address: 
    "1 ถนน รัชดาภิเษก แขวงวัดท่าพระ เขตบางกอกใหญ่ กรุงเทพมหานคร 10600",
  phone: "02-457-0069",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7232866,
  lng: 100.4762878,
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
    "https://maps.app.goo.gl/3Ko5sG18C9eY1Nxx9",
}

export const khlongsanOffice: DistrictOffice = {
  id: "khlongsan",
  district: "คลองสาน",
  name: "สำนักงานเขตคลองสาน",
  address: 
    "861 ถนน ลาดหญ้า แขวงคลองสาน คลองสาน กรุงเทพมหานคร 10600",
  phone: "02-457-0069",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7305435,
  lng: 100.5092519,
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
    "https://maps.app.goo.gl/DJ5Mewma8mEuDxXv8",
}

export const thonburiOffice: DistrictOffice = {
  id: "thonburi",
  district: "ธนบุรี",
  name: "สำนักงานเขตธนบุรี",
  address: 
    "160 ถนน เทอดไท แขวงบางยี่เรือ เขตธนบุรี กรุงเทพมหานคร 10600",
  phone: "02-465-0025",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7249292,
  lng: 100.4858181,
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
    "https://maps.app.goo.gl/hEymRjr7dzzovTPz6",
}

export const chomthongOffice: DistrictOffice = {
  id: "chomthong",
  district: "จอมทอง",
  name: "สำนักงานเขตจอมทอง",
  address: 
    "38 38 พระรามที่ 2 ซ. 3 แขวงบางมด เขตจอมทอง กรุงเทพมหานคร 10150",
  phone: "02-427-1171",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.6774507,
  lng: 100.4842307,
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
    "https://maps.app.goo.gl/wAE8Ug7RzhC27R5e9",
}

export const ratburanaOffice: DistrictOffice = {
  id: "ratburana",
  district: "ราษฎร์บูรณะ",
  name: "สำนักงานเขตราษฎร์บูรณะ",
  address: 
    "ถนน ราษฎร์บูรณะ แขวงราษฎร์บูรณะ เขตราษฎร์บูรณะ กรุงเทพมหานคร 10140",
  phone: "02-428-4884",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.6819403,
  lng: 100.5058019,
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
    "https://maps.app.goo.gl/QqYK9e5nbp6Q4nKv9",
}

export const phasicharoenOffice: DistrictOffice = {
  id: "phasicharoen",
  district: "ภาษีเจริญ",
  name: "สำนักงานเขตภาษีเจริญ",
  address: 
    "46 ซอย เพชรเกษม 54 แขวงบางหว้า เขตภาษีเจริญ กรุงเทพมหานคร 10160",
  phone: "02-413-0568",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7147943,
  lng: 100.4369325,
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
    "https://maps.app.goo.gl/93fenuDsh5WnGhDc6",
}

export const nongkhaemOffice: DistrictOffice = {
  id: "nongkhaem",
  district: "หนองแขม",
  name: "สำนักงานเขตหนองแขม",
  address: 
    "555 ถนน เพชรเกษม แขวงหนองค้างพลู เขตหนองแขม กรุงเทพมหานคร 10160",
  phone: "02-421-0939",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7053687,
  lng: 100.3491997,
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
    "https://maps.app.goo.gl/7vai1Fg1cdXVueWo7",
}

export const bangkhaeOffice: DistrictOffice = {
  id: "bangkhae",
  district: "บางแค",
  name: "สำนักงานเขตบางแค",
  address: 
    "1 ซอย กาญจนาภิเษก 0010 แยก 2 แขวงบางแค บางแค กรุงเทพมหานคร 10160",
  phone: "02-867-1635",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.6961735,
  lng: 100.4092082,
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
    "https://maps.app.goo.gl/wyA1BXsUJ42kMJzW8",
}

export const bangkhunthianOffice: DistrictOffice = {
  id: "bangkhunthian",
  district: "บางขุนเทียน",
  name: "สำนักงานเขตบางขุนเทียน",
  address: 
    "164 ถนน พระรามที่ 2 แขวงแสมดำ เขตบางขุนเทียน กรุงเทพมหานคร 10150",
  phone: "02-415-1453",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.6607557,
  lng: 100.4353809,
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
    "https://maps.app.goo.gl/z6Bd8xmSv1qU2FFN6",
}

export const bangbonOffice: DistrictOffice = {
  id: "bangbon",
  district: "บางบอน",
  name: "สำนักงานเขตบางบอน",
  address: 
    "1 ซอย เอกชัย 135/1 แขวงบางบอนใต้ เขตบางบอน กรุงเทพมหานคร 10150",
  phone: "02-450-3201",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.633944,
  lng: 100.3688808,
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
    "https://maps.app.goo.gl/DZzjWj6f4jwmMr6J9",
}

export const thungkhruOffice: DistrictOffice = {
  id: "thungkhru",
  district: "ทุ่งครุ",
  name: "สำนักงานเขตทุ่งครุ",
  address: 
    "เลขที่ 2 ซอย ประชาอุทิศ 86 แขวงทุ่งครุ เขตทุ่งครุ กรุงเทพมหานคร 10140",
  phone: "02-464-4380",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.611517,
  lng: 100.5085183,
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
    "https://maps.app.goo.gl/VFzutUrX7QMANinE8",
}

export const thawiwatthanaOffice: DistrictOffice = {
  id: "thawiwatthana",
  district: "ทวีวัฒนา",
  name: "สำนักงานเขตทวีวัฒนา",
  address: 
    "1 ถนน อุทยาน แขวงทวีวัฒนา เขตทวีวัฒนา กรุงเทพมหานคร 10170",
  phone: "02-441-4973",
  openHours: "จันทร์–ศุกร์ 08:00–16:00",
  lat: 13.7729378,
  lng: 100.353125,
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
    "https://maps.app.goo.gl/Zr1wiisu6LbtGaW17",
}
export const districtOffices: DistrictOffice[] = [
  bangsueOffice,
  chatuchakOffice,
  latphraoOffice,
  donMueangOffice,
  lakSiOffice,
  saimaiOffice,
  bangkhenOffice,
  phranakhonOffice,
  dusithonOffice,
  pomprapsattruphaiOffice,
  samphanthawongOffice,
  phayathaiOffice,
  ratchathewiOffice,
  huaikhwangOffice,
  dindaengOffice,
  wangthonglangOffice,
  khlongsamwaOffice,
  minburiOffice,
  latkrabangOffice,
  nongchokOffice,
  bungkumOffice,
  khannayaoOffice,
  saphansungOffice,
  prawetOffice,
  bangkapiOffice,
  pathumwanOffice,
  bangrakOffice,
  yannawaOffice,
  bangkholaemOffice,
  khlongtoeiOffice,
  wattanaOffice,
  sathonOffice,
  phrakhanongOffice,
  suanluangOffice,
  bangnaOffice,
  talingchanOffice,
  bangphlatOffice,
  bangkoknoiOffice,
  bangkokyaiOffice,
  khlongsanOffice,
  thonburiOffice,
  chomthongOffice,
  ratburanaOffice,
  phasicharoenOffice,
  nongkhaemOffice,
  bangkhaeOffice,
  bangkhunthianOffice,
  bangbonOffice,
  thungkhruOffice,
  thawiwatthanaOffice,
]
