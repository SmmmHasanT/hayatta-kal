# Hayatta Kal — çevrimdışı hayatta kalma uygulaması (PWA)

İçerik: İlk yardım (12 konu), hayatta kalma rehberi (10 konu + acil çanta listesi), telsiz (PMR446, kullanım, konuşma usulü, acil çağrı, fonetik alfabe, aile telsiz planı), düğümler (10 düğüm + hangisi ne için tablosu), bitki & hayvan (yenebilir/zehirli bitkiler, mantar, yılan, akrep-örümcek-kene, ayı-köpek-kuduz, deniz tehlikeleri), ilaç (33 etken madde bilgi kartı, doz içermez + TİTCK ruhsatlı ilaç listesi içe aktarma).
Araçlar: Acil kartım (kan grubu, alerji, ilaçlar ve dozları), rota planı (paylaşılabilir mesaj + dönüş geri sayımı), pusula (hedef açı ve geri dönüş açısı), el feneri (kamera ışığı / beyaz ekran), SOS–Mors (ışık + ekran + ses), düdük, GPS konum ve kayıtlı noktalar (mesafe/yön), kalp masajı metronomu. Harita: OpenStreetMap sokak + OpenTopoMap topoğrafik katman, gezilen alanlar önbelleğe alınır. Gece modu (kırmızı).

## Kurulum (GitHub Pages ile, ücretsiz)
PWA'nın çevrimdışı çalışması, pusula, fener ve GPS için uygulama **HTTPS** üzerinden açılmalıdır.
1. GitHub'da yeni bir depo aç (ör. `hayatta-kal`), bu klasördeki tüm dosyaları yükle.
2. Settings → Pages → Branch: `main` / root → Save.
3. Birkaç dakika sonra `https://KULLANICIADI.github.io/hayatta-kal/` adresini telefonda Chrome ile aç.
4. Menü (⋮) → **Ana ekrana ekle / Uygulamayı yükle**.
5. İnternet varken bir kez açıp tüm sekmeleri gez; artık internetsiz çalışır.

## Haritayı çevrimdışı kullanmak
Harita karoları **görüntülendikçe** cihaza kaydedilir (en fazla ~6000 karo). Gideceğin bölgeyi internet varken
istediğin yakınlaştırma seviyelerinde gez; sonra internetsiz de görünür. (OpenStreetMap kullanım kuralları toplu
indirmeye izin vermediği için otomatik "bölge indir" düğmesi yok.)

## Güncelleme
İçeriği `content.js` dosyasından düzenle. Değişiklikten sonra `sw.js` içindeki `SURUM` değerini artır (hk-v2 gibi).

## İlaç listesini yüklemek
TİTCK sitesinden "Ruhsatlı Beşeri Tıbbi Ürünler Listesi" (titck.gov.tr/dinamikmodul/85) Excel dosyasını indir,
uygulamada İlaç → "Türkiye ruhsatlı ilaç listesini yükle" bölümünden seç. Liste cihaza kaydedilir; ticari ad, etkin madde,
barkod veya ATC koduyla internetsiz aranır. Liste haftalık güncellenir; arada bir yeniden yükle.
Excel okuma için SheetJS (Apache 2.0) kullanılır: vendor/xlsx.full.min.js.
