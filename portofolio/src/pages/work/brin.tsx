import React from "react";
import Link from "next/link";

export default function Brin() {
  return (
    <div className="min-h-screen bg-[#111115] text-white p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-[#C6FF00]">
        CAPI (Computer-Assisted Personal Interviewing) Assistant Intern
      </h1>
      <p className="text-gray-300 mb-8">
        Detail Magang Badan Riset dan Inovasi Nasional (BRIN).
      </p>

      {/* deskripsi pekerjaan */}
      <div className="bg-white/10 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Deskripsi Pekerjaan</h2>
        <p className="text-gray-300">
          Selama magang di SMP Erenos, saya bertugas sebagai CAPI
          (Computer-Assisted Personal Interviewing) Assistant Intern. Tugas
          utama saya meliputi :
        </p>
        <ul className="list-disc list-inside text-gray-300 mt-4">
          <li>
            Memberikan dukungan teknis (IT helpdesk support) dan komunikasi yang
            efektif kepada anggota lapangan untuk membantu menyelesaikan kendala
            sistem (troubleshooting).
          </li>
          <li>
            Penyelesaian Masalah terjadi saat mencoba memigrasikan data survei
            ke admin.
          </li>
          <li>
            Entry data untuk memastikan tidak ada masalah saat mencoba
            menyimpannya ke database utama.
          </li>
        </ul>
      </div>

      {/* Tombol kembali ke halaman utama */}
      <Link
        href="/"
        className="px-6 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
