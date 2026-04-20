import { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Privacy Policy | Sensorytics",
  description: "Learn how Sensorytics collects, uses, and protects your personal data in compliance with applicable privacy laws.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy", current: true }
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sensorytics Solutions Inc. (&quot;Sensorytics,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our IoT monitoring services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect information about you in various ways, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, company name, and job title when you contact us or request a demo.</li>
                <li><strong className="text-foreground">Device Data:</strong> Information collected by our IoT sensors including temperature readings, timestamps, and device identifiers.</li>
                <li><strong className="text-foreground">Usage Data:</strong> Browser type, IP address, pages visited, and time spent on our platform.</li>
                <li><strong className="text-foreground">Cookies:</strong> We use cookies to enhance your experience and analyze site traffic.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, operate, and maintain our IoT monitoring services</li>
                <li>Send you alerts and notifications about temperature excursions</li>
                <li>Generate compliance reports and analytics</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Improve our products and services</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">4. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain sensor data for the duration specified in your service agreement, typically 2-7 years to meet regulatory compliance requirements. Personal data is retained as long as necessary to fulfill the purposes outlined in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures including encryption, secure data centers, access controls, and regular security audits to protect your information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access, correct, or delete your personal data</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data in a portable format</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:<br />
                Email: privacy@sensorytics.com<br />
                Address: Labuan, Malaysia
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
