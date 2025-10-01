import Link from "next/link";
import Image from "next/image";

const Proyect = (proyectInfo) => {
  const { id, name, description, image, link, github } = proyectInfo;
  return (
    <div className="flex flex-1 m-4">
      <div className="w-full rounded-md hover:scale-105 transition-transform duration-300 ease-in-out bg-background shadow-[0_0px_18px_-5px_#111214] dark:shadow-[0_0px_18px_-5px_#f3f3f3]">
        <div className="w-full h-1.5 rounded-t-md bg-black dark:bg-white" />
        <Link href={`/proyect/${id}`} className="block">
          <div className="relative w-full aspect-video">
            <Image src={image} alt={name} fill style={{ objectFit: "contain" }} priority unoptimized />
          </div>
          <h2 className="w-fill text-center text-xl font-bold mb-2">{name}</h2>
        </Link>
        <div className="flex flex-col p-[3%]">
          <p className="text-sm mb-4">{description}</p>
          <div className="flex justify-between">
            {link && (
              <Link href={link} className="text-blue-500 hover:underline">
                Live Demo
              </Link>
            )}
            <Link href={github} className="text-blue-500 hover:underline">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyect;
