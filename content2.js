// Hayatta Kal — ek içerik: düğümler, bitki & hayvan, ilaç kartları
window.ICERIK.push(
/* ============ DÜĞÜMLER ============ */
{ id:"dg-temel", kat:"dugum", baslik:"Hangi düğüm ne için?", ikon:"🪢", html:`
<table class="tablo"><tr><th>İhtiyaç</th><th>Düğüm</th></tr>
<tr><td>İpin ucunda kaymayan ilmik (kurtarma, bel, ağaca bağlama)</td><td><a href="#dg-izbarco">İzbarço</a>, <a href="#dg-sekiz">Sekiz ilmiği</a></td></tr>
<tr><td>İpi direğe/ağaca hızlıca bağlamak</td><td><a href="#dg-kazik">Kazık (volta) bağı</a>, <a href="#dg-yarimvolta">İki yarım volta</a></td></tr>
<tr><td>Çadır gergisi, ayarlanabilir ip</td><td><a href="#dg-germe">Germe bağı</a></td></tr>
<tr><td>Brandayı, yükü sıkıca germek</td><td><a href="#dg-kamyoncu">Kamyoncu bağı</a></td></tr>
<tr><td>İki ipi birbirine eklemek</td><td><a href="#dg-ana">Ana (sancak) bağı</a>; aynı kalınlıktaysa <a href="#dg-camadan">Camadan</a></td></tr>
<tr><td>Kütük, dal sürüklemek</td><td><a href="#dg-kereste">Kereste bağı</a></td></tr>
<tr><td>İp ucunun kaçmasını önlemek</td><td><a href="#dg-sekiz">Sekiz bağı</a></td></tr>
<tr><td>Kalın ipe tırmanma/tutunma halkası</td><td><a href="#dg-prusik">Prusik</a></td></tr></table>
<h4>Terimler</h4><ul><li><b>Uç (çalışan uç):</b> İpin hareket ettirdiğin serbest ucu.</li><li><b>Ana kısım:</b> İpin yük taşıyan, uzun tarafı.</li><li><b>Kasa/göz:</b> İpte oluşturduğun halka.</li></ul>
<p class="uyari">Hiçbir düğümü ihtiyaç anında ilk kez deneme. Evde bir ip parçasıyla gözü kapalı yapabilene kadar çalış. Düğümden sonra ucunda en az bir avuç ip payı bırak ve yük vermeden önce sıkıca çekip otur.</p>`},

{ id:"dg-izbarco", kat:"dugum", baslik:"İzbarço bağı (bowline)", ikon:"🪢", html:`
<p><b>Ne için:</b> Ucunda kaymayan sabit ilmik. Bir kişinin beline (kurtarma), ağaca, halkaya bağlamak. Yük altında sıkışmaz, sonra kolayca çözülür. "Düğümlerin kralı".</p>
<ol><li>Ana kısım üzerinde küçük bir göz yap: ip ana kısmın <b>üstünden</b> geçsin.</li>
<li>Ucu bu gözün içinden <b>aşağıdan yukarı</b> geçir ("tavşan delikten çıkar").</li>
<li>Ucu ana kısmın <b>arkasından</b> dolaştır ("ağacın etrafından döner").</li>
<li>Ucu geldiği yoldan küçük gözün içine <b>yukarıdan aşağı</b> geri sok ("deliğe geri girer").</li>
<li>Uçla yanındaki ilmik kolunu bir elde, ana kısmı diğer elde tutup sıkıca çek.</li></ol>
<p><b>Kontrol:</b> Uç, büyük ilmiğin <b>içinde</b> kalmalı. Dışında kaldıysa "yanlış (sol) izbarço"dur, daha zayıftır.</p>
<p class="kucuk">Yüksüzken gevşeyebilir; uca bir yarım volta atarak sabitle.</p>`},

{ id:"dg-sekiz", kat:"dugum", baslik:"Sekiz bağı ve sekiz ilmiği", ikon:"8️⃣", html:`
<h4>Sekiz bağı (durdurucu)</h4>
<p><b>Ne için:</b> İp ucunun bir halkadan, makaradan kaçmasını önler.</p>
<ol><li>Ucu ana kısmın üstünden geçirip bir göz yap.</li><li>Ucu ana kısmın <b>arkasından</b> dolaştır.</li><li>Ucu gözün içinden <b>önden</b> geçir. "8" şekli oluşur; sık.</li></ol>
<h4>Sekiz ilmiği (çift kat)</h4>
<p><b>Ne için:</b> Tırmanıcıların kullandığı, çok sağlam, kaymayan ilmik. İzbarçodan daha güvenli ama yük altında çözmesi zor.</p>
<ol><li>İpi ucundan ~1 m katla (çift kat).</li><li>Çift katlı iple yukarıdaki gibi sekiz bağı at.</li><li>İlmiğin tüm kolları düzgün ve paralel dursun ("örülmüş"), sonra dört kolu ayrı ayrı çekip sık.</li></ol>
<p><b>Halkaya/ağaca geçirmek için (izli sekiz):</b> Önce tek kat iple gevşek bir sekiz bağı at, ucu ağacın etrafından dolaştır, sonra ucu ilk sekizin izinden ters yönde birebir geri geçir.</p>`},

{ id:"dg-kazik", kat:"dugum", baslik:"Kazık (volta) bağı (clove hitch)", ikon:"🪵", html:`
<p><b>Ne için:</b> İpi direğe, kazığa, dala hızla bağlamak; çadır direği, sedye ve atel bağlamaya başlamak. Uzunluğu kolayca ayarlanır.</p>
<ol><li>Ucu direğin etrafından bir tur dolaştır.</li><li>Ucu ana kısmın <b>üstünden çapraz</b> geçirip direğin etrafından ikinci tur at.</li><li>İkinci turda ucu, oluşan çaprazın <b>altından</b> geçir. Uç ve ana kısım zıt yönlerden çıkmalı.</li><li>Sık.</li></ol>
<p class="kucuk">Dönen bir direkte veya yük yön değiştirdiğinde kayabilir. Kalıcı bağlamada sonuna bir yarım volta ekle.</p>`},

{ id:"dg-yarimvolta", kat:"dugum", baslik:"İki yarım volta (two half hitches)", ikon:"➰", html:`
<p><b>Ne için:</b> İpi ağaca, halkaya, araç çekme gözüne bağlamak; branda ipi. Basit ve güvenilir.</p>
<ol><li>Ucu ağacın/halkanın etrafından dolaştır (daha sağlam olsun dersen iki tur: "tam tur ve iki yarım volta").</li><li>Ucu ana kısmın etrafından dolaştırıp oluşan gözden geçir: <b>1. yarım volta</b>.</li><li>Aynı yönde bir kez daha: <b>2. yarım volta</b>.</li><li>Voltaları ağaca doğru kaydırıp sık.</li></ol>`},

{ id:"dg-germe", kat:"dugum", baslik:"Germe bağı (taut-line hitch)", ikon:"⛺", html:`
<p><b>Ne için:</b> Çadır ve branda gergileri. İlmik ana kısım üzerinde kayarak gerginlik ayarlanır, yük altında yerinde kalır.</p>
<ol><li>Ucu kazığın etrafından dolaştır.</li><li>Ucu ana kısmın etrafından, <b>ilmiğin içine doğru</b> iki tur sar.</li><li>Sonra ucu ana kısmın etrafından, bu iki turun <b>dışında</b> (kazıktan uzak tarafta) bir tur daha sar ve oluşan gözden geçir.</li><li>Sık. Germek için düğümü ana kısım boyunca kazıktan uzağa kaydır.</li></ol>`},

{ id:"dg-kamyoncu", kat:"dugum", baslik:"Kamyoncu bağı (trucker's hitch)", ikon:"🚚", html:`
<p><b>Ne için:</b> İpi makara gibi kullanıp çok sıkı germek: Branda çatısı, yük sabitleme, çamaşır ipi.</p>
<ol><li>İpin bir ucunu bir ağaca bağla (izbarço veya iki yarım volta).</li><li>İpin ortasına yakın bir yerde kaymaz bir göz yap (en kolayı: ipi katla, katlanmış kısımla bir düğüm at ya da "kelebek ilmiği").</li><li>Serbest ucu diğer ağacın/kazığın etrafından dolaştırıp bu gözün içinden geçir.</li><li>Ucu aşağı çek: Göz makara görevi görür, iki kat güç kazanırsın.</li><li>Gerginliği tutarken ucu iki yarım volta ile sabitle.</li></ol>`},

{ id:"dg-ana", kat:"dugum", baslik:"Ana (sancak) bağı (sheet bend)", ikon:"🔗", html:`
<p><b>Ne için:</b> İki ipi eklemek, özellikle <b>kalınlıkları farklıysa</b>. Bez, branda köşesini ipe bağlamak.</p>
<ol><li>Kalın ipin ucunu U şeklinde katla.</li><li>İnce ipin ucunu U'nun içinden <b>alttan</b> geçir.</li><li>İnce ucu U'nun iki kolunun arkasından dolaştır.</li><li>İnce ucu kendi altından (ince ipin kendi ana kısmının altından, U'nun üstünden) geçir.</li><li>Her iki ucun da düğümün <b>aynı tarafında</b> kaldığını kontrol et, sık.</li></ol>
<p class="kucuk">Çok kaygan veya çok farklı kalınlıkta ipte 4. adımı iki kez yap (çift ana bağı).</p>`},

{ id:"dg-camadan", kat:"dugum", baslik:"Camadan bağı (kare düğüm, reef knot)", ikon:"🎀", html:`
<p><b>Ne için:</b> Sargı ve bandaj uçlarını bağlamak, torba ağzı, üçgen sargı. Düz durur, kolay çözülür.</p>
<ol><li><b>Sağ üstten sola</b>: Sağ ucu sol ucun üstünden geçirip bir kez dola.</li><li><b>Sol üstten sağa</b>: Şimdi soldaki ucu sağdakinin üstünden geçirip bir kez dola.</li><li>Sık. İki uç, kendi kolunun yanında ve aynı taraftan çıkmalı.</li></ol>
<p class="uyari">Yük taşıyan iki ipi eklemek için <b>kullanma</b>, kayar. İp eklemek için ana bağını kullan.</p>
<p class="kucuk">Uçlar çapraz çıkıyorsa "kocakarı düğümü" olmuştur, ikinci adımı ters yap.</p>`},

{ id:"dg-kereste", kat:"dugum", baslik:"Kereste bağı (timber hitch)", ikon:"🪵", html:`
<p><b>Ne için:</b> Kütük, kalın dal ya da yükü sürüklemek veya kaldırmak; çekildikçe sıkışır, sonra kolay çözülür.</p>
<ol><li>Ucu kütüğün etrafından dolaştır.</li><li>Ucu ana kısmın etrafından bir kez dola.</li><li>Ucu kendi üzerine, kütüğe sarılı kısma <b>3–5 kez</b> bük/sar.</li><li>Ana kısmı çekince düğüm kütüğe sıkışır. Sürüklerken düz gitmesi için önüne bir yarım volta ekle.</li></ol>`},

{ id:"dg-prusik", kat:"dugum", baslik:"Prusik düğümü", ikon:"🧗", html:`
<p><b>Ne için:</b> İnce bir ip halkasını kalın bir ipe bağlamak; yükte kilitlenir, yüksüzken kaydırılabilir. Halat boyunca tutunma, düşmeye karşı tutamak, branda çatı ipinde ayarlanabilir bağlantı.</p>
<ol><li>İnce ipin iki ucunu birbirine bağlayarak kapalı halka yap (çift balıkçı düğümü ya da sıkı bir ana bağı).</li><li>Halkayı kalın ipin arkasına koy, halkanın bir ucunu diğerinin içinden geçirerek kalın ipe sar.</li><li>Bu sarmayı <b>3 kez</b> tekrarla; turlar düzgün, yan yana olsun.</li><li>Halkanın çıkan kısmı ortadan sarkmalı. Yük ver: Kilitlenmeli. Yükü al: Elle kaydırılabilmeli.</li></ol>
<p class="kucuk">İnce ip, kalın ipin yaklaşık yarısı kalınlıkta olmalı. Kaygan iplerde tur sayısını artır.</p>`},

/* ============ BİTKİ & HAYVAN ============ */
{ id:"dk-kural", kat:"doga", baslik:"Önce oku: Yabani bitki kuralları", ikon:"🌿", html:`
<p class="uyari"><b>%100 tanımadığın hiçbir bitkiyi ve mantarı yeme.</b> Türkiye'de her yıl yabani mantar ve ot zehirlenmesinden ölümler oluyor. Fotoğrafsız tarif yanılabilir; şüphedeysen yeme.</p>
<ul><li>Aç kalmak birkaç gün öldürmez; zehirlenme öldürebilir. Önce su ve barınak.</li>
<li>Yenebilir bitkinin <b>zehirli benzerini</b> mutlaka bil (her bitkide yazılı).</li>
<li>Yol kenarı, tarla ilaçlaması yapılan yer ve kirli su kenarındaki bitkileri toplama.</li>
<li>Yeni bir bitkiyi ilk kez yiyorsan az ye, birkaç saat bekle.</li>
<li><b>Kaçın:</b> Beyaz sütlü özsuyu olanlar, acı badem kokulu olanlar, şemsiye şeklinde beyaz çiçek kümesi olan maydanoz/havuç benzerleri, parlak kırmızı/siyah bilmediğin meyveler, soğan kokusu olmayan soğanlılar.</li></ul>
<p>Zehirlenme şüphesinde: <b>114</b> Zehir Danışma, <b>112</b>. Kusturma. Bitkiden bir parça yanında götür.</p>`},

{ id:"dk-yenebilir", kat:"doga", baslik:"Yenebilir yabani bitkiler (Türkiye)", ikon:"🥬", html:`
<h4>Isırgan otu</h4><p>Kenarları dişli, tüylü, dokununca yakan yapraklar; nemli, gölgeli yerler. Eldivenle topla; <b>haşlayınca</b> yakıcılığı gider. Çorba, ıspanak gibi. Çok besleyici.</p>
<h4>Ebegümeci</h4><p>Yuvarlak, hafif loblu, kenarı dişli yaprak; pembe-mor 5 yapraklı çiçek; yol ve tarla kenarları. Yaprakları haşlanıp yenir.</p>
<h4>Karahindiba</h4><p>Toprağa yakın rozet, derin dişli yapraklar, içi boş sapta tek sarı çiçek, sapı kopunca beyaz süt verir (bu, "sütlü bitkiden kaçın" kuralının bilinen istisnasıdır; yaprak ve çiçek tam uymuyorsa yeme). Genç yapraklar çiğ/haşlama, kök kavrulup içilebilir.</p>
<h4>Semizotu</h4><p>Yere yayılan, kırmızımsı etli gövde, küçük etli kaşık yapraklar. Çiğ yenir. <b>Benzeri:</b> Sütleğen (sütlü özsu verir, zehirli) — kopardığında süt çıkıyorsa yeme.</p>
<h4>Böğürtlen, ahududu</h4><p>Dikenli dallarda siyah (böğürtlen) ya da kırmızı, içi boş (ahududu) toplu meyveler. Yaz sonu. Genç sürgün ve yaprak çayı da olur.</p>
<h4>Kuşburnu, alıç, kızılcık</h4><p><b>Kuşburnu:</b> Yabani gülün turuncu-kırmızı meyvesi; içindeki tüylü çekirdekleri çıkar. C vitamini çok yüksek. <b>Alıç:</b> Dikenli ağaçta küçük kırmızı/sarı elma gibi meyve, çekirdeği yenmez. <b>Kızılcık:</b> Uzunca parlak kırmızı ekşi meyve, çekirdekli.</p>
<h4>Yaban mersini (likapa)</h4><p>Karadeniz yaylalarında alçak çalı, koyu mavi-mor küçük meyve. <b>Benzeri:</b> Güzelavratotu meyvesi de siyah parlaktır ama tek tek, iri, yıldız şeklinde çanakla durur ve bitki dik boylu otsudur; emin değilsen yeme.</p>
<h4>Ceviz, fındık, kestane</h4><p><b>Kestane</b>nin kabuğu sık, ince iğneli kirpi gibidir, içinden 2–3 sivri uçlu meyve çıkar; pişirilerek yenir. <b>Benzeri:</b> <b>Atkestanesi zehirlidir</b>: Kabuğunda seyrek kalın dikenler, içinde tek yuvarlak parlak tohum, yaprakları el gibi 5–7 parçalı.</p>
<h4>Meşe palamudu</h4><p>Çok acıdır (tanen). Kabuğunu soy, parçala, suyu kahverengileşmeyene kadar defalarca suda bekletip haşla; sonra kavur/un yap.</p>
<h4>Çam</h4><p>Çam fıstığı (fıstık çamı kozalağı). Kabuğun altındaki beyaz iç kabuk acil durumda yenebilir. Genç iğnelerden C vitaminli çay. <b>Porsuk ağacı</b> (yassı, koyu yeşil iğne, kırmızı etli meyve) <b>çok zehirlidir</b>, karıştırma.</p>
<h4>Ayı sarımsağı (yabani sarımsak)</h4><p>Nemli orman tabanında geniş mızrak yaprak, beyaz yıldız çiçek kümesi; <b>ezince belirgin sarımsak kokusu.</b> <b>Benzerleri ölümcül:</b> Güz çiğdemi ve inci çiçeği. Koku yoksa kesinlikle yeme; elin sarımsak kokuyorsa sonraki yaprağı yanıltabilir, her yaprağı ayrı kokla.</p>
<h4>Kuzukulağı, labada</h4><p>Ok şeklinde ekşi yaprak. Az miktarda yenir (oksalat içerir; böbrek hastaları yememeli).</p>`},

{ id:"dk-zehirli", kat:"doga", baslik:"Zehirli bitkiler ve tehlikeli benzerler", ikon:"☠️", html:`
<h4>Baldıran (ağı otu)</h4><p>Maydanoz/havuç benzeri, 1–2 m boylu, <b>gövdesi pürüzsüz ve mor-kırmızı benekli</b>, ezince fare idrarı gibi kötü koku, beyaz şemsiye çiçek. <b>Çok az miktarı öldürür.</b> Yabani maydanoz, havuç, rezene toplama.</p>
<h4>Güz çiğdemi</h4><p>Sonbaharda yapraksız açan mor-pembe çiğdem benzeri çiçek, ilkbaharda geniş yapraklar (ayı sarımsağıyla karışır, kokusuzdur). Ölümcül; belirtiler saatler sonra başlar.</p>
<h4>Tatula (şeytan elması)</h4><p>Büyük beyaz boru çiçek, dikenli ceviz büyüklüğünde meyve kapsülü, kötü koku. Halüsinasyon, çarpıntı, ölüm.</p>
<h4>Güzelavratotu, ban otu</h4><p>Güzelavratotu: Mor-kahverengi çan çiçek, kiraz büyüklüğünde parlak siyah meyve. Ban otu: Yapışkan tüylü, sarımsı mor damarlı çiçek. İkisi de çok zehirli.</p>
<h4>Zakkum</h4><p>Süs bitkisi olarak her yerde; uzun dar deri gibi yaprak, pembe-beyaz çiçek. Tüm kısımları kalbe zehirli; dalını şiş ya da yemek çubuğu olarak kullanma, yakma dumanını soluma.</p>
<h4>Orman gülü ve deli bal</h4><p>Karadeniz'de mor çiçekli orman gülü (Rhododendron) yaprak ve nektarı zehirlidir. Bu bölgede kaynağı bilinmeyen <b>deli bal</b> tansiyon ve nabzı tehlikeli düşürür; baş dönmesi, bayılma olursa 112.</p>
<h4>Porsuk ağacı, sarmaşık</h4><p>Porsuğun kırmızı meyvesinin içindeki çekirdek ve yaprakları; duvar sarmaşığının siyah meyveleri zehirlidir.</p>
<h4>Mantarlar</h4><p><b>Köygöçüren (Amanita phalloides):</b> Türkiye'de ölümlerin başlıca sebebi. Yeşilimsi-zeytin şapka, beyaz lameller, sapta etek, dipte <b>torba (volva)</b>. Belirtiler 6–24 saat sonra başlar, karaciğeri yok eder. <b>Sinek mantarı:</b> Beyaz benekli kırmızı şapka. Kural: Uzman olmadan yabani mantar yok.</p>`},

{ id:"dk-yilan", kat:"doga", baslik:"Yılanlar", ikon:"🐍", html:`
<p>Türkiye'deki yılanların çoğu zehirsizdir. Zehirlilerin hemen hepsi <b>engerek</b> grubundandır.</p>
<h4>Engereklerin genel özellikleri</h4>
<ul><li>Belirgin <b>üçgen/kalp şeklinde baş</b>, ince boyun</li><li><b>Dikey (kedi gözü gibi) göz bebeği</b></li><li>Kalın, kısa gövde, kısa küt kuyruk; sırtta çoğu zaman <b>zikzak</b> desen</li><li>Kaçmak yerine kıvrılıp tıslayabilir</li></ul>
<h4>Önemli türler</h4>
<ul><li><b>Boynuzlu engerek:</b> Burun ucunda küçük boynuz. Batı ve Kuzey Anadolu, Trakya; taşlık yamaçlar.</li>
<li><b>Koca engerek:</b> 1 m'yi aşabilir, gri-kahve, zikzak belirsiz. Güney ve Doğu Anadolu; en tehlikelilerden.</li>
<li><b>Kafkas engereği:</b> Siyah-turuncu/sarı zikzaklı, Doğu Karadeniz (Rize, Artvin).</li>
<li><b>Çayır/Anadolu engereği:</b> Küçük, yayla ve çayırlarda.</li></ul>
<h4>Zararsız benzerler</h4><p>Su yılanları (dere ve göllerde, yuvarlak göz bebeği, ince baş), sarı yılan (uzun, ince, hızlı kaçar), yılan sanılan <b>oluklu kertenkele</b> (yılan gibi ama göz kapağı var). Özelliklere tam güvenme; <b>her yılanı zehirli say</b>, mesafe koru.</p>
<h4>Korunma</h4><ul><li>Bilek üstü bot, uzun pantolon. Taş kaldırırken, odun toplarken eldiven ve sopa.</li><li>Göremediğin yere elini/ayağını sokma; yürürken yere vur, yılan titreşimi hissedip kaçar.</li><li>Isırıkta: <a href="#iy-isirik">İlk yardım → Yılan</a>.</li></ul>`},

{ id:"dk-bocek", kat:"doga", baslik:"Akrep, örümcek, kene ve böcekler", ikon:"🦂", html:`
<h4>Akrepler</h4><p>Sıcak, kurak bölgeler; taş altı, duvar çatlağı, ayakkabı içi. Genel kural: <b>İnce kıskaç + kalın kuyruk</b> daha zehirli (özellikle Güneydoğu'daki sarı akrepler). Çocuklarda ağır seyreder. Sabah ayakkabını, uyku tulumunu silkele.</p>
<h4>Karadul örümceği</h4><p>Parlak siyah, karnında kırmızı benekler veya kum saati deseni; yerde, taş altında düzensiz ağ. Isırığı kas krampları, şiddetli karın ağrısı yapar → sağlık kuruluşuna.</p>
<h4>Kene</h4><p>Bahar–yaz aylarında çayır, orman kenarı, hayvan barınakları. Açık renk, uzun giysi; paçaları çorabın içine sok; doğada her saat ve dönüşte vücudunu (koltuk altı, kasık, saç dibi, kulak arkası) kontrol et. Çıkarma: <a href="#iy-isirik">İlk yardım → Kene</a>.</p>
<h4>Çıyan (kırkayak)</h4><p>Uzun, yassı, turuncu-kahve, çok bacaklı; ısırığı çok ağrılı ama nadiren tehlikeli. Soğuk uygula.</p>
<h4>Arı, eşek arısı</h4><p>Toprak içindeki ve çatı altındaki yuvalara yaklaşma. Saldırıda koşarak uzaklaş, yüzünü koru; suya atlama (bekliyorlar). Çok sayıda sokma ve alerjide 112.</p>
<h4>Çam kese böceği tırtılı</h4><p>Çam dallarında beyaz ipeksi keseler, ilkbaharda sıra hâlinde yürüyen tüylü tırtıllar. Tüyleri ciltte, gözde ağır kaşıntı ve iltihap yapar; dokunma.</p>`},

{ id:"dk-memeli", kat:"doga", baslik:"Büyük hayvanlar ve kuduz", ikon:"🐻", html:`
<h4>Boz ayı (Karadeniz, Doğu Anadolu)</h4><ul><li>Yürürken konuş, ses çıkar; ayıyı şaşırtmamak en iyi korunma.</li><li>Yiyecekleri ve çöpü çadırdan en az 50–100 m uzakta, ağaca asılı tut.</li><li>Ayı görürsen <b>koşma</b>, yüzünü ona dönük tutarak yavaşça geri çekil, sakin ve alçak sesle konuş. Yavrulu dişiye asla yaklaşma.</li><li>Saldırırsa (savunma amaçlı): Yüzüstü yat, ellerini enseye kenetle, sırt çantan sırtında kalsın, ölü taklidi yap.</li></ul>
<h4>Yaban domuzu</h4><p>Özellikle yavrulu sürüler tehlikeli. Ağaç, kaya gibi yükseğe çık ya da yan yana çekil; önüne çıkma.</p>
<h4>Kurt, çoban köpekleri, sokak köpekleri</h4><p>Göz göze uzun bakma, koşma, arkanı dönme. Kendini büyük göster, sakin ama kararlı sesle uzaklaş; aranıza çanta, sopa koy. Yerde kalırsan yüzünü ve boynunu koru. Kangal gibi sürü köpeklerinin olduğu yerde sürüden uzak dur.</p>
<h4 style="color:var(--kirmizi)">Kuduz — her memeli ısırığı ciddidir</h4>
<ol><li>Yarayı hemen <b>bol sabun ve akan suyla 15 dakika</b> yıka. Bu tek başına riski çok azaltır.</li><li>Sonra antiseptik, yarayı dikme/kapatma.</li><li><b>Aynı gün</b> sağlık kuruluşuna git: Köpek, kedi, tilki, çakal, kurt, yarasa, sığır... ısırık veya tırmalamada kuduz ve tetanoz aşısı değerlendirilir.</li><li>Kuduz belirtileri başladıktan sonra tedavisi yoktur; beklemek yok.</li></ol>`},

{ id:"dk-deniz", kat:"doga", baslik:"Deniz ve göl kenarı tehlikeleri", ikon:"🌊", html:`
<h4>Denizanası</h4><p>Temas eden yeri ovma; tatlı su dökme. Kalan dokunaçları kartla sıyır, <b>deniz suyuyla</b> yıka. Sonra sıcak (yakmayan, ~45 °C) suda bekletmek ağrıyı azaltır. Nefes darlığı → 112.</p>
<h4>Trakonya (çarpan) balığı</h4><p>Kuma gömülü yaşar, sırt yüzgecinde zehirli dikenler; sığ kumda basınca çok şiddetli ağrı. Ayağı dayanabildiğin en sıcak suya (~45 °C, 30–90 dk) sok: Zehri etkisizleştirir. Diken kalıntısı için doktora.</p>
<h4>Deniz kestanesi</h4><p>Kayalıkta siyah dikenli top. Kayalık alanda deniz ayakkabısı giy. Batan dikenleri cımbızla çıkar; derin kalanlar için doktor.</p>
<h4>Akıntı ve dalga</h4><p>Karadeniz'de <b>rip akıntısı</b> çok boğulmaya yol açar. Akıntıya kapılırsan karşı koyma: <b>Kıyıya paralel yüz</b>, akıntıdan çıkınca kıyıya dön. Yorulursan sırtüstü dur, el salla. Kırmızı bayrak ve cankurtaransız plaj = girme.</p>`}
);

/* ============ İLAÇ KARTLARI (doz içermez) ============ */
window.ILACLAR = [
{ad:"Parasetamol",ornek:"Parol, Minoset, Tylol, Calpol",grup:"Ağrı kesici, ateş düşürücü",ne:"Baş, diş, kas ağrısı; ateş.",uyari:"En sık kazara zehirlenmeye yol açan ilaçlardan; birçok soğuk algınlığı ilacında da bulunur, toplam alımı say. Karaciğer hastalığı ve alkol kullanımında dikkat. Fazla alımda belirti hemen çıkmayabilir, yine de 114/112."},
{ad:"İbuprofen",ornek:"Brufen, Dolven, Pedifen, Nurofen",grup:"Ağrı kesici, iltihap giderici (NSAİİ)",ne:"Ağrı, ateş, burkulma, adet ağrısı, iltihap.",uyari:"Tok karnına. Mide ülseri, böbrek hastalığı, kalp yetmezliği, gebeliğin son 3 ayı ve kan sulandırıcı kullananlarda dikkat/kullanmama. Susuz kalmış kişide böbreğe zarar verebilir."},
{ad:"Naproksen",ornek:"Apranax, Naprosyn",grup:"NSAİİ",ne:"Ağrı, iltihap, adet ağrısı.",uyari:"İbuprofenle aynı uyarılar; ikisini birlikte alma."},
{ad:"Diklofenak",ornek:"Voltaren, Dikloron",grup:"NSAİİ",ne:"Kas-iskelet ağrısı, iltihap; jel formu burkulma için.",uyari:"Kalp-damar riski ve mide kanaması; diğer NSAİİ'lerle birlikte alma. Jel formu kırık deriye sürülmez."},
{ad:"Flurbiprofen",ornek:"Majezik",grup:"NSAİİ",ne:"Ağrı, boğaz ağrısı (pastil/sprey).",uyari:"NSAİİ uyarıları geçerlidir."},
{ad:"Asetilsalisilik asit (aspirin)",ornek:"Aspirin, Coraspin, Ecopirin",grup:"Ağrı kesici / düşük dozda kan pıhtılaşmasını önleyici",ne:"Düşük dozda kalp-damar koruması (doktor önerisiyle).",uyari:"<b>18 yaş altında</b> (özellikle viral hastalıkta) Reye sendromu riski nedeniyle kullanılmaz. Kanamayı artırır; kanaması olan, ülserli kişide verilmez. Kalp krizi şüphesinde ancak 112'nin söylemesiyle."},
{ad:"Metamizol",ornek:"Novalgin, Andolor",grup:"Ağrı kesici, ateş düşürücü",ne:"Şiddetli ağrı ve ateş.",uyari:"Nadiren ağır kan hücresi düşüklüğü (agranülositoz) yapabilir; ateş, boğaz ağrısı, ağızda yara çıkarsa kes ve doktora başvur. Tansiyon düşürebilir."},
{ad:"Setirizin / Levosetirizin",ornek:"Zyrtec, Xyzal, Allerset",grup:"Antihistaminik (alerji)",ne:"Saman nezlesi, kaşıntı, kurdeşen, böcek sokmasında kaşıntı.",uyari:"Hafif uyku hâli yapabilir. <b>Anafilaksiyi (nefes darlığı, dil şişmesi) durdurmaz</b> — o durumda adrenalin ve 112."},
{ad:"Loratadin / Desloratadin",ornek:"Claritine, Aerius",grup:"Antihistaminik",ne:"Alerjik nezle, kurdeşen.",uyari:"Az uyku yapar. Anafilakside tek başına yetmez."},
{ad:"Feniramin",ornek:"Avil",grup:"Antihistaminik (eski kuşak)",ne:"Alerjik reaksiyon, kaşıntı.",uyari:"Belirgin uyku hâli; araç kullanma. Alkolle alma."},
{ad:"Adrenalin oto-enjektör",ornek:"EpiPen, Anapen (yurt dışı/özel temin)",grup:"Acil alerji ilacı",ne:"Anafilaksi (ağır alerjik reaksiyon).",uyari:"Sadece reçeteli kişiye ait olanı, kutudaki talimatla uyluk dış yanına uygula; ardından mutlaka 112. Etkisi geçince reaksiyon dönebilir."},
{ad:"Salbutamol (inhaler)",ornek:"Ventolin",grup:"Bronş genişletici",ne:"Astım krizi, nefes darlığı.",uyari:"Sadece reçeteli kişi kullanmalı. Çarpıntı ve titreme yapabilir. Rahatlama olmazsa 112."},
{ad:"Oral rehidrasyon tuzu (ORS)",ornek:"Floraline",grup:"Sıvı-elektrolit",ne:"İshal ve kusmada, sıcak bitkinliğinde sıvı kaybını yerine koymak.",uyari:"Paketteki suyla tam hazırla (fazla yoğun olmasın). Evde yoksa: 1 L temiz suya 6 düz çay kaşığı şeker + yarım düz çay kaşığı tuz (DSÖ tarifi)."},
{ad:"Loperamid",ornek:"Lopermid, Imodium",grup:"İshal kesici",ne:"Akut basit ishal.",uyari:"<b>Ateşli, kanlı ishalde kullanma</b> (mikrobun atılmasını engeller). Küçük çocuklarda kullanılmaz."},
{ad:"Metoklopramid",ornek:"Metpamid",grup:"Bulantı-kusma önleyici",ne:"Bulantı, kusma.",uyari:"Gençlerde istemsiz kas kasılmaları yapabilir; kısa süre kullanılır. Bağırsak tıkanıklığı şüphesinde verilmez."},
{ad:"Dimenhidrinat",ornek:"Dramamine",grup:"Antihistaminik",ne:"Taşıt tutması, bulantı.",uyari:"Uyku yapar; araç kullanma."},
{ad:"Antasitler / Famotidin / Omeprazol",ornek:"Rennie, Gaviscon, Famodin, Losec",grup:"Mide asidi azaltıcı",ne:"Mide yanması, reflü; NSAİİ ile mide koruması (doktor önerisiyle).",uyari:"Şiddetli karın ağrısı, kusmada kan, siyah dışkı = acil."},
{ad:"Povidon iyot",ornek:"Batticon, Betadine",grup:"Antiseptik",ne:"Yara ve cilt temizliği; su dezenfeksiyonunda da kullanılabilir.",uyari:"İyot alerjisi, tiroid hastalığı, gebelikte uzun süreli/geniş alanda kullanma. Göze kaçırma."},
{ad:"Klorheksidin",ornek:"Klorhex, Hibiscrub",grup:"Antiseptik",ne:"Cilt ve yara çevresi temizliği, ağız gargarası.",uyari:"Göze, kulak içine kaçırma. Gargara diş lekesi yapabilir."},
{ad:"Hidrojen peroksit (oksijenli su)",ornek:"%3 oksijenli su",grup:"Antiseptik",ne:"Kirli yarayı ilk temizlemede.",uyari:"Sürekli kullanımı iyileşen dokuya zarar verir; temiz akan su ve sabun çoğu zaman yeterli."},
{ad:"Fusidik asit / Mupirosin krem",ornek:"Fucidin, Bactroban",grup:"Antibiyotikli krem",ne:"Küçük yüzeysel cilt enfeksiyonları.",uyari:"Reçeteli. Büyük ve derin yaralarda yerine geçmez."},
{ad:"Gümüş sülfadiazin",ornek:"Silverdin",grup:"Yanık kremi",ne:"Yanık yaralarında enfeksiyon önleme.",uyari:"Reçeteli; yüzde ve sülfa alerjisinde kullanılmaz. İlk yardımda önce 20 dk su ile soğutma."},
{ad:"Hidrokortizon / kortizonlu krem",ornek:"Hidrokortizon krem, Advantan, Dermovate (güçlü)",grup:"Kortikosteroid krem",ne:"Böcek ısırığı kaşıntısı, egzama, alerjik döküntü.",uyari:"Yüze ve açık yaraya uzun süreli sürme; güçlü olanlar reçetelidir."},
{ad:"Amoksisilin-klavulanat",ornek:"Augmentin, Klamoks",grup:"Antibiyotik",ne:"Bakteriyel enfeksiyonlar (doktor kararıyla).",uyari:"<b>Penisilin alerjisinde ölümcül reaksiyon</b> yapabilir. Antibiyotikler viral hastalığa (grip, soğuk algınlığı) etki etmez. Başlanınca süresince kullanılır."},
{ad:"Siprofloksasin",ornek:"Cipro",grup:"Antibiyotik",ne:"İdrar yolu ve bazı bağırsak enfeksiyonları (doktor kararıyla).",uyari:"Çocuk ve gebelerde genellikle kullanılmaz; tendon kopması riski. Süt ürünleri ve antasitlerle aynı anda alma."},
{ad:"Metronidazol",ornek:"Flagyl",grup:"Antibiyotik / antiparaziter",ne:"Bazı bağırsak parazitleri ve enfeksiyonları (doktor kararıyla).",uyari:"Kullanım sırasında ve sonrasında 2–3 gün <b>alkol kesinlikle yok</b> (şiddetli reaksiyon)."},
{ad:"Kombine grip ilaçları",ornek:"Theraflu, Gripin, A-ferin, Tylol Hot",grup:"Kombine soğuk algınlığı",ne:"Grip belirtileri.",uyari:"Çoğu <b>parasetamol içerir</b>; ayrıca Parol alırken toplam dozu aşma. Bazıları tansiyonu yükseltir, uyku yapar."},
{ad:"Hiyosin bütilbromür",ornek:"Buscopan",grup:"Spazm çözücü",ne:"Karın krampları, adet sancısı.",uyari:"Glokom, prostat büyümesinde dikkat. Ani ve giderek artan karın ağrısında (apandisit) ilaçla bastırıp bekleme."},
{ad:"Aktif kömür",ornek:"Aktif kömür süspansiyonu",grup:"Zehir bağlayıcı",ne:"Bazı zehirlenmelerde (yalnızca sağlık personeli veya 114 önerirse).",uyari:"Kendi kendine verme; bilinci bulanık kişiye, yakıcı madde ve petrol ürünü yutmada verilmez."},
{ad:"Potasyum iyodür",ornek:"KI tableti (resmî dağıtım)",grup:"Tiroid koruyucu",ne:"Sadece nükleer kaza durumunda, yetkililer söylerse.",uyari:"Rastgele almak yarar sağlamaz, zararlı olabilir; yetkili duyurusunu bekle."},
{ad:"Nitrogliserin (dil altı)",ornek:"Nitrolingual sprey",grup:"Kalp (göğüs ağrısı)",ne:"Bilinen anjina hastasının göğüs ağrısı.",uyari:"Sadece reçeteli kişi. Erektil disfonksiyon ilacı (sildenafil vb.) alanlarda tansiyonu tehlikeli düşürür. Göğüs ağrısında 112."},
{ad:"Glukoz / şeker",ornek:"Glukoz tableti, şeker, meyve suyu",grup:"Hipoglisemi",ne:"Şeker hastasında kan şekeri düşmesi (titreme, terleme, bilinç bulanıklığı).",uyari:"<b>Bilinci yerinde ve yutabiliyorsa</b> ver. Bilinçsize ağızdan bir şey verilmez → 112 (glukagon kalemi varsa uygula)."},
{ad:"Levotiroksin, insülin, antiepileptik, kalp-tansiyon ilaçları",ornek:"Kişiye özel",grup:"Düzenli kullanılan ilaçlar",ne:"Kronik hastalıklar.",uyari:"Afette en kritik ilaçlardır: Acil çantasında en az 1 haftalık stok ve ilaç adlarının yazılı listesi bulundur. İnsülini serin tut, dondurma."}
];
