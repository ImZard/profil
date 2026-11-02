"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Daftar urutan tab untuk navigasi tombol Next/Prev
const TABS: ("experience" | "project" | "certification")[] = [
  "experience",
  "project",
  "certification",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "experience" | "project" | "certification"
  >("experience");

  const [isLoaded, setIsLoaded] = useState(false);

  // State untuk gambar fullscreen
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePrevTab = () => {
    const currentIndex = TABS.indexOf(activeTab);
    const prevIndex = currentIndex === 0 ? TABS.length - 1 : currentIndex - 1;
    setActiveTab(TABS[prevIndex]);
  };

  const handleNextTab = () => {
    const currentIndex = TABS.indexOf(activeTab);
    const nextIndex = currentIndex === TABS.length - 1 ? 0 : currentIndex + 1;
    setActiveTab(TABS[nextIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6 selection:bg-[#C6FF00] selection:text-black overflow-hidden relative z-0 text-white">
      {/* Gambar Background */}
      <div
        className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      ></div>
      {/*Overlay Gelap + Blur tipis agar teks tetap terbaca jelas */}
      <div className="fixed inset-0 z-[-1] bg-[#0a0a0a]/85 backdrop-blur-[2px]"></div>

      {/* Kontainer Utama */}
      <div className="w-full max-w-5xl flex flex-col gap-12 relative z-10">
        {/* Profil Section */}
        <div
          className={`w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mt-4
          transform transition-all duration-1000 ease-out
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* Foto Profil */}
          <div className="w-[200px] h-[240px] md:w-[240px] md:h-[280px] shrink-0 overflow-hidden flex items-center justify-center rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(198,255,0,0.05)] relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src="/profile.jpg"
              alt="Zaidan Ersya Ramadhan"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Teks Biografi & Kontak */}
          <div className="flex flex-col text-center lg:text-left pt-2 flex-1">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Zaidan Ersya Ramadhan
            </h1>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 md:mb-8 font-light max-w-3xl">
              Information Systems graduate from Universitas Pembangunan Jaya.
              Throughout my academic journey, I have gained practical experience
              in web development, UI/UX design, and Software Quality Assurance
              testing. Driven by a strong curiosity for technological
              innovation, I am always ready to adapt and grow in a dynamic
              industry environment.
            </p>

            {/* Tombol Kontak (Email, WA) & Sosmed */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="mailto:zaidanersya90@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-[#C6FF00] text-gray-300 hover:text-black rounded-full border border-white/10 hover:border-[#C6FF00] transition-all duration-300 font-medium text-sm shadow-lg"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                zaidanersya90@gmail.com
              </a>
              <a
                href="https://wa.me/6289620358066"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-[#C6FF00] text-gray-300 hover:text-black rounded-full border border-white/10 hover:border-[#C6FF00] transition-all duration-300 font-medium text-sm shadow-lg"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +62 896-2035-8066
              </a>

              <div className="w-[1px] h-6 bg-white/20 mx-1 hidden sm:block"></div>

              {/* Sosmed Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/zaidan-ersya-ramadhan-664a77279/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-gray-400 hover:text-[#C6FF00] bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-[#C6FF00]/30"
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
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://github.com/ImZard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-gray-400 hover:text-[#C6FF00] bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-[#C6FF00]/30"
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
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76 0-1.5-.5-2.7-1.3-3.7.1-.3.6-1.8-.1-3.7 0 0-1-.3-3.3 1.2a11 11 0 0 0-6 0c-2.3-1.5-3.3-1.2-3.3-1.2-.7 1.9-.2 3.4-.1 3.7-.8 1-1.3 2.2-1.3 3.7 0 5.2 3 6.4 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/zard_90/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-gray-400 hover:text-[#C6FF00] bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 border border-transparent hover:border-[#C6FF00]/30"
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
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div
          className={`w-full flex flex-col gap-4 mt-4
          transform transition-all duration-1000 delay-200 ease-out
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Header Skills */}
          <div className="flex items-center gap-4 w-full mb-2">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              My Skills
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-lg hover:border-white/20 transition-all duration-300">
            <ul className="list-disc list-outside ml-5 text-gray-300 space-y-4 text-sm md:text-base leading-relaxed break-words whitespace-normal">
              <li>
                <span className="font-bold text-white">
                  IT Support & Infrastructure :
                </span>{" "}
                Hardware/Software Maintenance, Troubleshooting, User Support
              </li>
              <li>
                <span className="font-bold text-white">
                  Web & System Development :
                </span>{" "}
                HTML, CSS, PHP, Javascript, Next.js, Python
              </li>
              <li>
                <span className="font-bold text-white">
                  QA Testing & Software :
                </span>{" "}
                Manual Testing, Automated Testing (Selenium & Postman), Test
                Case Design, Selenium
              </li>
              <li>
                <span className="font-bold text-white">
                  Database & Administration :
                </span>{" "}
                SQL, PostgreSQL, Ms. Excel, Ms. Office
              </li>
              <li>
                <span className="font-bold text-white">
                  Data Analytics & Design :
                </span>{" "}
                Tableau, Looker Studio, Figma, Canva
              </li>
            </ul>
          </div>
        </div>

        {/* TAB SWITCHER */}
        <div
          className={`flex flex-nowrap items-center justify-center gap-1 sm:gap-2 md:gap-4 mt-6 w-full
          transform transition-all duration-1000 delay-400 ease-out
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <button
            onClick={handlePrevTab}
            className="p-1.5 md:p-2 flex-shrink-0 text-gray-500 hover:text-[#C6FF00] bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300"
          >
            <svg
              width="18"
              height="18"
              className="md:w-5 md:h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Area Menu Tab */}
          <div className="flex flex-nowrap items-center justify-center gap-1 sm:gap-2 md:gap-3 bg-white/5 p-1 md:p-1.5 rounded-xl border border-white/10 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-3 md:px-5 py-1.5 md:py-2 text-[11px] sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-300 flex-shrink-0 whitespace-nowrap ${
                activeTab === "experience"
                  ? "bg-[#C6FF00] text-black shadow-lg"
                  : "text-gray-400 hover:text-white bg-transparent"
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab("project")}
              className={`px-3 md:px-5 py-1.5 md:py-2 text-[11px] sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-300 flex-shrink-0 whitespace-nowrap ${
                activeTab === "project"
                  ? "bg-[#C6FF00] text-black shadow-lg"
                  : "text-gray-400 hover:text-white bg-transparent"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("certification")}
              className={`px-3 md:px-5 py-1.5 md:py-2 text-[11px] sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-300 flex-shrink-0 whitespace-nowrap ${
                activeTab === "certification"
                  ? "bg-[#C6FF00] text-black shadow-lg"
                  : "text-gray-400 hover:text-white bg-transparent"
              }`}
            >
              Certification
            </button>
          </div>

          <button
            onClick={handleNextTab}
            className="p-1.5 md:p-2 flex-shrink-0 text-gray-500 hover:text-[#C6FF00] bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300"
          >
            <svg
              width="18"
              height="18"
              className="md:w-5 md:h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* SECTION GRID KONTEN*/}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 
          transform transition-all duration-1000 delay-500 ease-out
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* --- KONTEN: WORK EXPERIENCE --- */}
          {activeTab === "experience" && (
            <>
              {/* Work 1 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg min-h-[280px] flex flex-col justify-between group hover:border-[#C6FF00]/50 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 relative z-10 backdrop-blur-sm">
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-1 text-white group-hover:text-[#C6FF00] transition-colors duration-300">
                    UI/UX Designer Intern
                  </h3>
                  <p className="font-medium text-sm text-[#C6FF00]/80 mb-1">
                    SMP Erenos (Pengabdian Masyarakat)
                  </p>
                  <p className="text-xs text-gray-500 mb-4 font-mono">
                    Feb 2024 - Oct 2024
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Key Skills:{" "}
                    <span className="text-gray-300">
                      Figma, UI/UX Design, Prototyping
                    </span>
                  </p>
                </div>
                <Link
                  href="/work/smpErenos"
                  className="mt-6 border border-white/20 text-white py-2 px-4 rounded-lg group-hover:bg-[#C6FF00] group-hover:text-black group-hover:border-[#C6FF00] transition-all duration-300 inline-flex items-center justify-between font-semibold text-sm"
                >
                  View Detail
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              {/* Work  2 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg min-h-[280px] flex flex-col justify-between group hover:border-[#C6FF00]/50 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 relative z-10 backdrop-blur-sm">
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-1 text-white group-hover:text-[#C6FF00] transition-colors duration-300">
                    CAPI Assistant Intern
                  </h3>
                  <p className="font-medium text-sm text-[#C6FF00]/80 mb-1">
                    Badan Riset dan Inovasi Nasional (BRIN)
                  </p>
                  <p className="text-xs text-gray-500 mb-4 font-mono">
                    Apr 2024 - Jun 2024
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Key Skills:{" "}
                    <span className="text-gray-300">
                      Communication, System Administration, Helpdesk
                    </span>
                  </p>
                </div>
                <Link
                  href="/work/brin"
                  className="mt-6 border border-white/20 text-white py-2 px-4 rounded-lg group-hover:bg-[#C6FF00] group-hover:text-black group-hover:border-[#C6FF00] transition-all duration-300 inline-flex items-center justify-between font-semibold text-sm"
                >
                  View Detail
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              {/* Work 3 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg min-h-[280px] flex flex-col justify-between group hover:border-[#C6FF00]/50 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 relative z-10 backdrop-blur-sm">
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-1 text-white group-hover:text-[#C6FF00] transition-colors duration-300">
                    Asisten Biro Pendidikan
                  </h3>
                  <p className="font-medium text-sm text-[#C6FF00]/80 mb-1">
                    Universitas Pembangunan Jaya
                  </p>
                  <p className="text-xs text-gray-500 mb-4 font-mono">
                    Jul 2024 - Sep 2024
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Key Skills:{" "}
                    <span className="text-gray-300">
                      Administration, Document Management
                    </span>
                  </p>
                </div>
                <Link
                  href="/work/upj"
                  className="mt-6 border border-white/20 text-white py-2 px-4 rounded-lg group-hover:bg-[#C6FF00] group-hover:text-black group-hover:border-[#C6FF00] transition-all duration-300 inline-flex items-center justify-between font-semibold text-sm"
                >
                  View Detail
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              {/* Work 4 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg min-h-[280px] flex flex-col justify-between group hover:border-[#C6FF00]/50 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 relative z-10 backdrop-blur-sm">
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-1 text-white group-hover:text-[#C6FF00] transition-colors duration-300">
                    QA Tester
                  </h3>
                  <p className="font-medium text-sm text-[#C6FF00]/80 mb-1">
                    PBSI South Jakarta
                  </p>
                  <p className="text-xs text-gray-500 mb-4 font-mono">
                    May 2025 - Aug 2025
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Key Skills:{" "}
                    <span className="text-gray-300">
                      Automated Testing, Manual Testing, Test Case Design
                    </span>
                  </p>
                </div>
                <Link
                  href="/work/pbsi"
                  className="mt-6 border border-white/20 text-white py-2 px-4 rounded-lg group-hover:bg-[#C6FF00] group-hover:text-black group-hover:border-[#C6FF00] transition-all duration-300 inline-flex items-center justify-between font-semibold text-sm"
                >
                  View Detail
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </>
          )}

          {/* --- KONTEN: PROJECT --- */}
          {activeTab === "project" && (
            <>
              {/* Project 1 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg min-h-[280px] flex flex-col justify-between group hover:border-[#C6FF00]/50 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 relative z-10 backdrop-blur-sm">
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 text-white group-hover:text-[#C6FF00] transition-colors duration-300">
                    PT. Redho Illahi Wisata
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    Website Developer (Pengembangan Aplikasi Web Sistem
                    Informasi Administrasi Pendaftaran dan Pembayaran).
                  </p>
                  <p className="text-sm text-gray-400">
                    Key Skills:{" "}
                    <span className="text-gray-300">
                      Next.js, Supabase, PostgreSQL, System Analyst
                    </span>
                  </p>
                </div>
                <Link
                  href="/project/redhoTours"
                  className="mt-6 border border-white/20 text-white py-2 px-4 rounded-lg group-hover:bg-[#C6FF00] group-hover:text-black group-hover:border-[#C6FF00] transition-all duration-300 inline-flex items-center justify-between font-semibold text-sm"
                >
                  View Detail
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              {/* Project 2 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg min-h-[280px] flex flex-col justify-between group hover:border-[#C6FF00]/50 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 relative z-10 backdrop-blur-sm">
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 text-white group-hover:text-[#C6FF00] transition-colors duration-300">
                    Sistem Manajemen Katering
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    Pengembangan Aplikasi Web Sistem Manajemen Pemesanan
                    Katering terintegrasi.
                  </p>
                  <p className="text-sm text-gray-400">
                    Key Skills:{" "}
                    <span className="text-gray-300">
                      PHP, MySQL, Bootstrap, UI/UX Design
                    </span>
                  </p>
                </div>
                <Link
                  href="/project/katering"
                  className="mt-6 border border-white/20 text-white py-2 px-4 rounded-lg group-hover:bg-[#C6FF00] group-hover:text-black group-hover:border-[#C6FF00] transition-all duration-300 inline-flex items-center justify-between font-semibold text-sm"
                >
                  View Detail
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              {/* Project 3 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg min-h-[280px] flex flex-col justify-between group hover:border-[#C6FF00]/50 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 relative z-10 backdrop-blur-sm">
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 text-white group-hover:text-[#C6FF00] transition-colors duration-300">
                    Virtu-Edu (Platform Edukasi)
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    Front-End Developer untuk Pengembangan Prototype Platform
                    Edukasi Digital Virtu-Edu.
                  </p>
                  <p className="text-sm text-gray-400">
                    Key Skills:{" "}
                    <span className="text-gray-300">
                      HTML, CSS, Front-End Development
                    </span>
                  </p>
                </div>
                <Link
                  href="/project/virtuedu"
                  className="mt-6 border border-white/20 text-white py-2 px-4 rounded-lg group-hover:bg-[#C6FF00] group-hover:text-black group-hover:border-[#C6FF00] transition-all duration-300 inline-flex items-center justify-between font-semibold text-sm"
                >
                  View Detail
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              {/* Project 4 */}
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg min-h-[280px] flex flex-col justify-between group hover:border-[#C6FF00]/50 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 relative z-10 backdrop-blur-sm">
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-2 text-white group-hover:text-[#C6FF00] transition-colors duration-300">
                    Everest Data Exploration
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    Data Visualization & Dashboard Analytics untuk kebutuhan
                    eksplorasi data.
                  </p>
                  <p className="text-sm text-gray-400">
                    Key Skills:{" "}
                    <span className="text-gray-300">
                      Looker Studio (Google Data Studio), Data Analytics
                    </span>
                  </p>
                </div>
                <Link
                  href="/project/DataVisualisasi"
                  className="mt-6 border border-white/20 text-white py-2 px-4 rounded-lg group-hover:bg-[#C6FF00] group-hover:text-black group-hover:border-[#C6FF00] transition-all duration-300 inline-flex items-center justify-between font-semibold text-sm"
                >
                  View Detail
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </>
          )}

          {/* --- KONTEN: SERTIFIKASI --- */}
          {activeTab === "certification" && (
            <>
              {/* Card Sertifikasi 1 */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl shadow-lg flex flex-col group hover:border-[#C6FF00]/50 hover:-translate-y-1 transition-all duration-300 relative z-10 backdrop-blur-sm">
                <div
                  className="w-full h-48 md:h-56 rounded-lg overflow-hidden mb-5 border border-white/10 cursor-zoom-in relative"
                  onClick={() =>
                    setFullscreenImage(
                      "https://i.ibb.co.com/1fFNcqjF/englishscore-certificate-6b158727-page-0001.jpg",
                    )
                  }
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold tracking-wider">
                      Perbesar
                    </span>
                  </div>
                  <img
                    src="https://i.ibb.co.com/1fFNcqjF/englishscore-certificate-6b158727-page-0001.jpg"
                    alt="Sertifikat 1"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-[#C6FF00] transition-colors duration-300 text-center leading-tight">
                  British Council EnglishScore
                </h3>
                <p className="text-xs text-gray-400 text-center mt-2 font-mono">
                  Score: 489 (CEFR B2)
                </p>
              </div>

              {/* Card Sertifikasi 2 */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl shadow-lg flex flex-col group hover:border-[#C6FF00]/50 hover:-translate-y-1 transition-all duration-300 relative z-10 backdrop-blur-sm">
                <div
                  className="w-full h-48 md:h-56 rounded-lg overflow-hidden mb-5 border border-white/10 cursor-zoom-in relative"
                  onClick={() =>
                    setFullscreenImage(
                      "https://i.ibb.co.com/G3GWjF7N/DAMC-zaidanersya90gmail-com-DAMC-170826-01-1-00229-page-0001.jpg",
                    )
                  }
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold tracking-wider">
                      Perbesar
                    </span>
                  </div>
                  <img
                    src="https://i.ibb.co.com/G3GWjF7N/DAMC-zaidanersya90gmail-com-DAMC-170826-01-1-00229-page-0001.jpg"
                    alt="Sertifikat 2"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-[#C6FF00] transition-colors duration-300 text-center leading-tight">
                  Intro to Data Analytics
                </h3>
                <p className="text-xs text-gray-400 text-center mt-2 font-mono">
                  RevoU • 2026
                </p>
              </div>

              {/* Card Sertifikasi 3 */}
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl shadow-lg flex flex-col group hover:border-[#C6FF00]/50 hover:-translate-y-1 transition-all duration-300 relative z-10 backdrop-blur-sm">
                <div
                  className="w-full h-48 md:h-56 rounded-lg overflow-hidden mb-5 border border-white/10 cursor-zoom-in relative"
                  onClick={() =>
                    setFullscreenImage(
                      "https://i.ibb.co.com/CKxBmCsV/Zaidan-Ersya-Ramadhan.jpg",
                    )
                  }
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold tracking-wider">
                      Perbesar
                    </span>
                  </div>
                  <img
                    src="https://i.ibb.co.com/CKxBmCsV/Zaidan-Ersya-Ramadhan.jpg"
                    alt="Sertifikat 3"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-[#C6FF00] transition-colors duration-300 text-center leading-tight">
                  UI/UX Mentoring
                </h3>
                <p className="text-xs text-gray-400 text-center mt-2 font-mono">
                  GDSC ITS • 2023
                </p>
              </div>
            </>
          )}
        </div>

        {/* FOOTER */}
        <footer
          className={`text-center pt-8 pb-4 border-t border-white/10 text-xs text-gray-500 transform transition-all duration-1000 delay-1000 ease-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          © {new Date().getFullYear()} Zard. All Rights Reserved.
        </footer>
      </div>

      {/* MODAL FULLSCREEN IMAGE */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out backdrop-blur-md"
          onClick={() => setFullscreenImage(null)}
        >
          <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white bg-white/10 hover:bg-[#C6FF00] hover:text-black p-2.5 rounded-full transition-colors z-50">
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
          <img
            src={fullscreenImage || ""}
            alt="Fullscreen Image"
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
          />
        </div>
      )}
    </div>
  );
}
