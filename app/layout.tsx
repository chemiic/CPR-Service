import '@/app/globals.css'
import type { Metadata } from 'next'
import Menu from "@/components/menu/Menu";
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
      relative
      overflow-x-hidden
      `}>
      <Menu/>
         {children}
      </body>
    </html>
  )
}
