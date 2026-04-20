import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AppToaster } from '@/components/app-toaster'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Sensorytics Solutions | Cold Chain IoT Monitoring',
  description: 'Enterprise-grade IoT temperature monitoring for food, pharma, and logistics. Protect your cold chain 24/7 with real-time alerts and compliance-ready reports.',
  generator: 'v0.app',
  keywords: ['cold chain monitoring', 'IoT sensors', 'temperature monitoring', 'HACCP compliance', 'pharmaceutical monitoring', 'food safety'],
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1120',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <AppToaster />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
