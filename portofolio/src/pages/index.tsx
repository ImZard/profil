"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  // State untuk tab aktif antara Work Experience dan Project
  const [activeTab, setActiveTab] = useState<"experience" | "project">(
    "experience",
  );

  return (
    <div className="min-h-screen bg-[#111115] flex flex-col items-center py-10 px-4 selection:bg-[#C6FF00] selection:text-black">
      {/* Container Utama */}
      <div className="w-full max-w-4xl flex flex-col gap-8">
        {/* SECTION ATAS: PROFIL & BIOGRAFI */}
        <div className="w-full relative bg-[#111115] p-6 md:p-10 border border-white/5 shadow-xl rounded-2xl">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Foto Profil */}
            <div className="w-[200px] h-[240px] shrink-0 bg-white shadow-lg overflow-hidden flex items-center justify-center">
              <img
                src="/profile.jpg"
                alt="Zaidan Ersya Ramadhan"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Teks */}
            <div className="flex flex-col pt-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                Zaidan Ersya Ramadhan
              </h1>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed text-justify">
                "Information Systems graduate from Universitas Pembangunan Jaya.
                Throughout my academic journey, I have gained practical
                experience in web development, front-end development, UI/UX
                design, and Software Quality Assurance testing, shaped by both
                the professional dynamics of internships and the technical
                challenges of university projects. Driven by a strong curiosity
                and a high enthusiasm for technological innovation, I am always
                ready to adapt and grow in a dynamic industry environment."
              </p>
            </div>
          </div>
        </div>

        {/* SECTION CONNECT WITH ME */}
        <div className="bg-[#1B1B22] px-8 py-6 rounded-2xl border border-white/5 flex flex-col items-center gap-4 shadow-lg">
          <span className="text-sm md:text-base font-semibold tracking-wider text-gray-300 text-center">
            Connect With Me :
          </span>
          <div className="w-full flex items-center justify-center gap-8 bg-[#141419] border border-white/10 rounded-xl px-4 py-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/zard_90/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition text-white flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/zaidanersya/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition text-white flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/username-anda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition text-white flex items-center justify-center"
              aria-label="GitHub"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76 0-1.5-.5-2.7-1.3-3.7.1-.3.6-1.8-.1-3.7 0 0-1-.3-3.3 1.2a11 11 0 0 0-6 0c-2.3-1.5-3.3-1.2-3.3-1.2-.7 1.9-.2 3.4-.1 3.7-.8 1-1.3 2.2-1.3 3.7 0 5.2 3 6.4 6 6.76a4.8 4.8 0 0 0-1 3.24v4" />
              </svg>
            </a>
          </div>
        </div>

        {/* TAB SWITCHER*/}
        <div className="flex items-center gap-1 mb-2 mt-2">
          {/* Tombol Work Experience */}
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-3 py-1 text-base md:text-lg font-bold rounded-md transition-all duration-200 ${
              activeTab === "experience"
                ? "bg-[#C6FF00] text-[#141419]" // Background hijau, teks gelap saat aktif
                : "text-gray-400 hover:text-white bg-transparent" // Tanpa background saat tidak aktif
            }`}
          >
            Work Experience
          </button>

          {/* Garis Pembatas Vertikal (Separator) */}
          <div className="w-[2px] h-6 bg-gray-500 mx-1 md:mx-2 rounded-full"></div>

          {/* Tombol Project */}
          <button
            onClick={() => setActiveTab("project")}
            className={`px-3 py-1 text-base md:text-lg font-bold rounded-md transition-all duration-200 ${
              activeTab === "project"
                ? "bg-[#C6FF00] text-[#141419]" // Background hijau, teks gelap saat aktif
                : "text-gray-400 hover:text-white bg-transparent" // Tanpa background saat tidak aktif
            }`}
          >
            Project
          </button>
        </div>

        {/* SECTION GRID KONTEN (Kotak Putih) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeTab === "experience" ? (
            <>
              {/* Card 1 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    UI/UX Designer Intern
                  </h3>
                  <p className="text-xs text-gray-600">
                    Magang Pengabdian Kepada Masyarakat SMP Erenos
                  </p>
                </div>
                <Link
                  href="/work/smpErenos"
                  className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] transition-colors inline-block text-center font-medium"
                >
                  Detail
                </Link>
              </div>
              {/* Card 2 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    CAPI (Computer-Assisted Personal Interviewing) Assistant
                    Intern
                  </h3>
                  <p className="text-xs text-gray-600">
                    Badan Riset dan Inovasi Nasional (BRIN)
                  </p>
                </div>
                <Link
                  href="/work/brin"
                  className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] transition-colors inline-block text-center font-medium"
                >
                  Detail
                </Link>
              </div>
              {/* Card 3 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    Asisten Biro Pendidikan
                  </h3>
                  <p className="text-xs text-gray-600">
                    Universitas Pembangunan Jaya
                  </p>
                </div>
                <Link
                  href="/work/upj"
                  className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] transition-colors inline-block text-center font-medium"
                >
                  Detail
                </Link>
              </div>
              {/* Card 4 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">QA Tester</h3>
                  <p className="text-xs text-gray-600">PBSI South Jakarta</p>
                </div>
                <Link
                  href="/work/pbsi"
                  className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] transition-colors inline-block text-center font-medium"
                >
                  Detail
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Card Project 1 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">Lorem Ipsum</h3>
                  <p className="text-xs text-gray-600">Lorem Ipsum</p>
                </div>
                <button className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] transition-colors">
                  Detail
                </button>
              </div>
              {/* Card Project 2 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">Lorem Ipsum</h3>
                  <p className="text-xs text-gray-600">Lorem Ipsum</p>
                </div>
                <button className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] transition-colors">
                  Detail
                </button>
              </div>
            </>
          )}
        </div>

        {/* FOOTER */}
        <footer className="text-center pt-8 pb-4 border-t border-white/5 text-xs text-gray-500">
          © {new Date().getFullYear()} Zard. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
