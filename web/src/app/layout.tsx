import "./globals.css"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { FormContextProvider } from "./_context/FormContextProvider"
import { MyEventsContextProvider } from "./_context/MyEventsContextProvider"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Hospeda Eventos",
  description: "Encontre sua Hospedagem para Eventos!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <FormContextProvider>
        <MyEventsContextProvider>
          <body className={roboto.className}>{children}</body>
        </MyEventsContextProvider>
      </FormContextProvider>
    </html>
  )
}
