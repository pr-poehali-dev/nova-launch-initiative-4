import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { ServersSection } from "@/components/sections/ServersSection"
import { FeaturesSection } from "@/components/sections/FeaturesSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { ShopSection } from "@/components/sections/ShopSection"
import { CtaSection } from "@/components/sections/CtaSection"
import { FooterSection } from "@/components/sections/FooterSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <HeroSection />
        <ServersSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ShopSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default Index