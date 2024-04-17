import type { Metadata } from "next"
import { ThemeProvider } from "@/shared/components/theme-provider"
import { ModeToggle } from "@/shared/components/ModeToggle"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-dvh w-dvw box-border" suppressHydrationWarning>
      <body className="h-dvh w-dvw bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle className="absolute top-4 right-4 z-10" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
