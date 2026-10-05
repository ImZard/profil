"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function DataVisual() {
  // State untuk menyimpan URL gambar yang sedang di-fullscreen
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#111115] text-white p-6 md:p-10 flex flex-col items-center selection:bg-[#C6FF00] selection:text-black relative">
      {/* Judul Halaman */}
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#C6FF00] text-center max-w-4xl mt-4 md:mt-10">
        Data Visualization (Everest Data Exploration)
      </h1>
      <p className="text-gray-300 mb-8 text-center">
        Detail Pembuatan Project Mini Course RevoU Data Visualization Everest
        Data Exploration.
      </p>

      {/* CONTAINER UTAMA - Kunci agar lebar box dan gambar SAMA PERSIS */}
      <div className="w-full max-w-5xl flex flex-col gap-8 items-center mb-10">
        {/* 1. Deskripsi Pekerjaan */}
        <div className="w-full bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 shadow-lg overflow-hidden">
          <h2 className="text-xl font-bold mb-4 text-white">
            Deskripsi Pekerjaan
          </h2>

          <p className="text-gray-300 leading-relaxed text-justify break-words whitespace-normal">
            Yang saya lakukan selama project ini:
          </p>

          <ul className="list-disc list-outside ml-5 text-gray-300 mt-4 mb-8 space-y-2 leading-relaxed text-justify break-words whitespace-normal">
            <li>Melakukan analisa data</li>
            <li>Visualisasi menggunakan Looker Studio (Google Data Studio).</li>
          </ul>

          {/* Bagian Link Website yang dirapikan */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-gray-300">
              Link Hasil Laporan :{" "}
              <a
                href="https://canva.link/9q3ncs4jh5oqr3l"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C6FF00] hover:underline font-medium transition-colors"
              >
                https://canva.link/9q3ncs4jh5oqr3l
              </a>
            </p>
          </div>
        </div>

        {/* 2. Gambar Dokumentasi (Berada di dalam Container Utama) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gambar 1 */}
          <div
            className="w-full h-72 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#141419] group flex items-center justify-center relative cursor-zoom-in"
            onClick={() =>
              setFullscreenImage("https://i.ibb.co.com/kgFfWtxs/image.png")
            }
          >
            <span className="text-gray-500 absolute">Gambar Dokumentasi 1</span>
            <img
              src="https://i.ibb.co.com/kgFfWtxs/image.png"
              alt="Dokumentasi 1"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out relative z-10"
            />
          </div>

          {/* Gambar 2 */}
          <div
            className="w-full h-72 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-[#141419] group flex items-center justify-center relative cursor-zoom-in"
            onClick={() =>
              setFullscreenImage("https://i.ibb.co.com/39z5fySN/image.png")
            }
          >
            <span className="text-gray-500 absolute">Gambar Dokumentasi 2</span>
            <img
              src="https://i.ibb.co.com/39z5fySN/image.png"
              alt="Dokumentasi 2"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out relative z-10"
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
          onClick={() => setFullscreenImage(null)}
        >
          {/* Tombol Close (X) */}
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

          {/* Gambar yang di-zoom */}
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
