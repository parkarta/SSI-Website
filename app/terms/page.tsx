import { Metadata } from "next"
import { TopBar } from "@/components/top-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Terms & Conditions | Sensorytics",
  description: "Read the terms and conditions governing the use of Sensorytics IoT monitoring services and platform.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      
      <Breadcrumb 
        items={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions", href: "/terms", current: true }
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Sensorytics IoT monitoring services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sensorytics provides IoT temperature monitoring solutions including hardware sensors, cloud-based monitoring platform, real-time alerts, and compliance reporting tools for cold chain management.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">3. Service Level Agreement</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>We guarantee 99.9% platform uptime for enterprise customers</li>
                <li>Sensor data is transmitted at intervals specified in your service agreement</li>
                <li>Alert notifications are delivered via SMS, email, and/or push notifications</li>
                <li>Historical data is retained according to your subscription tier</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">4. Customer Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Proper installation and maintenance of sensors as directed</li>
                <li>Maintaining adequate internet connectivity for sensor communication</li>
                <li>Responding to alerts in a timely manner</li>
                <li>Ensuring authorized personnel have appropriate access credentials</li>
                <li>Complying with all applicable food safety and pharmaceutical regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">5. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                While Sensorytics provides monitoring and alerting services, we are not liable for product spoilage, regulatory non-compliance, or business losses resulting from temperature excursions. Our liability is limited to the fees paid for the services in question.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">6. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All intellectual property rights in our hardware, software, and platform remain the exclusive property of Sensorytics. Customers receive a limited license to use the platform during their subscription period.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">7. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate service with 30 days written notice. Upon termination, customers may request an export of their historical data. Sensorytics may terminate service immediately for non-payment or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Malaysia. Any disputes shall be resolved through arbitration in Labuan, Malaysia.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-foreground">9. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms, contact us at:<br />
                Email: legal@sensorytics.com<br />
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
