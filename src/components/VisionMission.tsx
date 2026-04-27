import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-24 px-6 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="relative group">
            <div className="absolute inset-0 bg-orange-500/10 rounded-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Vision</h3>
              </div>
              
              <p className="text-zinc-400 leading-relaxed">
                We envision being the most trusted communications partner through transparency in operations. Racing the limits of the digital era. Caring for our partners and the commitment to positively push-forward their brand defines us.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative group">
            <div className="absolute inset-0 bg-amber-500/10 rounded-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mission</h3>
              </div>
              
              <p className="text-zinc-400 leading-relaxed">
                Our mission is to evolve the concept of communications in the region to help businesses deliver their message creatively and effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}