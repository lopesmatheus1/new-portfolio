"use client";
import ParticlesBackground from "@/app/_components/particles";
import Sidebar from "@/app/_components/sidebar";

const AnimateBackground = () => {
  return (
    <section
      id="animate-background"
      className="relative -top-32 h-screen w-full overflow-hidden px-4"
    >
      <Sidebar />
      <div className="absolute left-0 top-0 z-0 w-full h-full">
        <ParticlesBackground />
      </div>
      <div className="flex h-full items-center justify-center">
        <h1 className="text-center text-4xl">
          Olá, meu nome é<br />
          Matheus Marendino <br />
          <span className="animate-gradientbg-gradient-to-r animate-gradient bg-gradient-to-r from-[hsl(267,96.3%,42.7%)] via-[hsl(300,36%,62%)] to-[hsl(267,96.3%,42.7%)] bg-[length:200%] bg-clip-text text-transparent">
            Desenvolvedor Full Stack
          </span>
        </h1>
      </div>
    </section>
  );
};

export default AnimateBackground;
