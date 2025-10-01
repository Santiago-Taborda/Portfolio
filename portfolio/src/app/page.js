import Image from "next/image";
import background_light from "../../public/background_light.jpg";
import background_dark from "../../public/background_dark.jpg";
import proyects from "@/helpers/proyects";
import Proyect from "@/components/proyect";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src={background_light}
        alt="BackGround"
        fill
        style={{ objectFit: "cover" }}
        className="dark:hidden"
        priority
        unoptimized
      />
      <Image
        src={background_dark}
        alt="BackGround"
        fill
        style={{ objectFit: "cover" }}
        className="hidden dark:block"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-gray-50/10 dark:bg-black/10 z-20" />

      <div className="z-30 relative flex flex-col justify-center items-center">
        <h3 className="mt-8 text-5xl font-michroma">Santiago Taborda</h3>
        <div className="w-40 h-1 bg-foreground/90 mt-6" />
          <p>Full Stack Developer</p>
        <div className="w-40 h-1 bg-foreground/90 mb-4" />
        <div className="grid grid-cols-2 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
        {proyects.map((proyect) => (
          <Proyect key={proyect.id} {...proyect} />
        ))}
        </div>
      </div>
    </div>
  );
}
