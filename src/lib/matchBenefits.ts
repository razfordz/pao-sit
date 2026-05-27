export type UserProfile = {
  age?: number
  location?: string
  employmentStatus?: string
  hasChild?: boolean
  childCount?: number
  socialSecurity?: boolean
  isLookingForJob?: boolean
  lowIncome?: boolean
  healthSupport?: boolean
}

export type Benefit = {
  id: string
  title: string
  category: string
  tags: string[]
  reason: string
  priority?: number
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
  hasChild: (profile) => Boolean(profile.hasChild || profile.childCount),
  lookingForJob: (profile) => profile.isLookingForJob === true,
  socialSecurity: (profile) => profile.socialSecurity === true,
  unemployed: (profile) => profile.employmentStatus === "unemployed",
}

const secondaryTagMatchers: Record<
  string,
  (profile: UserProfile) => boolean
> = {
  healthSupport: (profile) => profile.healthSupport === true,
  lowIncome: (profile) => profile.lowIncome === true,
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

  return (secondBenefit.priority ?? 0) - (firstBenefit.priority ?? 0)
}
