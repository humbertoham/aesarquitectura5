"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FiHome,
  FiGrid,
  FiLayers,
  FiImage,
  FiArrowUpRight,
} from "react-icons/fi";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    title: "Diseño de Fachada",
    description:
      "Propuesta estética, selección de materiales y visualización arquitectónica lista para presentación.",
    icon: <FiHome className="icon" aria-hidden />,
  },
  {
    title: "Diseño de Área Social",
    description:
      "Distribución, modelado 3D, renders y planos funcionales para espacios habitables y coherentes.",
    icon: <FiGrid className="icon" aria-hidden />,
  },
  {
    title: "Proyecto Arquitectónico Completo",
    description:
      "Proceso integral: diseño, desarrollo arquitectónico, modelado 3D, planos y renders finales.",
    icon: <FiLayers className="icon" aria-hidden />,
  },
  {
    title: "Renders y Visualización 3D",
    description:
      "Imágenes fotorrealistas para preventa, presentación o validación de diseño.",
    icon: <FiImage className="icon" aria-hidden />,
  },
];

export default function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="servicios" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        >
          <p className="kicker">Servicios</p>
          <h2 className="max-w-[22ch]">
            Soluciones arquitectónicas claras y bien ejecutadas
          </h2>
          <p className="muted mt-3 max-w-[60ch]">
            Cada servicio está diseñado para integrarse a un proceso ordenado,
            con entregables definidos y comunicación constante.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-2 mt-8">
          {SERVICES.map((service, i) => (
            <motion.article
              key={service.title}
              className="card card-pad group"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: reduce ? 0 : i * 0.05,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="mb-4 text-[1.25rem]">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="mb-2">{service.title}</h3>
                <p className="muted mb-6 flex-1">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="/contacto"
                  className="inline-flex items-center gap-2 text-[0.95rem] font-medium"
                >
                  Solicitar cotización
                  <FiArrowUpRight
                    className="icon transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                    aria-hidden
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
