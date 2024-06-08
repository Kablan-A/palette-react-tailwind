import { motion } from "framer-motion";
import fadeIn from "../variants";

function Advantage({ index, text }) {
  return (
    <div className="flex items-center gap-4 text-[#3C3C3C] font-normal">
      <span className="text-lg">0{index}</span>
      <h2 className="max-w-[9rem] text-xs uppercase">{text}</h2>
    </div>
  );
}

function Advantages() {
  const advantages = [
    "Eco-friendly & Premium A+ paint",
    "Curated selection of 50 exclusive colors",
    "Easy to try on with our sample stickers",
    "Free shipping & returns in Europe",
  ];

  return (
    <div className="w-full py-14 flex">
      <motion.div
        variants={fadeIn("", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full grid gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-4"
      >
        {advantages.map((text, index) => (
          <Advantage index={index + 1} text={text} />
        ))}
      </motion.div>
    </div>
  );
}

export default Advantages;
