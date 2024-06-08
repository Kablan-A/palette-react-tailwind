import Button from "./Button";
import { motion } from "framer-motion";
import fadeIn from "../variants";

function Offer({
  image,
  imgIsFirst,
  header,
  pMain,
  pSecondary,
  textColor,
  textBgColor,
  btnText,
  btnWidth,
}) {
  const imgOrderStyle = { order: imgIsFirst ? "0" : "1" };
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full p-9"
    >
      <div className="w-full grid md:grid-cols-2 gap-2 justify-center">
        <img
          src={image}
          alt="Decoration"
          className="w-full"
          style={imgOrderStyle}
        />

        <div
          className="w-full flex flex-col items-center justify-center gap-10 p-12 
          text-center font-normal rounded-lg"
          style={{ color: textColor, backgroundColor: textBgColor }}
        >
          <h4 className="text-2xl md:text-3xl w-full md:w-11/12 lg:text-5xl">
            {header}
          </h4>

          {pSecondary && <p className="text-xl">{pSecondary}</p>}

          {pMain && <p className="text-xs">{pMain}</p>}

          {btnText && <Button text={btnText} width={btnWidth} />}
        </div>
      </div>
    </motion.div>
  );
}

export default Offer;
