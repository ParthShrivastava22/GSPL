import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="min-h-screen p-8 md:p-20 bg-black rounded-lg flex gap-8 flex-col justify-center items-center shadow-lg">
      <motion.h3
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF494D] to-[#FF8652] via-[#FACC15] drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Be Part of GSPL &apos;25
      </motion.h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="bg-black p-6 md:p-10 rounded-lg shadow-xl w-full md:w-96 text-center transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.7)] transition-all duration-300 border-4 border-[#FF494D]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Madhur Kuwal
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            External Affairs Coordinator
          </p>
          <p className="text-lg mb-2">9993663334</p>
          <p className="text-lg text-gray-300">madhur.k@gspl2025.com</p>
        </div>
        <div className="bg-black p-6 md:p-10 rounded-lg shadow-xl w-full md:w-96 text-center transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.7)] transition-all duration-300 border-4 border-[#FF494D]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Arnav Mehta
          </h2>
          <p className="text-lg text-gray-300 mb-6">Media Head</p>
          <p className="text-lg mb-2">9976675531</p>
          <p className="text-lg text-gray-300">arnav.m@gspl2025.com</p>
        </div>
      </div>
    </section>
  );
}
