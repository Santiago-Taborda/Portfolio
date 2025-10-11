import Image from "next/image";
import Link from "next/link";
import background_light from "../../public/background_light.jpg";
import background_dark from "../../public/background_dark.jpg";
import mail from "../../public/mail.png";
import githubLight from "../../public/githubLight.png";
import githubDark from "../../public/githubDark.png";
import linkedinLight from "../../public/linkedinLight.png";
import linkedinDark from "../../public/linkedinDark.png";
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

        <p className="text-center sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
          ¡Qué tal! Soy Santiago Taborda, un desarrollador web Full-Stack, viviendo actualmente en Córdoba, Argentina,he
          decidido dedicarme a la programación, ya que la rama de TI siempre me llama la atención. Por lo cual he realizado
          varios proyectos aplicando tecnologías como TypeScript, Next.js, React, Vite, Tailwind y enfocándome en cosas como UX
          y UI.
        </p>
        <div className="flex space-x-6 my-2">
          <Link href="mailto:santy204bt@gmail.com" className="relative w-12 aspect-square">
            <Image src={mail} alt="mail" fill style={{ objectFit: "contain" }} priority unoptimized />
          </Link>
          <Link href="https://github.com/Santiago-Taborda" className="relative w-12 aspect-square dark:hidden">
            <Image src={githubLight} alt="githubLight" fill style={{ objectFit: "contain" }} priority unoptimized />
          </Link>
          <Link href="https://github.com/Santiago-Taborda" className="relative w-12 aspect-square hidden dark:block">
            <Image src={githubDark} alt="githubDark" fill style={{ objectFit: "contain" }} priority unoptimized />
          </Link>
          <Link href="https://www.linkedin.com/in/santiago-b-taborda/" className="relative w-12 aspect-square dark:hidden">
            <Image src={linkedinLight} alt="linkedinLight" fill style={{ objectFit: "contain" }} priority unoptimized />
          </Link>
          <Link
            href="https://www.linkedin.com/in/santiago-b-taborda/"
            className="relative w-12 aspect-square hidden dark:block"
          >
            <Image src={linkedinDark} alt="linkedinDark" fill style={{ objectFit: "contain" }} priority unoptimized />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
          {proyects.map((proyect) => (
            <Proyect key={proyect.id} {...proyect} />
          ))}
        </div>
      </div>
    </div>
  );
}
