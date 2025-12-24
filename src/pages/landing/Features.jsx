import { Zap, Shield, Award } from "lucide-react";

const features = [
  {
    icon: <Zap />,
    title: "Lightning Fast Matching",
    desc: "AI-powered matching in seconds",
  },
  {
    icon: <Shield />,
    title: "Secure Payments",
    desc: "Escrow & milestone protection",
  },
  {
    icon: <Award />,
    title: "Verified Talent",
    desc: "Top quality freelancers only",
  },
];

const Features = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-bold text-center text-purple-300 mb-16">
        Why Choose Forge?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-purple-900/20 border border-purple-500/20 rounded-3xl p-8"
          >
            <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
            <p className="text-purple-200">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
