import SpotiCovers_01 from "../../public/SpotiCovers_01.png";
import SpotiCovers_02 from "../../public/SpotiCovers_02.png";
import SpotiCovers_03 from "../../public/SpotiCovers_03.png";
import SpotiCovers from "../../public/SpotiCovers.png";
import TecniClick_01 from "../../public/TecniClick_01.png";
import TecniClick_02 from "../../public/TecniClick_02.png";
import TecniClick_03 from "../../public/TecniClick_03.png";
import TecniClick_Light from "../../public/TecniClick_Light.png";
import TecniClick_Dark from "../../public/TecniClick_Dark.png";
import ColdFire_01 from "../../public/ColdFire_01.png";
import ColdFire_02 from "../../public/ColdFire_02.png";
import ColdFire_03 from "../../public/ColdFire_03.png";
import ColdFire2 from "../../public/ColdFire2.png";

const proyectList = [
  {
    id: "1",
    name: "SpotiCovers",
    info: "Descarga las portadas de tus playlists y albums favoritos de Spotify",
    description: [
      "Esta aplicación web es para todo aquel que quiere conseguir la cualquier portada de su álbum favorito en la máxima calidad. Tan solo pasando el link del álbum, automáticamente te entrega lista para descargar la portada del álbum, canción, playlist o artista.",
    ],
    images: [SpotiCovers_01, SpotiCovers_02, SpotiCovers_03],
    link: "https://Santiago-Taborda.github.io/Spotify_covers",
    github: "https://github.com/Santiago-Taborda/Spotify_covers",
    logo: SpotiCovers,
  },
  {
    id: "2",
    name: "TecniClick",
    info: "Busca y ofrece todo tipo de de trabajos / oficios por toda Latinoamérica",
    description: [
      "Es un proyecto dedicado a la búsqueda y ofrecimiento de distintos trabajos / oficios en toda Latinoamérica para poder agendar citas y mejorar la conectividad entre trabajador y cliente; aplicando funciones como búsqueda y filtrado de proveedores de servicio, pasarela de pagos, y perfiles de administradores.",
      "br",
      "Funciones en las que estuve involucrado:",
      " ● Protección de rutas sensibles: Configuré rutas en Next.js para restringir el acceso según el rol del usuario. Si un usuario no tiene los permisos necesarios, es redirigido automáticamente a una ruta autorizada.",
      " ● Responsividad en todas las páginas: Implementé estilos responsivos con Tailwind CSS para que los componentes se adaptaran correctamente a diferentes tamaños de pantalla (mobile, tablet y desktop).",
      " ● Pasarela de pagos: Integré Stripe como sistema de pagos para activar cuentas premium de proveedores. Añadí validaciones, protección de acceso, y notificaciones en tiempo real (de carga, éxito o error) utilizando Sonner.",
    ],
    images: [TecniClick_01, TecniClick_02, TecniClick_03],
    link: "https://tecniclickfrontend.vercel.app/",
    github: "https://github.com/Santiago-Taborda/TecniClick",
    logo: TecniClick_Light,
    logoDark: TecniClick_Dark,
  },
  {
    id: "3",
    name: "ColdFire",
    info: "e-commerce minimalista y demostrativo de productos tecnológicos",
    description: [
      "Éste proyecto es un e-commerce de productos tecnológicos varios, que cuenta con un sistema de agregado de productos a un carrito para luego ser comprados (o removidos del carrito) y luego visualizados en tu perfil.",
      "br",
      "Funciones en las que estuve involucrado:",
      " ● Modo oscuro automático: Implementé un sistema de cambio de tema claro/oscuro que detecta automáticamente la preferencia del dispositivo del usuario y aplica el tema correspondiente, mejorando la experiencia de usuario.",
      " ● Flujo de compra de productos: Implementé el carrito de compras para usuarios autenticados, permitiendo agregar y eliminar productos individualmente, y procesar la compra de forma eficiente y segura, optimizando la experiencia de usuario.",
    ],
    images: [ColdFire_01, ColdFire_02, ColdFire_03],
    github: "https://github.com/Santiago-Taborda/ColdFire",
    logo: ColdFire2,
  },
];

export default proyectList;
