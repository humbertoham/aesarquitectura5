"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FiMessageCircle,
  FiArrowUpRight,
  FiFileText,
} from "react-icons/fi";

type CTAProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  secondaryHref?: string;
};

export default function CTA({
  title = "¿Listo para comenzar tu proyecto?",
  description = "Cuéntanos tu idea y recibe una propuesta clara, con tiempos y entregables definidos.",
  primaryHref = "https://wa.me/",
  secondaryHref = "#servicios",
}: CTAProps) {
  const reduce = useReducedMotion();

  return (
    <section className="section">
      <div className="container">
        <motion.div
          className="card card-pad rounded relative overflow-hidden"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        >
          {/* Background accent (ultra sutil) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(700px 300px at 10% 0%, rgba(0,0,0,0.08), transparent 60%), radial-gradient(600px 320px at 90% 100%, rgba(0,0,0,0.06), transparent 65%)",
            }}
          />

          <div className="relative grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            {/* Copy */}
            <div>
              <p className="kicker">Cotización</p>
              <h2 className="max-w-[22ch]">{title}</h2>
              <p className="muted mt-3 max-w-[52ch]">
                {description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={primaryHref}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <FiMessageCircle className="icon" aria-hidden />
                Cotizar por WhatsApp
                <FiArrowUpRight className="icon" aria-hidden />
              </a>

              <a
                href={secondaryHref}
                className="btn btn-ghost"
              >
                <FiFileText className="icon" aria-hidden />
                Ver servicios
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
