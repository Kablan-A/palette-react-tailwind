import Button from "./Button";

function No() {
  return (
    <div className="w-full px-9 flex flex-col items-center">
      <p className="md:hidden text-[#1F1E1E] text-9xl mb-10">No</p>

      <p className="hidden md:block text-[#1F1E1E] text-9xl mb-10">
        No, No, No
      </p>

      <div
        className="mb-6 w-11/12 flex flex-col items-center text-center
                      text-lg font-normal text-[#1F1E1E]"
      >
        <h2>
          <span className="underline underline-offset-2">No VOC</span> — better
          for you and the environment
        </h2>
        <h2>
          <span className="underline underline-offset-2">No Odor</span> — avoid
          unpleasant paint smells
        </h2>
        <h2>
          <span className="underline underline-offset-2">No Microbes</span> —
          Antimicrobial, Antibacterial and Anti-molding
        </h2>
        <h2>
          <span className="underline underline-offset-2">
            No Delivery costs
          </span>
          — free shipping in Europe
        </h2>
      </div>

      <Button text={"About Palette"} width={"8rem"} />
    </div>
  );
}

export default No;
