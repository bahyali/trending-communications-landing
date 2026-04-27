import { Play, Users, BarChart3, PenTool, Globe, Calendar, Trophy, Globe2 } from "lucide-react";

const solutions = [
  {
    icon: Play,
    title: "Media Production",
    description: "Hit shows begins with great organic social media creative. We produce works that interests people to watch."
  },
  {
    icon: Users,
    title: "Public Relations",
    description: "We recognize that PR must be creative yet accountable. Our modern PR approach is designed to achieve maximum brand impact and business results, with social at its core."
  },
  {
    icon: BarChart3,
    title: "Strategic Communication",
    description: "A contemporary approach to communications planning and buying tailored for today's attention economy. We employ social, digital, and traditional channels with a measurement matrix that accounts for every dollar."
  },
  {
    icon: PenTool,
    title: "Content Creation & Development",
    description: "Our creative engine is built on value, relevance, and entertainment. In other words, inventive storytelling, relevant brands, and sugarcoating the message."
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "We are focused on achieving business goals, not potential outreach. We have a deep knowledge of channels where users spend their time and integrate planning, buying, and analytics to get them to act."
  },
  {
    icon: Calendar,
    title: "Events Conceptualization & Experience Management",
    description: "We make your event speak brand, and offer the attendees an experience of what's NEXT not NOW."
  },
  {
    icon: Trophy,
    title: "Sports Marketing",
    description: "We tailor inventive marketing solutions for businesses that wants to achieve their brand objectives through sports. At the same time, we provide career management and talent representation for athletes and gamers."
  },
  {
    icon: Globe2,
    title: "Localization",
    description: "We exploit go-to market strategies when localizing different forms of content so it resonates with the region's diverse cultures across platforms."
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-orange-500">Solutions</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 group-hover:bg-orange-500/20 flex items-center justify-center mb-4 transition-colors">
                <solution.icon className="w-6 h-6 text-zinc-400 group-hover:text-orange-500 transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-500 transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}