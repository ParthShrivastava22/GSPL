import { motion } from "framer-motion";

export default function Features() {
  const keyFeatures = [
    {
      title: "Widespread Participation",
      description:
        "120+ players actively competing. Integrated with Aayam, the annual techno-cultural fest of SGSITS.",
      icon: "⚡",
    },
    {
      title: "Massive Reach",
      description:
        "Participation from 15+ colleges. 6,000+ student footfall and 1,00,000+ viewers across colleges.",
      icon: "🌍",
    },
    {
      title: "Community Engagement",
      description:
        "Involvement of alumni, faculty members, and other stakeholders, creating a platform for networking, innovation, and entrepreneurship.",
      icon: "🤝",
    },
  ];

  return (
    <section className="bg-black p-8 md:p-20 rounded-lg shadow-lg">
      <motion.h3
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF494D] to-[#FF8652] via-[#FACC15] drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Key Features
      </motion.h3>
      <div className="flex flex-wrap justify-center gap-8">
        {keyFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-black p-8 md:p-12 rounded-lg shadow-xl w-full md:w-80 text-center transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.7)] transition-all duration-300 border-4 border-[#FF494D]"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center mb-6">
              <span className="text-4xl bg-gradient-to-r from-[#FF494D] to-[#FF8652] via-[#FACC15] text-transparent bg-clip-text">
                {feature.icon}
              </span>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              {feature.title}
            </h4>
            <p className="text-lg text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
