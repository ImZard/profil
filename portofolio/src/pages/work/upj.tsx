import React from "react";
import Link from "next/link";

export default function Upj() {
  return (
    <div className="min-h-screen bg-[#111115] text-white p-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4 text-[#C6FF00]">
        Asisten Biro Pendidikan
      </h1>
      <p className="text-gray-300 mb-8">
        Detail Magang Universitas Pembangunan Jaya.
      </p>

      {/* deskripsi pekerjaan */}
      <div className="bg-white/10 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Deskripsi Pekerjaan</h2>
        <p className="text-gray-300">
          Selama magang di Universitas Pembangunan Jaya pada bagian biro
          pendidikan, saya bertugas sebagai Asisten Biro Pendidikan (Intern).
          Tugas utama saya meliputi:
        </p>
        <ul className="list-disc list-inside text-gray-300 mt-4">
          <li>
            Administrasi data yudisium dan wisuda pengarsipan, pengemasan ijazah
            dan transkrip nilai untuk keperluan kearsipan serta pengemasan
            ijazah.
          </li>
          <li>Administrasi pengecekan berkas mahasiswa baru.</li>
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
