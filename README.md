Next.js Portfolio

Repositori ini berisi kode sumber untuk web portofolio pribadi yang dibangun menggunakan framework Next.js. Website ini dirancang untuk menampilkan profil, proyek-proyek yang pernah dikerjakan, keahlian, serta informasi kontak secara interaktif dan responsif.

🛠️ Fitur Utama

Performance & SEO Friendly: Menggunakan fitur Server-Side Rendering (SSR) / Static Site Generation (SSG) bawaan Next.js.

Desain Responsif: Tampilan yang optimal di perangkat mobile, tablet, maupun desktop.

Komponen Modular: Dibangun dengan arsitektur komponen React yang bersih dan mudah dirawat.

Fast Refresh: Pengalaman pengembangan lokal yang cepat.

🚀 Teknologi yang Digunakan

Framework: Next.js

Library UI: React

Styling: Tailwind CSS / CSS Modules (sesuaikan dengan yang digunakan)

Deployment: Vercel

💻 Cara Menjalankan Proyek secara Lokal

PRASYARAT

Pastikan Anda sudah menginstal Node.js (versi 18.x atau lebih baru) dan npm/yarn/pnpm di komputer Anda.

LANGKAH-LANGKAH

Clone repositori ini:

git clone https://github.com/ImZard/profil.git
cd profil


Instal dependensi:

npm install
# atau
yarn install
# atau
pnpm install


Jalankan server pengembangan:

npm run dev
# atau
yarn dev
# atau
pnpm dev


Buka di browser:
Buka http://localhost:3000 untuk melihat hasilnya.

📁 Struktur Proyek (Ringkasan)

profil/
├── public/          # File statis (gambar, favicon, dll)
├── src/
│   ├── app/         # App Router Next.js (atau pages/ jika menggunakan Pages Router)
│   ├── components/  # Komponen React yang reusable
│   └── styles/      # File gaya / CSS global
├── package.json
└── README.md


📄 Lisensi

Proyek ini menggunakan lisensi MIT. Silakan gunakan dan sesuaikan sesuai kebutuhan Anda.
