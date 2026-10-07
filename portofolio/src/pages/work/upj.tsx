"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function UPJ() {
  // State untuk menyimpan URL gambar yang sedang di-fullscreen
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#111115] text-white p-6 md:p-10 flex flex-col items-center selection:bg-[#C6FF00] selection:text-black relative">
      {/* Judul & Subjudul */}
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#C6FF00] text-center max-w-4xl mt-4 md:mt-10">
        Asisten Biro Pendidikan
      </h1>
      <p className="text-gray-300 mb-8 text-center">
        Detail Magang Universitas Pembangunan Jaya.
      </p>

      {/* Container Deskripsi */}
      <div className="w-full max-w-5xl flex flex-col gap-8 items-center mb-10">
        {/* 1. Box Deskripsi Pekerjaan */}
        <div className="w-full bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 shadow-lg overflow-hidden">
          <h2 className="text-xl font-bold mb-4 text-white">
            Deskripsi Pekerjaan
          </h2>

          <p className="text-gray-300 leading-relaxed text-justify break-words whitespace-normal">
            Selama magang di Universitas Pembangunan Jaya pada bagian biro
            pendidikan, saya bertugas sebagai Asisten Biro Pendidikan (Intern).
            Tugas utama saya meliputi:
          </p>

          <ul className="list-disc list-outside ml-5 text-gray-300 mt-4 space-y-2 leading-relaxed text-justify break-words whitespace-normal">
            <li>
              Administrasi data yudisium dan wisuda pengarsipan, pengemasan
              ijazah dan transkrip nilai untuk keperluan kearsipan serta
              pengemasan ijazah.
            </li>
            <li>
              Administrasi dokumen dan pengecekan kelengkapan dokumen berkas
              mahasiswa baru.
            </li>
          </ul>
        </div>

        {/* 2. Grid Gambar Dokumentasi */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gambar 1 */}
          <div
            className="w-full h-72 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#141419] group cursor-zoom-in relative"
            onClick={() =>
              setFullscreenImage("https://i.ibb.co.com/RkYdXfMy/porto.png")
            }
          >
            <img
              src="https://i.ibb.co.com/RkYdXfMy/porto.png"
              alt="Dokumentasi 1"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out relative z-10"
            />
          </div>

          {/* Gambar 2 */}
          <div
            className="w-full h-72 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#141419] group cursor-zoom-in relative"
            onClick={() =>
              setFullscreenImage("https://i.ibb.co.com/Y4r8DfnH/porto-1.png")
            }
          >
            <img
              src="https://i.ibb.co.com/Y4r8DfnH/porto-1.png"
              alt="Dokumentasi 2"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out relative z-10"
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

      {/* ========================================= */}
      {/* MODAL FULLSCREEN IMAGE (POPUP) */}
      {/* ========================================= */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out backdrop-blur-sm"
          onClick={() => setFullscreenImage(null)} // Menutup popup saat area gelap ditekan
        >
          {/* Tombol Close (X) di pojok kanan atas */}
          <button
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            onClick={() => setFullscreenImage(null)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Gambar Fullscreen */}
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
