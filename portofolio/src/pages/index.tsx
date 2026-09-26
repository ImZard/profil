"use client";

import React, { useState } from "react";

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
                Zaidan Ersya <br />
                Ramadhan
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
        <div className="bg-[#1B1B22] px-8 py-5 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center gap-4 shadow-lg">
          <span className="text-sm font-semibold tracking-wider text-gray-300">
            Connect With Me :
          </span>
          <div className="flex-1 w-full flex items-center bg-[#141419] border border-white/10 rounded-lg px-4 py-2">
            <a
              href="https://www.instagram.com/zard_90/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 hover:bg-white/10 rounded-md transition text-white flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
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
                  <h3 className="font-bold text-lg mb-2">Lorem Ipsum</h3>
                  <p className="text-xs text-gray-600">Lorem Ipsum</p>
                </div>
                <button className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] transition-colors">
                  Detail
                </button>
              </div>
              {/* Card 2 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">Lorem Ipsum</h3>
                  <p className="text-xs text-gray-600">Lorem Ipsum</p>
                  <button className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] transition-colors">
                    Detail
                  </button>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">Lorem Ipsum</h3>
                  <p className="text-xs text-gray-600">Lorem Ipsum</p>
                  <button className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] transition-colors">
                    Detail
                  </button>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">Lorem Ipsum</h3>
                  <p className="text-xs text-gray-600">Lorem Ipsum</p>
                  <button className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] transition-colors">
                    Detail
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Card Project 1 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">Project 1</h3>
                  <p className="text-xs text-gray-600">
                    Deskripsi proyek pertama Anda di sini...
                  </p>
                </div>
              </div>
              {/* Card Project 2 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg mb-2">Project 2</h3>
                  <p className="text-xs text-gray-600">
                    Deskripsi proyek kedua Anda di sini...
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* FOOTER */}
        <footer className="text-center pt-8 pb-4 border-t border-white/5 text-xs text-gray-500">
          © {new Date().getFullYear()} Zaid. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
