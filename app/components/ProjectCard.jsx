"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ title, description, image, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="block bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden transition-all duration-300"

    >
      <Image src={image} alt={title} width={500} height={300} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>
    </motion.a>
  );
}
