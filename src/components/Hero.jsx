import Button from "./Button";

function Hero() {
  return (
    <div className="w-full h-screen sm:p-2">
      <div className="w-full h-full sm:rounded-md p-9 flex items-center bg-hero bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col gap-9 max-w-md">
          <h1 className="text-white text-5xl md:text-6xl font-normal leading-[4rem]">
            Eco-Friendly Paints For A Healthy Home
          </h1>

          <Button text={"Shop our colors"} width={"200px"} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
