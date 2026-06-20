import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Publications() {
  const papers = [
    {
      title:
        "Enhancing Security in a University Network Using Snort and Wireshark",
      category: "Network Security",
      link:
        "https://link.springer.com/chapter/10.1007/978-981-97-6675-8_11",
    },
    {
      title:
        "Comparative Study on Hash Algorithms: KECCAK, MD, RIPEMD, and SHA Variants",
      category: "Cryptography",
      link:
        "https://link.springer.com/chapter/10.1007/978-981-96-1206-2_6",
    },
    {
      title:
        "DeepVerify: Ensuring Authenticity through Deepfake and Liveness Analysis",
      category: "AI Security",
      link:
        "https://link.springer.com/chapter/10.1007/978-981-97-8605-3_18",
    },
    {
      title:
        "Smishing: A SMS Phishing Detection Using Various Machine Learning Algorithms",
      category: "Machine Learning Security",
      link:
        "https://link.springer.com/chapter/10.1007/978-981-97-2079-8_7",
    },
  ];

  return (
    <section id="publications" className="py-24">
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
              <span
                className="
                  inline-block
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  bg-emerald-400/10
                  text-emerald-400
                  mb-4
                "
              >
                {paper.category}
              </span>

              <h3 className="text-xl font-bold text-white mb-4">
                {paper.title}
              </h3>

              <a
                href={paper.link}
                target="_blank"
                rel="noreferrer"
                className="
                  text-emerald-400
                  font-medium
                  hover:underline
                "
              >
                View Springer Publication →
              </a>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}