import ProfileSetupScreen from "./ProfileSetupScreen"
import WelcomeScreen from "./WelcomeScreen"

type PhoneWelcomeCardProps = {
  screen: "welcome" | "profile"
  onStart: () => void
}

function PhoneWelcomeCard({ screen, onStart }: PhoneWelcomeCardProps) {
  if (screen === "welcome") {
    return (
      <div className="relative z-10 mx-1 mt-5 animate-[demo-card-glow_8s_ease-in-out_infinite] rounded-[32px] sm:mx-1.5 sm:mt-6 sm:rounded-[34px]">
        <WelcomeScreen onStart={onStart} />
      </div>
    )
  }

  return (
    <div className="relative z-10 animate-[demo-card-glow_8s_ease-in-out_infinite] rounded-[32px] sm:rounded-[34px]">
      <ProfileSetupScreen />
    </div>
  )
}

export default PhoneWelcomeCard
