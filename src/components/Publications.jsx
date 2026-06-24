import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Publications() {
  const papers = [
    {
      title:
        "Enhancing Security in a University Network Using Snort and Wireshark",
      category: "Network Security",
      description:
        "Research focused on enhancing network security using Snort IDS and Wireshark for intrusion detection, packet analysis, and threat monitoring.",
      tags: ["Snort", "Wireshark", "IDS", "Network Security"],
      link:
        "https://link.springer.com/chapter/10.1007/978-981-97-6675-8_11",
    },
    {
      title:
        "Comparative Study on Hash Algorithms: KECCAK, MD, RIPEMD, and SHA Variants",
      category: "Cryptography",
      description:
        "Comparative study of cryptographic hash algorithms including KECCAK, MD, RIPEMD, and SHA variants with performance and security analysis.",
      tags: ["Cryptography", "Hashing", "SHA", "KECCAK"],
      link:
        "https://link.springer.com/chapter/10.1007/978-981-96-1206-2_6",
    },
    {
      title:
        "DeepVerify: Ensuring Authenticity through Deepfake and Liveness Analysis",
      category: "AI Security",
      description:
        "AI-powered deepfake detection and liveness verification research focused on improving media authenticity and digital identity validation.",
      tags: [
        "Deep Learning",
        "TensorFlow",
        "Computer Vision",
        "Cyber Security",
      ],
      link:
        "https://link.springer.com/chapter/10.1007/978-981-97-8605-3_18",
    },
    {
      title:
        "Smishing: A SMS Phishing Detection Using Various Machine Learning Algorithms",
      category: "Machine Learning Security",
      description:
        "Machine learning-based SMS phishing detection framework designed to identify malicious messages and improve mobile threat protection.",
      tags: [
        "Machine Learning",
        "Phishing",
        "Android Security",
        "Cyber Security",
      ],
      link:
        "https://link.springer.com/chapter/10.1007/978-981-97-2079-8_7",
    },
  ];

  return (
    <section id="publications" className="py-16">
      <Container>
        <SectionTitle title="Research & Publications" />

        <div className="grid lg:grid-cols-2 gap-6">
          {papers.map((paper) => (
            <div
              key={paper.link}
              className="
                bg-[#161b22]
                border
                border-slate-800
                rounded-2xl
                p-8
                hover:border-emerald-400
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="
                    inline-block
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    bg-emerald-400/10
                    text-emerald-400
                  "
                >
                  {paper.category}
                </span>

                <span
                  className="
                    inline-block
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    bg-blue-500/10
                    text-blue-400
                  "
                >
                  Springer Publication
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {paper.title}
              </h3>

              <p className="text-slate-300 leading-7 mb-6">
                {paper.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      border
                      border-slate-700
                      rounded-full
                      px-3
                      py-1
                      text-sm
                      text-slate-300
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={paper.link}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block
                  text-center
                  bg-emerald-500
                  text-black
                  font-semibold
                  py-3
                  px-5
                  rounded-lg
                  hover:bg-emerald-400
                  transition
                "
              >
                View Publication →
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}