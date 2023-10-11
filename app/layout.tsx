import './globals.css'
import type { Metadata } from 'next'
import Menu from "@/components/Menu";
export const metadata: Metadata = {
  title: 'CPR-Service',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` 
      mx-auto
      max-w-screen-2xl
      xl:max-w-7xl
      lg:max-w-6xl
      md:max-w-5xl
      md:px-0
      px-2
      `}>
      <Menu/>
      {children}
      </body>
    </html>
  )
}
