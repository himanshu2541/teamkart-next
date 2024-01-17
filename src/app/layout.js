import { Inter } from 'next/font/google'
import './globals.css'
import {Analytics} from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "TeamKART - IIT Kharagpur",
    template: "%s | TeamKART - IIT Kharagpur"
  },
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest:'/site.webmanifest',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <Analytics />
      <SpeedInsights />
      </body>
    </html>
  )
}
