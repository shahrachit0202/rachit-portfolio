import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>

        <SectionTitle title="About Me" />

        <div
          className="
            bg-[#161b22]
            border
            border-slate-800
            rounded-2xl
            p-8
            lg:p-10
          "
        >
          <p className="text-slate-300 text-lg leading-9">
            I am an M.Tech Cyber Security student at Rashtriya Raksha
            University with practical experience in Vulnerability
            Assessment & Penetration Testing (VAPT), Red Team
            Operations, SOC Monitoring, Cloud Security, and
            ICS/SCADA Security.
          </p>

          <p className="text-slate-300 text-lg leading-9 mt-6">
            Through internships at WESEE (Indian Navy),
            CiberTroops Security Solutions, and Elastic Run,
            I have worked on identifying security weaknesses,
            conducting penetration testing, analyzing threats,
            and strengthening organizational security posture.
          </p>

          <p className="text-slate-300 text-lg leading-9 mt-6">
            My current focus is Offensive Security,
            Red Team Operations, Adversary Simulation,
            Web Application Security, and ICS Security.
          </p>
        </div>

      </Container>
    </section>
  );
}