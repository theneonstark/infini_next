import Footer from "@/components/footer"
import "./globals.css"
import Navbar from "@/components/navbar"

export const metadata = {
  title: "Modern Services",
  description: "Professional web services company",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer   />
      </body>
    </html>
  )
}
