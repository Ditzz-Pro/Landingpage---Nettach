export const site = {
  wa: '6287749326633', 
  phone: '087749326633',
  email: 'halo@nettach.id',
  web: 'https://www.nettach.id',
  address: 'Purwokerto, JawaTengah',
}

export const waLink = (text = 'Halo Nettach, saya ingin konsultasi gratis untuk website bisnis saya.') =>
  `https://wa.me/${site.wa}?text=${encodeURIComponent(text)}`
