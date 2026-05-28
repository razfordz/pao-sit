import { districtOffices } from "../data/districtOffices"

export function getDistrictOfficeByDistrict(district?: string) {
  if (!district) {
    return undefined
  }

  return districtOffices.find((office) => office.district === district)
}
