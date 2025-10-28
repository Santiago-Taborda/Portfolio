import Proyect from "../../../components/proyect";
import proyectList from "../../../helpers/proyectList";

const SlugProyect = async ({ params }) => {
  const { id } = await params;

const user = proyectList.find((proyect) => proyect.id === id);

  return (
    <div className="z-30 relative w-full">
      {user ? (
        <Proyect {...user} />
      ) : (
        <div className="w-full h-[85vh] font-michroma text-lg lg:text-xl xl:text-2xl 2xl:text-3xl flex justify-center items-center">
          <h2 className="text-center">Error | Proyecto no encontrado</h2>
        </div>
      )}
    </div>
  );
};

export default SlugProyect;
