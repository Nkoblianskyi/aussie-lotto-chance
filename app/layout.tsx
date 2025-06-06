import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'aussielottochance.com',
  description: 'aussielottochance  - platform for Aussie Lotto',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
