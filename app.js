(() => {
"use strict";
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const sakla = (k, v) => { try { localStorage.setItem("hk_" + k, JSON.stringify(v)); } catch (e) {} };
const oku = (k, d) => { try { const v = localStorage.getItem("hk_" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const trLower = s => s.toLocaleLowerCase("tr");

/* ---------- Görünüm yönetimi ---------- */
let aktifKat = "ilkyardim";
function goster(v) {
  $$(".gorunum").forEach(e => e.classList.add("gizli"));
  $("#v-" + v).classList.remove("gizli");
  if (v !== "araclar") aracKapat();
  if (v === "harita") haritaAc();
}
function menuSec(btn) {
  $$(".alt-menu button").forEach(b => b.classList.toggle("aktif", b === btn));
}
$$(".alt-menu button").forEach(b => b.addEventListener("click", () => {
  menuSec(b);
  if (b.dataset.v === "liste") { katSec(b.dataset.kat); if (location.hash) history.replaceState(null, "", location.pathname); goster("liste"); }
  else { if (location.hash) history.replaceState(null, "", location.pathname); goster(b.dataset.v); }
}));
function katSec(k) {
  aktifKat = k;
  $$("#sekme-kat button").forEach(b => b.classList.toggle("aktif", b.dataset.kat === k));
  listeCiz();
}
$$("#sekme-kat button").forEach(b => b.addEventListener("click", () => {
  katSec(b.dataset.kat);
  const m = $(`.alt-menu button[data-kat="${b.dataset.kat}"]`) || $(`.alt-menu button[data-kat="rehber"]`); if (m) menuSec(m);
}));

/* ---------- Liste + arama ---------- */
const duzMetin = h => { const d = document.createElement("div"); d.innerHTML = h; return d.textContent; };
const ARAMA = window.ICERIK.map(b => ({ ...b, metin: trLower(b.baslik + " " + duzMetin(b.html)) }));
const KAT_AD = { ilkyardim: "İlk yardım", rehber: "Hayatta kalma", telsiz: "Telsiz" };
function listeCiz() {
  const q = trLower($("#ara").value.trim());
  let bolumler = q ? ARAMA.filter(b => q.split(/\s+/).every(w => b.metin.includes(w))) : ARAMA.filter(b => b.kat === aktifKat);
  $("#sekme-kat").classList.toggle("gizli", !!q);
  $("#liste").innerHTML = bolumler.length ? bolumler.map(b => {
    let alt = q ? KAT_AD[b.kat] : "";
    if (q) { const i = b.metin.indexOf(q.split(/\s+/)[0]); if (i > -1) alt += " · …" + esc(b.metin.slice(Math.max(0, i - 25), i + 50)) + "…"; }
    return `<li data-id="${b.id}"><span class="ik">${b.ikon}</span><div>${esc(b.baslik)}${alt ? `<small>${alt}</small>` : ""}</div></li>`;
  }).join("") : `<li>Sonuç yok.</li>`;
}
$("#ara").addEventListener("input", listeCiz);
$("#liste").addEventListener("click", e => { const li = e.target.closest("li[data-id]"); if (li) location.hash = li.dataset.id; });

/* ---------- Makale okuma ---------- */
function makaleAc(id) {
  const b = window.ICERIK.find(x => x.id === id);
  if (!b) return false;
  $("#makale").innerHTML = `<h2>${b.ikon} ${esc(b.baslik)}</h2>${b.html}`;
  goster("oku");
  $("main").scrollTop = 0;
  const m = $(`.alt-menu button[data-kat="${b.kat}"]`) || $(`.alt-menu button[data-kat="rehber"]`); if (m) menuSec(m);
  aktifKat = b.kat;
  // checklist
  $$("#makale .checklist").forEach((ul, ui) => {
    const anahtar = "cl_" + id + "_" + ui; const durum = oku(anahtar, {});
    [...ul.children].forEach((li, i) => {
      if (durum[i]) li.classList.add("ok");
      li.addEventListener("click", () => { li.classList.toggle("ok"); durum[i] = li.classList.contains("ok"); sakla(anahtar, durum); });
    });
  });
  const ft = $("#fonetik-tablo");
  if (ft) ft.innerHTML = `<table class="tablo"><tr><th>Harf</th><th>Türkçe</th><th>NATO</th></tr>${window.FONETIK.map(r => `<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</table>`;
  const tp = $("#telsiz-plan"); if (tp) planCiz(tp);
  return true;
}
function rota() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (id && makaleAc(id)) return;
  if (!$("#v-oku").classList.contains("gizli")) goster("liste");
}
window.addEventListener("hashchange", rota);
$("#geri").addEventListener("click", () => { history.length > 1 ? history.back() : (location.hash = ""); });

/* ---------- Aile telsiz planı ---------- */
function planCiz(el) {
  const p = oku("telsizPlan", { ana: "", alt: "", yedek: "", saat: "Her saat başı 5 dakika", bulusma: "", kisiler: "" });
  el.innerHTML = `<div class="plan">
    <label>Ana kanal / alt kanal (CTCSS)</label><div class="satir"><input type="text" id="p-ana" placeholder="ör. 5" value="${esc(p.ana)}"><input type="text" id="p-alt" placeholder="ör. 12" value="${esc(p.alt)}"></div>
    <label>Yedek kanal</label><input type="text" id="p-yedek" placeholder="ör. 9 (alt kanal kapalı)" value="${esc(p.yedek)}">
    <label>Dinleme saatleri</label><input type="text" id="p-saat" value="${esc(p.saat)}">
    <label>Buluşma noktaları (1. ev yakını, 2. mahalle dışı)</label><textarea id="p-bulusma" rows="2">${esc(p.bulusma)}</textarea>
    <label>Kişiler ve çağrı adları</label><textarea id="p-kisiler" rows="3" placeholder="Hasan = Baba&#10;…">${esc(p.kisiler)}</textarea>
    <button class="buyuk-btn" id="p-kaydet">Kaydet</button> <span class="kucuk" id="p-ok"></span></div>`;
  $("#p-kaydet").onclick = () => {
    sakla("telsizPlan", { ana: $("#p-ana").value, alt: $("#p-alt").value, yedek: $("#p-yedek").value, saat: $("#p-saat").value, bulusma: $("#p-bulusma").value, kisiler: $("#p-kisiler").value });
    $("#p-ok").textContent = "Kaydedildi ✓";
  };
}

/* ---------- Gece modu, durum ---------- */
if (oku("gece", false)) document.body.classList.add("gece");
$("#gece").onclick = () => { document.body.classList.toggle("gece"); sakla("gece", document.body.classList.contains("gece")); };
function durum() { $("#durum").textContent = navigator.onLine ? "● çevrimiçi" : "○ çevrimdışı"; }
addEventListener("online", durum); addEventListener("offline", durum); durum();

/* ---------- Ortak: fener, ses, ekran ışığı ---------- */
let akim = null, fenerIz = null;
async function fenerHazirla() {
  if (fenerIz) return true;
  try {
    akim = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } } });
    fenerIz = akim.getVideoTracks()[0];
    const cap = fenerIz.getCapabilities ? fenerIz.getCapabilities() : {};
    if (!cap.torch) { fenerKapatTam(); return false; }
    return true;
  } catch (e) { fenerKapatTam(); return false; }
}
async function fener(acik) { if (!fenerIz) return; try { await fenerIz.applyConstraints({ advanced: [{ torch: acik }] }); } catch (e) {} }
function fenerKapatTam() { if (akim) akim.getTracks().forEach(t => t.stop()); akim = null; fenerIz = null; }
let wakeLock = null;
async function uyanikTut(a) { try { if (a && "wakeLock" in navigator) wakeLock = await navigator.wakeLock.request("screen"); else if (!a && wakeLock) { wakeLock.release(); wakeLock = null; } } catch (e) {} }
let ses = null;
function sesBaglam() { if (!ses) ses = new (window.AudioContext || window.webkitAudioContext)(); if (ses.state === "suspended") ses.resume(); return ses; }
function bip(frek, sure, hacim = 0.6, tip = "sine") {
  const c = sesBaglam(), o = c.createOscillator(), g = c.createGain();
  o.type = tip; o.frequency.value = frek; g.gain.value = 0;
  o.connect(g).connect(c.destination);
  const t = c.currentTime; g.gain.setTargetAtTime(hacim, t, 0.005); g.gain.setTargetAtTime(0, t + sure / 1000, 0.01);
  o.start(t); o.stop(t + sure / 1000 + 0.1);
}
const isik = $("#isik");
function ekranIsik(acik, kapaliSiyah = true) { isik.classList.remove("gizli"); isik.classList.toggle("kapali", !acik && kapaliSiyah); }
function ekranIsikKapat() { isik.classList.add("gizli"); isik.innerHTML = ""; }
const bekle = ms => new Promise(r => setTimeout(r, ms));

/* ---------- Araçlar ---------- */
let aracDur = null; // aktif aracı durduran fonksiyon
function aracKapat() { if (aracDur) { aracDur(); aracDur = null; } $$(".kart").forEach(k => k.classList.remove("aktif")); $("#arac-panel").innerHTML = ""; }
$$(".kart").forEach(k => k.addEventListener("click", () => {
  const ad = k.dataset.arac; const zatenAcik = k.classList.contains("aktif");
  aracKapat(); if (zatenAcik) return;
  k.classList.add("aktif"); ARACLAR[ad]($("#arac-panel"));
}));

const ARACLAR = {
  pusula(p) {
    p.innerHTML = `<div class="pusula"><div class="ibre"></div><div class="kadran" id="kadran"><b class="k">K</b><b class="d">D</b><b class="g">G</b><b class="b">B</b></div></div>
      <div class="derece" id="derece">—</div>
      <div class="satir"><label class="kucuk">Hedef açı (°) <input type="number" id="phedef" min="0" max="359" placeholder="ör. 70"></label><button id="pkilit">Şu anki yönü hedef yap</button></div>
      <div id="psapma" class="kucuk" style="text-align:center;font-size:18px;margin-top:6px"></div>
      <p class="kucuk" id="pnot">Telefonu yatay tut. Sapma varsa telefonla havada 8 çiz.</p>
      <button class="buyuk-btn" id="pbas">Pusulayı başlat</button>`;
    const yonAd = d => ["K", "KD", "D", "GD", "G", "GB", "B", "KB"][Math.round(d / 45) % 8];
    let dinleyici = null;
    let sonH = null;
    $("#phedef").value = oku("pusulaHedef", "");
    $("#phedef").oninput = () => sakla("pusulaHedef", $("#phedef").value);
    $("#pkilit").onclick = () => { if (sonH != null) { $("#phedef").value = Math.round(sonH); sakla("pusulaHedef", $("#phedef").value); } };
    const goster = h => {
      h = (h + 360) % 360; sonH = h; $("#kadran").style.transform = `rotate(${-h}deg)`; $("#derece").textContent = Math.round(h) + "° " + yonAd(h);
      const t = $("#phedef").value;
      if (t !== "") { let f = ((+t - h + 540) % 360) - 180; const geri = (+t + 180) % 360;
        $("#psapma").innerHTML = Math.abs(f) <= 5 ? `<b style="color:var(--yesil)">✓ Doğru yöndesin</b>` : (f > 0 ? `${Math.round(f)}° sağa dön ➡️` : `⬅️ ${Math.round(-f)}° sola dön`);
        $("#psapma").innerHTML += `<div class="kucuk">Geri dönüş açısı: ${Math.round(geri)}°</div>`; }
      else $("#psapma").textContent = "";
    };
    $("#pbas").onclick = async () => {
      if (typeof DeviceOrientationEvent !== "undefined" && DeviceOrientationEvent.requestPermission) {
        try { if ((await DeviceOrientationEvent.requestPermission()) !== "granted") { $("#pnot").textContent = "İzin verilmedi."; return; } } catch (e) {}
      }
      let veri = false;
      dinleyici = e => {
        let h = null;
        if (e.webkitCompassHeading != null) h = e.webkitCompassHeading;
        else if (e.absolute && e.alpha != null) h = 360 - e.alpha;
        if (h != null) { veri = true; goster(h); }
      };
      window.addEventListener("deviceorientationabsolute", dinleyici);
      window.addEventListener("deviceorientation", dinleyici);
      $("#pbas").classList.add("gizli");
      setTimeout(() => { if (!veri) $("#pnot").textContent = "Pusula sensörü verisi gelmedi. Bu cihaz/tarayıcı manyetik yön vermiyor olabilir (uygulama HTTPS üzerinden açılmalı)."; }, 3000);
    };
    aracDur = () => { if (dinleyici) { window.removeEventListener("deviceorientationabsolute", dinleyici); window.removeEventListener("deviceorientation", dinleyici); } };
  },

  fener(p) {
    p.innerHTML = `<button class="buyuk-btn" id="fac">🔦 Kamera ışığını aç</button>
      <button class="buyuk-btn" id="ekr" style="background:#fff">⬜ Beyaz ekran ışığı</button>
      <p class="kucuk" id="fnot">Kamera ışığı için kamera izni gerekir (görüntü kaydedilmez).</p>`;
    let acik = false;
    $("#fac").onclick = async () => {
      if (!acik) {
        if (!(await fenerHazirla())) { $("#fnot").textContent = "Bu cihazda tarayıcıdan fener açılamıyor. Beyaz ekran ışığını kullan."; return; }
        await fener(true); acik = true; $("#fac").textContent = "🔦 Kapat"; uyanikTut(true);
      } else { await fener(false); fenerKapatTam(); acik = false; $("#fac").textContent = "🔦 Kamera ışığını aç"; uyanikTut(false); }
    };
    $("#ekr").onclick = () => {
      ekranIsik(true); uyanikTut(true);
      isik.innerHTML = `<button>Kapat</button>`; isik.querySelector("button").onclick = () => { ekranIsikKapat(); uyanikTut(false); };
      try { document.documentElement.requestFullscreen && document.documentElement.requestFullscreen(); } catch (e) {}
    };
    aracDur = () => { if (acik) { fener(false); fenerKapatTam(); } ekranIsikKapat(); uyanikTut(false); };
  },

  sos(p) {
    p.innerHTML = `<label class="kucuk">Mesaj (boş = SOS)</label><input type="text" id="mmesaj" placeholder="SOS">
      <div class="mors-cikti" id="mcikti">··· ——— ···</div>
      <div class="satir"><label><input type="checkbox" id="mfener" checked> Kamera ışığı</label><label><input type="checkbox" id="mekran" checked> Ekran</label><label><input type="checkbox" id="mses"> Ses</label></div>
      <div class="satir"><label class="kucuk">Hız (birim ms) <input type="number" id="mhiz" value="220" min="80" max="600"></label></div>
      <button class="buyuk-btn kirmizi" id="mbas">▶ Sürekli gönder</button>
      <details style="margin-top:10px"><summary>Mors alfabesi tablosu</summary><div id="mtablo" class="mono"></div></details>`;
    const M = window.MORS;
    const kodla = t => [...t.toLocaleUpperCase("tr")].map(c => c === " " ? "/" : (M[c] || "")).filter(Boolean).join(" ");
    const yaz = () => { const t = $("#mmesaj").value.trim() || "SOS"; $("#mcikti").textContent = (t.toUpperCase() === "SOS" ? "... --- ..." : kodla(t)).replace(/\./g, "·").replace(/-/g, "—"); };
    $("#mmesaj").oninput = yaz; yaz();
    $("#mtablo").innerHTML = Object.entries(M).map(([k, v]) => `${k} ${v.replace(/\./g, "·").replace(/-/g, "—")}`).join("<br>");
    let calisiyor = false, fenerVar = false;
    const durdur = async () => { calisiyor = false; $("#mbas").textContent = "▶ Sürekli gönder"; if (fenerVar) { await fener(false); fenerKapatTam(); fenerVar = false; } ekranIsikKapat(); uyanikTut(false); };
    $("#mbas").onclick = async () => {
      if (calisiyor) return durdur();
      calisiyor = true; $("#mbas").textContent = "■ Durdur"; uyanikTut(true);
      if ($("#mses").checked) sesBaglam();
      if ($("#mfener").checked) fenerVar = await fenerHazirla();
      const ekran = $("#mekran").checked;
      if (ekran) { ekranIsik(false); isik.innerHTML = `<button>■ Durdur</button>`; isik.querySelector("button").onclick = durdur; }
      const t = $("#mmesaj").value.trim() || "SOS";
      const kod = t.toUpperCase() === "SOS" ? "...---..." : kodla(t);
      const u = Math.max(80, +$("#mhiz").value || 220);
      const ac = async (a, sure) => {
        if (fenerVar) fener(a); if (ekran) ekranIsik(a);
        if (a && $("#mses").checked) bip(800, sure, 0.5);
      };
      while (calisiyor) {
        for (const c of kod) {
          if (!calisiyor) break;
          if (c === ".") { await ac(true, u); await bekle(u); await ac(false); await bekle(u); }
          else if (c === "-") { await ac(true, 3 * u); await bekle(3 * u); await ac(false); await bekle(u); }
          else if (c === " ") await bekle(2 * u);
          else if (c === "/") await bekle(6 * u);
        }
        await bekle(7 * u);
      }
    };
    aracDur = durdur;
  },

  duduk(p) {
    p.innerHTML = `<p>Yüksek frekanslı ses bağırmaktan uzağa gider. Sesi sonuna kadar aç.</p>
      <button class="buyuk-btn kirmizi" id="d3">📢 3'lü yardım sinyali (tekrarla)</button>
      <button class="buyuk-btn" id="dbas">Basılı tut = düdük</button>`;
    let dongu = false;
    const ucluCal = async () => { while (dongu) { for (let i = 0; i < 3 && dongu; i++) { bip(3150, 700, 1, "square"); await bekle(1100); } await bekle(2500); } };
    $("#d3").onclick = () => { if (dongu) { dongu = false; $("#d3").textContent = "📢 3'lü yardım sinyali (tekrarla)"; } else { sesBaglam(); dongu = true; $("#d3").textContent = "■ Durdur"; ucluCal(); } };
    let osc = null;
    const basla = e => { e.preventDefault(); const c = sesBaglam(); osc = c.createOscillator(); const g = c.createGain(); osc.type = "square"; osc.frequency.value = 3150; g.gain.value = 1; osc.connect(g).connect(c.destination); osc.start(); };
    const bit = () => { if (osc) { osc.stop(); osc = null; } };
    const b = $("#dbas"); b.addEventListener("pointerdown", basla); b.addEventListener("pointerup", bit); b.addEventListener("pointerleave", bit);
    aracDur = () => { dongu = false; bit(); };
  },

  konum(p) {
    p.innerHTML = `<div id="kbilgi" class="mono">Konum bekleniyor… (GPS internetsiz çalışır; açık havada ilk sabitleme birkaç dakika sürebilir)</div>
      <div class="satir"><button id="kkopya">📋 Kopyala</button><button id="kkaydet">➕ Bu noktayı kaydet</button></div>
      <h4>Kayıtlı noktalar</h4><div id="knoktalar"></div>`;
    let son = null;
    const ciz = () => {
      const n = oku("noktalar", []);
      $("#knoktalar").innerHTML = n.length ? n.map((x, i) => {
        let uz = ""; if (son) { const d = mesafe(son, x), y = kerteriz(son, x); uz = `${d < 1000 ? Math.round(d) + " m" : (d / 1000).toFixed(2) + " km"} · ${Math.round(y)}° ${yonAdi(y)}`; }
        return `<div class="nokta"><div class="ust"><b>${esc(x.ad)}</b><button data-sil="${i}">🗑</button></div><div class="mono kucuk">${x.lat.toFixed(5)}, ${x.lon.toFixed(5)}</div>${uz ? `<div>➜ ${uz}</div>` : ""}</div>`;
      }).join("") : `<p class="kucuk">Henüz yok. Çadır, araç, su kaynağı gibi noktaları kaydet; sonra mesafe ve yönünü gör.</p>`;
      $$("[data-sil]").forEach(b => b.onclick = () => { const n = oku("noktalar", []); n.splice(+b.dataset.sil, 1); sakla("noktalar", n); ciz(); });
    };
    ciz();
    if (!navigator.geolocation) { $("#kbilgi").textContent = "Bu cihazda konum yok."; return; }
    const izId = navigator.geolocation.watchPosition(pos => {
      const c = pos.coords; son = { lat: c.latitude, lon: c.longitude };
      $("#kbilgi").innerHTML = `<div style="font-size:22px">${c.latitude.toFixed(5)}, ${c.longitude.toFixed(5)}</div>
        <div>${dms(c.latitude, "K", "G")}  ${dms(c.longitude, "D", "B")}</div>
        <div class="kucuk">Doğruluk ±${Math.round(c.accuracy)} m${c.altitude != null ? ` · Rakım ${Math.round(c.altitude)} m` : ""} · ${new Date(pos.timestamp).toLocaleTimeString("tr")}</div>`;
      ciz();
    }, err => { $("#kbilgi").textContent = "Konum alınamadı: " + (err.code === 1 ? "izin verilmedi." : err.message); }, { enableHighAccuracy: true, maximumAge: 5000, timeout: 60000 });
    $("#kkopya").onclick = async () => { if (!son) return; const t = `${son.lat.toFixed(5)}, ${son.lon.toFixed(5)}`; try { await navigator.clipboard.writeText(t); $("#kkopya").textContent = "Kopyalandı ✓"; } catch (e) { $("#kkopya").textContent = t; } };
    $("#kkaydet").onclick = () => { if (!son) return; noktaEkle(son.lat, son.lon); ciz(); };
    aracDur = () => navigator.geolocation.clearWatch(izId);
  },

  kartim(p) {
    const k = oku("acilKart", { ad: "", dogum: "", kan: "", alerji: "", hastalik: "", ilaclar: [], yakinlar: "", not: "" });
    const formCiz = () => {
      p.innerHTML = `<p class="kucuk">Bu bilgiler sadece bu cihazda saklanır. Kurtarıcılar ve sağlık ekibi için. Yazılı bir kopyasını da çantana koy.</p>
      <div class="plan">
      <label>Ad soyad</label><input type="text" id="k-ad" value="${esc(k.ad)}">
      <div class="satir"><div><label>Doğum yılı</label><input type="text" id="k-dogum" value="${esc(k.dogum)}"></div>
      <div><label>Kan grubu</label><select id="k-kan">${["", "0 Rh+", "0 Rh−", "A Rh+", "A Rh−", "B Rh+", "B Rh−", "AB Rh+", "AB Rh−", "Bilmiyorum"].map(x => `<option ${x === k.kan ? "selected" : ""}>${x}</option>`).join("")}</select></div></div>
      <label>Alerjiler (ilaç, gıda, arı…)</label><textarea id="k-alerji" rows="2">${esc(k.alerji)}</textarea>
      <label>Kronik hastalıklar, önemli durumlar (kalp pili, gebelik…)</label><textarea id="k-hastalik" rows="2">${esc(k.hastalik)}</textarea>
      <label>Düzenli kullandığım ilaçlar</label><div id="k-ilaclar"></div><button id="k-ilacekle">➕ İlaç ekle</button>
      <label>Acil durumda aranacak kişiler</label><textarea id="k-yakin" rows="2" placeholder="Eşim – 05xx…">${esc(k.yakinlar)}</textarea>
      <label>Diğer notlar</label><textarea id="k-not" rows="2">${esc(k.not)}</textarea>
      <button class="buyuk-btn" id="k-kaydet">Kaydet</button>
      <div class="satir"><button id="k-goster">🪪 Kartı göster</button><button id="k-kopya">📋 Metin olarak kopyala</button></div><span id="k-ok" class="kucuk"></span></div>`;
      const ilacCiz = () => {
        $("#k-ilaclar").innerHTML = k.ilaclar.map((x, i) => `<div class="nokta"><div class="satir"><input type="text" data-i="${i}" data-f="ad" placeholder="İlaç adı" value="${esc(x.ad)}"><button data-sil="${i}">🗑</button></div>
          <div class="satir"><input type="text" data-i="${i}" data-f="doz" placeholder="Doz (ör. 50 mcg)" value="${esc(x.doz)}"><input type="text" data-i="${i}" data-f="saat" placeholder="Ne zaman (ör. sabah aç)" value="${esc(x.saat)}"></div>
          <input type="text" data-i="${i}" data-f="neden" placeholder="Ne için (ör. tiroid)" value="${esc(x.neden || "")}" style="margin-top:6px"></div>`).join("") || `<p class="kucuk">Henüz ilaç yok.</p>`;
        $$("#k-ilaclar input").forEach(inp => inp.oninput = () => { k.ilaclar[+inp.dataset.i][inp.dataset.f] = inp.value; });
        $$("#k-ilaclar [data-sil]").forEach(b => b.onclick = () => { k.ilaclar.splice(+b.dataset.sil, 1); ilacCiz(); });
      };
      ilacCiz();
      $("#k-ilacekle").onclick = () => { k.ilaclar.push({ ad: "", doz: "", saat: "", neden: "" }); ilacCiz(); };
      const topla = () => { k.ad = $("#k-ad").value; k.dogum = $("#k-dogum").value; k.kan = $("#k-kan").value; k.alerji = $("#k-alerji").value; k.hastalik = $("#k-hastalik").value; k.yakinlar = $("#k-yakin").value; k.not = $("#k-not").value; k.ilaclar = k.ilaclar.filter(x => x.ad || x.doz); sakla("acilKart", k); };
      $("#k-kaydet").onclick = () => { topla(); ilacCiz(); $("#k-ok").textContent = "Kaydedildi ✓"; };
      $("#k-goster").onclick = () => { topla(); kartGoster(); };
      $("#k-kopya").onclick = async () => { topla(); const t = metin(); try { await navigator.clipboard.writeText(t); $("#k-ok").textContent = "Kopyalandı ✓"; } catch (e) { $("#k-ok").textContent = "Kopyalanamadı"; } };
    };
    const metin = () => `ACİL DURUM KARTI\nAd: ${k.ad}\nDoğum yılı: ${k.dogum}\nKan grubu: ${k.kan}\nALERJİLER: ${k.alerji || "yok"}\nHastalıklar: ${k.hastalik || "-"}\nİlaçlar:\n${k.ilaclar.map(x => `- ${x.ad} ${x.doz} ${x.saat}${x.neden ? " (" + x.neden + ")" : ""}`).join("\n") || "-"}\nAcil kişiler: ${k.yakinlar}\nNot: ${k.not}`;
    const kartGoster = () => {
      p.innerHTML = `<div class="acil-kart"><div class="ak-baslik">🆘 ACİL DURUM KARTI</div>
        <div class="ak-ad">${esc(k.ad || "—")}</div><div>Doğum yılı: <b>${esc(k.dogum || "—")}</b></div>
        <div class="ak-kan">Kan grubu: ${esc(k.kan || "—")}</div>
        <div class="ak-alerji">⚠️ ALERJİ: ${esc(k.alerji || "Bilinen yok")}</div>
        <div><b>Hastalıklar:</b> ${esc(k.hastalik || "—")}</div>
        <div><b>İlaçlar:</b>${k.ilaclar.length ? `<ul>${k.ilaclar.map(x => `<li><b>${esc(x.ad)}</b> ${esc(x.doz)} · ${esc(x.saat)}${x.neden ? ` <span class="kucuk">(${esc(x.neden)})</span>` : ""}</li>`).join("")}</ul>` : " —"}</div>
        <div><b>Acil kişiler:</b><br>${esc(k.yakinlar || "—").replace(/\n/g, "<br>")}</div>
        ${k.not ? `<div><b>Not:</b> ${esc(k.not)}</div>` : ""}</div>
        <button class="buyuk-btn" id="k-duzenle">✏️ Düzenle</button>`;
      $("#k-duzenle").onclick = formCiz;
    };
    (k.ad || k.ilaclar.length) ? kartGoster() : formCiz();
  },

  rota(p) {
    const r = oku("rotaPlan", { nereye: "", rota: "", alternatif: "", cikis: "", donus: "", kisi: "", ekip: "", arac: "", ekipman: "" });
    p.innerHTML = `<p class="kucuk">Doğaya çıkmadan doldur ve <b>güvendiğin birine gönder</b>. Dönüş saatinden belli bir süre sonra haber alamazsa 112'yi araması gerektiğini söyle.</p>
      <div class="plan">
      <label>Nereye gidiyorum</label><input type="text" id="r-nereye" value="${esc(r.nereye)}" placeholder="ör. Kocadağ yaylası">
      <label>Rota (başlangıç, ara noktalar, bitiş)</label><textarea id="r-rota" rows="2">${esc(r.rota)}</textarea>
      <label>Alternatif / kaçış rotası</label><textarea id="r-alternatif" rows="2">${esc(r.alternatif)}</textarea>
      <div class="satir"><div><label>Çıkış</label><input type="datetime-local" id="r-cikis" value="${esc(r.cikis)}"></div><div><label>En geç dönüş</label><input type="datetime-local" id="r-donus" value="${esc(r.donus)}"></div></div>
      <label>Kime bildirdim (ad, telefon)</label><input type="text" id="r-kisi" value="${esc(r.kisi)}">
      <label>Kimlerle gidiyorum</label><input type="text" id="r-ekip" value="${esc(r.ekip)}">
      <label>Araç (marka, renk, plaka; nereye park edildi)</label><input type="text" id="r-arac" value="${esc(r.arac)}">
      <label>Yanımdakiler (telsiz kanalı, çadır rengi, yiyecek kaç gün)</label><textarea id="r-ekipman" rows="2">${esc(r.ekipman)}</textarea>
      <button class="buyuk-btn" id="r-kaydet">Kaydet ve mesaj oluştur</button>
      <div id="r-geri" class="derece" style="font-size:20px;margin-top:10px"></div>
      <div id="r-mesaj" class="gizli"><textarea id="r-metin" rows="9" readonly></textarea>
      <div class="satir"><button id="r-paylas">📤 Paylaş (WhatsApp/SMS)</button><button id="r-kopya">📋 Kopyala</button></div></div><span id="r-ok" class="kucuk"></span></div>`;
    const f = d => d ? new Date(d).toLocaleString("tr", { weekday: "short", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) : "-";
    const kaydet = () => { ["nereye", "rota", "alternatif", "cikis", "donus", "kisi", "ekip", "arac", "ekipman"].forEach(x => r[x] = $("#r-" + x).value); sakla("rotaPlan", r); };
    const mesaj = () => {
      const ak = oku("acilKart", null);
      return `ROTA PLANIM\nNereye: ${r.nereye}\nRota: ${r.rota}\nAlternatif: ${r.alternatif || "-"}\nÇıkış: ${f(r.cikis)}\nEN GEÇ DÖNÜŞ: ${f(r.donus)}\nEkip: ${r.ekip || "tek başıma"}\nAraç: ${r.arac || "-"}\nYanımda: ${r.ekipman || "-"}${ak && ak.kan ? `\nKan grubu: ${ak.kan}` : ""}${ak && ak.alerji ? `\nAlerji: ${ak.alerji}` : ""}\n\nDönüş saatinden 2 saat sonra benden haber alamazsan beni ara; ulaşamazsan bu mesajla 112'yi ara.`;
    };
    const geriSay = () => {
      if (!r.donus) { $("#r-geri").textContent = ""; return; }
      const ms = new Date(r.donus) - Date.now(); const s = Math.abs(ms) / 60000, sa = Math.floor(s / 60), dk = Math.floor(s % 60);
      $("#r-geri").innerHTML = ms > 0 ? `Dönüşe ${sa} sa ${dk} dk` : `<span style="color:var(--kirmizi)">Dönüş saati ${sa} sa ${dk} dk geçti</span>`;
    };
    geriSay(); const id = setInterval(geriSay, 30000);
    $("#r-kaydet").onclick = () => { kaydet(); $("#r-metin").value = mesaj(); $("#r-mesaj").classList.remove("gizli"); geriSay(); };
    $("#r-kopya").onclick = async () => { try { await navigator.clipboard.writeText($("#r-metin").value); $("#r-ok").textContent = "Kopyalandı ✓"; } catch (e) { $("#r-ok").textContent = "Kopyalanamadı, metni seçip kopyala."; } };
    $("#r-paylas").onclick = async () => { try { if (navigator.share) await navigator.share({ title: "Rota planım", text: $("#r-metin").value }); else $("#r-ok").textContent = "Bu cihazda paylaş yok; Kopyala'yı kullan."; } catch (e) {} };
    aracDur = () => clearInterval(id);
  },

  metronom(p) {
    p.innerHTML = `<p>Kalp masajı ritmi: dakikada 110. Her vuruşta bir bası; 30'da bir uyarı sesi (2 soluk zamanı).</p>
      <div class="derece" id="msay">0</div>
      <button class="buyuk-btn kirmizi" id="mtbas">▶ Başlat</button>
      <p class="kucuk"><a href="#iy-tyd" style="color:var(--vurgu)">Temel yaşam desteği talimatını aç</a></p>`;
    let id = null, n = 0;
    const dur = () => { clearInterval(id); id = null; $("#mtbas").textContent = "▶ Başlat"; uyanikTut(false); };
    $("#mtbas").onclick = () => {
      if (id) return dur();
      sesBaglam(); n = 0; uyanikTut(true); $("#mtbas").textContent = "■ Durdur";
      id = setInterval(() => { n++; const k = ((n - 1) % 30) + 1; $("#msay").textContent = k; bip(k === 30 ? 1500 : 1000, 60, 0.8); if (k === 30 && navigator.vibrate) navigator.vibrate(300); }, 60000 / 110);
    };
    aracDur = () => { if (id) dur(); };
  }
};

/* ---------- Coğrafi yardımcılar ---------- */
const rad = d => d * Math.PI / 180;
function mesafe(a, b) { const R = 6371000, dLa = rad(b.lat - a.lat), dLo = rad(b.lon - a.lon); const h = Math.sin(dLa / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLo / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(h)); }
function kerteriz(a, b) { const y = Math.sin(rad(b.lon - a.lon)) * Math.cos(rad(b.lat)); const x = Math.cos(rad(a.lat)) * Math.sin(rad(b.lat)) - Math.sin(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.cos(rad(b.lon - a.lon)); return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360; }
const yonAdi = d => ["K", "KD", "D", "GD", "G", "GB", "B", "KB"][Math.round(d / 45) % 8];
function dms(v, pos, neg) { const h = v >= 0 ? pos : neg; v = Math.abs(v); const d = Math.floor(v), m = Math.floor((v - d) * 60), s = ((v - d - m / 60) * 3600).toFixed(1); return `${d}°${m}'${s}"${h}`; }
function noktaEkle(lat, lon, ad) {
  const n = oku("noktalar", []);
  ad = ad || ("Nokta " + (n.length + 1) + " · " + new Date().toLocaleString("tr", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }));
  n.push({ ad, lat, lon, t: Date.now() }); sakla("noktalar", n);
  if (harita) noktalariCiz();
}

/* ---------- Harita ---------- */
let harita = null, noktaKatman = null, benIsaret = null, haritaIzId = null, noktaModu = false;
function haritaAc() {
  if (!window.L) { $("#harita").innerHTML = "<p style='padding:12px'>Harita kütüphanesi yüklenemedi.</p>"; return; }
  if (!harita) {
    const g = oku("haritaGorunum", { c: [41.2867, 36.33], z: 12 }); // varsayılan: Samsun
    harita = L.map("harita", { zoomControl: true }).setView(g.c, g.z);
    const sokak = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap katkıcıları" });
    const topo = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", { maxZoom: 17, subdomains: "abc", attribution: "© OpenStreetMap katkıcıları, SRTM | Stil: © OpenTopoMap (CC-BY-SA)" });
    (oku("katman", "sokak") === "topo" ? topo : sokak).addTo(harita);
    L.control.layers({ "Sokak": sokak, "Topoğrafik (yükselti)": topo }, null, { position: "topright" }).addTo(harita);
    harita.on("baselayerchange", e => sakla("katman", e.layer === topo ? "topo" : "sokak"));
    noktaKatman = L.layerGroup().addTo(harita);
    harita.on("moveend", () => sakla("haritaGorunum", { c: [harita.getCenter().lat, harita.getCenter().lng], z: harita.getZoom() }));
    harita.on("click", e => {
      if (!noktaModu) return; noktaModu = false; $("#h-nokta").textContent = "➕ Nokta ekle";
      noktaEkle(e.latlng.lat, e.latlng.lng);
    });
    noktalariCiz(); onbellekSay();
  }
  setTimeout(() => harita.invalidateSize(), 50);
}
function noktalariCiz() {
  noktaKatman.clearLayers();
  oku("noktalar", []).forEach(n => L.circleMarker([n.lat, n.lon], { radius: 8, color: "#f5a524", fillOpacity: .9 }).bindPopup(`<b>${esc(n.ad)}</b><br>${n.lat.toFixed(5)}, ${n.lon.toFixed(5)}`).addTo(noktaKatman));
}
$("#h-konum").onclick = () => {
  if (!navigator.geolocation) return;
  $("#h-bilgi").textContent = "Konum aranıyor…";
  if (haritaIzId != null) navigator.geolocation.clearWatch(haritaIzId);
  let ilk = true;
  haritaIzId = navigator.geolocation.watchPosition(pos => {
    const ll = [pos.coords.latitude, pos.coords.longitude];
    if (!benIsaret) benIsaret = L.circleMarker(ll, { radius: 9, color: "#fff", weight: 3, fillColor: "#3b82f6", fillOpacity: 1 }).addTo(harita);
    else benIsaret.setLatLng(ll);
    if (ilk) { harita.setView(ll, Math.max(harita.getZoom(), 15)); ilk = false; }
    $("#h-bilgi").textContent = `±${Math.round(pos.coords.accuracy)} m`;
  }, err => { $("#h-bilgi").textContent = "Konum alınamadı"; }, { enableHighAccuracy: true, maximumAge: 5000 });
};
$("#h-nokta").onclick = () => { noktaModu = !noktaModu; $("#h-nokta").textContent = noktaModu ? "Haritada bir yere dokun…" : "➕ Nokta ekle"; };
async function onbellekSay() {
  try { const c = await caches.open("hk-karolar"); const k = await c.keys(); $("#h-bilgi").textContent = `Önbellekte ${k.length} harita karosu`; } catch (e) {}
}

/* ---------- İlaçlar ---------- */
const katla = s => String(s || "").toLocaleLowerCase("tr").replace(/[çğıöşüâîû]/g, c => ({ ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", â: "a", î: "i", û: "u" }[c])).replace(/\s+/g, " ").trim();
const KARTLAR = (window.ILACLAR || []).map(k => ({ ...k, ara: katla(k.ad + " " + k.ornek + " " + k.grup + " " + k.ne) }));
let ilacListe = null; // {tarih, kolonlar:[...], satirlar:[[...]] }
function idb() {
  return new Promise((ok, hata) => {
    const r = indexedDB.open("hayattakal", 1);
    r.onupgradeneeded = () => r.result.createObjectStore("veri");
    r.onsuccess = () => ok(r.result); r.onerror = () => hata(r.error);
  });
}
async function idbAl(k) { const d = await idb(); return new Promise(ok => { const r = d.transaction("veri").objectStore("veri").get(k); r.onsuccess = () => ok(r.result); r.onerror = () => ok(null); }); }
async function idbKoy(k, v) { const d = await idb(); return new Promise((ok, hata) => { const t = d.transaction("veri", "readwrite"); t.objectStore("veri").put(v, k); t.oncomplete = ok; t.onerror = () => hata(t.error); }); }
async function ilacListeYukle() {
  try { ilacListe = await idbAl("ilacListe"); } catch (e) { ilacListe = null; }
  if (ilacListe) ilacListe.ara = ilacListe.satirlar.map(r => katla(r.join(" ")));
  ilacDurum();
}
function ilacDurum() {
  $("#ilac-durum").textContent = ilacListe ? `· ${ilacListe.satirlar.length.toLocaleString("tr")} ürün yüklü (${ilacListe.dosya}, ${new Date(ilacListe.tarih).toLocaleDateString("tr")})` : "· yüklü değil";
  $("#ilac-sil").classList.toggle("gizli", !ilacListe);
}
const KOLON_KALIP = [
  ["urun", /(ÜRÜN|URUN|İLAÇ|ILAC)\s*AD/i], ["etken", /(ETK[İI]N|ETKEN)\s*MADDE/i], ["barkod", /BARKOD/i],
  ["atc", /ATC\s*KOD/i], ["atcad", /ATC\s*AD/i], ["firma", /(RUHSAT\s*SAH|F[İI]RMA)/i], ["recete", /RE[ÇC]ETE/i], ["durum", /(ASKI|DURUM|AKT[İI]F)/i]
];
$("#ilac-dosya").addEventListener("change", async e => {
  const f = e.target.files[0]; if (!f) return;
  const ilerle = t => $("#ilac-ilerleme").textContent = t;
  ilerle("Dosya okunuyor…");
  try {
    if (!window.XLSX) await new Promise((ok, hata) => { const s = document.createElement("script"); s.src = "vendor/xlsx.full.min.js"; s.onload = ok; s.onerror = hata; document.head.appendChild(s); });
    const wb = XLSX.read(await f.arrayBuffer(), { type: "array" });
    let en = null;
    for (const ad of wb.SheetNames) {
      const rows = XLSX.utils.sheet_to_json(wb.Sheets[ad], { header: 1, raw: false, defval: "" });
      for (let i = 0; i < Math.min(rows.length, 15); i++) {
        const baslik = rows[i].map(x => String(x).trim());
        const harita = {};
        KOLON_KALIP.forEach(([k, re]) => { const j = baslik.findIndex((h, jj) => re.test(h) && !Object.values(harita).includes(jj)); if (j > -1) harita[k] = j; });
        if (harita.urun != null && (harita.etken != null || harita.barkod != null)) {
          const veri = rows.slice(i + 1).filter(r => String(r[harita.urun] || "").trim());
          if (!en || veri.length > en.veri.length) en = { harita, veri };
          break;
        }
      }
    }
    if (!en) { ilerle("Bu dosyada ürün adı / etkin madde sütunları bulunamadı. TİTCK'nın ilaç listesi Excel'ini seçtiğinden emin ol."); return; }
    const kolonlar = ["urun", "etken", "barkod", "atc", "atcad", "firma", "recete", "durum"].filter(k => en.harita[k] != null);
    const satirlar = en.veri.map(r => kolonlar.map(k => String(r[en.harita[k]] ?? "").trim()));
    ilacListe = { tarih: Date.now(), dosya: f.name, kolonlar, satirlar };
    await idbKoy("ilacListe", { tarih: ilacListe.tarih, dosya: f.name, kolonlar, satirlar });
    ilacListe.ara = satirlar.map(r => katla(r.join(" ")));
    ilerle(`✓ ${satirlar.length.toLocaleString("tr")} ürün yüklendi ve bu cihaza kaydedildi.`);
    ilacDurum(); ilacAra();
  } catch (err) { ilerle("Dosya okunamadı: " + (err && err.message || err)); }
});
$("#ilac-sil").onclick = async () => { try { await idbKoy("ilacListe", null); } catch (e) {} ilacListe = null; ilacDurum(); ilacAra(); };
const KOLON_AD = { etken: "Etkin madde", barkod: "Barkod", atc: "ATC", atcad: "ATC adı", firma: "Firma", recete: "Reçete", durum: "Askıda mı / durum" };
function kartHtml(k) {
  return `<div class="ilac-kart"><h3>💊 ${esc(k.ad)}</h3><div class="grp">${esc(k.grup)}</div>
    <p class="kucuk">Örnek ürünler: ${esc(k.ornek)}</p><p><b>Ne için:</b> ${esc(k.ne)}</p><p><b>Dikkat:</b> ${k.uyari}</p></div>`;
}
function kartBul(etken) {
  const e = katla(etken); if (!e) return null;
  return KARTLAR.find(k => katla(k.ad).split(/[\s\/(),-]+/).filter(w => w.length > 4).some(w => e.includes(w)));
}
function ilacAra() {
  const q = katla($("#ilac-ara").value);
  const kel = q.split(" ").filter(Boolean);
  let html = "";
  const kartlar = kel.length ? KARTLAR.filter(k => kel.every(w => k.ara.includes(w))) : KARTLAR;
  if (kartlar.length) html += `<div class="bolum-baslik">${kel.length ? "Bilgi kartları" : "Sık kullanılan etken maddeler"} (${kartlar.length})</div>` + kartlar.map(kartHtml).join("");
  if (kel.length && ilacListe) {
    const bul = [];
    for (let i = 0; i < ilacListe.ara.length && bul.length < 60; i++) if (kel.every(w => ilacListe.ara[i].includes(w))) bul.push(i);
    html += `<div class="bolum-baslik">Ruhsatlı ürünler (${bul.length >= 60 ? "ilk 60" : bul.length})</div>`;
    if (bul.length) html += `<p class="kucuk">Kullanım alanı, ilacın ATC tedavi grubundan gelir ve genel bilgidir; ilacın tüm kullanım amaçlarını göstermeyebilir. Kesin bilgi kutudaki kullanma talimatındadır.</p>`;
    html += bul.map(i => {
      const r = ilacListe.satirlar[i], K = ilacListe.kolonlar;
      const al = k => { const j = K.indexOf(k); return j > -1 ? r[j] : ""; };
      const kart = kartBul(al("etken"));
      const atc = window.atcAciklama && window.atcAciklama(al("atc"));
      const kullanim = atc ? `<div class="kullanim">🩺 <b>Kullanım alanı:</b> ${esc(atc.detay || atc.ana)}${atc.detay ? ` <span class="kucuk">(${esc(atc.ana)})</span>` : ""}</div>` : "";
      const pq = encodeURIComponent(al("urun") + " kullanma talimatı");
      return `<div class="ilac-satir"><b>${esc(al("urun"))}</b>${kullanim}${K.filter(k => k !== "urun" && al(k)).map(k => `<small>${KOLON_AD[k]}: ${esc(al(k))}</small>`).join("")}${kart ? `<button data-kart="${esc(kart.ad)}">ℹ️ ${esc(kart.ad)} bilgi kartı</button>` : ""} <a class="kucuk prosp" href="https://www.google.com/search?q=${pq}" target="_blank" rel="noopener">📄 Kullanma talimatı (internet) ↗</a></div>`;
    }).join("") || `<p class="kucuk">Ruhsatlı listede eşleşme yok.</p>`;
  } else if (kel.length && !ilacListe) {
    html += `<p class="kucuk">Ticari adla (ör. "Parol 500") aramak için aşağıdan Türkiye ruhsatlı ilaç listesini yükle.</p>`;
  }
  if (!html) html = `<p class="kucuk">Sonuç yok.</p>`;
  $("#ilac-sonuc").innerHTML = html;
}
$("#ilac-ara").addEventListener("input", ilacAra);
$("#ilac-sonuc").addEventListener("click", e => { const b = e.target.closest("[data-kart]"); if (b) { $("#ilac-ara").value = b.dataset.kart; ilacAra(); $("main").scrollTop = 0; } });
ilacListeYukle(); ilacAra();

/* ---------- Service worker ---------- */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

/* ---------- Başlat ---------- */
listeCiz();
rota();
})();
