import ProjectCard from "./components/ProjectCard";
import ContactSection from "./components/ContactSection";
import Image from "next/image";

const projects = [
  {
    title: "Báaxal",
    description: "Una adaptacion del clásico juego del Pacman pero inspirado en la cultura maya. Desarrollado en HTML, CSS y JavaScript.",
    image: "/Baaxal.png",
    link: "https://baaxal.netlify.app/"
  },
  {
    title: "Cronometro",
    description: "Una tipica pagina para usar ideal para tomar tiempos.",
    image: "/Cronometro.png",
    link: "https://poetic-kleicha-164973.netlify.app/"
  },
  {
    title: "Hora",
    description: "Página con la informacion del día y hora actual en tiempo real.",
    image: "/Hora.png",
    link: "https://harmonious-pithivier-ae387f.netlify.app/"
  },
  {
    title: "LUZU!",
    description: "Proyecto de pagina web mejorada para el canal de streaming LuzuTV!",
    image: "/Luzu.png",
    link: "https://luzu-flame.vercel.app/"
  },
  {
    title: "Landing Page - Manicura",
    description: "Base simple para landing page con especializacion en belleza",
    image: "/Manicura.png",
    link: "https://proyect25.vercel.app/"
  },
  {
    title: "Clima - Ciudades",
    description: "Pagina para buscar el clima actual y el pronostico de las ciudades del mundo. Desarrollado en Next.js",
    image: "/ClimaCiudades.png",
    link: "https://cities-one-sepia.vercel.app/"
  },
  {
    title: "Landing Page - Negocio",
    description: "Base de landing page para negocio.",
    image: "/Negocio.png",
    link: "https://spectacular-kulfi-cbf470.netlify.app/"
  },
  {
    title: "Text",
    description: "Editor de texto online con funciones basicas.",
    image: "/Text.png",
    link: "https://sebatext.netlify.app/"
  },
  {
    title: "Temporizador",
    description: "Un temporizador online para tener controlado el tiempo.",
    image: "/Temporizador.png",
    link: "https://66c384a6388c850077526085--splendorous-mandazi-57b6a3.netlify.app/"
  },
  {
    title: "Snake",
    description: "Una adaptacion del clasico juego de la vivorita.",
    image: "/Snake.png",
    link: "https://magical-halva-6fee12.netlify.app/"
  },
  {
    title: "Calculadora",
    description: "Version web de una calculadora con las funciones basicas.",
    image: "/Calculadora.png",
    link: "https://cheerful-rolypoly-301687.netlify.app/"
  },
  {
    title: "Ahorcado",
    description: "El famoso juego del ahorcado en version web.",
    image: "/Ahorcado.png",
    link: "https://zippy-biscuit-7f931b.netlify.app/"
  },
  {
    title: "Cifrado",
    description: "Pagina web para cifrar texto.",
    image: "/Cifrado.png",
    link: "https://subtle-bublanina-6b65c1.netlify.app/"
  },
  {
    title: "ClimaX",
    description: "Pagina web para ver el clima en tiempo real en la ubicacion actual.",
    image: "/Clima.png",
    link: "https://climax-arg.netlify.app/"
  },
  {
    title: "LisTodo",
    description: "Clasica pagina web para llevar el control de las tareas diarias.",
    image: "/LisTodo.png",
    link: "https://timely-croquembouche-3caa01.netlify.app/"
  },
  {
    title: "Ruleta",
    description: "Una especie de ruleta de paises aleatoreos.",
    image: "/Ruleta.png",
    link: "https://fastidious-moxie-6d4ba5.netlify.app/"
  },
  {
    title: "Inventario",
    description: "Pagina web para llevar el control de inventario.",
    image: "/Inventario.png",
    link: "https://terma-administrador.netlify.app/"
  },
  {
    title: "Turismo",
    description: "Pagina web para ofrecer paquetes de turismo.",
    image: "/Turismo.png",
    link: "https://grand-griffin-9a4dba.netlify.app/"
  },
  {
    title: "Turnos",
    description: "Pagina web para manejar turnos.",
    image: "/Turnos.png",
    link: "https://teal-swan-5868d8.netlify.app/"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen text-neutral-900">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 bg-white z-10">
        <div className="flex items-center gap-2">
          <Image src="/Logo.png" alt="Logo" width={50} height={50} />
          
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#sobre" className="hover:text-blue-600">Sobre</a>
          <a href="#trabajos" className="hover:text-blue-600">Trabajos</a>
          <a href="#contacto" className="hover:text-blue-600">Contacto</a>
        </nav>
      </header>

      {/* Sección: Sobre la empresa */}
      <section id="sobre" className="text-center max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-5xl font-extrabold mb-6">Sitios web con identidad profesional</h1>
        <p className="text-lg text-gray-800">
        Soy desarrollador web y estudiante en la Universidad ORT Argentina, con un fuerte compromiso en la creación de soluciones digitales que representen fielmente la identidad y objetivos de cada cliente.

Me especializo en el diseño y desarrollo de sitios web personalizados, orientados a potenciar tanto la imagen como la funcionalidad de negocios y emprendimientos. Trabajo con tecnologías modernas y aplico un enfoque centrado en el detalle, la eficiencia y la experiencia del usuario, para garantizar una presencia digital profesional, sólida y efectiva.</p>
      </section>

      {/* Sección: Trabajos */}
      <section id="trabajos" className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center text-gray-800">Trabajos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección: Contacto */}
      <section id="contacto" className="px-4 py-24">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white text-sm py-8 text-center">
        <p>&copy; {new Date().getFullYear()} SebDev Studio. Todos los derechos reservados.</p>
        <p className="mt-2">
          <a href="https://github.com/sebaezeq" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
        </p>
        <Image src="/Logo.png" alt="Logo" width={50} height={50} />
      </footer>

    </main>
  );
}
