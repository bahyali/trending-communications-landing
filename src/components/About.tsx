export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Decorative line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full" />
          
          <div className="pl-8">
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-300">
              <span className="text-orange-500 font-semibold">Our purpose</span> is to dream up-and produce true-modern ways for our inspiring partners to reach their audience. 
              We develop innovative, culture-centered ideas that{" "}
              <span className="text-amber-500 font-semibold">inspire action</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}