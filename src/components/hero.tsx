"use client";

import React from "react";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import {
  FiArrowUpRight,
  FiMessageCircle,
  FiCheckCircle,
  FiMapPin,
  FiClock,
  FiLayers,
} from "react-icons/fi";

type HeroProps = {
  /** Ej: "AES Arquitectos" */
  brand?: string;
  /** Titular principal */
  headline?: string;
  /** Subtítulo/descripcion */
  subhead?: string;
  /** URL de WhatsApp (wa.me o link directo) */
  whatsappHref?: string;
  /** Ancla a sección de servicios */
  servicesHref?: string;
  /** Imagen opcional (URL). Si no se manda, usa un placeholder elegante. */
  imageSrc?: string;
  imageAlt?: string;
};

export default function Hero({
  brand = "AES Arquitectos",
  headline = "Arquitectura y visualización profesional, 100% en línea.",
  subhead = "Diseñamos fachadas, áreas sociales y proyectos completos con un proceso claro, entregables listos para construir y comunicación constante.",
  whatsappHref = "https://wa.me/",
  servicesHref = "#servicios",
  imageSrc,
  imageAlt = "Proyecto arquitectónico – renders y planos",
}: HeroProps) {
  const reduce = useReducedMotion();

  const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1];

  const fadeUp: MotionProps = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease },
  };

  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <motion.p
              className="kicker flex items-center gap-2"
              {...(reduce ? {} : fadeUp)}
            >
              <span className="inline-flex items-center gap-2">
                <FiLayers className="icon" aria-hidden="true" />
                {brand}
              </span>
              <span className="inline-block h-[1px] w-10 bg-[var(--line)] align-middle" />
              <span className="muted">Chiapas, México · Trabajamos en toda la República y EE. UU.</span>
            </motion.p>

            <motion.h1
              className="mt-3 max-w-[22ch]"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={
                reduce
                  ? undefined
                  : { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }
              }
            >
              {headline}
            </motion.h1>

            <motion.p
              className="muted mt-4 max-w-[62ch]"
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={
                reduce
                  ? undefined
                  : { duration: 0.6, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }
              }
            >
              {subhead}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-6 flex flex-wrap items-center gap-3"
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={
                reduce
                  ? undefined
                  : { duration: 0.55, delay: 0.14, ease: [0.2, 0.8, 0.2, 1] }
              }
            >
              <a
                className="btn btn-primary"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <FiMessageCircle className="icon" aria-hidden="true" />
                Cotizar por WhatsApp
                <FiArrowUpRight className="icon" aria-hidden="true" />
              </a>

              <a className="btn btn-ghost" href={servicesHref}>
                Ver servicios
                <FiArrowUpRight className="icon" aria-hidden="true" />
              </a>
            </motion.div>

            {/* Trust / stats */}
            <motion.div
              className="mt-7 grid gap-3 sm:grid-cols-3"
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={
                reduce
                  ? undefined
                  : { duration: 0.6, delay: 0.18, ease: [0.2, 0.8, 0.2, 1] }
              }
            >
              <MiniStat
                icon={<FiCheckCircle className="icon" aria-hidden="true" />}
                label="+400 clientes"
                desc="Experiencia comprobada"
              />
              <MiniStat
                icon={<FiClock className="icon" aria-hidden="true" />}
                label="+3 años"
                desc="Operación 100% en línea"
              />
              <MiniStat
                icon={<FiMapPin className="icon" aria-hidden="true" />}
                label="MX / USA"
                desc="Atención a distancia"
              />
            </motion.div>

            {/* Tiny note */}
            <p className="muted mt-5 text-[0.95rem]">
              Entregables: planos en PDF, modelado 3D y renders finales (según el paquete).
            </p>
          </div>

          {/* Right */}
          <motion.div
            className="hero-media card overflow-hidden"
            initial={reduce ? undefined : { opacity: 0, scale: 0.98 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={
              reduce
                ? undefined
                : { duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }
            }
          >
            <div className="relative h-full min-h-[340px] w-full">
              {imageSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-[var(--surface)]">
                  {/* Placeholder editorial (sin imagen) */}
                  <div className="absolute inset-0">
                    <div className="h-full w-full bg-[var(--surface)]" />
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background:
                          "radial-gradient(800px 400px at 20% 10%, rgba(0,0,0,0.10), transparent 60%), radial-gradient(700px 420px at 80% 30%, rgba(0,0,0,0.08), transparent 65%)",
                      }}
                    />
                  </div>

                  <div className="relative h-full p-5 sm:p-6">
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="kicker">Renders · Planos · 3D</span>
                        <span className="rounded-sm border px-3 py-1 text-[0.85rem] text-[var(--muted)]">
                          Proceso claro
                        </span>
                      </div>

                      <div className="mt-5 grid gap-3">
                        <PreviewCard
                          title="Diseño de Fachada"
                          desc="Propuesta estética, materiales y visualización."
                        />
                        <PreviewCard
                          title="Diseño de Área Social"
                          desc="Distribución, 3D, planos y renders finales."
                        />
                        <PreviewCard
                          title="Proyecto Arquitectónico Completo"
                          desc="Diseño, modelado 3D, planos y renders."
                        />
                      </div>

                      <div className="mt-6">
                        <div className="divider mb-4" />
                        <p className="muted text-[0.95rem]">
                          Trabajamos contigo paso a paso para que tu proyecto quede como lo imaginas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Floating badge */}
              <div className="pointer-events-none absolute left-4 top-4 rounded-full border bg-[var(--bg)] px-3 py-1 text-[0.85rem] text-[var(--muted)] shadow">
                Estudio de arquitectura · Online
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({
  icon,
  label,
  desc,
}: {
  icon: React.ReactNode;
  label: string;
  desc: string;
}) {
  return (
    <div className="card card-pad">
      <div className="flex items-start gap-3">
        <div className="mt-[2px]">{icon}</div>
        <div>
          <p className="mb-0 text-[1rem] font-medium">{label}</p>
          <p className="muted mb-0 text-[0.95rem]">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function PreviewCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded border bg-[rgba(255,255,255,0.70)] p-4 backdrop-blur sm:p-4">
      <p className="mb-1 text-[1rem] font-medium">{title}</p>
      <p className="muted mb-0 text-[0.95rem]">{desc}</p>
    </div>
  );
}
