"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FiMapPin,
  FiArrowUpRight,
  FiCheckCircle,
  FiGlobe,
} from "react-icons/fi";

export default function ServiceArea() {
  const reduce = useReducedMotion();

  return (
    <section id="cobertura" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="kicker">Cobertura</p>
          <h2 className="max-w-[30ch]">
            Estudio ubicado en Chiapas, atención 100% en línea
          </h2>
          <p className="muted mt-3 max-w-[70ch]">
            Nuestro punto de referencia se encuentra en Tuxtla Gutiérrez, Chiapas.
            Trabajamos de forma remota con clientes en toda la República Mexicana y
            Estados Unidos.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* MAP */}
          <motion.div
            className="card overflow-hidden"
            initial={reduce ? undefined : { opacity: 0, scale: 0.985 }}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {/* Header del mapa */}
            <div className="border-b px-5 py-4 md:px-6 md:py-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="mb-1 flex items-center gap-2 font-medium">
                    <FiMapPin className="icon" aria-hidden />
                    Tuxtla Gutiérrez, Chiapas
                  </p>
                  <p className="muted mb-0 text-[0.95rem]">
                    Ubicación de referencia · Atención remota
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/place/Tuxtla+Guti%C3%A9rrez,+Chiapas"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  Abrir en Maps
                  <FiArrowUpRight className="icon" aria-hidden />
                </a>
              </div>
            </div>

            {/* Iframe responsive */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                title="Mapa – Tuxtla Gutiérrez, Chiapas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61163.60645927173!2d-93.149787!3d16.753158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8f2a6fef3db%3A0x4d7a9a9f9f7e8b36!2sTuxtla%20Guti%C3%A9rrez%2C%20Chiapas!5e0!3m2!1ses-419!2smx!4v1734980000000"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* INFO LATERAL */}
          <motion.aside
            className="card card-pad"
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: reduce ? 0 : 0.08,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          >
            <p className="kicker">Alcance de servicio</p>

            <div className="mt-3 grid gap-3">
              <Bullet
                title="México"
                desc="Proyectos residenciales y comerciales en toda la República."
              />
              <Bullet
                title="Estados Unidos"
                desc="Atención remota para remodelaciones y diseño arquitectónico."
              />
              <Bullet
                title="Modalidad"
                desc="Brief, revisiones y entregas por WhatsApp y videollamada."
                icon={<FiGlobe className="icon" aria-hidden />}
              />
            </div>

            <div className="divider my-5" />

            <p className="muted mb-4">
              Para una cotización más rápida, comparte ubicación, tipo de proyecto,
              metros cuadrados (si aplica) y referencias visuales.
            </p>

            <a href="#contacto" className="btn btn-primary">
              Iniciar cotización
              <FiArrowUpRight className="icon" aria-hidden />
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Bullet({
  title,
  desc,
  icon = <FiCheckCircle className="icon" aria-hidden />,
}: {
  title: string;
  desc: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded border p-4">
      <div className="flex items-start gap-3">
        <div className="mt-[2px]">{icon}</div>
        <div>
          <p className="mb-0 font-medium">{title}</p>
          <p className="muted mb-0 text-[0.95rem]">{desc}</p>
        </div>
      </div>
    </div>
  );
}
