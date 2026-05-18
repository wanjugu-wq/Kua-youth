export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8F4] text-[#533657] overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute -top-28 -left-24 w-80 h-80 bg-[#F6C7D8]/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-[#E9B76A]/30 rounded-full blur-3xl"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E85D04] flex items-center justify-center text-white shadow-md">
            🌱
          </div>

          <h1 className="text-2xl font-semibold tracking-tight">Kua</h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-[#8E6298]">
          <a href="#" className="hover:text-[#E85D04] transition">
            About
          </a>

          <a href="#" className="hover:text-[#E85D04] transition">
            How It Works
          </a>

          <a href="#" className="hover:text-[#E85D04] transition">
            Community
          </a>
        </div>

        <button className="bg-[#E85D04] text-white px-5 py-2.5 rounded-full text-sm shadow-lg hover:scale-105 transition">
          Start Growing
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 pt-10 pb-24 gap-16">
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-6 shadow-sm border border-white/40">
            <span>🌞</span>
            <span>Growth becomes easier together</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-[#533657]">
            Grow Together,
            <br />
            Not Alone.
          </h1>

          <p className="mt-8 text-lg md:text-xl leading-relaxed text-[#8E6298] max-w-xl">
            Kua helps young people stay consistent by matching them with growth
            partners who learn, support, and improve together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button className="bg-[#E85D04] text-white px-8 py-4 rounded-full font-medium shadow-xl hover:scale-105 transition">
              Find a Growth Partner
            </button>

            <button className="bg-white/80 backdrop-blur-md border border-[#F0DDD1] px-8 py-4 rounded-full font-medium hover:bg-white transition">
              Watch Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-wrap gap-4">
            <div className="bg-linear-to-br from-white to-[#FFF4F8] backdrop-blur-md px-5 py-4 rounded-3xl shadow-sm border border-white/50 min-w-40">
              <p className="text-3xl font-bold text-[#533657]">1k+</p>

              <p className="text-sm text-[#7E587F] mt-1">
                Growth sessions imagined
              </p>
            </div>

            <div className="bg-linear-to-br from-white to-[#FFF4F8] backdrop-blur-md px-5 py-4 rounded-3xl shadow-sm border border-white/50 min-w-40">
              <p className="text-3xl font-bold text-[#E5A93D]">🌱</p>

              <p className="text-sm text-[#7E587F] mt-1">
                Progress through consistency
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex items-center justify-center w-full max-w-xl">
          {/* Blob */}
          <div className="absolute w-96 h-96 bg-[#F08A4B]/40 rounded-full blur-2xl"></div>

          {/* Card */}
          <div className="relative bg-linear-to-br from-white to-[#FFF3F8] backdrop-blur-xl border border-white/50 rounded-[40px] shadow-2xl p-8 w-full max-w-md">
            {/* Plant Section */}
            <div className="bg-[#FFF6F1] rounded-4xl p-8 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute -top-6 -right-4 w-24 h-24 bg-[#E85D04]/12 rounded-full"></div>

              <div className="absolute -bottom-8 -left-5 w-28 h-28 bg-[#E5A93D]/10 rounded-full"></div>

              <div className="text-8xl relative z-10">🌿</div>

              <h3 className="mt-6 text-2xl font-semibold text-[#533657] text-center">
                Your growth has roots.
              </h3>

              <p className="mt-3 text-center text-[#7E587F] leading-relaxed text-sm max-w-xs">
                Stay consistent with your growth partner and watch your plant
                evolve week after week.
              </p>
            </div>

            {/* Dashboard Preview */}
            <div className="mt-6 space-y-4">
              <div className="bg-linear-to-br from-[#FFF7FA] to-[#FFF3F8] rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#9A5FA8]">Current Stage</p>

                  <p className="font-semibold text-[#533657]">
                    Growing Roots ✨
                  </p>
                </div>

                <div className="w-16 h-3 bg-[#F4D5DD] rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-[#E85D04] rounded-full"></div>
                </div>
              </div>

              <div className="bg-linear-to-br from-[#FFF7FA] to-[#FFF3F8] rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">This Week’s Goal</p>

                  <span className="text-xs bg-[#E85D04]/10 text-[#D95A08] px-2 py-1 rounded-full">
                    In Progress
                  </span>
                </div>

                <p className="text-sm text-[#7E587F]">
                  Finish React portfolio project with your growth partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-8 md:px-16 pb-24">
        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-sm text-[#9A5FA8] mb-4">
            Why Kua?
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#D95A08] leading-tight max-w-3xl mx-auto">
            Growth should feel collaborative, not isolating.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🤝",
              title: "Accountability",
              text: "Stay consistent with weekly check-ins and growth milestones shared with your partner.",
            },
            {
              icon: "🌱",
              title: "Sustainable Growth",
              text: "Your journey is represented through a growing plant instead of stressful productivity streaks.",
            },
            {
              icon: "🧠",
              title: "Shared Learning",
              text: "Exchange skills, support each other, and grow through real collaborative learning experiences.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-white to-[#FFF3F8] backdrop-blur-md rounded-4xl p-8 shadow-lg border border-white/50 hover:-translate-y-1 transition"
            >
              <div className="text-4xl mb-5">{item.icon}</div>

              <h3 className="text-2xl font-semibold text-[#D95A08] mb-4">
                {item.title}
              </h3>

              <p className="text-[#7E587F] leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-8 md:px-16 pb-20">
        <div className="bg-linear-to-br from-[#FFF3F8] via-[#FFF0E8] to-[#FFF3F8] rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden border border-white/60 shadow-2xl">
          {/* Floating Circles */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#F3D7CF]/22rounded-full"></div>

          <div className="absolute top-1/4 left-10 w-40 h-40 bg-[#F08A4B]/16 rounded-full"></div>

          <div className="absolute -bottom-16 -left-10 w-72 h-72 bg-[#E85D04]/10 rounded-full"></div>

          <div className="absolute bottom-10 right-8 w-44 h-44 bg-[#F3D7CF]/16 rounded-full"></div>

          <p className="uppercase tracking-widest text-sm text-[#9A5FA8] mb-6 relative z-10">
            Kua 🌱
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-4xl mx-auto relative z-10 text-[#533657]">
            Maybe we need each other more than another course.
          </h2>

          <button className="mt-10 bg-[#E85D04] text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition relative z-10">
            Start Your Growth Journey
          </button>
        </div>
      </section>
    </div>
  );
}
