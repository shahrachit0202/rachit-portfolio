import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>

        <SectionTitle title="Contact" />

        <div
          className="
            bg-[#161b22]
            border
            border-slate-800
            rounded-2xl
            p-8
          "
        >
          <p className="text-slate-300 mb-4">
            Email: shahrachit0202@gmail.com
          </p>

          <p className="text-slate-300 mb-6">
            Location: Ahmedabad, Gujarat, India
          </p>

          <div className="flex gap-6 text-3xl">

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
        </div>

      </Container>
    </section>
  );
}