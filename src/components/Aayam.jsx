import { motion } from "framer-motion";

export default function Aayam() {
  const aayamSections = [
    {
      title: "AAYAM: The Techno-Cultural Fest",
      icon: "🎉",
      content: [
        "Flagship annual techno-cultural fest of SGSITS.",
        "Attracting more than 6,000 participants over three days.",
        "A hub of vibrant activities and dynamic performances.",
      ],
    },
    {
      title: "Unity and Multidisciplinarity",
      icon: "🤝",
      content: [
        "Students from all branches and societies participate.",
        "Showcasing their best skills and talents.",
        "Reflecting the multidisciplinary spirit and unity at SGSITS.",
      ],
    },
    {
      title: "Celebrating Diversity and Culture",
      icon: "🎭",
      content: [
        "One of the biggest cultural celebrations.",
        "Mixing competitions and festivities with inspiring talks.",
        "Celebrating unity in diversity with SGSITS students.",
      ],
    },
  ];

  return (
    <section className="min-h-screen p-8 md:p-20 bg-black rounded-lg flex flex-col justify-center shadow-lg">
      <motion.h3
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF494D] to-[#FF8652] via-[#FACC15] drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        AAYAM 2025: A Celebration of Culture, Talent, and Creativity
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {aayamSections.map(({ title, content, icon }, index) => (
          <motion.div
            key={index}
            className="flex flex-col"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <span className="text-4xl bg-gradient-to-r from-[#FF494D] to-[#FF8652] via-[#FACC15] text-transparent bg-clip-text">
                {icon}
              </span>
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF494D] to-[#FF8652] via-[#FACC15]">
                {title}
              </h2>
            </div>
            <ul className="text-lg text-gray-300 mt-2">
              {content.map((item, i) => (
                <li key={i} className="mt-2">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
