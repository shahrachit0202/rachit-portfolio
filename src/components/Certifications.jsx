import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Certifications() {
  const certs = [
    "AZ-900",
    "AWS Cloud Security",
    "Ethical Hacking Essentials",
    "Cisco Cyber Security",
    "Google Cloud Career Readiness",
    "Intro to DFIR",
    "Blockchain Foundation",
    "Ethereum Foundation",
  ];

  return (
    <section id="certifications" className="py-16">
      <Container>

        <SectionTitle title="Certifications" />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {certs.map((cert) => (
            <div
              key={cert}
              className="
                bg-[#161b22]
                border
                border-slate-800
                rounded-xl
                p-6
                text-center
                hover:border-emerald-400
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <p className="text-slate-200 font-medium">
                {cert}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}