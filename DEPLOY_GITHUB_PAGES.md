# samiirek.com → GitHub Pages Kurulum Rehberi

Statik site, GitHub Pages'e ücretsiz kurulur + samiirek.com bağlanır.
Hazır dosyalar: `CNAME` (domain), `.nojekyll` (Jekyll kapalı), `samiirek_site_upload.zip` (yükleme için).

---

## ADIM 1 — GitHub'da repo aç
1. github.com → giriş yap (yoksa ücretsiz hesap aç).
2. Sağ üst **+** → **New repository**.
3. Repository name: **samiirek-site** (fark etmez, domain bağlayacağız).
4. **Public** seç. (Pages ücretsiz için public olmalı.)
5. "Add a README" İŞARETLEME (boş repo istiyoruz).
6. **Create repository**.

## ADIM 2 — Dosyaları yükle
1. Boş repo sayfasında **"uploading an existing file"** linkine tıkla.
2. `website/` klasöründeki dosyaları sürükle-bırak. İKİ YOL:
   - **Kolay:** `samiirek_site_upload.zip`'i AÇ (çıkart), içindeki TÜM dosyaları (index.html, CNAME, .nojekyll, assets/ klasörü) seçip sürükle.
   - Not: `.nojekyll` ve `CNAME` gizli/uzantısız dosyalar — Finder'da görünmezse Cmd+Shift+. ile gizlileri göster.
3. Alttaki "Commit changes" → **Commit changes**.
4. Dosyaların repo'da göründüğünü doğrula (index.html, assets/, CNAME olmalı).

## ADIM 3 — Pages'i aç
1. Repo → **Settings** (üst menü).
2. Sol menü → **Pages**.
3. "Build and deployment" → Source: **Deploy from a branch**.
4. Branch: **main** (veya master) → klasör: **/ (root)** → **Save**.
5. 1-2 dakika bekle. Sayfa yenilenince üstte adres çıkar:
   `https://KULLANICIADIN.github.io/samiirek-site/` → çalıştığını gör.

## ADIM 4 — samiirek.com domainini bağla
1. Settings → Pages → **Custom domain** kutusuna: `samiirek.com` yaz → **Save**.
   (CNAME dosyası zaten repoda olduğu için bu otomatik dolmuş da olabilir.)
2. GitHub "DNS check in progress" gösterir — bu normal, DNS ayarını yapınca geçer.

## ADIM 5 — DNS ayarları (domaini nereden aldıysan orada)
Domain panelinde (GoDaddy / Namecheap / Turhost / nereden aldıysan) DNS/Zone kısmına gir ve şunları ekle:

**A) Kök domain (samiirek.com) için — 4 adet A kaydı:**
| Tip | Ad/Host | Değer |
|-----|---------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**B) www için — 1 adet CNAME:**
| Tip | Ad/Host | Değer |
|-----|---------|-------|
| CNAME | www | KULLANICIADIN.github.io |

> `KULLANICIADIN` = senin GitHub kullanıcı adın (örn. ozgurralp.github.io — sonunda nokta olabilir, panel isterse).

3. Kaydet. DNS yayılması **10 dakika – birkaç saat** sürebilir (bazen 24 saate kadar).

## ADIM 6 — HTTPS'i aç (yayılınca)
1. DNS geçince Settings → Pages'te "DNS check successful" görürsün.
2. **Enforce HTTPS** kutusunu işaretle (ücretsiz SSL, GitHub otomatik verir).
3. Bitti → https://samiirek.com yayında.

---

## Güncelleme (ileride)
Site değişince: repo → ilgili dosyayı aç → düzenle/yükle → commit. Pages otomatik yeniden yayınlar (1-2 dk).
Ya da tüm klasörü tekrar sürükle-bırak (üzerine yaz).

## Sık sorun
- **404 / boş sayfa:** Pages Source "main / root" mu? Dosyalar repo KÖKÜNDE mi (index.html en üstte olmalı, alt klasörde değil)?
- **CSS gelmiyor:** `.nojekyll` yüklendi mi? assets/ klasörü doğru yüklendi mi?
- **Domain çalışmıyor:** DNS henüz yayılmamış olabilir; `dig samiirek.com` ile A kayıtlarını kontrol et.
- **Sertifika hatası:** DNS check bitmeden "Enforce HTTPS" gelmez; bekle.
