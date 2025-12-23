"use client";

import React, { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiPlus, FiMinus, FiMessageCircle } from "react-icons/fi";

type FAQItem = {
  q: string;
  a: React.ReactNode;
};

type FAQProps = {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
  whatsappHref?: string;
};

const DEFAULT_ITEMS: FAQItem[] = [
  {
    q: "¿Trabajan presencial o 100% en línea?",
    a: (
      <>
        Trabajamos <b>100% en línea</b>. La comunicación es por WhatsApp/llamada y
        entregamos todo en digital (PDF + renders/3D según el paquete). Si tu proyecto
        requiere coordinación local, lo revisamos caso por caso.
      </>
    ),
  },
  {
    q: "¿Qué entregables incluyen los servicios?",
    a: (
      <>
        Depende del paquete, pero normalmente incluye <b>planos en PDF</b>,{" "}
        <b>modelado 3D</b> y <b>renders finales</b>. Antes de iniciar, te compartimos
        exactamente qué se entrega y en qué formato.
      </>
    ),
  },
  {
    q: "¿Cuánto tarda un proyecto?",
    a: (
      <>
        Varía por alcance y complejidad. En la cotización te damos un{" "}
        <b>cronograma estimado</b> con fechas de avances y entrega final.
      </>
    ),
  },
  {
    q: "¿Cuántas revisiones incluyen?",
    a: (
      <>
        Incluimos un número de <b>revisiones definidas</b> por etapa (según el paquete).
        Nuestro objetivo es llegar al resultado final con un proceso claro y ordenado.
      </>
    ),
  },
  {
    q: "¿Cómo es el pago?",
    a: (
      <>
        Generalmente se maneja <b>anticipo</b> para iniciar y el resto contra avances
        o entrega, dependiendo del alcance. Te lo detallamos en la propuesta.
      </>
    ),
  },
  {
    q: "¿Pueden trabajar proyectos fuera de Chiapas (MX / USA)?",
    a: (
      <>
        Sí. Atendemos proyectos en <b>toda la República</b> y también en <b>EE. UU.</b>{" "}
        de manera remota, con entregas digitales y seguimiento por mensajes/llamadas.
      </>
    ),
  },
];

export default function FAQ({
  title = "Preguntas frecuentes",
  subtitle = "Transparencia desde el inicio: proceso, entregables y tiempos.",
  items = DEFAULT_ITEMS,
  whatsappHref = "https://wa.me/",
}: FAQProps) {
  const reduce = useReducedMotion();
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="section">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <p className="kicker">FAQ</p>
          <h2 className="max-w-[28ch]">{title}</h2>
          <p className="muted mt-3 max-w-[60ch]">{subtitle}</p>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Accordion */}
          <div className="grid gap-3">
            {items.map((item, idx) => {
              const isOpen = idx === openIndex;
              const panelId = `${baseId}-panel-${idx}`;
              const buttonId = `${baseId}-button-${idx}`;

              return (
                <article key={item.q} className="card overflow-hidden">
                  <button
                    id={buttonId}
                    className="w-full text-left px-5 py-4 md:px-6 md:py-5"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-0 font-medium">{item.q}</p>
                        <p className="muted mb-0 mt-1 text-[0.95rem]">
                          {isOpen ? "Ocultar respuesta" : "Ver respuesta"}
                        </p>
                      </div>

                      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border">
                        {isOpen ? (
                          <FiMinus className="icon" aria-hidden />
                        ) : (
                          <FiPlus className="icon" aria-hidden />
                        )}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={reduce ? { height: "auto" } : { height: 0, opacity: 0 }}
                        animate={reduce ? { height: "auto" } : { height: "auto", opacity: 1 }}
                        exit={reduce ? { height: "auto" } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
                        className="px-5 pb-5 md:px-6 md:pb-6"
                      >
                        <div className="divider mb-4" />
                        <p className="muted mb-0 leading-relaxed">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>

          {/* Side card */}
          <motion.aside
            className="card card-pad"
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: reduce ? 0 : 0.08, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="kicker">Contacto</p>
            <h3 className="mb-2">¿Tienes una duda específica?</h3>
            <p className="muted">
              Escríbenos por WhatsApp con tu idea (tipo de proyecto, ubicación, m² si aplica)
              y te orientamos con el siguiente paso.
            </p>

            <a
              className="btn btn-primary mt-4"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              <FiMessageCircle className="icon" aria-hidden />
              Hablar por WhatsApp
            </a>

            <p className="muted mt-4 text-[0.95rem]">
              Tip: comparte referencias (Pinterest/links) y tu presupuesto estimado para acelerar la propuesta.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
