export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              <span className="text-orange-500">TRENDING</span>
              <span className="text-white"> COMMUNICATIONS</span>
            </h3>
            <p className="text-zinc-500 text-sm mt-1">Next Generation Media Company</p>
          </div>

          <div className="flex items-center gap-8">
            {["About", "Solutions", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-zinc-500 hover:text-orange-500 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Trending Communications. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}