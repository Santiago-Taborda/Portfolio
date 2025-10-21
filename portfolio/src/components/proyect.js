import Link from "next/link";
import Image from "next/image";

const Proyect = (proyectInfo) => {
  const { id, name, description, image, link, github } = proyectInfo;
  return (
    <div className="flex flex-1 m-4">
      <div className="w-full rounded-md hover:scale-105 transition-transform duration-300 ease-in-out bg-background shadow-[0_0px_18px_-5px_#111214] dark:shadow-[0_0px_18px_-5px_#f3f3f3]">
        <div className="w-full h-1.5 rounded-t-md bg-black dark:bg-white" />
        <Link href={`/proyects/${id}`} className="block">
          <div className="relative w-full aspect-video">
            <Image src={image} alt={name} fill style={{ objectFit: "contain" }} priority unoptimized />
          </div>
          <div className="flex flex-col items-center px-[25%] hover:px-[15%] lg:px-[33%] lg:hover:px-[25%] transition-[padding] duration-300 ease-in-out">
            <div className="h-1 bg-foreground/90 mt-2 w-full" />
            <h2 className="w-fill text-center text-xl text-nowrap font-bold mb-0.5 mx-1">{name}</h2>
            <div className="h-1 bg-foreground/90 w-full" />
          </div>
        </Link>
        <div className="flex flex-col p-[3%]">
          <p className="text-sm mb-4">{description}</p>
          <div className="flex justify-between">
            {link && (
              <Link href={link} className="text-blue-500 hover:underline">
                Visitar
              </Link>
            )}
            <Link href={github} className="text-blue-500 hover:underline">
              Repositorio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyect;
