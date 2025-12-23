// src/app/contacto/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import { FiArrowUpRight, FiMessageCircle, FiMail, FiMapPin } from "react-icons/fi";

import { motion, useReducedMotion, type MotionProps } from "framer-motion";

// ...



type FormState = {
  name: string;
  phone: string;
  email: string;
  service: "Fachada" | "Área social" | "Proyecto completo" | "Renders 3D" | "Otro";
  location: string;
  budget: string;
  timeframe: string;
  message: string;
};

const DEFAULTS: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "Proyecto completo",
  location: "Chiapas / MX",
  budget: "",
  timeframe: "",
  message: "",
};

/**
 * ⚠️ Cambia esto por el número real del negocio:
 * Formato recomendado para México: 521 + 10 dígitos (sin +, sin espacios)
 * Ej: "5219611234567"
 */
const WHATSAPP_NUMBER = "521XXXXXXXXXX";

export default function ContactoPage() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState<FormState>(DEFAULTS);
  const [touched, setTouched] = useState(false);

const ease: [number, number, number, number] = [0.2, 0.8, 0.2, 1];
  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Ingresa tu nombre.";
    if (!form.phone.trim()) e.phone = "Ingresa tu WhatsApp o teléfono.";
    if (!form.service) e.service = "Selecciona un servicio.";
    if (!form.location.trim()) e.location = "Indica ubicación (ciudad/estado).";
    if (!form.message.trim()) e.message = "Cuéntanos brevemente tu proyecto.";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  function buildWhatsAppMessage(f: FormState) {
    const lines = [
      "Hola AES Arquitectos, quiero una cotización:",
      "",
      `Nombre: ${f.name}`,
      `WhatsApp/Teléfono: ${f.phone}`,
      f.email ? `Email: ${f.email}` : null,
      `Servicio: ${f.service}`,
      `Ubicación: ${f.location}`,
      f.budget ? `Presupuesto estimado: ${f.budget}` : null,
      f.timeframe ? `Tiempo deseado: ${f.timeframe}` : null,
      "",
      "Detalles del proyecto:",
      f.message,
    ].filter(Boolean);

    return lines.join("\n");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;

    const text = buildWhatsAppMessage(form);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease },
};

  return (
    <main id="content">
      {/* Header */}
      <section className="section">
        <div className="container">
          <motion.p className="kicker flex items-center gap-2" {...(reduce ? {} : fadeUp)}>
            <FiMail className="icon" aria-hidden />
            Contacto
          </motion.p>

          <motion.h1
            className="mt-3 max-w-[24ch]"
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            Cuéntanos tu proyecto y te enviamos una propuesta clara.
          </motion.h1>

          <motion.p
            className="muted mt-4 max-w-[70ch]"
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.6, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
          >
            Este formulario abre WhatsApp con un mensaje prellenado. No guardamos datos aquí:
            tú controlas el envío final desde WhatsApp.
          </motion.p>
        </div>
      </section>

      <div className="divider" />

      {/* Form */}
      <section className="section">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <motion.form
              className="card card-pad"
              onSubmit={onSubmit}
              {...(reduce ? {} : fadeUp)}
            >
              <p className="kicker">Formulario</p>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Field
                  label="Nombre"
                  value={form.name}
                  onChange={(v) => setForm((s) => ({ ...s, name: v }))}
                  placeholder="Tu nombre"
                  error={touched ? errors.name : undefined}
                />
                <Field
                  label="WhatsApp / Teléfono"
                  value={form.phone}
                  onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
                  placeholder="Ej. 81 1234 5678"
                  error={touched ? errors.phone : undefined}
                />
                <Field
                  label="Email (opcional)"
                  value={form.email}
                  onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                  placeholder="tucorreo@email.com"
                />
                <Select
                  label="Servicio"
                  value={form.service}
                  onChange={(v) => setForm((s) => ({ ...s, service: v as FormState["service"] }))}
                  options={["Fachada", "Área social", "Proyecto completo", "Renders 3D", "Otro"]}
                  error={touched ? errors.service : undefined}
                />
                <Field
                  label="Ubicación"
                  value={form.location}
                  onChange={(v) => setForm((s) => ({ ...s, location: v }))}
                  placeholder="Ciudad / Estado"
                  error={touched ? errors.location : undefined}
                />
                <Field
                  label="Presupuesto estimado (opcional)"
                  value={form.budget}
                  onChange={(v) => setForm((s) => ({ ...s, budget: v }))}
                  placeholder="Ej. $80,000 MXN"
                />
                <Field
                  label="Tiempo deseado (opcional)"
                  value={form.timeframe}
                  onChange={(v) => setForm((s) => ({ ...s, timeframe: v }))}
                  placeholder="Ej. 2–3 semanas"
                />
              </div>

              <div className="mt-4">
                <TextArea
                  label="Detalles del proyecto"
                  value={form.message}
                  onChange={(v) => setForm((s) => ({ ...s, message: v }))}
                  placeholder="Ej. Quiero remodelar sala-comedor-cocina. Tengo medidas y referencias. Busco estilo minimalista y renders..."
                  error={touched ? errors.message : undefined}
                />
              </div>

              <div className="divider my-6" />

              <div className="flex flex-wrap items-center gap-3">
                <button type="submit" className="btn btn-primary">
                  <FiMessageCircle className="icon" aria-hidden />
                  Enviar por WhatsApp
                  <FiArrowUpRight className="icon" aria-hidden />
                </button>

                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => {
                    setForm(DEFAULTS);
                    setTouched(false);
                  }}
                >
                  Limpiar
                </button>

                {!isValid && touched ? (
                  <p className="muted mb-0 text-[0.95rem]">
                    Revisa los campos marcados para continuar.
                  </p>
                ) : null}
              </div>
            </motion.form>

            {/* Sidebar */}
            <motion.aside className="card card-pad" {...(reduce ? {} : fadeUp)}>
              <p className="kicker">Referencia</p>
              <h3 className="mt-2">Atención 100% en línea</h3>
              <p className="muted mt-2">
                Estudio ubicado en Chiapas. Atendemos proyectos en México y EE. UU. con entregas
                digitales y seguimiento por WhatsApp.
              </p>

              <div className="divider my-5" />

              <div className="grid gap-3">
                <InfoRow
                  icon={<FiMapPin className="icon" aria-hidden />}
                  title="Ubicación"
                  desc="Tuxtla Gutiérrez, Chiapas (referencia)"
                />
                <InfoRow
                  icon={<FiMessageCircle className="icon" aria-hidden />}
                  title="Qué enviar"
                  desc="Ubicación, m² (si aplica), referencias y presupuesto."
                />
              </div>

              <div className="divider my-5" />

              <a
                className="btn btn-primary w-full justify-center"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
              >
                Abrir WhatsApp directo
                <FiArrowUpRight className="icon" aria-hidden />
              </a>

              <p className="muted mt-4 text-[0.95rem]">
                * Recuerda reemplazar <code>WHATSAPP_NUMBER</code> por el número real.
              </p>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="kicker" style={{ display: "block", marginBottom: 8 }}>
        {label}
      </label>
      <input
        className="w-full rounded border px-4 py-3 bg-[var(--surface)]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
      />
      {error ? <p className="muted mt-2 mb-0 text-[0.95rem]">{error}</p> : null}
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: string;
}) {
  return (
    <div>
      <label className="kicker" style={{ display: "block", marginBottom: 8 }}>
        {label}
      </label>
      <select
        className="w-full rounded border px-4 py-3 bg-[var(--surface)]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error ? <p className="muted mt-2 mb-0 text-[0.95rem]">{error}</p> : null}
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
  placeholder,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="kicker" style={{ display: "block", marginBottom: 8 }}>
        {label}
      </label>
      <textarea
        className="w-full rounded border px-4 py-3 bg-[var(--surface)]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={6}
        aria-invalid={!!error}
      />
      {error ? <p className="muted mt-2 mb-0 text-[0.95rem]">{error}</p> : null}
    </div>
  );
}

function InfoRow({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
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
