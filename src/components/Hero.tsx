import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSolutions = () => {
    const element = document.getElementById("solutions");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(zinc-700 1px, transparent 1px), linear-gradient(90deg, zinc-700 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight mb-8">
          <span className="block text-zinc-100">NEXT GENERATION</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400">
            MEDIA COMPANY
          </span>
        </h2>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-12">
          The basic need of all businesses is to touch people. We develop innovative, culture-centered ideas that inspire action.
        </p>

        <button
          onClick={scrollToSolutions}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-zinc-950 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
        >
          Explore Solutions
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}