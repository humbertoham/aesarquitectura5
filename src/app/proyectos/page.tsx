// src/app/proyectos/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import type { Metadata } from "next";
import { motion, AnimatePresence, useReducedMotion, type MotionProps } from "framer-motion";
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiImage,
} from "react-icons/fi";

/**
 * Si tu proyecto requiere metadata en App Router, normalmente page.tsx es Server Component.
 * Aquí usamos "ufse client" porque incluye modal/lightbox.
 * Si quieres metadata real f en Next, pásame tu layout/estructura y lo separamos (Server + Client).
 */



type Project = {
  id: string;
  title: string;
  category: "Fachada" | "Área social" | "Proyecto completo" | "Renders 3D";
  location: string;
  year?: string;
  summary: string;
  images: { src: string; alt: string }[]; // 4 imágenes por proyecto
};

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Proyecto 01 — Fachada Residencial",
    category: "Fachada",
    location: "Chiapas, MX",
    year: "2025",
    summary:
      "Reinterpretación minimalista con énfasis en proporción, ritmo de vanos y materialidad sobria.",
    images: [
      { src: "/proyectos/p1/01.jpg", alt: "Fachada - vista 01" },
      { src: "/proyectos/p1/02.jpg", alt: "Fachada - vista 02" },
      { src: "/proyectos/p1/03.jpg", alt: "Fachada - vista 03" },
      { src: "/proyectos/p1/04.jpg", alt: "Fachada - vista 04" },
    ],
  },
  {
    id: "p2",
    title: "Proyecto 02 — Área Social",
    category: "Área social",
    location: "México",
    year: "2025",
    summary:
      "Zonificación clara para sala–comedor–cocina con iluminación cuidada y continuidad de materiales.",
    images: [
      { src: "/proyectos/p2/01.jpg", alt: "Área social - vista 01" },
      { src: "/proyectos/p2/02.jpg", alt: "Área social - vista 02" },
      { src: "/proyectos/p2/03.jpg", alt: "Área social - vista 03" },
      { src: "/proyectos/p2/04.jpg", alt: "Área social - vista 04" },
    ],
  },
  {
    id: "p3",
    title: "Proyecto 03 — Proyecto Arquitectónico Completo",
    category: "Proyecto completo",
    location: "MX / USA",
    year: "2024",
    summary:
      "Desarrollo integral con coherencia interior–exterior y entregables definidos por etapas.",
    images: [
      { src: "/proyectos/p3/01.jpg", alt: "Proyecto completo - vista 01" },
      { src: "/proyectos/p3/02.jpg", alt: "Proyecto completo - vista 02" },
      { src: "/proyectos/p3/03.jpg", alt: "Proyecto completo - vista 03" },
      { src: "/proyectos/p3/04.jpg", alt: "Proyecto completo - vista 04" },
    ],
  },
  {
    id: "p4",
    title: "Proyecto 04 — Visualización 3D",
    category: "Renders 3D",
    location: "USA",
    year: "2024",
    summary:
      "Renders fotorrealistas para validación de diseño y presentación con atmósfera editorial.",
    images: [
      { src: "/proyectos/p4/01.jpg", alt: "Renders 3D - vista 01" },
      { src: "/proyectos/p4/02.jpg", alt: "Renders 3D - vista 02" },
      { src: "/proyectos/p4/03.jpg", alt: "Renders 3D - vista 03" },
      { src: "/proyectos/p4/04.jpg", alt: "Renders 3D - vista 04" },
    ],
  },
];

type ModalState = null | {
  projectIndex: number;
  imageIndex: number;
};

export default function ProyectosPage() {
  const reduce = useReducedMotion();

  const [filter, setFilter] = useState<
    "Todos" | Project["category"]
  >("Todos");

  const filtered = useMemo(() => {
    if (filter === "Todos") return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  const [modal, setModal] = useState<ModalState>(null);

  const openModal = (projectIndex: number, imageIndex: number) =>
    setModal({ projectIndex, imageIndex });

  const closeModal = () => setModal(null);

  const activeProject = modal ? filtered[modal.projectIndex] : null;
  const activeImage =
    modal && activeProject ? activeProject.images[modal.imageIndex] : null;

  const goPrev = () => {
    if (!modal) return;
    const p = filtered[modal.projectIndex];
    const nextIndex = (modal.imageIndex - 1 + p.images.length) % p.images.length;
    setModal({ ...modal, imageIndex: nextIndex });
  };

  const goNext = () => {
    if (!modal) return;
    const p = filtered[modal.projectIndex];
    const nextIndex = (modal.imageIndex + 1) % p.images.length;
    setModal({ ...modal, imageIndex: nextIndex });
  };

  const fadeUp: MotionProps = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  };

  return (
    <main id="content">
      {/* Header */}
      <section className="section">
        <div className="container">
          <motion.p className="kicker" {...(reduce ? {} : fadeUp)}>
            Proyectos
          </motion.p>

          <motion.div
            className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"
            {...(reduce ? {} : fadeUp)}
          >
            <div>
              <h1 className="max-w-[26ch]">
                Portafolio seleccionado: 4 proyectos, 4 vistas por proyecto.
              </h1>
              <p className="muted mt-4 max-w-[70ch]">
                Una muestra breve para comunicar estilo, claridad espacial y nivel de
                visualización. Si quieres ver un caso similar al tuyo, escríbenos.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn btn-primary" href="/contacto">
                  Solicitar cotización <FiArrowUpRight className="icon" aria-hidden />
                </a>
                <a className="btn btn-ghost" href="#galeria">
                  Ver galería <FiArrowUpRight className="icon" aria-hidden />
                </a>
              </div>
            </div>

            {/* Filtro */}
            <div className="card card-pad">
              <p className="kicker">Filtrar</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {(["Todos", "Fachada", "Área social", "Proyecto completo", "Renders 3D"] as const).map(
                  (x) => (
                    <button
                      key={x}
                      type="button"
                      className="btn btn-ghost"
                      onClick={() => setFilter(x)}
                      aria-pressed={filter === x}
                      style={{
                        borderColor:
                          filter === x ? "var(--line-strong)" : "var(--line)",
                        background:
                          filter === x ? "rgba(0,0,0,0.04)" : "transparent",
                      }}
                    >
                      <FiImage className="icon" aria-hidden />
                      {x}
                    </button>
                  )
                )}
              </div>
              <p className="muted mt-3 mb-0 text-[0.95rem]">
                Mostrando: <b>{filtered.length}</b> proyecto(s)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* Grid */}
      <section id="galeria" className="section">
        <div className="container">
          <div className="grid grid-2">
            {filtered.map((p, projectIndex) => (
              <motion.article
                key={p.id}
                className="card overflow-hidden"
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: reduce ? 0 : projectIndex * 0.06,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
              >
                {/* Cover (primera imagen) */}
                <button
                  type="button"
                  onClick={() => openModal(projectIndex, 0)}
                  className="w-full text-left"
                  aria-label={`Abrir ${p.title}`}
                  style={{ padding: 0 }}
                >
                  <div className="hero-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images[0].src}
                      alt={p.images[0].alt}
                      className="h-[260px] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </button>

                <div className="card-pad">
                  <p className="kicker">
                    {p.category} · {p.location}
                    {p.year ? ` · ${p.year}` : ""}
                  </p>
                  <h3 className="mt-2">{p.title}</h3>
                  <p className="muted mt-2">{p.summary}</p>

                  {/* Thumbs (4 imágenes) */}
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {p.images.map((img, imageIndex) => (
                      <button
                        key={img.src}
                        type="button"
                        className="rounded-sm border overflow-hidden motion-safe"
                        onClick={() => openModal(projectIndex, imageIndex)}
                        aria-label={`Abrir imagen ${imageIndex + 1} de ${p.title}`}
                        style={{ padding: 0 }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="h-20 w-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a className="btn btn-ghost" href="/contacto">
                      Quiero algo similar <FiArrowUpRight className="icon" aria-hidden />
                    </a>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => openModal(projectIndex, 0)}
                    >
                      Ver proyecto <FiArrowUpRight className="icon" aria-hidden />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modal && activeProject && activeImage ? (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0 }}
            onClick={closeModal}
            aria-modal="true"
            role="dialog"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              style={{
                background: "rgba(0,0,0,0.55)",
              }}
            />

            {/* Panel */}
            <motion.div
              className="relative w-full max-w-[980px] overflow-hidden rounded border bg-[var(--bg)] shadow"
              initial={reduce ? undefined : { y: 10, scale: 0.99 }}
              animate={reduce ? undefined : { y: 0, scale: 1 }}
              exit={reduce ? undefined : { y: 10, scale: 0.99 }}
              transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b">
                <div className="min-w-0">
                  <p className="kicker mb-0">
                    {activeProject.category} · {activeProject.location}
                    {activeProject.year ? ` · ${activeProject.year}` : ""}
                  </p>
                  <p className="mb-0 font-medium truncate">{activeProject.title}</p>
                </div>

                <div className="flex items-center gap-2">
                  <button type="button" className="btn btn-ghost" onClick={goPrev}>
                    <FiChevronLeft className="icon" aria-hidden />
                    Anterior
                  </button>
                  <button type="button" className="btn btn-ghost" onClick={goNext}>
                    Siguiente
                    <FiChevronRight className="icon" aria-hidden />
                  </button>
                  <button type="button" className="btn btn-primary" onClick={closeModal}>
                    <FiX className="icon" aria-hidden />
                    Cerrar
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="bg-[var(--surface)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="max-h-[72vh] w-full object-contain"
                />
              </div>

              {/* Thumbs inside modal */}
              <div className="px-4 py-4 border-t">
                <div className="grid grid-cols-4 gap-2">
                  {activeProject.images.map((img, idx) => {
                    const isActive = modal.imageIndex === idx;
                    return (
                      <button
                        key={img.src}
                        type="button"
                        className="rounded-sm overflow-hidden border"
                        onClick={() => setModal({ ...modal, imageIndex: idx })}
                        aria-label={`Cambiar a imagen ${idx + 1}`}
                        style={{
                          borderColor: isActive ? "var(--line-strong)" : "var(--line)",
                          opacity: isActive ? 1 : 0.85,
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="h-16 w-full object-cover"
                          loading="lazy"
                        />
                      </button>
                    );
                  })}
                </div>
                <p className="muted mt-3 mb-0 text-[0.95rem]">
                  Vista {modal.imageIndex + 1} de {activeProject.images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
