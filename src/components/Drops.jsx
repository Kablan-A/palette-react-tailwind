// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import drops from "../data/drops";
import Button from "./Button";

function Drop({ image, title, price }) {
  /*  Idea: Plus sign button at the center of the image to add it to the cart.
    <FontAwesomeIcon
      icon={faPlus}
      className="text-2xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
    />
  */
  return (
    <div className="w-40 flex flex-col gap-5 items-center cursor-pointer">
      <motion.div
        className="w-full relative"
        whileHover={{ scale: 0.9 }}
        onHoverEnd={(e) => {}}
      >
        <img src={image} alt={title} className="rounded" />
      </motion.div>
      <h3 className="text-[#3C3C3C] text-xs font-normal text-center">
        {title} <br /> {price}
      </h3>
    </div>
  );
}

function Drops() {
  return (
    <div className="w-full px-9 flex flex-col items-center">
      <h2 className="text-[#1F1E1E] text-5xl font-normal mb-20">New drops</h2>

      <div className="w-full mb-10 grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 place-items-center">
        {drops.map((drop) => (
          <Drop image={drop.image} title={drop.title} price={drop.price} />
        ))}
      </div>

      <Button text={"Shop all colors"} width={"140px"} />
    </div>
  );
}

export default Drops;
