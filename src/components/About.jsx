import { motion } from "framer-motion";

export default function About() {
  const aboutCards = [
    {
      title: "Tournament Format",
      icon: "🏆",
      content: [
        "Open to both boys and girls.",
        "8 teams (2 themed teams and 6 internal teams).",
        "T10 (fast-paced, exciting matches).",
        "7 matches leading to one winner.",
      ],
    },
    {
      title: "Event Objectives",
      icon: "🎯",
      content: [
        "Promote sportsmanship and teamwork.",
        "Encourage participation and enthusiasm.",
        "Provide a professional cricket experience.",
      ],
    },
  ];

  return (
    <section className="min-h-screen p-8 md:p-20 flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black rounded-md shadow-lg">
      <motion.h3
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF494D] to-[#FF8652] via-[#FACC15] drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        About GSPL
      </motion.h3>
      <div className="flex flex-wrap justify-center gap-8">
        {aboutCards.map(({ title, content, icon }, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-gray-800 to-black p-8 md:p-12 rounded-lg shadow-xl w-full md:w-96 text-center transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.7)] transition-all duration-300 border-4 border-[#FF494D]"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4 bg-gradient-to-r from-[#FF494D] to-[#FF8652] via-[#FACC15] text-transparent bg-clip-text">
              {icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              {title}
            </h2>
            <ul className="text-lg text-gray-300">
              {content.map((item, i) => (
                <li key={i} className="mt-3">
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
