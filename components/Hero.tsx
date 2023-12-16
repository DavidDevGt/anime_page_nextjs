import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex flex-col lg:flex-row justify-center items-center w-full gap-10">
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center gap-5"
      >
        <Image
          src="/img/logo.png"
          alt="logo"
          width={150}
          height={150}
          className="object-contain animate-bounce"
        />
        <h1 className="text-6xl text-white lg:max-w-lg font-bold leading-tight text-center">
          Descubre los <span className="text-red-500">Mágicos Mundos</span> del
          Anime
        </h1>
      </MotionDiv>
      <div className="lg:flex-1 relative w-full h-[50vh]">
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

export default Hero;
