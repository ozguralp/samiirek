# samiirek.com — Resmi Web Sitesi

Statik site (HTML/CSS/JS). Framework yok → hızlı, güvenli, her yere (GitHub Pages, Netlify, Vercel, normal hosting) kolayca yüklenir.

## Localde çalıştır
```bash
cd ~/Desktop/Projects/sami_irek/website
python3 -m http.server 8484
# tarayıcı: http://localhost:8484
```

## Yapı
```
website/
├── index.html          ← tüm site (tek sayfa, bölümlü)
├── assets/
│   ├── style.css       ← koyu/zarif tema, responsive
│   ├── script.js       ← menü, scroll efektleri
│   └── img/            ← görseller (şu an SVG placeholder)
└── README.md
```

## 🔧 Gerçek içerikle nasıl doldurulur

### 1. Fotoğraflar (Sami gönderecek)
`assets/img/` içine koy, sonra `index.html`'de uzantıyı `.svg` → gerçek dosyayla değiştir:
- **hero.jpg** — ana büyük foto (yatay, min 1920×1080). `index.html`'de 2 yer: `og:image`, schema `image`, ve hero `background-image` (`hero.svg` → `hero.jpg`).
- **portrait.jpg** — bio portresi (dikey 4:5). `<img src="assets/img/portrait.svg">` → `.jpg`.
- **cover-*.jpg** — şarkı kapakları (kare). İlgili `<img>` uzantılarını değiştir.

### 2. Biyografi / CV (Sami gönderecek)
`index.html` içinde `[SAMI: ...]` yazan yerler + Hakkında bölümündeki placeholder paragraflar gerçek metinle değiştirilecek. (Hazır bio metinleri: `../content/profil_metinleri.md`)

### 3. Şarkılar
Yeni şarkı çıktıkça "Müzik" bölümündeki `<article class="release">` kartını çoğalt; "Video" bölümüne YouTube embed ekle (`embed/VIDEO_ID`).

### 4. Konserler
"Konserler" bölümündeki yorumlu `<li class="show">` örneğini aç, tarih/mekan/bilet linki gir.

### 5. İletişim e-postası
`info@samiirek.com` → gerçek booking e-postasıyla değiştir (2 yer: contact + mailto).

## Yayına alma (sonra)
- **Kolay/ücretsiz:** GitHub Pages veya Netlify (bu klasörü sürükle-bırak).
- **Domain:** samiirek.com DNS'ini oraya yönlendir.
- SEO: canonical + og + MusicGroup schema zaten hazır (seo rehberiyle uyumlu).

## Notlar
- Placeholder görseller SVG → dış bağımlılık yok, hafif.
- Fontlar Google Fonts'tan (Cormorant Garamond + Inter).
- Tasarım referansı: Tarkan/Kenan Doğulu tarzı koyu-zarif sanatçı sitesi (birebir kopya değil).
