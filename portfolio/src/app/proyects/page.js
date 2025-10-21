import Proyect from "@/components/proyect.js";
import proyectList from "@/helpers/proyectList.js";

const Proyects = () => {
  return (
    <div className="z-30 relative flex flex-col justify-center items-center p-[3%]">
      <div className="w-56 h-[5px] bg-foreground/90 mt-2" />
      <h2 className="font-michroma text-3xl">Proyectos</h2>
      <div className="w-56 h-[5px] bg-foreground/90 mt-1.5 mb-4" />
      <div className="grid grid-cols-2 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
        {proyectList.map((proyect) => (
          <Proyect key={proyect.id} {...proyect} />
        ))}
      </div>
    </div>
  );
};

export default Proyects;
