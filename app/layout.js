// import { Metadata } from 'next'
import './globals.css'
import { Nunito } from 'next/font/google'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


const nunito = Nunito({ subsets: ['latin'] })


export const metadata = {
  title: 'Mycall Dev Podcast',
  description: 'The Learning Pod',
  // initialScale: 1,
  // width: 'device-width',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
