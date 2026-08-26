"use client";

import Image from "next/image";
import { useState } from "react";
export default function Home() {
   const [menuOpen, setMenuOpen] = useState(false);
   const [activeSection, setActiveSection] = useState("home");
   

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 md:py-6 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">

  {/* Logo */}
<a href="#home" className="flex items-center">
  <img
    src="/khysha logo.png"
    alt="KHYSHA"
    className="h-16 sm:h-20 md:h-24 w-auto object-contain"
  />
</a>

  {/* Desktop Navigation */}
 <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-medium">

  <li>
    <a
      href="#home"
      className="group relative text-gray-300 hover:text-yellow-400 transition-colors duration-300"
    >
      Home
      <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>

  <li>
    <a
      href="#about"
      className="group relative text-gray-300 hover:text-yellow-400 transition-colors duration-300"
    >
      About
      <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>

  <li>
    <a
      href="#ecosystem"
      className="group relative text-gray-300 hover:text-yellow-400 transition-colors duration-300"
    >
      Ecosystem
      <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>

  <li>
    <a
      href="#tokenomics"
      className="group relative text-gray-300 hover:text-yellow-400 transition-colors duration-300"
    >
      Tokenomics
      <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>

  <li>
    <a
      href="#roadmap"
      className="group relative text-gray-300 hover:text-yellow-400 transition-colors duration-300"
    >
      Roadmap
      <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>

  <li>
    <a
      href="#community"
      className="group relative text-gray-300 hover:text-yellow-400 transition-colors duration-300"
    >
      Community
      <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>

</ul>
  {/* Desktop Launch Button */}
  <a
    href="#community"
    className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105">

    Launch App
  </a>

  {/* Mobile Menu Button */}
  <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-white text-3xl"
  aria-label="Toggle menu"
>
  {menuOpen ? "✕" : "☰"}
</button>
{menuOpen && (
  <div className="absolute top-full left-0 w-full bg-slate-950 border-b border-slate-800 md:hidden">

    <div className="flex flex-col px-6 py-6 gap-5 text-lg">

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400 transition"
      >
        Home
      </a>

      <a
  href="#about"
  onClick={() => setMenuOpen(false)}
  className="block py-3 text-lg text-gray-300 hover:text-yellow-400 transition-colors"
>
  About
</a>

      <a
        href="#ecosystem"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400 transition"
      >
        Ecosystem
      </a>

      <a
        href="#tokenomics"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400 transition"
      >
        Tokenomics
      </a>

      <a
        href="#roadmap"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400 transition"
      >
        Roadmap
      </a>

      <a
        href="#community"
        onClick={() => setMenuOpen(false)}
        className="hover:text-yellow-400 transition"
      >
        Contact
      </a>

      <a
        href="#community"
        onClick={() => setMenuOpen(false)}
        className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-3 rounded-full font-semibold text-center"
      >
        Launch App
      </a>

    </div>

  </div>
)}

</nav>

      {/* Hero Section */}
      <section   id="home"
  className="flex flex-col items-center justify-center text-center px-5 sm:px-8 py-24 sm:py-32">

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6">
  Empowering Africa.
</h2>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
  Rewarding Innovation.
</h3>

        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-7 sm:leading-8">
          KHYSHA is building Africa&apos;s AI and Web3 ecosystem powered by
          the KHY token. Learn, Build and Earn through innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">"

          <button className="w-full sm:w-auto bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-600 transition-all duration-300 hover:scale-105">
  Read Whitepaper
</button>

          <button className="w-full sm:w-auto border border-yellow-400 px-8 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
  Join Community
</button>

        </div>

      </section>

      {/* About KHYSHA */}
      <section id="about" className="px-5 sm:px-8 py-16 sm:py-20 md:py-24 border-t border-slate-800">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-4">
            About KHYSHA
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            Building Africa&apos;s Digital Future
          </h2>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-7 sm:leading-8 mb-12 sm:mb-16">
            KHYSHA is an Africa-focused Web3 ecosystem designed to connect
            people, technology and opportunity. Through the KHY token and the
            KHYSHA ecosystem, we aim to create practical opportunities for
            people to learn, build, participate and earn while supporting
            African innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-yellow-400 transition">
              <div className="text-4xl mb-5"> </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Learn
              </h3>

              <p className="text-gray-400 leading-7">
                Access knowledge and opportunities around AI, Web3 and
                digital technology.
              </p>
            </div>

            <div className="border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-yellow-400 transition">
              <div className="text-4xl mb-5"> </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Build
              </h3>

              <p className="text-gray-400 leading-7">
                Support African creators, developers and entrepreneurs
                building useful solutions.
              </p>
            </div>

            <div className="border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-yellow-400 transition">
              <div className="text-4xl mb-5"> </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Earn
              </h3>

              <p className="text-gray-400 leading-7">
                Create opportunities for participation and rewards within
                the KHYSHA ecosystem.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* KHY TOKEN */}
      <section id="token" className="px-5 sm:px-8 py-16 sm:py-20 md:py-24 border-t border-slate-800">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-4">
              The KHY Token
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Utility Layer of KHYSHA
            </h2>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-7 sm:leading-8">
              KHY is the native utility token of the KHYSHA ecosystem,
              designed to support participation, rewards and access to
              selected ecosystem features as the project develops.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="border border-slate-800 rounded-2xl p-8 hover:border-yellow-400 transition">
              <div className="text-4xl mb-5"> </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Ecosystem Access
              </h3>

              <p className="text-gray-400 leading-7">
                KHY can be used for selected activities, features and
                services developed within the KHYSHA ecosystem.
              </p>
            </div>

            <div className="border border-slate-800 rounded-2xl p-8 hover:border-yellow-400 transition">
              <div className="text-4xl mb-5"> </div>

              <h3 className="text-2xl font-bold mb-4">
                Community Rewards
              </h3>

              <p className="text-gray-400 leading-7">
                Eligible community contributions and participation may
                receive rewards through mechanisms developed by KHYSHA.
              </p>
            </div>

            <div className="border border-slate-800 rounded-2xl p-8 hover:border-yellow-400 transition">
              <div className="text-4xl mb-5"> </div>

              <h3 className="text-2xl font-bold mb-4">
                Support Builders
              </h3>

              <p className="text-gray-400 leading-7">
                KHYSHA aims to create opportunities to support African
                developers, creators and entrepreneurs building useful
                digital solutions.
              </p>
            </div>

            <div className="border border-slate-800 rounded-2xl p-8 hover:border-yellow-400 transition">
              <div className="text-4xl mb-5"> </div>

              <h3 className="text-2xl font-bold mb-4">
                Community Participation
              </h3>

              <p className="text-gray-400 leading-7">
                As the ecosystem matures, KHYSHA may introduce mechanisms
                that allow the community to participate in selected
                ecosystem decisions.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* TOKENOMICS */}
      {/* TOKENOMICS */}
<section
  id="tokenomics" className="px-5 sm:px-8 py-16 sm:py-20 md:py-24 border-t border-slate-800"
>

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-4">
              KHY Tokenomics
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Built for Long-Term Growth
            </h2>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-7 sm:leading-8">
              KHY has a fixed maximum supply of 1 billion tokens.
              The allocation is designed to support community participation,
              ecosystem development, liquidity and the long-term growth of
              KHYSHA.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

            <div className="border border-slate-800 rounded-2xl p-6 sm:p-8 text-center hover:border-yellow-400 transition">
              <p className="text-gray-400 mb-3">
                Maximum Supply
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">
                1 Billion
              </h3>

              <p className="text-gray-500 mt-2">
                KHY
              </p>
            </div>

            <div className="border border-slate-800 rounded-2xl p-6 sm:p-8 text-center hover:border-yellow-400 transition">
              <p className="text-gray-400 mb-3">
                Blockchain
              </p>

              <h3 className="text-3xl font-bold">
                Solana
              </h3>

              <p className="text-gray-500 mt-2">
                SPL Token
              </p>
            </div>

            <div className="border border-slate-800 rounded-2xl p-6 sm:p-8 text-center hover:border-yellow-400 transition">
              <p className="text-gray-400 mb-3">
                Decimals
              </p>

              <h3 className="text-3xl font-bold">
                9
              </h3>

              <p className="text-gray-500 mt-2">
                Token Precision
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="border border-slate-800 rounded-2xl p-7">
              <div className="flex justify-between mb-3">
                <h3 className="font-bold">
                  Community Rewards
                </h3>

                <span className="text-yellow-400 font-bold">
                  30%
                </span>
              </div>

              <p className="text-gray-400">
                300,000,000 KHY
              </p>
              <div className="mt-5 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
  <div className="h-full w-[30%] bg-yellow-400 rounded-full"></div>
</div>
            </div>

            <div className="border border-slate-800 rounded-2xl p-7">
              <div className="flex justify-between mb-3">
                <h3 className="font-bold">
                  Ecosystem Development
                </h3>

                <span className="text-yellow-400 font-bold">
                  20%
                </span>
              </div>

              <p className="text-gray-400">
                200,000,000 KHY
              </p>
              <div className="mt-5 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
  <div className="h-full w-[20%] bg-yellow-400 rounded-full"></div>
</div>
            </div>

            <div className="border border-slate-800 rounded-2xl p-7">
              <div className="flex justify-between mb-3">
                <h3 className="font-bold">
                  Liquidity
                </h3>

                <span className="text-yellow-400 font-bold">
                  15%
                </span>
              </div>

              <p className="text-gray-400">
                150,000,000 KHY
              </p>
              <div className="mt-5 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
  <div className="h-full w-[15%] bg-yellow-400 rounded-full"></div>
</div>
            </div>

            <div className="border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-yellow-400 transition">
              <div className="flex justify-between mb-3">
                <h3 className="font-bold">
                  Founders &amp; Core Team
                </h3>

                <span className="text-yellow-400 font-bold">
                  15%
                </span>
              </div>

              <p className="text-gray-400">
                150,000,000 KHY
              </p>
              <div className="mt-5 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
  <div className="h-full w-[15%] bg-yellow-400 rounded-full"></div>
</div>
            </div>

            <div className="border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-yellow-400 transition">
              <div className="flex justify-between mb-3">
                <h3 className="font-bold">
                  Marketing &amp; Partnerships
                </h3>

                <span className="text-yellow-400 font-bold">
                  10%
                </span>
              </div>

              <p className="text-gray-400">
                100,000,000 KHY
              </p>
              <div className="mt-5 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
  <div className="h-full w-[10%] bg-yellow-400 rounded-full"></div>
</div>
            </div>

            <div className="border border-slate-800 rounded-2xl p-6 sm:p-7 hover:border-yellow-400 transition">
              <div className="flex justify-between mb-3">
                <h3 className="font-bold">
                  Innovation Fund
                </h3>

                <span className="text-yellow-400 font-bold">
                  5%
                </span>
              </div>

              <p className="text-gray-400">
                50,000,000 KHY
              </p>
              <div className="mt-5 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
  <div className="h-full w-[5%] bg-yellow-400 rounded-full"></div>
</div>
            </div>

            <div className="border border-slate-800 rounded-2xl p-7 md:col-span-2">
              <div className="flex justify-between mb-3">
                <h3 className="font-bold">
                  Treasury Reserve
                </h3>

                <span className="text-yellow-400 font-bold">
                  5%
                </span>
              </div>

              <p className="text-gray-400">
                50,000,000 KHY
              </p>
              <div className="mt-5 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
  <div className="h-full w-[5%] bg-yellow-400 rounded-full"></div>
</div>
            </div>

          </div>

        </div>

      </section>

      {/* ROADMAP */}
      <section
  id="roadmap"
  className="px-5 sm:px-8 py-16 sm:py-20 md:py-24 border-t border-slate-800"
>

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-4">
              KHYSHA Roadmap
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Building Step by Step
            </h2>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-7 sm:leading-8">
              KHYSHA is being developed in stages. Our roadmap focuses on
              building a strong foundation first, then expanding the
              ecosystem as technology, funding and community adoption grow.
            </p>

          </div>

          <div className="space-y-8">

            {/* Phase 1 */}
            <div className="border border-slate-800 rounded-2xl p-8 hover:border-yellow-400 transition">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

  <div className="flex items-center gap-4">

    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-black font-bold">
      1
    </div>

    <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">
      Phase 1 — Foundation
    </h3>

  </div>

  <span className="text-gray-400 mt-3 md:mt-0 md:ml-14">
    Months 1-3
  </span>

              </div>

              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li>✓ KHYSHA brand development</li>
                <li>✓ Website and digital infrastructure</li>
                <li>✓ KHY tokenomics and documentation</li>
                <li>✓ Whitepaper and litepaper</li>
                <li>✓ Community channels</li>
                <li>✓ Technical architecture</li>
              </ul>

            </div>

            {/* Phase 2 */}
            <div className="border border-slate-800 rounded-2xl p-8 hover:border-yellow-400 transition">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

  <div className="flex items-center gap-4">

    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-black font-bold">
      2
    </div>

    <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">
      Phase 2 — Launch Preparation
    </h3>

  </div>

  <span className="text-gray-400 mt-3 md:mt-0">
                  Months 4-6
                </span>

              </div>

              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li>✓ KHY deployment preparation</li>
                <li>✓ Solana token launch</li>
                <li>✓ Liquidity planning</li>
                <li>✓ Website production launch</li>
                <li>✓ Community growth campaigns</li>
                <li>✓ Initial partnerships</li>
              </ul>

            </div>

            {/* Phase 3 */}
            <div className="border border-slate-800 rounded-2xl p-8 hover:border-yellow-400 transition">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

  <div className="flex items-center gap-4">

    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-black font-bold">
      3
    </div>

    <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">
      Phase 3 — Ecosystem Development
    </h3>

  </div>

  <span className="text-gray-400 mt-3 md:mt-0">
                  Months 7-12
                </span>

              </div>

              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li>✓ AI and Web3 education initiatives</li>
                <li>✓ Creator and developer programs</li>
                <li>✓ Community reward mechanisms</li>
                <li>✓ Ecosystem partnerships</li>
                <li>✓ First ecosystem applications</li>
                <li>✓ Community expansion across Africa</li>
              </ul>

            </div>

            {/* Phase 4 */}
            <div className="border border-slate-800 rounded-2xl p-8 hover:border-yellow-400 transition">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

  <div className="flex items-center gap-4">

    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-black font-bold">
      4
    </div>

    <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">
      Phase 4 — Expansion
    </h3>

  </div>

  <span className="text-gray-400 mt-3 md:mt-0">
                  Months 13-18
                </span>

              </div>

              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li>✓ Additional ecosystem products</li>
                <li>✓ Developer and innovation programs</li>
                <li>✓ Regional African partnerships</li>
                <li>✓ Governance experiments</li>
                <li>✓ Broader community growth</li>
                <li>✓ Product refinement</li>
              </ul>

            </div>

            {/* Phase 5 */}
            <div className="border border-slate-800 rounded-2xl p-8 hover:border-yellow-400 transition">
<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

  <div className="flex items-center gap-4">

    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-black font-bold">
      5
    </div>

    <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">
      Phase 5 — Scale
    </h3>

  </div>

  <span className="text-gray-400 mt-3 md:mt-0">
                  Months 19-24
                </span>

              </div>

              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
                <li>✓ Ecosystem expansion</li>
                <li>✓ Larger strategic partnerships</li>
                <li>✓ Increased product adoption</li>
                <li>✓ Community and developer growth</li>
                <li>✓ Platform optimization</li>
                <li>✓ Planning for the next stage of KHYSHA</li>
              </ul>

            </div>

          </div>

          <div className="mt-12 text-center">

            <p className="text-sm text-gray-500 max-w-3xl mx-auto">
              Roadmap milestones are targets rather than guarantees.
              Development priorities and timelines may change based on
              technical progress, funding, regulatory considerations,
              partnerships and community needs.
            </p>

          </div>

        </div>

      </section>

    {/* KHYSHA ECOSYSTEM */}
      <section
  id="ecosystem"
  className="px-5 sm:px-8 py-16 sm:py-20 md:py-24 border-t border-slate-800"
>

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-4">
              The KHYSHA Ecosystem
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              More Than a Token
            </h2>

            <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-7 sm:leading-8">
              KHYSHA is being designed as an ecosystem where technology,
              education, creativity and community come together to create
              opportunities for African innovators.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* AI & Technology */}
            <div className="group border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 7h10v10H7V7z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 10h4v4h-4v-4z"
    />
  </svg>

</div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                AI &amp; Technology
              </h3>

              <p className="text-gray-400 leading-7 text-sm sm:text-base">
                Explore practical applications of artificial intelligence
                and emerging technologies that can contribute to Africa&apos;s
                digital transformation.
              </p>

            </div>

            {/* Education */}
            <div className="group border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14.5 3 10l9-4.5L21 10l-9 4.5Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-3.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 10v5"
    />
  </svg>

</div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Education
              </h3>

              <p className="text-gray-400 leading-7 text-sm sm:text-base">
                Create learning opportunities around AI, Web3, blockchain
                and digital skills for people who want to participate in
                the technology economy.
              </p>

            </div>

            {/* Developers */}
            <div className="group border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8 9-3 3 3 3"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16 9 3 3-3 3"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14 5-4 14"
    />
  </svg>

</div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Builders &amp; Developers
              </h3>

              <p className="text-gray-400 leading-7 text-sm sm:text-base">
                Support developers, creators and entrepreneurs working on
                useful digital products and solutions.
              </p>

            </div>

            {/* African Innovation */}
            <div className="group border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    stroke="currentColor"
    className="w-7 h-7"
  >
    <circle cx="12" cy="12" r="9" />

    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12h18"
    />

    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9S9.5 5.5 12 3Z"
    />
  </svg>

</div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                African Innovation
              </h3>

              <p className="text-gray-400 leading-7 text-sm sm:text-base">
                Focus on ideas, businesses and technologies capable of
                addressing real challenges and opportunities across Africa.
              </p>

            </div>

            {/* Community */}
            <div className="group border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-yellow-400 hover:-translate-y-1 transition-all duration-300">

              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    />

    <circle cx="9" cy="7" r="4" />

    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 21v-2a4 4 0 0 0-3-3.87"
    />

    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 3.13a4 4 0 0 1 0 7.75"
    />
  </svg>

</div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Community
              </h3>

              <p className="text-gray-400 leading-7 text-sm sm:text-base">
                Build a community of people interested in technology,
                entrepreneurship, creativity and the future of Africa.
              </p>

            </div>

            {/* Future Products */}
            <div className="border border-slate-800 rounded-2xl p-8 hover:border-yellow-400 transition">

              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.8"
    stroke="currentColor"
    className="w-7 h-7"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3 4.5 7v6c0 4.5 3.2 7.5 7.5 8 4.3-.5 7.5-3.5 7.5-8V7L12 3Z"
    />

    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 12 2 2 4-4"
    />
  </svg>

</div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Future Products
              </h3>

              <p className="text-gray-400 leading-7 text-sm sm:text-base">
                Develop and introduce useful applications, services and
                tools as the KHYSHA ecosystem grows.
              </p>

            </div>

          </div>

        </div>

      </section>
         {/* COMMUNITY CTA */}
<section
  id="community"
  className="px-5 sm:px-8 py-20 sm:py-24 border-t border-slate-800"
>

  <div className="max-w-5xl mx-auto">

    <div className="relative overflow-hidden border border-yellow-500/30 rounded-3xl p-8 sm:p-12 md:p-16 text-center bg-slate-900">

      {/* Decorative glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10">

        <p className="text-yellow-400 font-semibold tracking-widest uppercase mb-4">
          Join KHYSHA
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Be Part of Africa&apos;s Digital Future
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-7 sm:leading-8 mb-10">
          KHYSHA is building a community of innovators, developers,
          creators, entrepreneurs and technology enthusiasts who believe
          in the potential of Africa.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <a
            href="#"
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-bold transition"
          >
            Join Discord
          </a>

          <a
            href="#"
            className="w-full sm:w-auto border border-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-full font-bold transition"
          >
            Join Telegram
          </a>

        </div>

        <p className="text-sm text-gray-500 mt-8">
          Learn. Build. Connect. Grow with KHYSHA.
        </p>

      </div>

    </div>

  </div>

      </section>
            {/* FOOTER */}
      <footer className="border-t border-slate-800 px-8 py-16">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand */}
            <div>

              <h2 className="text-3xl font-bold text-yellow-400 mb-5">
                KHYSHA
              </h2>

              <p className="text-gray-400 leading-7 max-w-sm">
                Empowering Africa. Rewarding Innovation.
                Building an ecosystem around AI, Web3, education
                and digital opportunity.
              </p>

            </div>

            {/* Explore */}
            <div>

              <h3 className="font-bold text-lg mb-5">
                Explore
              </h3>

              <ul className="space-y-3 text-gray-400">

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  About
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  Ecosystem
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  KHY Token
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  Tokenomics
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  Roadmap
                </li>

              </ul>

            </div>

            {/* Resources */}
            <div>

              <h3 className="font-bold text-lg mb-5">
                Resources
              </h3>

              <ul className="space-y-3 text-gray-400">

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  Whitepaper
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  Litepaper
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  Developer Documentation
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  Token Deployment
                </li>

              </ul>

            </div>

            {/* Community */}
            <div>

              <h3 className="font-bold text-lg mb-5">
                Community
              </h3>

              <ul className="space-y-3 text-gray-400">

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  X / Twitter
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  Telegram
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  Discord
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  GitHub
                </li>

              </ul>

            </div>

          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">

            <p>
              © 2026 KHYSHA. All rights reserved.
            </p>

            <p>
              Built for Africa. Built for the future.
            </p>

          </div>

        </div>

      </footer>
    
    </main>
  );
}