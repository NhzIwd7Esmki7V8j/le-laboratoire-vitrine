import type { ReactNode } from "react"

export const metadata = {
  title: "",
  description: "",
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0, background: "#000", minHeight: "100vh" }} />
    </html>
  )
}
