// Hayatta Kal — içerik. Her bölüm: id, kat (rehber | ilkyardim | telsiz), baslik, ikon, html
window.ICERIK = [
/* ============ İLK YARDIM ============ */
{ id:"iy-ilk", kat:"ilkyardim", baslik:"Önce bunu oku: İlk değerlendirme", ikon:"🩺", html:`
<p class="uyari">Acil çağrı: <b>112</b> (tek numara). Zehirlenme danışma: <b>114</b>. Şebeke zayıfsa bile 112'yi dene; bazen başka operatörün şebekesinden geçer. SMS çoğu zaman aramadan daha kolay gider.</p>
<ol>
<li><b>Ortam güvenli mi?</b> Yangın, trafik, elektrik, göçük riski varsa önce kendini koru. Yaralı iki kişi olmasın.</li>
<li><b>Bilinç kontrolü:</b> Omzuna dokun, yüksek sesle "İyi misiniz?" diye sor.</li>
<li><b>Yardım çağır:</b> 112'yi ara ya da birine arat. Konum, olay, yaralı sayısı, durumları.</li>
<li><b>Hava yolu:</b> Baş geri, çene yukarı (boyun yaralanması şüphesi varsa sadece çeneyi it).</li>
<li><b>Solunum:</b> Bak–Dinle–Hisset, en fazla 10 saniye. Normal nefes yoksa → <a href="#iy-tyd">Temel yaşam desteği</a>.</li>
<li><b>Ciddi kanama</b> var mı? Varsa hemen bas → <a href="#iy-kanama">Kanama</a>.</li>
</ol>
<p>Yaralıyı gerekmedikçe yerinden oynatma (yangın, patlama, göçük riski hariç). Yiyecek–içecek verme.</p>`},

{ id:"iy-tyd", kat:"ilkyardim", baslik:"Temel yaşam desteği (kalp masajı)", ikon:"❤️", html:`
<p class="uyari">Bilinç yok + normal nefes yok → hemen başla. 112'yi hoparlörden aç, talimatları dinle.</p>
<h4>Yetişkin</h4>
<ol>
<li>Sert zemine sırtüstü yatır. Göğsün ortasına (göğüs kemiğinin alt yarısı) avuç içini koy, diğer elini üstüne kenetle.</li>
<li>Kollar düz, omuzlar elinin üstünde: <b>5–6 cm</b> derinlikte, dakikada <b>100–120</b> bası. Her basıdan sonra göğsün tam geri gelmesine izin ver.</li>
<li><b>30 bası – 2 soluk.</b> Soluk vermeyi bilmiyorsan veya istemiyorsan sadece kesintisiz bası yap; bu da işe yarar.</li>
<li>Soluk: Baş geri–çene yukarı, burnu kapat, ağızdan ~1 saniye üfle, göğsün kalktığını gör.</li>
<li>Yardım gelene, kişi nefes almaya başlayana ya da tükenene kadar sürdür. Yanında biri varsa 2 dakikada bir değişin.</li>
<li><b>OED</b> (otomatik defibrilatör) bulunursa hemen aç ve sesli talimatlara uy.</li>
</ol>
<h4>Çocuk (1 yaş–ergenlik)</h4><p>Önce 5 soluk, sonra 30:2. Bası derinliği göğsün 1/3'ü (~5 cm), tek elle yapılabilir.</p>
<h4>Bebek (1 yaş altı)</h4><p>Önce 5 soluk (ağız ve burnu birlikte kapatarak, hafif). Göğüs ortasında iki parmakla ~4 cm, 30:2.</p>
<p>Ritim için: Uygulamadaki <b>Araçlar → Metronom</b> 110/dk vurur.</p>`},

{ id:"iy-bogulma", kat:"ilkyardim", baslik:"Boğulma (soluk yoluna yabancı cisim)", ikon:"😮‍💨", html:`
<p><b>Öksürebiliyorsa:</b> Müdahale etme, öksürmeye teşvik et.</p>
<p><b>Konuşamıyor, öksüremiyor, nefes alamıyorsa:</b></p>
<ol>
<li>Öne eğ, kürek kemiklerinin arasına avuç topuğuyla <b>5 sert vuruş</b>.</li>
<li>Çıkmazsa arkasına geç, yumruğunu göbeğin biraz üstüne koy, diğer elinle kavra; içe ve yukarı doğru <b>5 karın basısı</b> (Heimlich).</li>
<li>Cisim çıkana ya da bilinç kaybolana kadar 5 sırt – 5 karın tekrarla.</li>
<li>Bilinci kaybolursa yere yatır, 112'yi ara, <a href="#iy-tyd">kalp masajına</a> başla. Ağızda görünen cismi al (körlemesine parmak sokma).</li>
</ol>
<p><b>Hamile/şişman kişide</b> karın yerine göğüs basısı. <b>Bebekte</b>: yüzüstü ön kola yatır, 5 sırt vuruşu; sonra sırtüstü çevir, iki parmakla 5 göğüs basısı. Bebekte karın basısı yapılmaz.</p>
<p>Karın basısı yapılan herkes sonra mutlaka doktora gösterilmeli.</p>`},

{ id:"iy-kanama", kat:"ilkyardim", baslik:"Ciddi kanama", ikon:"🩸", html:`
<ol>
<li>Mümkünse eldiven ya da poşetle elini koru.</li>
<li>Yaranın üstüne temiz bez/gazlı bezle <b>doğrudan ve güçlü bas</b>. En az 10 dakika bırakma, kaldırıp bakma.</li>
<li>Bez ıslanırsa çıkarma, üstüne yenisini ekle ve basmaya devam et.</li>
<li>Kol/bacakta kırık yoksa uzvu kalp seviyesinin üstüne kaldır.</li>
<li>Baskı bandajı: bezi sıkıca sarıp sabitle; parmak uçlarının rengini kontrol et.</li>
</ol>
<h4>Turnike</h4>
<p>Sadece kol veya bacakta, doğrudan baskıyla durmayan hayati kanamada. Yaranın <b>5–7 cm üstüne</b> (eklem üzerine değil), en az 4 cm geniş bantla; çubukla kanama durana kadar sık. <b>Saati yaz</b> (alnına ya da turnikeye). Bir kez takıldıktan sonra sağlık ekibi gelmeden gevşetme.</p>
<p><b>Saplanmış cismi çıkarma</b>; çevresinden destekleyip sabitle.</p>
<p><b>Burun kanaması:</b> Başı hafif öne eğ, burnun yumuşak kısmını 10 dk sık. Başı geriye yatırma.</p>`},

{ id:"iy-sok", kat:"ilkyardim", baslik:"Şok", ikon:"⚠️", html:`
<p><b>Belirtiler:</b> Soluk, soğuk, nemli cilt; hızlı ve zayıf nabız; hızlı yüzeysel solunum; huzursuzluk, susuzluk, bilinç bulanıklığı.</p>
<ol><li>112. Kanama varsa durdur.</li>
<li>Sırtüstü yatır; kırık/baş yaralanması yoksa bacakları ~30 cm kaldır.</li>
<li>Üstünü ört, ısı kaybını önle (altına da bir şey ser).</li>
<li>Ağızdan bir şey verme. Sürekli konuş, bilinci ve nefesi izle.</li></ol>`},

{ id:"iy-koma", kat:"ilkyardim", baslik:"Bilinçsiz ama nefes alıyor: Derlenme pozisyonu", ikon:"🛌", html:`
<ol><li>Yanına diz çök. Sana yakın kolu dirsekten bükerek yukarı aç.</li>
<li>Uzak kolu göğsünün üstünden getir, el sırtını sana yakın yanağına daya.</li>
<li>Uzak dizini bük, dizden çekerek kişiyi kendine doğru yan çevir.</li>
<li>Başı hafif geri yatır ki ağızdan sıvı dışarı aksın. Üstteki bacak kalça ve diz dik açıda dursun.</li>
<li>Nefesini düzenli kontrol et. Nefes durursa sırtüstü çevir, <a href="#iy-tyd">TYD</a>.</li></ol>
<p>Omurga yaralanması şüphesi varsa sadece hava yolu tehlikedeyse çevir, baş–boyun–gövde aynı hizada.</p>`},

{ id:"iy-kirik", kat:"ilkyardim", baslik:"Kırık, çıkık, burkulma", ikon:"🦴", html:`
<p><b>Kırık belirtileri:</b> Şekil bozukluğu, şiddetli ağrı, şişlik, hareket edememe, kemik sesi.</p>
<ol><li>Hareket ettirme, düzeltmeye çalışma.</li>
<li><b>Açık kırıkta</b> yarayı temiz bezle ört, kemiğe bastırmadan çevresinden kanamayı kontrol et.</li>
<li><b>Atel:</b> Kırığın altındaki ve üstündeki eklemleri de kapsayacak uzunlukta sert bir şey (tahta, karton, rulo dergi). Arasına yumuşak dolgu koy, bağla ama dolaşımı kesme.</li>
<li>Kol kırığında üçgen sargı/askı; bacakta sağlam bacağa da bağlanabilir.</li>
<li>Atel sonrası parmak ucu rengi, ısısı, his kontrolü.</li></ol>
<p><b>Çıkık</b> yerine oturtulmaz; bulunduğu pozisyonda sabitlenir.</p>
<p><b>Burkulma:</b> Dinlendir, 20 dk soğuk uygula (buz doğrudan cilde değmesin), elastik bandaj, yukarı kaldır.</p>
<p><b>Omurga/boyun şüphesi</b> (düşme, trafik kazası, dalma): Kesinlikle kıpırdatma, başı iki yandan sabit tut.</p>`},

{ id:"iy-yanik", kat:"ilkyardim", baslik:"Yanık", ikon:"🔥", html:`
<ol><li>Yanma sürecini durdur: Giysi yanıyorsa "dur–yat–yuvarlan", battaniyeyle boğ.</li>
<li>Yanığı <b>20 dakika</b> serin (buz gibi değil) akan suyla soğut.</li>
<li>Yüzük, saat, sıkı giysiyi şişmeden çıkar; yanığa yapışanı çekme.</li>
<li>Temiz, tüy bırakmayan bezle ya da streç filmle gevşekçe ört.</li>
<li><b>Su toplanmasını patlatma.</b> Diş macunu, yoğurt, yağ, salça sürme.</li></ol>
<p><b>Doktora:</b> Avuç içinden büyük yanık, yüz–el–ayak–genital bölge–eklem yanıkları, elektrik ve kimyasal yanıklar, çocuk ve yaşlılar.</p>
<p><b>Kimyasal:</b> Kuru tozu fırçala, sonra bol suyla en az 20 dk yıka. <b>Elektrik:</b> Önce akımı kes; kişiye çıplak elle dokunma.</p>`},

{ id:"iy-hipotermi", kat:"ilkyardim", baslik:"Hipotermi ve donma", ikon:"🥶", html:`
<p><b>Belirtiler:</b> Titreme (ağır durumda titreme durur!), konuşma bozukluğu, sakarlık, uyuşukluk, bilinç bulanıklığı.</p>
<ol><li>Rüzgârdan, ıslaklıktan uzaklaştır. Islak giysileri çıkar, kuru giydir.</li>
<li>Battaniye, uyku tulumu, folyo; baş ve boynu da ört. Yerden yalıt.</li>
<li>Bilinci yerindeyse ılık, şekerli içecek (alkol ve kafein yok).</li>
<li>Yavaş ısıt: Koltuk altı, kasık, göğüs bölgesine ılık (sıcak değil) şişe. Kolları–bacakları ovma.</li>
<li>Ağır hipotermide kişiyi nazik taşı, sarsma; 112.</li></ol>
<p><b>Donma:</b> Beyaz/gri, sert, hissiz deri. Ovma, karla ovma. Tekrar donma riski varsa çözme. Ilık (37–39 °C) suyla çöz, kabarcıkları patlatma.</p>`},

{ id:"iy-sicak", kat:"ilkyardim", baslik:"Sıcak çarpması ve bitkinliği", ikon:"🥵", html:`
<p><b>Sıcak bitkinliği:</b> Terleme, halsizlik, baş ağrısı, bulantı. Serin yere al, yatır, bacakları kaldır, su ya da tuzlu-şekerli sıvı içir.</p>
<p class="uyari"><b>Sıcak çarpması</b> hayati acildir: Çok yüksek ateş, kızarık sıcak cilt (terleme durabilir), bilinç bulanıklığı, nöbet. Hemen 112.</p>
<ol><li>Gölgeye al, fazla giysiyi çıkar.</li><li>Hızla soğut: Islat ve yelpazele; boyun, koltuk altı, kasığa soğuk kompres. Mümkünse soğuk suya daldır (başı dışarıda).</li><li>Bilinci yerinde ve yutabiliyorsa yudum yudum su.</li></ol>`},

{ id:"iy-zehir", kat:"ilkyardim", baslik:"Zehirlenme", ikon:"☠️", html:`
<p class="uyari">Ulusal Zehir Danışma Merkezi: <b>114</b> (7/24).</p>
<ul><li><b>Kusturma.</b> Süt, tuzlu su, yoğurt verme.</li>
<li>Maddenin kutusunu/şişesini sakla, ne kadar ve ne zaman alındığını not et.</li>
<li><b>Gaz (karbonmonoksit, soba, şofben):</b> Önce pencereleri aç, kişiyi temiz havaya çıkar; içeri girerken kendini riske atma. Baş ağrısı, baş dönmesi, bulantı, uyku hali birden çok kişide aynı anda varsa CO düşün.</li>
<li><b>Mantar:</b> Belirti 6 saat sonra başlasa bile acile git; artan mantarı yanında götür.</li>
<li>Deriye bulaştıysa giysiyi çıkar, 15–20 dk bol suyla yıka. Göze kaçtıysa göz açık 15 dk akan su.</li></ul>`},

{ id:"iy-isirik", kat:"ilkyardim", baslik:"Yılan, akrep, arı sokması ve kene", ikon:"🐍", html:`
<h4>Yılan (Türkiye'de zehirli olanlar başlıca engerekler)</h4>
<ol><li>Kişiyi sakinleştir, hareket ettirme; ısırılan uzvu kalp hizasında ya da biraz aşağıda tut.</li>
<li>Yüzük, saat, sıkı giysiyi çıkar (şişlik gelir).</li>
<li>Yarayı sabunlu suyla yıka, temiz bezle ört, uzvu atelle hareketsiz bırak.</li>
<li><b>Yapma:</b> Kesme, emme, turnike, buz, alkol.</li>
<li>Hızla sağlık kuruluşuna (antiserum). Yılanı yakalamaya çalışma; mümkünse uzaktan fotoğrafını çek.</li></ol>
<h4>Akrep</h4><p>Soğuk kompres, hareketsiz tut, sağlık kuruluşuna başvur; özellikle çocuklarda hızlı ol.</p>
<h4>Arı sokması</h4><p>İğneyi kart kenarıyla sıyırarak çıkar (cımbızla sıkma). Soğuk uygula. <b>Nefes darlığı, yüz–dil şişmesi, yaygın kaşıntı, baygınlık</b> = anafilaksi → 112; kişinin adrenalin oto-enjektörü varsa uyluğun dış yanına uygula.</p>
<h4>Kene (Kırım-Kongo Kanamalı Ateşi riski)</h4><p><b>Çıplak elle dokunma, ezme, yakma, kolonya/yağ sürme.</b> Eldivenle, ince uçlu cımbızı deriye en yakın yerden tut, dik ve sabit kuvvetle çek. Bölgeyi dezenfekte et. Mümkünse en yakın sağlık kuruluşunda çıkarttır. Sonraki 10 gün içinde ateş, halsizlik, kas ağrısı, bulantı olursa hemen başvur.</p>`},

{ id:"iy-goz-yara", kat:"ilkyardim", baslik:"Küçük yaralar, göz ve baş yaralanması", ikon:"🩹", html:`
<p><b>Küçük yara:</b> Temiz suyla iyice yıka, kiri çıkar, antiseptik, temiz örtü. Kızarıklık, ısı, irin, kırmızı çizgi = enfeksiyon; tıbbi yardım. Kirli/paslı yaralarda tetanoz aşısını sorgula.</p>
<p><b>Göze yabancı cisim:</b> Ovma. Bol temiz suyla yıka. Saplanmışsa çıkarmaya çalışma, iki gözü de kapatıp (göz hareketini azaltmak için) sağlık kuruluşuna.</p>
<p><b>Baş yaralanması:</b> Bilinç kaybı, kusma, uyuşukluk, göz bebeklerinde eşitsizlik, kulak/burundan sıvı = ciddi, 112. Kişiyi en az 24 saat yalnız bırakma.</p>`},

/* ============ HAYATTA KALMA REHBERİ ============ */
{ id:"hk-oncelik", kat:"rehber", baslik:"Öncelikler: 3'ler kuralı ve DUR", ikon:"🧭", html:`
<p>Kabaca insan: <b>3 dakika</b> havasız, <b>3 saat</b> korumasız (aşırı soğuk/sıcakta), <b>3 gün</b> susuz, <b>3 hafta</b> yemeksiz yaşayabilir. Önceliğini buna göre sırala:</p>
<ol><li>Güvenlik ve ilk yardım</li><li>Barınak / ısı (giysi, ateş)</li><li>Su</li><li>Sinyal ve iletişim</li><li>Yiyecek</li></ol>
<h4>D-U-R</h4>
<ul><li><b>D</b>ur: Paniğe kapılıp yürümeye başlama. Otur, nefes al.</li>
<li><b>U</b>ygun düşün: Ne biliyorum? Kim nerede olduğumu biliyor? Hava nasıl? Kaç saat gün ışığı kaldı?</li>
<li><b>R</b>ota planla: Kalmak mı, gitmek mi? Elindeki her şeyi say.</li></ul>
<p>Bir yetişkin dinlenme halinde bile günde en az 2–3 litre suya ihtiyaç duyar; sıcakta ve eforla çok daha fazla.</p>`},

{ id:"hk-kayip", kat:"rehber", baslik:"Kayboldum: Ne yapmalıyım?", ikon:"🗺️", html:`
<ul><li><b>Kimin haberi var?</b> Rotanı ve dönüş saatini birine söylediysen, olduğun yerde kalmak çoğu zaman en iyisidir; arama ekipleri son bilinen noktadan başlar.</li>
<li><b>Yola çıkmadan</b> Araçlar → Rota planı ile nereye gittiğini ve dönüş saatini birine bildir.</li>
<li>Telefon pilini koru: Uçak modu, ekran parlaklığı düşük; belirli aralıklarla aç, 112'yi dene.</li>
<li>Uygulamadaki <b>Araçlar → Konum</b> ekranından koordinatlarını oku/yaz; arama sırasında bunu söyle.</li>
<li>Görünür ol: Açık alana yakın, parlak renkli giysiyi as. 3'lü sinyaller (bkz. Sinyal).</li>
<li>Hareket edeceksen: İz bırak (taş yığını, kırık dal, ok işareti), yamaçtan aşağı ve dere boyunca inmek çoğunlukla yerleşime götürür ama şelale/uçurum riskine dikkat.</li>
<li>Karanlıkta ve siste yürüme.</li></ul>`},

{ id:"hk-su", kat:"rehber", baslik:"Su bulma ve arıtma", ikon:"💧", html:`
<h4>Nerede?</h4>
<ul><li>Akarsu, kaynak; vadi tabanları, yeşil bitki kümeleri.</li>
<li><b>Yağmur suyu:</b> Branda, poşet, yaprakla topla — en temiz kaynaklardan.</li>
<li><b>Çiy:</b> Sabah erken bezle otların üstünü sil, sık.</li>
<li><b>Terleme poşeti:</b> Yapraklı dalın üstüne şeffaf poşet geçir, güneşte su yoğunlaşır.</li>
<li>Kuru dere yatağında kıvrımın dış tarafını kaz.</li>
<li>Evde (deprem vb.): Şofben/termosifon tankı, rezervuar tankı (klozet haznesi değil), buzdolabı buzu.</li></ul>
<h4>Güneş damıtıcı (solar still)</h4>
<p>Topraktaki nemi, bitki suyunu, hatta tuzlu suyu veya idrarı buharlaştırıp <b>damıtılmış içme suyu</b> elde eder. Bir naylon örtü ve bir kap yeter.</p>
<ol><li>Güneş alan, nemli toprağa (kuru dere yatağı, vadi tabanı) yaklaşık <b>1 m çapında, 60 cm derinliğinde</b> çukur kaz.</li>
<li>Çukurun ortasına bir kap (bardak, kesilmiş şişe) koy. Varsa kaptan dışarıya uzanan bir hortum/pipet yerleştir; örtüyü açmadan içebilirsin.</li>
<li>Kabın çevresine ezilmiş yeşil yaprak ve ot doldur. Elinde tuzlu su veya idrar varsa çevredeki toprağa dök (kaba değil): Buharlaşan su temizdir.</li>
<li>Çukurun üstünü şeffaf naylonla ört, kenarlarını toprak ve taşla hava almayacak şekilde kapat.</li>
<li>Örtünün ortasına, kabın tam üstüne küçük bir taş koy: Örtü huni gibi çöker, damlalar kaba akar.</li></ol>
<p class="kucuk">Verim düşüktür: Günde yaklaşık 0,2–1 litre. Kazarken terleyerek kaybettiğin sudan az olabilir; serin saatlerde kaz, birden fazla kur. Yaprakların üstüne geçirilen terleme poşeti daha az emek ister.</p>
<h4>Arıtma (tüm doğal sular şüphelidir)</h4>
<ol><li><b>Süz:</b> Bez ya da kahve filtresinden geçir, bulanıklığı al.</li>
<li><b>Kaynat:</b> En güvenilir yöntem. Fokur fokur <b>1 dakika</b> (2000 m üstünde ~3 dakika). 10–15 dakika kaynatmak gerekmez; yakıt ve su boşa gider.</li>
<li><b>Klorlama:</b> Kokusuz, katkısız çamaşır suyu (~%5) ile litreye <b>2 damla</b>, bulanık suya 4 damla; karıştır, <b>30 dakika</b> bekle. Hafif klor kokusu olmalı.</li>
<li><b>Tablet:</b> Kutudaki talimata göre.</li>
<li><b>Güneş (SODIS):</b> Berrak suyu şeffaf PET şişede tam güneşte 6 saat (bulutluda 2 gün). Son çare.</li></ol>
<p class="uyari">Deniz suyu, idrar, alkol içme. Kimyasal kirliliği (sanayi, maden) kaynatma gidermez.</p>`},

{ id:"hk-ates", kat:"rehber", baslik:"Ateş yakma", ikon:"🔥", html:`
<p>Ateş: ısı, su kaynatma, sinyal, moral. Üç şey gerekir: <b>tutuşturucu</b>, <b>çıra</b>, <b>yakıt</b>.</p>
<ol><li><b>Yer:</b> Rüzgârdan korunaklı, ağaç dallarının altında olmayan; kuru ottan temizlenmiş bir alan. Islak zemine dal–taş platformu.</li>
<li><b>Tutuşturucu (avuç dolusu):</b> Kuru ot, kuş yuvası gibi kabarık ağaç kabuğu, çam iğnesi, kâğıt, pamuk (vazelinli pamuk çok iyi yanar), cips!</li>
<li><b>Çıra:</b> Kurşun kalem → parmak kalınlığına kuru dal; çam reçinesi.</li>
<li><b>Yakıt:</b> Bilek kalınlığında ve daha kalın odun. Yerdeki değil, ağaçta kurumuş ölü dallar daha kurudur.</li>
<li>Çadır (tipi) ya da kütük kulübe dizilimi kur; alttan tutuştur, nazikçe üfle.</li></ol>
<h4>Ateşi sürdürmek</h4>
<ul><li>Yakmadan <b>önce</b> her boydan yakıtı (kibrit çöpü, kalem, parmak, bilek kalınlığı) yığ; tutuştuktan sonra arayacak vaktin olmaz.</li>
<li>Kalınlığı adım adım artır, ateşi boğma: Alevin hava alması gerekir.</li>
<li>Gece için kalın kütükleri yan yana koy; közün üstünü külle örtmek ateşi sabaha kadar saklar.</li>
<li>Ateşin arkasına taş ya da kütükten bir yansıtıcı duvar yap; ısıyı sana ve barınağa geri yollar. Islak odunu ateşin kenarında kurut.</li>
<li>Nehir taşlarını ateşe koyma: İçindeki su yüzünden patlayabilir.</li></ul>
<h4>Huş kabuğu</h4>
<p>Huşun beyaz, kâğıt gibi dış kabuğu içerdiği yağ sayesinde <b>ıslakken bile</b> tutuşur; en iyi doğal tutuşturuculardandır. Türkiye'de özellikle Kuzeydoğu Anadolu ve Karadeniz yaylalarında bulunur. Ölü ya da devrilmiş ağaçlardan soy, canlı ağacı soyma (ağaç zarar görür). İnce şeritler hâlinde yırtıp kabart, ferro çubuk kıvılcımı bile yeter.</p>
<h4>Kibrit/çakmak yoksa</h4>
<ul><li><b>Ferro (magnezyum) çubuk:</b> Çakının sırtıyla bastırarak hızla sıyır, kıvılcımı tutuşturucunun içine düşür. Magnezyumlu olanlarda önce bir tutam talaş kazıyıp üstüne kıvılcım ver.</li>
<li><b>Büyüteç, gözlük camı:</b> Güneşi küçük bir noktaya odakla, koyu renkli tutuşturucu daha hızlı yanar.</li>
<li><b>9V pil + bulaşık teli (çelik yün):</b> Pilin iki kutbunu çelik yüne sürt, yün kızarıp yanar.</li>
<li><b>Araç aküsü:</b> Takviye kablolarını aküye bağla, diğer uçlarını <b>aküden birkaç metre uzakta</b>, tutuşturucunun yanında birbirine kısa süre değdir ya da çelik yüne dokundur; çıkan kıvılcımı tutuşturucuya düşür.</li></ul>
<p class="uyari">Akü hidrojen gazı çıkarır: Kıvılcımı <b>asla aküye yakın</b> çıkarma, patlayabilir. Kabloların uçlarını uzun süre birbirine değdirme; kablo ısınır, akü zarar görür. Önce artı (kırmızı), sonra eksi kutbu bağla; işin bitince önce eksiyi sök.</p>
<p class="uyari">Kuru mevsimde orman yangını riski çok yüksek. Ateşi asla gözetimsiz bırakma; söndürürken bol su dök, karıştır, eline değdiğinde sıcak olmamalı. Kapalı alanda ateş/soba = karbonmonoksit tehlikesi.</p>`},

{ id:"hk-barinak", kat:"rehber", baslik:"Barınak ve vücut ısısı", ikon:"⛺", html:`
<ul><li><b>Önce yerden yalıt:</b> Soğuk zemin vücut ısısını havadan çok çalar. En az <b>10–15 cm</b> (bastırınca bile bir karış kalacak kadar) kuru yaprak, çam dalı, ot, çanta, karton ser. Gece sıkışacağı için başta daha kalın yap.</li>
<li><b>Küçük tut:</b> Barınak ne kadar küçükse o kadar sıcak.</li>
<li><b>Yer seçimi:</b> Rüzgâr almayan, sel/çığ/taş düşmesi riski olmayan, kuru dere yatağı dışında, çürük ağaç altında olmayan yer.</li>
<li><b>Sundurma:</b> İki ağaç arasına yatay sırık, üstüne çapraz dallar, onun üstüne yaprak/yosun. Açık yüzünü rüzgârın tersine ve ateşe çevir.</li>
<li><b>Branda/folyo:</b> İp ile çatı şeklinde ger; altına da ser.</li>
<li><b>Giysi:</b> Katmanlı giy, ıslanmadan önce çıkar; terlemekten kaçın. Pamuk ıslanınca ısı tutmaz; yün ve sentetik tutar. Başı ve boynu ört.</li>
<li>Kar varsa kar oyuğu iyi yalıtır; havalandırma deliği aç.</li>
<li><b>Islak giysi</b> ısıyı çok hızlı kaybettirir: Hemen değiştir, yoksa sık ve ateşin yanında kurut.</li>
<li><b>Termal (folyo) battaniye:</b> Parlak yüz vücuda dönük sarın; rüzgârı keser, ısıyı geri yansıtır. Barınak çatısına gerildiğinde ateşin ısısını aşağı yansıtır.</li></ul>
<h4>Doğal barınaklar</h4>
<ul><li><b>Kaya altı / çıkıntı:</b> Rüzgârı ve yağmuru keser. Üstte çatlak, gevşek taş olmamalı. Önüne dal–branda duvar ve ateş: Kaya ısıyı geri yansıtır.</li>
<li><b>Mağara:</b> Sadece girişine yakın kısmı kullan, derine girme (kaybolma, gaz, göçük). Hayvan izi, dışkı, kemik varsa bir hayvanın yuvasıdır, uzak dur. Yağmurda içeri su basabilir. Ateşi girişte yak, duman içeride birikmesin.</li>
<li><b>Devrilmiş ağaç:</b> Gövdenin rüzgâr almayan tarafına dalları yaslayıp çatı yap, üstünü yaprakla ört. Sağlam ve yere oturmuş olmalı; dengesi bozuk ağaç altında kalma.</li>
<li><b>Çam altı:</b> Alçak dallı çamın gövde dibi kar ve yağmurdan korunaklı bir oyuk olur.</li>
<li><b>Kaçın:</b> Kuru dere yatakları (ani sel), tek başına ağaç ve tepe noktası (yıldırım), çürük dallar altı, çığ ve taş düşme yolu.</li></ul>`},

{ id:"hk-yon", kat:"rehber", baslik:"Yön bulma (pusulasız)", ikon:"🧭", html:`
<ul><li><b>Güneş:</b> Doğudan doğar, batıdan batar. Türkiye'de öğle saatlerinde güneş güneydedir.</li>
<li><b>Gölge çubuğu:</b> Yere dik çubuk tak, gölge ucunu taşla işaretle. 15–20 dk sonra yeni ucu işaretle. İlk işaret → ikinci işaret çizgisi kabaca <b>batı → doğu</b> yönüdür.</li>
<li><b>Analog saat (kuzey yarımküre):</b> Akrebi güneşe çevir. Akrep ile 12 arasının ortası güneyi gösterir (yaz saati uygulanıyorsa 12 yerine 1'i kullan).</li>
<li><b>Kutup Yıldızı:</b> Büyük Ayı'nın (Büyük Kepçe) kepçe ağzındaki iki yıldızı birleştir, bu mesafenin ~5 katı uzat: Kutup Yıldızı = kuzey.</li>
<li><b>Ay / hilal:</b> Hilalin iki boynuz ucunu birleştiren çizgiyi yere doğru uzat: Ufka değdiği nokta kabaca <b>güneydir</b> (kuzey yarımkürede).</li>
<li><b>Dolunay</b> gece yarısı civarında güneydedir. Ay da güneş gibi doğudan doğar, batıdan batar.</li>
<li>Yosun ve karınca yuvası gibi doğal işaretler <b>güvenilmezdir</b>; tek başına kullanma.</li></ul>
<p>Pusula ve harita kullanımı için: <a href="#hk-pusula">Pusula ve harita okuma</a>.</p>
<p>Telefonda <b>Araçlar → Pusula</b> manyetik sensörle çalışır, internet gerektirmez. Metal ve mıknatıslardan uzak tut, telefonu 8 çizerek kalibre et.</p>`},

{ id:"hk-pusula", kat:"rehber", baslik:"Pusula ve harita okuma", ikon:"🗺️", html:`
<h4>Haritayı tanı</h4>
<ul><li><b>Ölçek:</b> 1:25.000 haritada 1 cm = 250 m; 1:50.000'de 1 cm = 500 m.</li>
<li><b>Kuzey:</b> Haritanın üstü kuzeydir.</li>
<li><b>Eş yükselti eğrileri</b> (topoğrafik harita, kahverengi çizgiler): Her çizgi aynı yüksekliği birleştirir.
  <ul><li>Çizgiler <b>sık</b> → dik yamaç; <b>seyrek</b> → düz, yürümesi kolay.</li>
  <li>İç içe <b>kapalı halkalar</b> → tepe (en içteki en yüksek).</li>
  <li><b>V</b> şekli yukarı (yüksek yöne) bakıyorsa → dere, vadi; aşağı bakıyorsa → sırt.</li>
  <li>İki tepe arasındaki alçak geçit → boyun (geçiş yeri).</li></ul></li>
<li>Uygulamadaki Harita'da sağ üstten <b>Topoğrafik</b> katmanı seç.</li></ul>
<h4>Haritayı yönlendir</h4>
<p>Pusulayı haritanın üstüne koy, haritayı pusulanın kuzeyi haritanın üstünü gösterecek şekilde çevir. Artık haritadaki her şey arazideki yönüyle aynıdır. Pusula yoksa çevrede tanıdığın iki şeyi (tepe, köy, yol) haritadakiyle aynı hizaya getir.</p>
<h4>Azimut (yön açısı) almak ve yürümek</h4>
<ol><li>Gideceğin yeri arazide gör ya da haritada bul.</li>
<li>Pusulayla hedefe dön, açıyı oku (ör. 70°). Uygulamada <b>Araçlar → Pusula</b>'daki <b>hedef açı</b> ile kilitle.</li>
<li>Bu yönde uzakta belirgin bir şey seç (ağaç, kaya), ona yürü; oradan yeniden açı al. Gözün pusulada yürüme.</li>
<li>Engelin etrafından dolaşırken: 90° dön, adım say; engeli geç; 90° geri dön; aynı adımı ters yönde yürüyüp çizgine dön.</li>
<li><b>Geri dönüş açısı</b> = açı + 180° (180'den büyükse −180°). 70° gittiysen dönüş 250°.</li></ol>
<h4>Bilmen gerekenler</h4>
<ul><li><b>Manyetik sapma:</b> Pusula manyetik kuzeyi gösterir. Türkiye'de fark küçüktür (yaklaşık 5–7° doğu), ama 1 km'de ~100 m kayma yapar.</li>
<li>Pusulayı metalden, araçtan, elektrik hattından, mıknatıslı kılıflardan uzak tut. Telefon pusulasını 8 çizerek kalibre et.</li>
<li><b>Mesafe:</b> Ortalama bir yetişkin düz arazide 100 m'yi ~60–70 çift adımda yürür (kendininkini önceden say). Yokuş, kar, çalılık hızını yarıya düşürür.</li>
<li><b>Kaçış rotası:</b> Yola çıkmadan iki alternatif güzergâh (ana yol, köy, dere boyu) belirle ve haritada noktalarını kaydet. Bkz. <b>Araçlar → Rota planı</b>.</li></ul>`},

{ id:"hk-sinyal", kat:"rehber", baslik:"Sinyal verme", ikon:"📣", html:`
<ul><li><b>3'lü kural:</b> Herhangi bir şeyin üçlüsü yardım çağrısıdır: 3 ateş (üçgen), 3 düdük, 3 ışık çakması, 3 taş yığını.</li>
<li><b>SOS (Mors):</b> · · · — — — · · · (kısa-kısa-kısa, uzun-uzun-uzun, kısa-kısa-kısa). Araçlar → SOS ekranı fener ya da ekranla otomatik verir.</li>
<li><b>Düdük</b> sesi bağırmaktan çok uzağa gider ve yorulmazsın. Araçlar → Düdük.</li>
<li><b>Ayna / parlak yüzey:</b> Güneşi hedefe yansıt; iki parmağını V yapıp hedefi aralarına al, ışığı parmaklarına düşür.</li>
<li><b>Yer–hava işaretleri</b> (en az 3 m boyunda, zeminle kontrastlı): <b>V</b> = yardım gerekli, <b>X</b> = tıbbi yardım gerekli, <b>→</b> = bu yöne gidiyoruz, <b>Y</b> = evet, <b>N</b> = hayır.</li>
<li><b>Duman:</b> Gündüz ateşe yeşil yaprak koy (beyaz duman); karlı/açık zeminde lastik/yağ siyah duman verir.</li>
<li>Helikoptere: İki kol yukarı "Y" = yardım lazım; bir kol yukarı bir kol aşağı = gerek yok.</li></ul>`},

{ id:"hk-yiyecek", kat:"rehber", baslik:"Yiyecek", ikon:"🍞", html:`
<p>Yiyeceksiz haftalarca yaşanabilir; enerjini yiyecek aramaya harcama, önce su ve barınak.</p>
<ul><li><b>Mantar: Asla tanımadığın yabani mantarı yeme.</b> Ölümcül türler yenebilenlere çok benzer; pişirmek zehri yok etmez.</li>
<li><b>Bitkiler:</b> Kesin tanıdıklarını ye (ısırgan otu haşlanarak, karahindiba, ebegümeci, böğürtlen, kuşburnu, ceviz, kestane, meşe palamudu suda bekletilip). Süt gibi beyaz özsuyu olan, badem kokulu, şemsiye çiçekli (baldıran riski) bitkilerden uzak dur.</li>
<li><b>Böcekler:</b> Çekirge, kurtçuk gibi böcekler iyi protein; pişir. Parlak renkli, kıllı, kötü kokulu olanları yeme.</li>
<li><b>Balık:</b> Tatlı su balığını iyice pişir.</li>
<li>Suyun azsa yemeyi azalt: Sindirim, özellikle protein, su harcar.</li></ul>`},

{ id:"hk-deprem", kat:"rehber", baslik:"Deprem", ikon:"🏚️", html:`
<h4>Sarsıntı sırasında: ÇÖK – KAPAN – TUTUN</h4>
<ul><li>Sağlam bir masanın yanına/altına çök, başını ve enseni koru, sarsıntı bitene kadar tutun.</li>
<li>Pencere, cam, devrilebilecek dolaplardan uzak dur. Merdiven ve asansör kullanma; balkona çıkma.</li>
<li>Yataktaysan yüzüstü dön, yastıkla başını koru.</li>
<li>Dışarıdaysan bina, direk ve ağaçlardan uzak açık alana. Araçtaysan köprü/tünel/viyadükten uzakta güvenli şekilde dur, araçta kal.</li></ul>
<h4>Sonrasında</h4>
<ul><li>Gaz, elektrik, suyu kapat. Kibrit/çakmak yakma (gaz kaçağı). Fenerle bak.</li>
<li>Hasarlı binaya girme; artçılar olacak. Mahallenin <b>toplanma alanına</b> git (e-Devlet / AFAD'dan önceden öğren).</li>
<li>Telefonu acil olmayan aramalarla meşgul etme; SMS kullan.</li></ul>
<h4>Enkaz altında kalırsan</h4>
<ul><li>Sakin kal, enerjini koru. Ağzını–burnunu bezle kapat (toz).</li>
<li>Bağırmak yerine borulara, duvara <b>3'lü vuruşlarla</b> vur, düdük çal. Kurtarma ekipleri "sessizlik" anlarında dinler.</li>
<li>Telefonun varsa şarjı koru; ışık ve sesi aralıklarla kullan.</li></ul>`},

{ id:"hk-sel-yangin", kat:"rehber", baslik:"Sel, yangın ve fırtına", ikon:"🌊", html:`
<h4>Sel</h4><ul><li>Hemen yüksek yere çık. Akan suya girme: 15 cm akıntı insanı, 30–60 cm araç sürükler.</li><li>Alt geçit, dere yatağı, bodrumdan uzak dur. Sel suyu kirlidir ve elektrik taşıyabilir.</li></ul>
<h4>Bina yangını</h4><ul><li>Dumanda eğil, emekle (temiz hava aşağıdadır), ağzını ıslak bezle kapat.</li><li>Kapıyı açmadan önce elinin tersiyle dokun; sıcaksa açma, başka çıkış ara. Arkandan kapıları kapat.</li><li>Asansör kullanma.</li></ul>
<h4>Orman yangını</h4><ul><li>Rüzgârın estiği yönün tersine ve yana doğru, yangından uzaklaş. Yokuş yukarı kaçma (ateş yukarı hızla tırmanır).</li><li>Kaçış yoksa yanmış alan, kayalık ya da su kenarı; yerde yat, yün/pamuk ile örtün (sentetik eriyebilir).</li><li>Yangın ihbar: <b>112</b>.</li></ul>
<h4>Fırtına ve yıldırım</h4><ul><li>Gök gürültüsü duyuluyorsa yıldırım menzilindesin. Tepe, tek ağaç, metal, sudan uzak dur.</li><li>Açıkta kaldıysan ayakları bitişik çömel, başını eğ; yere uzanma.</li></ul>`},

{ id:"hk-canta", kat:"rehber", baslik:"Acil durum çantası", ikon:"🎒", html:`
<p>Her ev bireyi için kapının yanında hazır dursun; 6 ayda bir kontrol et.</p>
<ul class="checklist">
<li>Su (kişi başı en az 3 gün; günde ~4 L) ve arıtma tableti</li>
<li>Uzun ömürlü yiyecek: konserve (anahtarlı), kuru meyve, bisküvi, enerji barı</li>
<li>İlk yardım çantası + düzenli kullanılan ilaçlar (en az 1 haftalık), reçete fotokopisi</li>
<li>El feneri, kafa lambası, yedek pil; powerbank ve kablo</li>
<li>Pilli/manivelalı radyo</li>
<li>Düdük, folyo battaniye, yağmurluk, iş eldiveni, toz maskesi</li>
<li>Çakı/çok amaçlı alet, ip (10 m), koli bandı, çöp poşeti</li>
<li>Çakmak, su geçirmez kibrit</li>
<li>Yedek iç çamaşırı, çorap, sıcak tutan giysi; ıslak mendil, hijyen malzemesi</li>
<li>Kimlik, tapu, sigorta poliçesi fotokopileri (su geçirmez poşette), biraz nakit</li>
<li>Önemli telefon numaralarının kâğıt listesi; Araçlar → Acil kartım'ın yazılı kopyası</li>
<li>Gözlük, bebek mamaları, evcil hayvan maması</li>
<li>PMR446 telsiz çifti + yedek pil (bkz. Telsiz)</li>
</ul>
<p class="kucuk">Maddelere dokunarak işaretleyebilirsin; işaretler bu cihazda saklanır.</p>`},

/* ============ TELSİZ ============ */
{ id:"ts-temel", kat:"telsiz", baslik:"Telsiz türleri ve kurallar (Türkiye)", ikon:"📻", html:`
<p>Şebeke çöktüğünde telsiz, kendi aranızda konuşmanın en güvenilir yoludur. Türkiye'de sıradan kişinin kullanabileceği iki yol vardır:</p>
<h4>1. PMR446 — lisanssız</h4>
<ul><li><b>Lisans, ücret, sınav gerekmez.</b> BTK düzenlemesine uygun PMR446 telsizler serbestçe kullanılabilir.</li>
<li>446 MHz bandında <b>16 kanal</b>, en fazla <b>0,5 W</b> güç, anten sökülemez.</li>
<li>Menzil: Şehirde ve binalar arasında genelde <b>birkaç yüz metre – 1–2 km</b>; açık alanda, tepeden tepeye birkaç km. Kutudaki "12 km" ideal koşuldur, buna güvenme.</li>
<li>Tüm marka PMR446 telsizler birbiriyle konuşur (kanal ve alt kanal aynı olmalı).</li>
<li>Avrupa dışı (ör. ABD'nin FRS/GMRS) telsizleri ve frekansı açılmış "Baofeng" türü cihazları lisanssız kullanmak <b>yasaktır</b>.</li></ul>
<h4>2. Amatör telsiz — lisanslı</h4>
<ul><li>BTK'nın amatör telsizcilik sınavını geçip çağrı işareti alman gerekir. Çok daha güçlü cihazlar, röleler ve şehirler arası/uluslararası bağlantı.</li>
<li>Afetlerde <b>TRAC</b> (Türkiye Radyo Amatörleri Cemiyeti) gönüllüleri Türkiye Afet Müdahale Planı kapsamında haberleşme desteği verir. TRAC şubeleri sınava hazırlıkta da yardımcı olur.</li></ul>
<p class="kucuk">Genel kural: Gerçek can tehlikesi anında yardım çağırmak her zaman önceliklidir; ancak lisanssız cihazla başka frekanslarda yayın yapmayı alışkanlık hâline getirme.</p>`},

{ id:"ts-kullanim", kat:"telsiz", baslik:"Telsiz nasıl kullanılır? (temel)", ikon:"🎙️", html:`
<ol><li><b>Kanalı ayarla:</b> Grubunla önceden anlaştığın kanal (ör. Kanal 5) ve alt kanal/CTCSS kodunu (ör. 12) seç. Herkes aynı olmalı.</li>
<li><b>Dinle:</b> Konuşmadan önce birkaç saniye kanalı dinle; başkası konuşuyorsa bekle.</li>
<li><b>Bas – bekle – konuş:</b> PTT (bas-konuş) tuşuna bas, <b>1 saniye bekle</b>, sonra konuş. Yoksa ilk hecen kesilir.</li>
<li>Mikrofonu ağzından <b>3–5 cm</b> uzakta, yandan tut; normal sesle konuş, bağırma.</li>
<li><b>Konuşma bitince tuşu bırak.</b> Telsiz tek yönlüdür: Tuşa basılıyken karşıyı duyamazsın, iki kişi aynı anda konuşursa kimse anlaşılmaz.</li>
<li>Kısa konuş (en fazla 20–30 sn). Uzun mesajı parçalara böl.</li></ol>
<h4>Ayarlar</h4>
<ul><li><b>Squelch (susturma):</b> Boşta hışırtıyı keser. Çok yüksek ayar zayıf sinyalleri de keser.</li>
<li><b>CTCSS/DCS ("alt kanal"):</b> Gizlilik değildir! Sadece kodu farklı olanları duymamanı sağlar; başkaları seni yine duyar. Acil durumda alt kanalı <b>kapatıp</b> dinlemek daha fazla kişiyi duymanı sağlar.</li>
<li><b>VOX:</b> Sesle otomatik yayın. Gürültülü ortamda istenmeden yayın yapar, acil durumda kapalı tut.</li>
<li><b>Tarama (scan):</b> Tüm kanalları dolaşıp konuşma olanı bulur; kayıp birini ararken işe yarar.</li></ul>
<h4>Menzili artırmak için</h4>
<ul><li>Yüksek yere çık (tepe, üst kat, çatı). Telsizde menzil büyük ölçüde <b>görüş hattına</b> bağlıdır.</li>
<li>Anteni dik tut, vücuduna ve metale yaslama; araç içinden değil dışarıdan konuş.</li>
<li>Pencere kenarı, açık alan. Beton ve tepeler sinyali keser.</li>
<li>Ulaşamıyorsan aradaki biri <b>aktarıcı</b> olur: Mesajı alıp diğer tarafa iletir.</li></ul>
<h4>Pil</h4><ul><li>Yayın (konuşma) pili en çok harcayan iştir; dinlemek az harcar. Kısa konuş.</li><li>Düşük güç (L) seçeneği varsa yakındakilerle onu kullan.</li><li>AA/AAA pil kullanan modeller afette daha pratiktir; yedek pil bulundur.</li></ul>`},

{ id:"ts-usul", kat:"telsiz", baslik:"Konuşma usulü ve kalıplar", ikon:"🗣️", html:`
<p><b>Çağrı kalıbı:</b> "[Karşı taraf], [karşı taraf], burası [sen], tamam."<br><i>Örnek: "Ayşe, Ayşe, burası Hasan, tamam."</i><br>Cevap: "Hasan, burası Ayşe, dinliyorum, tamam."</p>
<table class="tablo"><tr><th>Söz</th><th>Anlamı</th></tr>
<tr><td><b>Tamam</b></td><td>Sözüm bitti, cevap bekliyorum (İng. "over")</td></tr>
<tr><td><b>Anlaşıldı</b></td><td>Mesajı aldım, anladım (İng. "roger")</td></tr>
<tr><td><b>Tekrar et</b></td><td>Anlamadım, yeniden söyle</td></tr>
<tr><td><b>Bekle</b></td><td>Biraz bekle, döneceğim</td></tr>
<tr><td><b>Doğru / Olumsuz</b></td><td>Evet / Hayır (kısa sözcükler kesilebilir)</td></tr>
<tr><td><b>Kodluyorum / Harf harf</b></td><td>Fonetik alfabeyle heceleyeceğim</td></tr>
<tr><td><b>Görüşme bitti</b></td><td>Konuşma sona erdi, cevap beklemiyorum (İng. "out")</td></tr>
<tr><td><b>Acil! Acil! Acil!</b></td><td>Kanalı boşaltın, acil mesaj var</td></tr></table>
<h4>İpuçları</h4>
<ul><li>Önce düşün, sonra bas. Mesajı kafanda kur.</li>
<li>Rakamları tek tek söyle: "beş-dört-yedi". Saatleri 24 saat biçiminde: "on dört otuz".</li>
<li>Önemli bilgiyi (adres, koordinat) karşı tarafa <b>tekrarlat</b>.</li>
<li>Kanal herkese açıktır; kimlik numarası, ev boş gibi bilgileri söyleme.</li>
<li>Duygusal ve uzun konuşmalar kanalı kilitler; acil durumda başkasının hayatı o kanala bağlı olabilir.</li></ul>`},

{ id:"ts-acil", kat:"telsiz", baslik:"Acil yardım çağrısı nasıl yapılır?", ikon:"🆘", html:`
<ol><li>Kanalda konuşma varsa araya gir: <b>"Acil! Acil! Acil!"</b></li>
<li>Kim olduğunu söyle: "Burası Hasan."</li>
<li>Mesajı şu sırayla ver, sonra karşı taraftan tekrar ettir:</li></ol>
<div class="kutu"><b>N-E-K-A-İ</b><br>
<b>N</b>erede: Adres, yakın bir işaret, koordinat (Araçlar → Konum)<br>
<b>E</b>ne oldu: Göçük, yangın, yaralanma…<br>
<b>K</b>aç kişi: Yaralı sayısı, durumları (bilinç var/yok, kanama)<br>
<b>A</b>nlık ihtiyaç: Ambulans, kurtarma ekibi, su, ilaç<br>
<b>İ</b>letişim: Hangi kanalda bekleyeceğin, bir sonraki dinleme saatin</div>
<p>Cevap gelmezse <b>aralıklarla</b> (ör. 2–3 dakikada bir) tekrarla; aradaki sürede dinle. Kanal taraması yap; birden fazla kanalda dene.</p>
<p><b>Acil çağrı duyarsan:</b> Sus, not al (kağıt-kalem), arayana "Anlaşıldı" de ve bilgiyi 112'ye ya da yetkililere ilet. Kanalı onun için boş tut.</p>`},

{ id:"ts-fonetik", kat:"telsiz", baslik:"Fonetik alfabe", ikon:"🔤", html:`
<p>İsim ve adresleri harf harf vermek için. Türkiye'de yaygın olan <b>Türkçe (şehir adlı)</b> alfabe ve uluslararası NATO alfabesi:</p>
<div id="fonetik-tablo"></div>
<p class="kucuk">Örnek: "Taşdelen — Tokat, Adana, Şırnak, Denizli, Edirne, Lüleburgaz, Edirne, Niğde."</p>`},

{ id:"ts-plan", kat:"telsiz", baslik:"Aile telsiz planı", ikon:"👨‍👩‍👧", html:`
<p>Telsiz ancak önceden anlaşılmış bir planla işe yarar. Aşağıdaki planı ailenle doldur, buraya kaydet ve kâğıda yazıp çantaya koy.</p>
<div id="telsiz-plan"></div>
<h4>Önerilen alışkanlıklar</h4>
<ul><li><b>Dinleme saatleri:</b> Telefon çalışmıyorsa herkes telsizi her saat başı (ör. :00–:05) açar; pil tasarrufu sağlar.</li>
<li>Ayda bir kısa deneme yap: Kim nereden kimi duyabiliyor?</li>
<li>Yedek kanal belirle: Ana kanal kalabalıksa herkes otomatik yedeğe geçsin.</li>
<li>Çocuklara PTT'ye basıp bırakmayı ve "tamam" demeyi öğretin.</li></ul>`}
];

window.FONETIK = [
["A","Adana","Alfa"],["B","Bolu","Bravo"],["C","Ceyhan","Charlie"],["Ç","Çanakkale","—"],["D","Denizli","Delta"],["E","Edirne","Echo"],["F","Fatsa","Foxtrot"],["G","Giresun","Golf"],["Ğ","Yumuşak G","—"],["H","Hatay","Hotel"],["I","Isparta","—"],["İ","İzmir","India"],["J","Jandarma","Juliett"],["K","Kars","Kilo"],["L","Lüleburgaz","Lima"],["M","Muş","Mike"],["N","Niğde","November"],["O","Ordu","Oscar"],["Ö","Ödemiş","—"],["P","Polatlı","Papa"],["Q","Kuebek","Quebec"],["R","Rize","Romeo"],["S","Sinop","Sierra"],["Ş","Şırnak","—"],["T","Tokat","Tango"],["U","Uşak","Uniform"],["Ü","Ünye","—"],["V","Van","Victor"],["W","Vaşington","Whiskey"],["X","Iks","X-ray"],["Y","Yozgat","Yankee"],["Z","Zonguldak","Zulu"]
];

window.MORS = {A:".-",B:"-...",C:"-.-.",Ç:"-.-..",D:"-..",E:".",F:"..-.",G:"--.",Ğ:"--.-.",H:"....",I:"..",İ:".-..-",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",Ö:"---.",P:".--.",Q:"--.-",R:".-.",S:"...",Ş:".--..",T:"-",U:"..-",Ü:"..--",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..","0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....","7":"--...","8":"---..","9":"----."};
