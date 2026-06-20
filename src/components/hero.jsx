import profile from "../assets/profile.jpg";
import Container from "./Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

export default function Hero() {
  const skills = [
    "VAPT",
    "Red Teaming",
    "OWASP",
    "Network Security",
    "SOC Operations",
    "Cloud Security",
    "ICS Security",
  ];

  return (
    <section className="min-h-screen flex items-center">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* Left Side */}
          <div className="flex-1">

            <p className="text-emerald-400 font-semibold tracking-widest mb-3">
              OFFENSIVE SECURITY • RED TEAMING • VAPT
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
              Rachit Shah
            </h1>

            <h2 className="text-xl lg:text-2xl text-slate-400 mb-8">
              VAPT Analyst • Red Team Operator
            </h2>

            <p className="text-slate-300 leading-8 max-w-3xl text-lg">
              M.Tech Cyber Security student with practical experience in
              Vulnerability Assessment & Penetration Testing, Red Team
              Operations, SOC Monitoring, Cloud Security, and ICS/SCADA
              Security. Experienced in offensive security exercises, threat
              detection, cybersecurity research, and security assessments
              through internships, cyber exercises, and published research.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="border border-emerald-400 text-emerald-400 px-6 py-3 rounded-lg hover:bg-emerald-400 hover:text-black transition"
              >
                Contact Me
              </a>

            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-8 text-3xl">

              <a
                href="https://github.com/shahrachit0202"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-emerald-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/rachit-shah-8ab8b220b/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://tryhackme.com/p/R2Shah"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-red-400 transition"
              >
                <SiTryhackme />
              </a>

            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-slate-700 text-slate-300 px-4 py-2 rounded-full hover:border-emerald-400 hover:text-emerald-400 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="relative">

              <img
                src={profile}
                alt="Rachit Shah"
                className="
                  w-72
                  h-72
                  lg:w-96
                  lg:h-96
                  rounded-full
                  object-cover
                  border-4
                  border-emerald-400
                  shadow-[0_0_40px_rgba(16,185,129,0.35)]
                "
              />

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}