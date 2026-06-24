import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";

export default function SocialLinks() {
  return (
   <div
  style={{
    display: "flex",
    gap: "20px",
    marginTop: "30px",
  }}
>
  <a
    href="https://tryhackme.com/p/R2Shah"
    target="_blank"
    rel="noreferrer"
    style={{ color: "#ff4b4b", fontSize: "2rem" }}
  >
    <SiTryhackme />
  </a>

  <a
    href="https://www.linkedin.com/in/rachit-shah-8ab8b220b/"
    target="_blank"
    rel="noreferrer"
    style={{ color: "#0077b5", fontSize: "2rem" }}
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/shahrachit0202"
    target="_blank"
    rel="noreferrer"
    style={{ color: "#ffffff", fontSize: "2rem" }}
  >
    <FaGithub />
  </a>
</div>
  );
}