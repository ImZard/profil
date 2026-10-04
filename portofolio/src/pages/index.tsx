"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  // State untuk tab aktif
  const [activeTab, setActiveTab] = useState<"experience" | "project">(
    "experience",
  );

  // State untuk trigger animasi saat halaman dimuat
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect akan berjalan sekali saat komponen pertama kali dirender
  useEffect(() => {
    // Memberikan sedikit jeda agar transisi terlihat mulus
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#111115] flex flex-col items-center py-10 px-4 selection:bg-[#C6FF00] selection:text-black overflow-hidden">
      {/* Container Utama */}
      <div className="w-full max-w-4xl flex flex-col gap-8">
        {/* SECTION ATAS: PROFIL & BIOGRAFI */}
        {/* Animasi Masuk: Muncul pertama */}
        <div
          className={`w-full relative bg-[#111115] p-6 md:p-10 border border-white/5 shadow-xl rounded-2xl group hover:border-white/10 
          transform transition-all duration-1000 ease-out
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Foto Profil */}
            <div className="w-[200px] h-[240px] shrink-0 bg-white shadow-lg overflow-hidden flex items-center justify-center rounded-lg">
              <img
                src="/profile.jpg"
                alt="Zaidan Ersya Ramadhan"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
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

        {/* SECTION MY SKILLS */}
        {/* Animasi Masuk: Muncul (delay-300) */}
        <div
          className={`bg-[#1B1B22] px-6 py-6 md:px-8 rounded-2xl border border-white/5 flex flex-col gap-4 shadow-lg 
          transform transition-all duration-1000 delay-300 ease-out
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <span className="text-lg md:text-xl font-bold tracking-wider text-white text-center border-b border-white/10 pb-4">
            My Skills
          </span>

          <div className="bg-[#141419] border border-white/10 rounded-xl p-5 md:p-6">
            <ul className="list-disc list-outside ml-5 text-gray-300 space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed text-justify break-words whitespace-normal">
              <li>
                <span className="font-semibold text-white">
                  IT Support & Infrastructure :
                </span>{" "}
                Hardware/Software Maintenance, Troubleshooting, User Support
              </li>
              <li>
                <span className="font-semibold text-white">
                  Web & System Development :
                </span>{" "}
                HTML, CSS, PHP, Javascript, Next.js, Python
              </li>
              <li>
                <span className="font-semibold text-white">
                  QA Testing & Software :
                </span>{" "}
                Manul Testing, Automated Testing, Test Case Design, Selenium
              </li>
              <li>
                <span className="font-semibold text-white">
                  Database & Administration :
                </span>{" "}
                SQL, PostgreSQL, Ms. Excel, Ms. Office
              </li>
              <li>
                <span className="font-semibold text-white">
                  Data Analytics & Design :
                </span>{" "}
                Tableau, Looker Studio, Figma, Canva
              </li>
            </ul>
          </div>
        </div>

        {/* SECTION CONNECT WITH ME */}
        {/* Animasi Masuk: Muncul kedua (delay-200) */}
        <div
          className={`bg-[#1B1B22] px-8 py-6 rounded-2xl border border-white/5 flex flex-col items-center gap-4 shadow-lg 
          transform transition-all duration-1000 delay-200 ease-out
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <span className="text-sm md:text-base font-semibold tracking-wider text-gray-300 text-center">
            Connect With Me :
          </span>
          <div className="w-full flex items-center justify-center gap-8 bg-[#141419] border border-white/10 rounded-xl px-4 py-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/zard_90/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-[#C6FF00]/10 hover:text-[#C6FF00] hover:-translate-y-1.5 hover:scale-110 hover:shadow-[0_5px_15px_rgba(198,255,0,0.15)] rounded-xl transition-all duration-300 text-white flex items-center justify-center"
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
              href="https://www.linkedin.com/in/zaidan-ersya-ramadhan-664a77279/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-[#C6FF00]/10 hover:text-[#C6FF00] hover:-translate-y-1.5 hover:scale-110 hover:shadow-[0_5px_15px_rgba(198,255,0,0.15)] rounded-xl transition-all duration-300 text-white flex items-center justify-center"
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
              href="https://github.com/ImZard"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-[#C6FF00]/10 hover:text-[#C6FF00] hover:-translate-y-1.5 hover:scale-110 hover:shadow-[0_5px_15px_rgba(198,255,0,0.15)] rounded-xl transition-all duration-300 text-white flex items-center justify-center"
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

        {/* TAB SWITCHER */}
        {/* Animasi Masuk: Muncul ketiga (delay-500) */}
        <div
          className={`flex items-center gap-1 mb-2 mt-2 
          transform transition-all duration-1000 delay-500 ease-out
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Tombol Work Experience */}
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-3 py-1 text-base md:text-lg font-bold rounded-md transition-all duration-300 hover:scale-105 active:scale-95 ${
              activeTab === "experience"
                ? "bg-[#C6FF00] text-[#141419] shadow-[0_0_15px_rgba(198,255,0,0.3)]"
                : "text-gray-400 hover:text-white bg-transparent"
            }`}
          >
            Work Experience
          </button>

          {/* Garis Pembatas Vertikal (Separator) */}
          <div className="w-[2px] h-6 bg-gray-500 mx-1 md:mx-2 rounded-full"></div>

          {/* Tombol Project */}
          <button
            onClick={() => setActiveTab("project")}
            className={`px-3 py-1 text-base md:text-lg font-bold rounded-md transition-all duration-300 hover:scale-105 active:scale-95 ${
              activeTab === "project"
                ? "bg-[#C6FF00] text-[#141419] shadow-[0_0_15px_rgba(198,255,0,0.3)]"
                : "text-gray-400 hover:text-white bg-transparent"
            }`}
          >
            Project
          </button>
        </div>

        {/* SECTION GRID KONTEN (Kotak Putih) */}
        {/* Animasi Masuk: Muncul terakhir (delay-700) */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 
          transform transition-all duration-1000 delay-700 ease-out
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {activeTab === "experience" ? (
            <>
              {/* Card 1 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(198,255,0,0.15)] transition-all duration-300">
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#8cb800] transition-colors duration-300">
                    UI/UX Designer Intern
                  </h3>
                  <p className="font-bold text-xs text-gray-600">
                    Magang Pengabdian Kepada Masyarakat SMP Erenos
                  </p>
                  <p className="text-xs text-gray-600 mb-4">
                    Feb 2024 - Oct 2024
                  </p>

                  <p className="text-xs text-gray-600">
                    Key Skills: Figma, UI/UX Design
                  </p>
                </div>
                <Link
                  href="/work/smpErenos"
                  className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] hover:scale-[1.03] active:scale-95 transition-all duration-300 inline-block text-center font-bold"
                >
                  Detail
                </Link>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(198,255,0,0.15)] transition-all duration-300">
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#8cb800] transition-colors duration-300">
                    CAPI (Computer-Assisted Personal Interviewing) Assistant
                    Intern
                  </h3>
                  <p className="font-bold text-xs text-gray-600">
                    Badan Riset dan Inovasi Nasional (BRIN)
                  </p>
                  <p className="text-xs text-gray-600 mb-4">
                    Apr 2024 - Jun 2024
                  </p>

                  <p className="text-xs text-gray-600">
                    Key Skills: Communication, System Administration, Helpdesk
                  </p>
                </div>
                <Link
                  href="/work/brin"
                  className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] hover:scale-[1.03] active:scale-95 transition-all duration-300 inline-block text-center font-bold"
                >
                  Detail
                </Link>
              </div>

              {/* Card 3 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(198,255,0,0.15)] transition-all duration-300">
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#8cb800] transition-colors duration-300">
                    Asisten Biro Pendidikan
                  </h3>
                  <p className="font-bold text-xs text-gray-600">
                    Universitas Pembangunan Jaya
                  </p>
                  <p className="text-xs text-gray-600 mb-4">
                    Jul 2024 - Sep 2024
                  </p>

                  <p className="text-xs text-gray-600">
                    Key Skills: Administration
                  </p>
                </div>
                <Link
                  href="/work/upj"
                  className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] hover:scale-[1.03] active:scale-95 transition-all duration-300 inline-block text-center font-bold"
                >
                  Detail
                </Link>
              </div>

              {/* Card 4 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(198,255,0,0.15)] transition-all duration-300">
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#8cb800] transition-colors duration-300">
                    QA Tester
                  </h3>
                  <p className="font-bold text-xs text-gray-600">
                    PBSI South Jakarta
                  </p>
                  <p className="text-xs text-gray-600 mb-4">
                    May 2025 - Aug 2025
                  </p>

                  <p className="text-xs text-gray-600">
                    Key Skills: Automated Testing, Manual Testing, Test Case
                    Design
                  </p>
                </div>
                <Link
                  href="/work/pbsi"
                  className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] hover:scale-[1.03] active:scale-95 transition-all duration-300 inline-block text-center font-bold"
                >
                  Detail
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Card Project 1 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(198,255,0,0.15)] transition-all duration-300">
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#8cb800] transition-colors duration-300">
                    PT. Redho Illahi Wisata
                  </h3>
                  <p className="text-xs text-gray-600">
                    Website Developer (Pengembangan Aplikasi Web Sistem
                    Informasi Administrasi Pendaftaran dan Pembayaran)
                  </p>
                  <br />
                  <p className="text-xs text-gray-600">
                    Key Skills: Requirements Analysis, System Analyst, Web
                    Development, UI/UX Design, Next.js, Supabase (PostgreSQL)
                  </p>
                </div>
                <Link
                  href="/project/redhoTours"
                  className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] hover:scale-[1.03] active:scale-95 transition-all duration-300 inline-block text-center font-bold"
                >
                  Detail
                </Link>
              </div>

              {/* Card Project 2 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(198,255,0,0.15)] transition-all duration-300">
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#8cb800] transition-colors duration-300">
                    Pengembangan Aplikasi Web Sistem Manajemen Pemesanan
                    Katering
                  </h3>
                  <br />
                  <p className="text-xs text-gray-600">
                    Key Skills: Requirements Analysis, System Analyst, Web
                    Development, UI/UX Design, PHP, MySQL, Bootstrap
                  </p>
                </div>
                <Link
                  href="/project/katering"
                  className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] hover:scale-[1.03] active:scale-95 transition-all duration-300 inline-block text-center font-bold"
                >
                  Detail
                </Link>
              </div>

              {/* Card Project 3 */}
              <div className="bg-white text-black p-6 rounded-2xl shadow-lg min-h-[320px] flex flex-col justify-between group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(198,255,0,0.15)] transition-all duration-300">
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#8cb800] transition-colors duration-300">
                    Front-End Developer (Pengembangan Prototype Platform Edukasi
                    Digital Virtu-Edu)
                  </h3>
                  <br />
                  <p className="text-xs text-gray-600">
                    Key Skills: Front-End Development, UI/UX Design, HTML, CSS,
                  </p>
                </div>
                <Link
                  href="/project/virtuedu"
                  className="mt-4 bg-[#C6FF00] text-[#141419] py-2 px-4 rounded-lg hover:bg-[#a8e600] hover:scale-[1.03] active:scale-95 transition-all duration-300 inline-block text-center font-bold"
                >
                  Detail
                </Link>
              </div>
            </>
          )}
        </div>

        {/* FOOTER */}
        <footer
          className={`text-center pt-8 pb-4 border-t border-white/5 text-xs text-gray-500
          transform transition-all duration-1000 delay-1000 ease-out
          ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          © {new Date().getFullYear()} Zard. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
