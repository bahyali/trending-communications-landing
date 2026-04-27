import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-zinc-400 text-lg mb-12">
          Have a project in mind? We'd love to hear from you.
        </p>

        <a
          href="mailto:Hello@trendingcomms.net"
          className="inline-flex items-center gap-3 px-10 py-5 bg-orange-500 hover:bg-orange-600 text-zinc-950 font-bold text-xl rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 group"
        >
          <Mail className="w-6 h-6" />
          Hello@trendingcomms.net
        </a>
      </div>
    </section>
  );
}