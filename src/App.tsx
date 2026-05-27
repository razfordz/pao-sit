import Header from "./components/home/Header"
import HeroText from "./components/home/HeroText"
import PhoneMockup from "./components/home/PhoneMockup"

function App() {
  return (
    <main className="min-h-screen bg-[#EEF7F7] px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <Header />

        <section className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] items-center gap-14 lg:gap-20 min-h-[calc(100vh-104px)] py-12 lg:py-6">
          <HeroText />
          <PhoneMockup />
        </section>
      </div>
    </main>
  )
}

export default App
