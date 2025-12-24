const steps = [
  { no: "01", title: "Create Profile", desc: "Sign up in minutes" },
  { no: "02", title: "Get Matched", desc: "AI finds best fit" },
  { no: "03", title: "Start Working", desc: "Collaborate & get paid" },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-black">
      <h2 className="text-5xl font-bold text-center text-purple-300 mb-16">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {steps.map((s) => (
          <div
            key={s.no}
            className="bg-purple-900/20 border border-purple-500/20 rounded-3xl p-8 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
              {s.no}
            </div>
            <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
            <p className="text-purple-200">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
