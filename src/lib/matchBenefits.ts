export type UserProfile = {
  age?: number
  location?: string
  district?: string
  employmentStatus?: string
  hasChild?: boolean
  childCount?: number
  socialSecurity?: boolean
  isLookingForJob?: boolean
  disabled?: boolean
  lowIncome?: boolean
  healthSupport?: boolean
  financialCrisis?: boolean
  digitalSkill?: boolean
  careerTraining?: boolean
  vulnerableFamily?: boolean
}

export type BenefitPriority = "high" | "medium" | "low"

export type Benefit = {
  id: string
  title: string
  category: string
  thumbnail?: string
  subCategory?: string
  amountSummary?: string
  shortDescription?: string
  eligibility?: string[]
  requiredDocuments?: string[]
  agency?: string
  sourceUrl?: string
  tags: string[]
  lifeEvents?: string[]
  targetUsers?: string[]
  reason: string
  priority?: number | BenefitPriority
  nextStep?: string
}

export type MatchedBenefit<TBenefit extends Benefit = Benefit> = TBenefit & {
  matchScore: number
}

const importantTagScore = 2
const secondaryTagScore = 1

const importantTagMatchers: Record<
  string,
  (profile: UserProfile) => boolean
> = {
  elderly: (profile) => Boolean(profile.age && profile.age >= 60),
  seniorCitizen: (profile) => Boolean(profile.age && profile.age >= 60),
  familySupport: (profile) => Boolean(profile.hasChild || profile.childCount),
  hasChild: (profile) => Boolean(profile.hasChild || profile.childCount),
  incomeSupport: (profile) =>
    profile.lowIncome === true || profile.financialCrisis === true,
  jobSeeking: (profile) => profile.isLookingForJob === true,
  jobSeeker: (profile) =>
    profile.isLookingForJob === true ||
    profile.employmentStatus === "unemployed",
  lookingForJob: (profile) => profile.isLookingForJob === true,
  newParent: (profile) => Boolean(profile.hasChild || profile.childCount),
  socialSecurity: (profile) => profile.socialSecurity === true,
  unemployed: (profile) => profile.employmentStatus === "unemployed",
  vulnerableFamily: (profile) =>
    profile.vulnerableFamily === true ||
    Boolean((profile.hasChild || profile.childCount) && profile.lowIncome),
}

const secondaryTagMatchers: Record<
  string,
  (profile: UserProfile) => boolean
> = {
  careerTraining: (profile) =>
    profile.careerTraining === true || profile.isLookingForJob === true,
  digitalSkill: (profile) =>
    profile.digitalSkill === true || profile.isLookingForJob === true,
  financialCrisis: (profile) =>
    profile.financialCrisis === true || profile.lowIncome === true,
  financialSupport: (profile) =>
    profile.financialCrisis === true ||
    profile.lowIncome === true ||
    Boolean(profile.hasChild || profile.childCount),
  healthSupport: (profile) => profile.healthSupport === true,
  lowIncome: (profile) => profile.lowIncome === true,
  transportSupport: (profile) =>
    Boolean(profile.age && profile.age >= 60) ||
    profile.disabled === true,
  worker: (profile) =>
    profile.socialSecurity === true || profile.employmentStatus === "employed",
  disabled: (profile) => profile.disabled === true,
}

export function matchBenefits<TBenefit extends Benefit>(
  profile: UserProfile,
  benefits: TBenefit[],
): MatchedBenefit<TBenefit>[] {
  return benefits
    .map((benefit) => ({
      ...benefit,
      matchScore: calculateMatchScore(profile, benefit.tags),
    }))
    .filter((benefit) => benefit.matchScore > 0)
    .sort(sortByRelevance)
}

function calculateMatchScore(profile: UserProfile, tags: string[]) {
  return tags.reduce((score, tag) => {
    if (importantTagMatchers[tag]?.(profile)) {
      return score + importantTagScore
    }

    if (secondaryTagMatchers[tag]?.(profile)) {
      return score + secondaryTagScore
    }

    return score
  }, 0)
}

function sortByRelevance<TBenefit extends Benefit>(
  firstBenefit: MatchedBenefit<TBenefit>,
  secondBenefit: MatchedBenefit<TBenefit>,
) {
  if (secondBenefit.matchScore !== firstBenefit.matchScore) {
    return secondBenefit.matchScore - firstBenefit.matchScore
  }

  return (
    getPriorityScore(secondBenefit.priority) -
    getPriorityScore(firstBenefit.priority)
  )
}

function getPriorityScore(priority: Benefit["priority"]) {
  if (typeof priority === "number") {
    return priority
  }

  if (priority === "high") {
    return 3
  }

  if (priority === "medium") {
    return 2
  }

  if (priority === "low") {
    return 1
  }

  return 0
}
