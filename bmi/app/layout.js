import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
const inter = Inter({ subsets: ['latin'] })
import Footer from './components/Footer'

export const metadata = {
  title: 'Inidice de masa corporal',
  description: 'Actividad pedagogica de aprendizaje',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
        
    </html>
  )
}