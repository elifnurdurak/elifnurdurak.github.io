# Tasarım Brief Şablonu

Bu şablonu doldurarak bana tasarımı iletebilirsin. Her alanı doldurmak zorunda değilsin; bilmediğin yere
`?` yaz, ben makul bir öneri sunarım. Kod tarafında hiçbir şeyi Türkçe yazmıyorum: buradaki **kod adı**
alanlarına İngilizce, küçük harf ve tire ile yazılmış adlar ver (ör. `glass-card`), **ekranda görünecek
metinleri** ise Türkçe yaz.

---

## BÖLÜM A: Genel tasarım sistemi (bir kez doldurulur)

### A1. Renkler

Her renk için: rol, kod adı, HEX, nerede kullanılacağı. Pantone değeri varsa ekle.

| Rol            | Kod adı         | HEX       | Nerede kullanılır                  |
| -------------- | --------------- | --------- | ---------------------------------- |
| Yüzey suyu     | `water-surface` | `#BBE7E6` | Hero arka planı, açık metin zemini |
| Orta su        | `water-mid`     | `#0085AD` | Hakkımda, Hizmetler                |
| Derin su       | `water-deep`    | `#00263E` | Vaka çalışmaları                   |
| Dip            | `water-abyss`   | `#101820` | İletişim bölümü                    |
| Mercan (CTA)   | `coral`         | `#FF6F61` | Birincil butonlar                  |
| Biyolüminesans | `glow`          | `#7CE0D3` | Vurgu, parlayan kenarlar           |
| Kum            | `sand`          | `#F0EEE9` | Açık metin, kart zemini            |

Eklemek istediğin renkler: …

### A2. Tipografi

- **Başlık fontu** (serif): ad, kaynak (Google Fonts adı ya da yüklenecek dosya): …
- **Gövde fontu** (sans): …
- **Boyut ölçeği** (px veya rem; mobil / masaüstü): H1, H2, H3, gövde, küçük metin: …
- **Satır yüksekliği ve ağırlıklar:** …

### A3. Boşluk, köşe, gölge

- **Boşluk ölçeği** (ör. 4 / 8 / 16 / 24 / 32 / 64 / 96 px): …
- **Köşe yuvarlaklığı:** kart …, buton …, görsel …
- **Gölge / parlama (glow):** kart gölgesi …, biyolüminesans parlama değeri …

### A4. Cam efekti (glassmorphism)

Arka plan rengi + saydamlık: … · Blur miktarı: … · Kenar rengi ve kalınlığı: … · Hover davranışı: …

### A5. Kırılma noktaları (responsive)

Mobil: … px · Tablet: … px · Masaüstü: … px. Mobilde değişen / kapanan efektler: …

### A6. Hareket (motion) kuralları

| Hareket                              | Süre           | Easing (ivme eğrisi) | Notlar |
| ------------------------------------ | -------------- | -------------------- | ------ |
| Bölüm giriş animasyonu               | … ms           | …                    |        |
| Kart hover "süzülme"                 | … ms           | …                    |        |
| Derinlik geçişi (arka plan gradyanı) | scroll'a bağlı | …                    |        |
| Baloncuk yükselişi                   | … sn           | …                    |        |

- **Azaltılmış hareket (`prefers-reduced-motion`):** hangi animasyonlar tamamen kapanır, hangileri sadeleşir: …

### A7. Erişilebilirlik

Kontrast hedefi (öneri: WCAG AA), odak (focus) halkası stili, ekran okuyucu için görsel açıklamaları: …

---

## BÖLÜM B: Bölüm briefleri (her bölüm için bir kez)

Bölümler ve derinlikleri: Hero (0 m), Hakkımda (10 m), Hizmetler (40 m), Çalışma Süreci (200 m),
Vaka Çalışmaları ve Rakamlar (500 m), Blog ve SSS (800 m), İletişim (1000 m), Footer (Yüzeye çıkış),
Galeri ("Anılar"), Galeri sayfası, Blog yazısı sayfası, Vaka çalışması sayfası.

Her bölüm için şu kutuyu kopyala ve doldur:

```
BÖLÜM ADI: …
Kod adı: …            (ör. services)
Derinlik / bölge: …   (ör. 40 m, Mercan Resifi)
Amaç (ziyaretçi ne hissetmeli / ne yapmalı): …

İÇERİK (ekranda görünecek Türkçe metin)
- Başlık: …
- Alt başlık: …
- Gövde metni: …
- Madde / kart listesi: …
- Buton metni ve gideceği yer: …

YERLEŞİM
- Masaüstü: … (kaç kolon, hizalama, boşluklar)
- Mobil: …

GÖRSEL
- Arka plan / gradyan: …
- Süs öğeleri (mercan, yosun, ışık hüzmesi vb.): … (dosya adı: …)
- Fotoğraf / illüstrasyon: … (dosya adı: …)

HAREKET
- Girişte: …
- Scroll sırasında (parallax vb.): …
- Hover / tıklama: …
- Mobilde azaltılan efektler: …

NOTLAR / REFERANS: … (link, ekran görüntüsü, Figma bağlantısı)
```

---

## BÖLÜM C: Bileşen tanımları (yeniden kullanılan parçalar)

Her bileşen için bir kutu (ör. kart, buton, derinlik göstergesi, galeri ızgarası, lightbox):

```
BİLEŞEN: …
Kod adı: …            (ör. glass-card)
Nerede kullanılır: …
Durumlar: normal / hover / odak (focus) / aktif / devre dışı — her biri için görünüm: …
Boyut ve boşluklar: …
Varyantlar: … (ör. açık / koyu zemin)
Erişilebilirlik: … (klavye, ekran okuyucu etiketi)
```

---

## BÖLÜM D: Varlık (asset) teslimi

| Tür                 | Biçim         | Kural                                                                           |
| ------------------- | ------------- | ------------------------------------------------------------------------------- |
| Fotoğraf            | JPG / WebP    | En uzun kenar ~2000 px, dosya başına ~500 KB altı, konum (GPS) bilgisi silinmiş |
| İllüstrasyon / ikon | SVG           | Mümkünse sadeleştirilmiş SVG; renkler token adlarıyla eşleşsin                  |
| Animasyon           | Lottie (JSON) | Dosya başına küçük boyut; yalnızca gerçekten gerekirse                          |
| Font                | WOFF2         | Lisansı ticari/web kullanıma uygun olmalı                                       |

- **Dosya adı:** küçük harf, İngilizce, tire ile ayır, Türkçe karakter ve boşluk yok (`devfest-2024-talk.jpg`).
- Fotoğrafları kategori klasörüne koy (bkz. `docs/images.md`): `work`, `art-ceramics`, `speaking`,
  `psychology-community`, `portraits`, `other`.
- Her fotoğraf için ver: **kısa Türkçe açıklama** (ekran okuyucu metni), isteğe bağlı başlık ve tarih.
- Fotoğrafta tanınabilir başka insanlar varsa, paylaşılmasında sakınca olup olmadığını belirt.

---

## BÖLÜM E: Teslim sırası (öneri)

1. A bölümü (genel sistem) ve birkaç referans görsel
2. Hero ve Hakkımda briefleri (derinlik efektinin ana hissi)
3. Diğer bölümler, birer birer
4. Bileşen detayları ve fotoğraflar
5. Hareket ince ayarları

Her teslimden sonra ben uygular, tarayıcıda birlikte kontrol ederiz ve gerekirse düzeltiriz.
