export default function ContactSection() {
    return (
      <section className="mt-32 max-w-2xl mx-auto text-center">
        <h2
  className="text-4xl font-bold mb-4"
  style={{
    color: "#0673fe",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo oscuro con transparencia
    padding: "5px", // Opcional: agrega algo de espacio alrededor del texto
    borderRadius: "15px", // Opcional: para bordes redondeados
  }}
>
  ¿Querés tu propia web?
</h2>


<p
  className="mb-6 text-lg flex flex-wrap"
  style={{
    color: "#fff",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
  }}
>
  {`Sitios personalizados, pensados para potenciar la imagen y funcionalidad de tu negocio o emprendimiento. Ya sea para mostrar tus productos, gestionar turnos o mejorar tu presencia online, trabajamos con tecnologías modernas y diseño a medida para ayudarte a destacarte en el mundo digital. Construyamos juntos una presencia sólida, única y efectiva.`.split(' ').map((word, index) => (
    <span
      key={index}
      className="relative group transition-all duration-200 mx-[1.5px]"
      style={{
        position: 'relative',
        display: 'inline-block',
        padding: '2px 4px',
        borderRadius: '4px',
      }}
    >
      <span
        className="absolute inset-0 rounded group-hover:opacity-100 transition-opacity duration-200"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          opacity: 0,
        }}
      />
      <span
        className="relative z-10 group-hover:text-[#0673fe]"
        style={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        {word}
      </span>{" "}
    </span>
  ))}
</p>

        <a
          href="mailto:sebaezeq@gmail.com"
          className="inline-block bg-black text-white text-lg px-8 py-4 rounded-full shadow-md hover:bg-neutral-800 transition-all"
        >
          Contactame por Email
        </a>
      </section>
    );
  }
  