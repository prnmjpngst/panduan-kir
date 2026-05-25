# Panduan KIR — Handbook Teknis Independen

Repository ini berisi kode sumber untuk website `prnmjpngst.pw`, sebuah handbook teknis independen mengenai uji berkala kendaraan bermotor (KIR) di Indonesia. Proyek ini berfungsi sebagai **arsip pengetahuan operasional lapangan**, bukan blog generik atau portal berita SEO.

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build) (Migrasi ke [Starlight](https://starlight.astro.build/) untuk arsitektur dokumentasi)
- **Konten:** MDX (Markdown dengan komponen interaktif)
- **Deployment:** Auto-deploy via Vercel

---

## 🎯 Tujuan & Filosofi Proyek

Website ini dibangun untuk menyediakan referensi praktis yang berfokus pada **realitas implementasi di lapangan**, bukan sekadar salinan teks hukum baku. Target pembaca utama meliputi pemilik kendaraan angkutan, operator armada (*fleet administrator*), personel bengkel/karoseri, serta staf lapangan Dishub/UPTD PKB.

### Prinsip Konten:
- **Tenang, Teknis, Praktis:** Menggunakan tone catatan atau dokumentasi lapangan berbasis pengalaman nyata.
- **Anti-Filler SEO:** Setiap kalimat harus memiliki nilai informasi riil. Hindari judul clickbait dan bahasa marketing korporat.
- **Solutif:** Menjelaskan mengapa kendaraan gagal uji dan bagaimana tindakan konkret untuk mengatasinya.

---

## 📂 Struktur Repositori

Proyek ini menggunakan struktur dokumentasi berbasis **Starlight**:

```text
panduan-kir/
├── src/
│   ├── content/
│   │   ├── docs/          # Lokasi utama 100+ artikel (.mdx)
│   │   │   ├── administrasi/ # Dokumen, regulasi, biaya
│   │   │   └── teknis/       # Emisi, sistem rem, kaki-kaki, dll.
│   │   └── config.ts      # Validasi skema frontmatter (TypeScript)
│   └── assets/            # Logo dan aset lokal khusus dokumen
├── public/                # Aset statis global (favicon, images)
├── astro.config.mjs       # Konfigurasi Astro & Sidebar Starlight
├── GEMINI.md              # File konteks proyek untuk AI Assistant
├── README.md              # File ini
└── package.json
