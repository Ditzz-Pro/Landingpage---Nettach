import { Header, Hero, About, Services, Advantages, Portfolio, Contact, WaFloat } from '../components/sections'
import { site } from '../lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'NETTACH Digital Technology',
  url: site.web,
  email: site.email,
  description: 'Jasa pembuatan website dan solusi digital untuk bisnis di Indonesia.',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Portfolio />
      </main>
      <Contact />
      <WaFloat />
    </>
  )
}
