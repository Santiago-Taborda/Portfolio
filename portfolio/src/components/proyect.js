import Image from "next/image";
import Link from "next/link";
import githubLight from "../../public/githubLight.png";
import githubDark from "../../public/githubDark.png";

const Proyect = (user) => {
  const { id, name, description, images, link, github, logo, logoDark } = user;

  return (
    <div className="flex flex-col justify-center items-center py-[2vw]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[calc(100%+10px)] h-[5px] bg-foreground/90" />
        <h2 className="w-full font-michroma text-3xl text-center">{name}</h2>
        <div className="w-[calc(100%+10px)] h-[5px] bg-foreground/90 mt-1.5 mb-[2vw]" />
      </div>
      <div className="w-full flex flex-row aspect-[34/9]">
        <div className="relative w-[26.47%] aspect-square">
          <Image src={images[1]} alt={name} fill style={{ objectFit: "cover" }} priority unoptimized />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-background/25 via-white/0 to-dark-background/30" />
          {/* <div className="absolute inset-0 bg-gradient-to-l from-dark-background/15 to-dark-background/0" /> */}
        </div>

        <div className="relative flex flex-1 z-30 aspect-video">
          <Image src={images[0]} alt={name} fill style={{ objectFit: "cover" }} priority unoptimized />
        </div>
        <div className="relative w-[26.47%] aspect-square">
          <Image src={images[2]} alt={name} fill style={{ objectFit: "cover" }} priority unoptimized />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-background/25 via-white/0 to-dark-background/30" />
        </div>
      </div>
      <div className="w-full max-w-4xl px-4 mt-6">
        {description.map((para, index) => {
          if (para === "br") {
            return <br key={index} />;
          }
          return (
            <p key={index} className="mb-2 text-justify">
              {para}
            </p>
          );
        })}
      </div>
      <div className="flex">
        {link && (
          <Link href={link} className="flex justify-center items-center">
            {!logoDark && (
              <>
                <div className="relative h-10 aspect-square">
                  <Image src={logo} alt="siteLight" fill style={{ objectFit: "contain" }} priority unoptimized />
                </div>
              </>
            )}
            {logoDark && (
              <>
                <div className="relative h-10 aspect-square dark:hidden">
                  <Image src={logo} alt="siteLight" fill style={{ objectFit: "contain" }} priority unoptimized />
                </div>
                <div className="relative h-10 aspect-square hidden dark:block">
                  <Image src={logoDark} alt="siteDark" fill style={{ objectFit: "contain" }} priority unoptimized />
                </div>
              </>
            )}
            <p className="font-sans hover:underline pl-1 pr-5">Visitar pagina</p>
          </Link>
        )}
        <Link href={github} className="flex justify-center items-center">
          <div className="relative h-10 aspect-square dark:hidden">
            <Image src={githubLight} alt="githubLight" fill style={{ objectFit: "contain" }} priority unoptimized />
          </div>
          <div className="relative h-10 aspect-square hidden dark:block">
            <Image src={githubDark} alt="githubDark" fill style={{ objectFit: "contain" }} priority unoptimized />
          </div>
          <p className="font-sans hover:underline pl-1">Ver repositorio</p>
        </Link>
      </div>
    </div>
  );
};

export default Proyect;
