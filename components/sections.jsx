'use client'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Reveal, MagneticLink, ease } from './motion'
import { site, waLink } from '../lib/site'

const H2 = 'text-3xl font-extrabold tracking-tight md:text-5xl'
const nav = [['Tentang', '#tentang'], ['Layanan', '#layanan'], ['Keunggulan', '#keunggulan'], ['Portofolio', '#portofolio'], ['Kontak', '#kontak']]

function Logo({ plate = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 rounded-xl ${plate ? 'bg-white px-3 py-1.5' : ''}`}>
      <Image src="/logo-mark.png" alt="" width={240} height={153} className="h-8 w-auto" />
      <Image src="/logo-word.png" alt="Nettach" width={420} height={76} className="h-5 w-auto" />
    </span>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <a href="#top" aria-label="Nettach – beranda"><Logo /></a>
        <nav aria-label="Utama" className="hidden gap-8 text-sm font-semibold text-slate-600 md:flex">
          {nav.map(([l, h]) => <a key={h} href={h} className="transition hover:text-brand-dark">{l}</a>)}
        </nav>
        <a href={waLink()} target="_blank" rel="noopener noreferrer"
          className="rounded-full bg-brand-dark px-5 py-2.5 text-sm font-bold text-white transition hover:shadow-glow">
          Konsultasi Gratis
        </a>
      </div>
    </header>
  )
}

/* ---------- 1. HERO ---------- */
const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }
const word = { hidden: { y: '115%' }, show: { y: 0, transition: { duration: 0.9, ease } } }
const fade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }

function HeroVisual() {
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 120, damping: 18 })
  const sy = useSpring(py, { stiffness: 120, damping: 18 })
  const rotY = useTransform(sx, [-0.5, 0.5], [-12, 12])
  const rotX = useTransform(sy, [-0.5, 0.5], [8, -8])
  const chipX = useTransform(sx, [-0.5, 0.5], [-30, 30])
  const chipY = useTransform(sy, [-0.5, 0.5], [-22, 22])
  const backX = useTransform(sx, [-0.5, 0.5], [14, -14])
  const chip = 'flex items-center gap-2 whitespace-nowrap rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-bold shadow-xl'
  const float = { animate: { y: [0, -12, 0] }, transition: { repeat: Infinity, duration: 6, ease: 'easeInOut' } }
  return (
    <div
      aria-hidden="true"
      className="relative px-6 py-10 [perspective:1100px]"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        px.set((e.clientX - r.left) / r.width - 0.5)
        py.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { px.set(0); py.set(0) }}
    >
      <motion.div style={{ x: backX }} className="absolute inset-x-10 inset-y-14 translate-x-5 translate-y-4 rounded-2xl border border-slate-200 bg-white/60" />
      <motion.div
        style={{ rotateY: rotY, rotateX: rotX, transformStyle: 'preserve-3d' }}
        initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.1, delay: 0.3, ease }}
        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_40px_80px_-24px_rgba(18,163,187,.45)]"
      >
        <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-50 px-4 py-3">
          <i className="h-2.5 w-2.5 rounded-full bg-red-400" /><i className="h-2.5 w-2.5 rounded-full bg-amber-400" /><i className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-3 flex-1 rounded-md border border-slate-200 bg-white px-3 py-0.5 text-[11px] text-slate-500">nettach.id/website-anda</span>
        </div>
        <div className="space-y-3 p-6">
          <Image src="/logo-mark.png" alt="" width={240} height={153} className="mb-4 h-9 w-auto" />
          <div className="h-6 w-3/4 rounded-md bg-navy" />
          <div className="h-3 rounded bg-slate-200" /><div className="h-3 w-4/5 rounded bg-slate-200" />
          <div className="mt-4 h-9 w-32 rounded-full bg-brand-dark" />
          <div className="grid grid-cols-3 gap-3 pt-4">
            <i className="h-20 rounded-xl bg-gradient-to-br from-navy to-brand" /><i className="h-20 rounded-xl bg-gradient-to-br from-brand to-brand-light" /><i className="h-20 rounded-xl bg-slate-200" />
          </div>
        </div>
      </motion.div>
      <motion.div style={{ x: chipX, y: chipY }} className="pointer-events-none absolute inset-0">
        <motion.div {...float} className={`${chip} absolute left-0 top-2`}>
          <span className="h-2 w-2 rounded-full bg-brand" />Prospek baru masuk
        </motion.div>
        <motion.div {...float} transition={{ ...float.transition, delay: 2 }} className={`${chip} absolute bottom-16 right-0 !border-green-200 !bg-green-50 text-green-900`}>
          <span className="h-2 w-2 rounded-full bg-green-500" />Halo, saya tertarik bikin website
        </motion.div>
        <motion.div {...float} transition={{ ...float.transition, delay: 4 }} className={`${chip} absolute bottom-2 left-10`}>
          <span className="h-2 w-2 rounded-full bg-brand-light" />Cepat dibuka di HP
        </motion.div>
      </motion.div>
    </div>
  )
}

export function Hero() {
  const words = 'Bangun Identitas Digital Bisnis Anda Bersama Nettach!'.split(' ')
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-14 md:pt-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_85%_20%,rgba(18,163,187,.28),transparent_70%)]" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(#dbe3ec_1px,transparent_1px),linear-gradient(90deg,#dbe3ec_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(#000_60%,transparent)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            <motion.span variants={fade} className="mb-5 block text-xs font-bold tracking-[.3em] text-brand-dark md:text-sm">
              CONNECT · INNOVATE · GROW
            </motion.span>
            {words.map((w, i) => (
              <span key={i} className="mr-[.25em] inline-block overflow-hidden pb-[.12em] align-top">
                <motion.span variants={word} className="inline-block">{w}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p variants={fade} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Kami membantu UMKM, brand, hingga perusahaan berskala besar untuk tampil lebih profesional di dunia digital.
            Dapatkan website modern, berkinerja cepat, dan ramah mesin pencari yang dirancang khusus untuk bisnis Anda.
          </motion.p>
          <motion.div variants={fade} className="mt-9">
            <MagneticLink href={waLink()} className="bg-brand-dark px-8 py-4 text-base text-white">Konsultasi Gratis Sekarang</MagneticLink>
          </motion.div>
        </motion.div>
        <HeroVisual />
      </div>
    </section>
  )
}

/* ---------- 2. ABOUT ---------- */
const misi = [
  'Membangun website yang cepat, modern, dan sesuai dengan kebutuhan klien.',
  'Menyajikan desain UI/UX yang intuitif, estetik, dan berorientasi pada kenyamanan pengguna.',
  'Membantu bisnis Anda mendapatkan lebih banyak pelanggan melalui optimasi SEO dan pemasaran digital.',
  'Memberikan dukungan teknis berkelanjutan agar website Anda selalu sehat dan aman.',
]
const list = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } }

export function About() {
  return (
    <section id="tentang" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
        <div>
          <Reveal as="h2" className={H2}>Siapa Kami?</Reveal>
          <Reveal as="p" delay={0.1} className="mt-6 text-lg leading-relaxed text-slate-600">
            NETTACH Digital Technology adalah perusahaan jasa pembuatan website dan solusi digital. Kami percaya bahwa setiap bisnis memiliki karakter unik.
            Oleh karena itu, kami hadir untuk merancang website company profile, toko online, landing page, hingga web application custom yang estetik dan fungsional.
          </Reveal>
        </div>
        <div className="space-y-5">
          <Reveal className="rounded-3xl bg-navy p-8 text-white">
            <h3 className="text-sm font-bold tracking-widest text-brand-light">VISI KAMI</h3>
            <p className="mt-3 text-xl font-semibold leading-snug">Menjadi mitra solusi digital terpercaya bagi bisnis di Indonesia.</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="text-sm font-bold tracking-widest text-brand-dark">MISI KAMI</h3>
            <motion.ol variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} className="mt-5 space-y-4">
              {misi.map((m, i) => (
                <motion.li key={i} variants={item} className="flex gap-4 text-slate-600">
                  <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-brand/15 text-sm font-extrabold text-brand-dark">{i + 1}</span>
                  <span>{m}</span>
                </motion.li>
              ))}
            </motion.ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- 3. SERVICES ---------- */
const services = [
  { t: 'Website Company Profile', d: 'Tampilkan profesionalisme perusahaan Anda dengan desain custom yang responsif. Dilengkapi dengan fitur profil perusahaan, galeri, dan portofolio yang menarik.', i: 'M3 5h18v11H3zM8 20h8M12 16v4' },
  { t: 'Toko Online (E-Commerce)', d: 'Tingkatkan omzet penjualan dengan sistem toko online pintar. Dilengkapi katalog produk, keranjang belanja, fitur pembayaran dan perhitungan ongkir otomatis, serta panel admin yang sangat mudah dikelola.', i: 'M3 4h2l2.5 10h11L21 7H6M9 20h.01M18 20h.01' },
  { t: 'Landing Page & SEO', d: 'Maksimalkan konversi iklan Anda dengan landing page yang tajam. Kami juga menyediakan layanan SEO (dasar & lanjutan) serta integrasi tombol WhatsApp langsung ke customer service Anda.', i: 'M22 2L11 13M22 2l-7 20-4-9-9-4z' },
  { t: 'Web App & Maintenance', d: 'Butuh sistem khusus? Kami membuat web app custom sesuai alur bisnis Anda. Sudah termasuk layanan hosting, backup, sistem keamanan, hingga dukungan pembaruan teknis secara rutin.', i: 'M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14' },
]

export function Services() {
  return (
    <section id="layanan" className="relative overflow-hidden bg-gradient-to-b from-transparent via-brand/5 to-transparent py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal as="h2" className={H2}>Layanan Solusi Digital Kami</Reveal>
        <Reveal as="p" delay={0.1} className="mt-4 max-w-xl text-lg text-slate-600">Solusi lengkap dari hulu ke hilir untuk mendigitalkan bisnis Anda.</Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-2xl hover:shadow-brand/20"
            >
              <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/0 blur-3xl transition duration-500 group-hover:bg-brand/30" />
              <div className="relative mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy to-brand text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.i} /></svg>
              </div>
              <h3 className="relative text-xl font-extrabold">{s.t}</h3>
              <p className="relative mt-3 leading-relaxed text-slate-600">{s.d}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 4. ADVANTAGES ---------- */
const adv = [
  ['Desain Custom', 'Setiap website dirancang eksklusif, menyesuaikan identitas brand dan menargetkan pasar bisnis Anda secara akurat.'],
  ['Proses Transparan', 'Tidak ada biaya tersembunyi. Tahapan kerja, timeline, dan biaya investasi dijelaskan secara detail sejak hari pertama.'],
  ['Dukungan Berkelanjutan', 'Kami tidak pergi setelah proyek selesai. Anda akan terus mendapatkan perawatan, update, dan bantuan teknis setelah website Anda tayang.'],
]

export function Advantages() {
  return (
    <section id="keunggulan" className="rounded-[2rem] bg-navy-900 px-6 py-24 text-white md:mx-4">
      <div className="mx-auto max-w-6xl">
        <Reveal as="h2" className={H2}>Mengapa Memilih Nettach?</Reveal>
        <Reveal as="p" delay={0.1} className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
          Kami bekerja dengan tim kecil yang fokus. Anda dapat berdiskusi langsung dengan ahli yang mengerjakan website Anda.
          Setiap proyek dikerjakan secara manual (bukan template asal pakai) dan disesuaikan dengan karakter bisnis Anda.
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {adv.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.12}>
              <motion.div whileHover={{ y: -6 }} className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-brand/60">
                <span className="text-4xl font-extrabold text-brand-light">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-extrabold">{t}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 5. PORTFOLIO (template kosong) ---------- */
// Isi `image` dengan path tangkapan layar panjang di /public (mis. '/portfolio/klien-1.jpg').
// Selama kosong, tampil mockup placeholder.
const works = [
  { name: '[Isi Nama Klien 1]', type: 'Website Company Profile', image: null, c: 'from-navy to-brand' },
  { name: '[Isi Nama Klien 2]', type: 'Toko Online E-Commerce', image: null, c: 'from-orange-700 to-amber-400' },
  { name: '[Isi Nama Klien 3]', type: 'Landing Page', image: null, c: 'from-violet-700 to-pink-500' },
]

export function Portfolio() {
  return (
    <section id="portofolio" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal as="h2" className={H2}>Karya & Portofolio Kami</Reveal>
        <Reveal as="p" delay={0.1} className="mt-4 max-w-xl text-lg text-slate-600">Lihat bagaimana kami membantu berbagai bisnis mewujudkan ruang digital mereka.</Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {works.map((w, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-shadow hover:shadow-2xl hover:shadow-brand/20">
                <div className="relative h-64 overflow-hidden border-b border-slate-200 bg-slate-100">
                  {/* Gambar panjang bergulir pelan saat di-hover */}
                  <div className="transition-transform duration-[5000ms] ease-linear group-hover:-translate-y-[45%]">
                    {w.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={w.image} alt={`Tampilan website ${w.name}`} className="w-full" />
                    ) : (
                      <div className="h-[560px] bg-white">
                        <div className={`flex h-44 items-end bg-gradient-to-br ${w.c} p-5 text-sm font-semibold text-white/90`}>[Gambar Tampilan Website/Mockup Klien {i + 1}]</div>
                        <div className="grid grid-cols-3 gap-3 p-4">
                          <i className="h-20 rounded-xl bg-slate-200" /><i className="h-20 rounded-xl bg-slate-200" /><i className="h-20 rounded-xl bg-slate-200" />
                        </div>
                        <div className="space-y-2.5 px-4"><i className="block h-3 rounded bg-slate-200" /><i className="block h-3 w-4/5 rounded bg-slate-200" /><i className="block h-3 w-3/5 rounded bg-slate-200" /></div>
                        <div className="grid grid-cols-2 gap-3 p-4"><i className="h-28 rounded-xl bg-slate-200" /><i className="h-28 rounded-xl bg-slate-200" /></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-500">Nama Klien</p>
                  <h3 className="text-lg font-extrabold">{w.name}</h3>
                  <p className="mt-3 text-sm text-slate-500">Jenis Proyek</p>
                  <p className="font-semibold text-brand-dark">{w.type}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- 6. CTA & KONTAK (FOOTER) ---------- */
export function Contact() {
  const rows = [
    ['Telepon/WhatsApp', site.phone, waLink()],
    ['Email', site.email, `mailto:${site.email}`],
    ['Website', site.web.replace('https://', ''), site.web],
    ['Alamat', site.address, null],
  ]
  return (
    <footer id="kontak" className="relative mt-8 overflow-hidden bg-navy-900 pt-24 text-slate-300">
      <div aria-hidden="true" className="absolute left-1/2 top-[-320px] h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(18,163,187,.42),transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal as="h2" className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">Siap Membawa Bisnis Anda ke Level Berikutnya?</Reveal>
          <Reveal as="p" delay={0.1} className="mt-6 text-lg leading-relaxed">
            Jangan biarkan kompetitor mendahului Anda. Mari berkolaborasi untuk menciptakan website yang bukan hanya indah, tapi juga mendatangkan profit.
            Kami memberikan garansi 100% Revisi sampai Anda merasa cocok!
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <MagneticLink href={waLink('Halo Nettach, saya ingin memulai proyek digital untuk bisnis saya.')} className="bg-white px-9 py-5 text-lg text-navy">
              Mulai Proyek Digital Anda Sekarang!
            </MagneticLink>
          </Reveal>
        </div>
        <div className="mt-20 grid gap-10 border-t border-white/10 py-14 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Logo plate />
            <p className="mt-4 max-w-xs text-sm">NETTACH Digital Technology – mitra solusi digital terpercaya bagi bisnis di Indonesia.</p>
          </div>
          <div>
            <h3 className="mb-4 font-extrabold text-white">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              {rows.map(([l, v, h]) => (
                <li key={l} className="flex gap-3"><span className="w-32 flex-none text-slate-400">{l}</span>
                  {h ? <a href={h} className="font-semibold text-white transition hover:text-brand-light">{v}</a> : <span className="font-semibold text-white">{v}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="border-t border-white/10 py-6 text-sm text-slate-500">© 2026 NETTACH Digital Technology. Semua hak dilindungi.</p>
      </div>
    </footer>
  )
}

export function WaFloat() {
  return (
    <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp"
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-110">
      <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-50" />
      <svg viewBox="0 0 24 24" className="relative h-8 w-8 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.4 8.4 0 01-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1121 11.5z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.5-2-1-.8.8c-.8-.4-1.6-1.2-2-2l.8-.8-1-2z" />
      </svg>
    </a>
  )
}
