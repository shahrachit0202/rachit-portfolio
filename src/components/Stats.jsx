import Container from "./Container";

export default function Stats() {
  const stats = [
    {
      value: "4+",
      label: "Springer Publications",
    },
    {
      value: "3",
      label: "Security Internships",
    },
    {
      value: "50+",
      label: "TryHackMe Labs",
    },
    {
      value: "3+",
      label: "Cyber Exercises",
    },
  ];

  return (
    <section className="py-12">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                bg-[#161b22]
                border
                border-slate-800
                rounded-2xl
                p-6
                text-center
                hover:border-emerald-400
                transition-all
              "
            >
              <h3 className="text-4xl font-bold text-emerald-400">
                {stat.value}
              </h3>

              <p className="text-slate-400 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}