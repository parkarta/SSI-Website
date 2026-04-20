"use client"

import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { SolutionCTA } from "@/components/solution-cta"
import { 
  Target, 
  Eye, 
  Heart,
  Users,
  Globe,
  Cpu,
  BarChart3,
  Headphones,
  MapPin,
  Award,
  Rocket,
  Shield
} from "lucide-react"

const missionCards = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To make cold chain failures a thing of the past — through intelligent automation, real-time monitoring, and data-driven compliance."
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "A world where no food is wasted, no medicine is compromised, and no business loses inventory to a preventable temperature excursion."
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Reliability first. Honest partnerships. Built for the long term. Customer outcomes over features."
  }
]

const stats = [
  { value: "17+", label: "Years of IoT and software development expertise" },
  { value: "5,000+", label: "Sensors deployed globally" },
  { value: "2", label: "Continents with active deployments" },
  { value: "ASEAN & ME", label: "Market presence" }
]

const pillars = [
  {
    icon: Cpu,
    title: "Hardware Reliability",
    description: "Industrial-grade sensors built to last 10+ years in the harshest environments"
  },
  {
    icon: BarChart3,
    title: "Platform Intelligence",
    description: "AI-powered analytics that predict failures and automate compliance"
  },
  {
    icon: Headphones,
    title: "Customer Partnership",
    description: "Local support in every market we serve, with response times measured in hours"
  }
]

const timeline = [
  {
    year: "Foundation",
    title: "Built by IoT Veterans",
    description: "Founded by engineers with deep expertise in large-scale IoT deployments — including a 5,000-sensor temperature monitoring rollout for one of the Middle East's largest food producers."
  },
  {
    year: "Problem",
    title: "Saw the Gap",
    description: "We saw firsthand how manual temperature logging fails at scale. We built Sensorytics to replace guesswork with certainty."
  },
  {
    year: "Today",
    title: "Serving Global Markets",
    description: "Today, Sensorytics serves clients across ASEAN and the Middle East — from independent grocery stores to enterprise cold chain operations."
  }
]

const regions = [
  { name: "Malaysia", flag: "🇲🇾", role: "ASEAN HQ" },
  { name: "Saudi Arabia", flag: "🇸🇦", role: "Middle East Operations" },
  { name: "Philippines", flag: "🇵🇭", role: "Maritime & Seafood" },
  { name: "Indonesia", flag: "🇮🇩", role: "Retail & Distribution" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      
      <main>
        <PageHero
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About" }
          ]}
          headline="We Exist to Protect What Is Critical to You"
          subtext="Sensorytics was founded on one belief: that cold chain failures are preventable. We combine IoT hardware, AI analytics, and a purpose-built SaaS platform to give businesses real-time intelligence over their temperature-sensitive assets."
          primaryCta={{ label: "Contact Us", href: "/contact" }}
          secondaryCta={{ label: "View Technology", href: "/technology" }}
          pattern="dots"
        />

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
                
                <div className="space-y-8">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative pl-8 border-l-2 border-primary/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                      <div className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 relative overflow-hidden">
                <div className="text-center mb-8">
                  <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Global Presence</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {regions.map((region, i) => (
                    <div 
                      key={i}
                      className="bg-card border border-border/50 rounded-xl p-4 text-center"
                    >
                      <div className="text-2xl mb-2">{region.flag}</div>
                      <div className="font-medium text-sm">{region.name}</div>
                      <div className="text-xs text-muted-foreground">{region.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Mission & Values
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              What drives us every day
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {missionCards.map((card, i) => {
                const Icon = card.icon
                return (
                  <div 
                    key={i}
                    className="p-8 bg-card border border-border/50 rounded-xl text-center"
                  >
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Sensorytics
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Experience and scale that delivers results
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  We Are Not Just a Sensor Company
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Sensors alone don&apos;t solve cold chain problems. Intelligence does. Sensorytics 
                  delivers the full stack: hardware, connectivity, cloud platform, AI analytics, 
                  and compliance reporting — with local support in every market we serve.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {pillars.map((pillar, i) => {
                  const Icon = pillar.icon
                  return (
                    <div 
                      key={i}
                      className="p-6 bg-card border border-border/50 rounded-xl"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground">{pillar.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Leadership Team
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Experienced professionals committed to cold chain excellence
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  name: "Chief Executive Officer",
                  role: "Strategy & Vision",
                  icon: Rocket,
                  description: "17+ years in IoT and enterprise software"
                },
                {
                  name: "Chief Technology Officer",
                  role: "Engineering & Platform",
                  icon: Cpu,
                  description: "Led 5,000-sensor deployment in Middle East"
                },
                {
                  name: "Chief Operations Officer",
                  role: "Delivery & Support",
                  icon: Shield,
                  description: "ASEAN market expansion and partnerships"
                }
              ].map((member, i) => {
                const Icon = member.icon
                return (
                  <div 
                    key={i}
                    className="p-6 bg-card border border-border/50 rounded-xl text-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <div className="text-sm text-primary mb-2">{member.role}</div>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Sensorytics is trusted by enterprises across food production, pharmaceutical 
                  distribution, retail, and maritime logistics. Our clients include some of the 
                  largest cold chain operators in ASEAN and the Middle East.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {["Food & Beverage", "Pharmaceutical", "Retail", "Maritime", "Logistics"].map((industry, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <SolutionCTA 
          headline="Ready to Work With Us?"
          subtext="Get in touch to discuss how Sensorytics can protect your cold chain."
        />
      </main>
      
      <Footer />
    </div>
  )
}
