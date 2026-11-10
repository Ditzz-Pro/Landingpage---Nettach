import './globals.css'
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta', display: 'swap' })

const description =
  'Nettach membantu UMKM, brand, hingga perusahaan tampil profesional di dunia digital: website company profile, toko online, landing page & SEO, serta web app custom.'

export const metadata = {
  metadataBase: new URL('https://www.nettach.id'),
  title: 'Nettach – Digital Solution Partner',
  description,
  openGraph: { title: 'Nettach – Digital Solution Partner', description, locale: 'id_ID', type: 'website' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
