import React from "react";
import Link from "next/link";

export default function Brin() {
  return (
    <div className="min-h-screen bg-[#111115] text-white p-6 md:p-10 flex flex-col items-center selection:bg-[#C6FF00] selection:text-black">
      {/* Judul Halaman */}
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#C6FF00] text-center max-w-4xl mt-4 md:mt-10">
        CAPI (Computer-Assisted Personal Interviewing) Assistant Intern
      </h1>
      <p className="text-gray-300 mb-8 text-center">
        Detail Magang Badan Riset dan Inovasi Nasional (BRIN).
      </p>

      {/* Container Deskripsi */}
      <div className="w-full max-w-5xl flex flex-col gap-8 items-center mb-10">
        {/* 1. Deskripsi Pekerjaan */}
        <div className="w-full bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 shadow-lg overflow-hidden">
          <h2 className="text-xl font-bold mb-4 text-white">
            Deskripsi Pekerjaan
          </h2>

          {/* Ditambahkan break-words dan text-justify */}
          <p className="text-gray-300 leading-relaxed text-justify break-words whitespace-normal">
            Selama magang di BRIN, saya bertugas sebagai CAPI (Computer-Assisted
            Personal Interviewing) Assistant Intern. Tugas utama saya meliputi:
          </p>

          {/* Ditambahkan break-words dan text-justify pada list */}
          <ul className="list-disc list-outside ml-5 text-gray-300 mt-4 space-y-2 leading-relaxed text-justify break-words whitespace-normal">
            <li>
              Memberikan dukungan teknis (IT helpdesk support) dan komunikasi
              yang efektif kepada anggota lapangan untuk membantu menyelesaikan
              kendala sistem (troubleshooting).
            </li>
            <li>
              Penyelesaian masalah yang terjadi saat mencoba memigrasikan data
              survei ke admin.
            </li>
            <li>
              Entry data untuk memastikan tidak ada masalah saat mencoba
              menyimpannya ke database utama.
            </li>
          </ul>
        </div>

        {/* 2. Gambar Dokumentasi (Berada di dalam Container Utama) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gambar 1 */}
          <div className="w-full h-72 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#141419] group">
            <img
              src="https://i.ibb.co.com/KjbnBynz/IMG-20260729-WA0007.jpg"
              alt="Dokumentasi BRIN 1"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Gambar 2 */}
          <div className="w-full h-72 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#141419] group">
            <img
              src="https://i.ibb.co.com/Q7DqNSY8/IMG-20260729-WA0005.jpg"
              alt="Dokumentasi BRIN 2"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>
      </div>

      {/* Tombol kembali ke halaman utama */}
      <Link
        href="/"
        className="px-8 py-3 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 font-medium"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
