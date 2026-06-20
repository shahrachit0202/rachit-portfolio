import Container from "./Container";
import SectionTitle from "./SectionTitle";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "shahrachit0202@gmail.com",
      link: "mailto:shahrachit0202@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Connect Professionally",
      link: "https://www.linkedin.com/in/rachit-shah-8ab8b220b/",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "View Projects & Research",
      link: "https://github.com/shahrachit0202",
    },
    {
      icon: <SiTryhackme />,
      title: "TryHackMe",
      value: "Cyber Security Labs",
      link: "https://tryhackme.com/p/R2Shah",
    },
    {
      icon: <FaFilePdf />,
      title: "Resume",
      value: "Download Resume",
      link: "/resume.pdf",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionTitle title="Let's Connect" />

        <p className="text-slate-400 mb-10 max-w-2xl">
          Interested in Cyber Security, VAPT, Red Teaming, Security Research,
          or collaboration opportunities? Feel free to connect with me.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {contacts.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="
                bg-[#161b22]
                border
                border-slate-800
                rounded-2xl
                p-6
                hover:border-emerald-400
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="text-3xl text-emerald-400 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.value}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}