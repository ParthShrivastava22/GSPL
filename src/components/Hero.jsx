import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center p-6 rounded-b-md shadow-lg bg-cover bg-center relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('https://t4.ftcdn.net/jpg/01/31/27/99/360_F_131279986_ToLS0CR4O2VBc2vk7qNI7HUxeQd9refB.jpg')",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30"></div>
      <motion.h2
        className="text-6xl md:text-9xl font-bold drop-shadow-2xl relative z-10 bg-gradient-to-r from-[#FF494D] to-[#FF8652] via-[#FACC15] text-transparent bg-clip-text"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        GSPL 2025
      </motion.h2>
      <motion.p
        className="text-xl md:text-2xl mt-4 relative z-10 bg-gradient-to-r from-[#FF494D] to-[#FF8652] via-[#FACC15] text-transparent bg-clip-text"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        The Ultimate Cricket Extravaganza
      </motion.p>
    </section>
  );
}
