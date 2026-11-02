"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Katering() {
  // State untuk menyimpan URL gambar yang sedang di-fullscreen
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // State untuk memicu animasi masuk
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Memberikan sedikit jeda sebelum animasi berjalan agar transisi terlihat mulus
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-white p-6 md:p-10 flex flex-col items-center selection:bg-[#C6FF00] selection:text-black overflow-hidden relative z-0">
      {/* ========================================= */}
      {/* BACKGROUND GAMBAR & OVERLAY */}
      {/* ========================================= */}
      {/* 1. Gambar Background */}
      <div
        className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      ></div>
      {/* 2. Overlay Gelap + Blur tipis agar teks tetap terbaca jelas */}
      <div className="fixed inset-0 z-[-1] bg-[#0a0a0a]/85 backdrop-blur-[2px]"></div>

      {/* ========================================= */}
      {/* KONTEN UTAMA */}
      {/* ========================================= */}
      <div className="w-full max-w-5xl flex flex-col items-center relative z-10">
        {/* Judul Halaman dengan Animasi */}
        <div
          className={`flex flex-col items-center transform transition-all duration-1000 ease-out 
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-2 text-[#C6FF00] text-center max-w-4xl mt-4 md:mt-10 leading-tight">
            Website Developer <br className="hidden md:block" />
            <span className="text-xl md:text-2xl text-white font-semibold mt-2 inline-block">
              (Sistem Manajemen Pendaftaran dan Pembayaran Katering)
            </span>
          </h1>
          <p className="text-gray-300 mb-8 text-center max-w-2xl mt-4">
            Detail Pembuatan Project Tugas Kuliah Sistem Manajemen Pendaftaran
            dan Pembayaran Katering.
          </p>
        </div>

        {/* CONTAINER UTAMA - Kunci agar lebar box dan gambar SAMA PERSIS */}
        <div
          className={`w-full max-w-5xl flex flex-col gap-8 items-center mb-10
          transform transition-all duration-1000 delay-300 ease-out
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* 1. Deskripsi Pekerjaan */}
          <div className="w-full bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 shadow-lg overflow-hidden backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <h2 className="text-xl font-bold mb-4 text-white">
              Deskripsi Pekerjaan
            </h2>

            <p className="text-gray-300 leading-relaxed text-justify break-words whitespace-normal">
              Yang saya lakukan selama project ini:
            </p>

            <ul className="list-disc list-outside ml-5 text-gray-300 mt-4 mb-8 space-y-2 leading-relaxed text-justify break-words whitespace-normal marker:text-[#C6FF00]">
              <li>Analisa Kebutuhan (Elisitasi).</li>
              <li>
                System Analyst (Use Case Diagram, Class Diagram, Sequence
                Diagram, Activity Diagram).
              </li>
              <li>
                Mengembangkan Aplikasi Web menggunakan PHP Native dan MySQL
                dengan implementasi fitur autentikasi, pemesanan katering,
                manajemen paket/menu, pengelolaan pesanan, dan laporan
                pemesanan.
              </li>
            </ul>

            {/* Bagian Link Website yang dirapikan */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2 sm:items-center">
              <span className="text-gray-400 font-medium">Link Github:</span>
              <a
                href="https://github.com/ImZard/food-catering"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C6FF00] hover:text-white hover:underline underline-offset-4 transition-colors break-all"
              >
                https://github.com/ImZard/food-catering
              </a>
            </div>
          </div>

          {/* 2. Gambar Dokumentasi (Berada di dalam Container Utama) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gambar 1 */}
            <div
              className="w-full h-72 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40 group flex items-center justify-center relative cursor-zoom-in backdrop-blur-sm"
              onClick={() =>
                setFullscreenImage("https://i.ibb.co.com/qYDsnRHL/frame-22.png")
              }
            >
              <span className="text-gray-500 absolute font-medium tracking-wide z-0">
                Gambar Dokumentasi 1
              </span>
              <img
                src="https://i.ibb.co.com/qYDsnRHL/frame-22.png"
                alt="Dokumentasi 1"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out relative z-10"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center pointer-events-none">
                <span className="text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 bg-black/50 rounded backdrop-blur-sm border border-white/20">
                  Click to Zoom
                </span>
              </div>
            </div>

            {/* Gambar 2 */}
            <div
              className="w-full h-72 rounded-xl overflow-hidden border border-white/10 shadow-lg bg-black/40 group flex items-center justify-center relative cursor-zoom-in backdrop-blur-sm"
              onClick={() =>
                setFullscreenImage(
                  "https://i.ibb.co.com/TxyRQVfb/Frame-1-1.png",
                )
              }
            >
              <span className="text-gray-500 absolute font-medium tracking-wide z-0">
                Gambar Dokumentasi 2
              </span>
              <img
                src="https://i.ibb.co.com/TxyRQVfb/Frame-1-1.png"
                alt="Dokumentasi 2"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out relative z-10"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center pointer-events-none">
                <span className="text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 bg-black/50 rounded backdrop-blur-sm border border-white/20">
                  Click to Zoom
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tombol kembali ke halaman utama (Muncul paling akhir) */}
        <Link
          href="/"
          className={`px-8 py-3 bg-white/5 border border-white/20 rounded-xl hover:bg-[#C6FF00] hover:text-black hover:border-[#C6FF00] hover:-translate-y-1 transition-all duration-300 font-medium shadow-lg
          transform delay-500 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Kembali ke Beranda
        </Link>
      </div>

      {/* ========================================= */}
      {/* MODAL FULLSCREEN IMAGE (POPUP) */}
      {/* ========================================= */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out backdrop-blur-md"
          onClick={() => setFullscreenImage(null)}
        >
          {/* Tombol Close (X) */}
          <button
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white bg-white/10 hover:bg-[#C6FF00] hover:text-black p-2.5 rounded-full transition-colors z-50"
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
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
          />
        </div>
      )}
    </div>
  );
}
