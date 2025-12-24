// src/app/servicios/page.tsx
import type { Metadata } from "next";

// ✅ Estos sí los usas

export const metadata: Metadata = {
  title: "Servicios | AES Arquitectos",
  description:
    "Servicios detallados: diseño de fachada, área social, proyecto completo y renders 3D. Proceso claro, entregables definidos y atención 100% en línea desde Chiapas para México y EE. UU.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios | AES Arquitectos",
    description:
      "Servicios arquitectónicos con proceso claro, entregables definidos y comunicación constante.",
    url: "/servicios",
    type: "website",
  },
};

type ServiceDetail = {
  id: string;
  title: string;
  subtitle: string;
  forWho: string[];
  includes: string[];
  deliverables: string[];
  timeline: string[];
  inputs: string[];
  addOns?: string[];
  notes?: string[];
};

const SERVICES: ServiceDetail[] = [
  {
    id: "fachada",
    title: "Diseño de Fachada",
    subtitle:
      "Eleva la presencia de tu proyecto con una propuesta estética y coherente: materiales, composición y visualización.",
    forWho: [
      "Casas nuevas o remodelaciones",
      "Frentes comerciales que necesitan mejor imagen",
      "Proyectos donde quieres aumentar valor percibido",
    ],
    includes: [
      "Brief (estilo, referencias, restricciones y presupuesto)",
      "Propuesta de composición (volúmenes, accesos, ritmo de vanos)",
      "Paleta de materiales y criterios de acabados",
      "Modelado base para visualizar la propuesta",
      "Renders exteriores (cantidad según cotización) + ajustes por etapa",
    ],
    deliverables: [
      "PDF con concepto y propuesta final",
      "Renders exteriores en alta resolución (JPG/PNG)",
      "Versiones optimizadas para web/redes",
    ],
    timeline: [
      "Día 1: brief + referencias",
      "Días 2–4: primera propuesta",
      "Días 5–7: ajustes + entrega final (estimado)",
    ],
    inputs: [
      "Fotos del frente actual (si es remodelación)",
      "Medidas del terreno/banqueta y alturas aproximadas",
      "Referencias (links) de estilo/materiales",
      "Restricciones del fraccionamiento/municipio (si aplica)",
    ],
    addOns: ["Renders nocturnos", "Más ángulos / vistas", "Video corto (si se cotiza)"],
    notes: [
      "El número de vistas y el nivel de detalle (vegetación, mobiliario urbano, etc.) se define en la cotización.",
    ],
  },
  {
    id: "area-social",
    title: "Diseño de Área Social",
    subtitle:
      "Distribución, ambientación e iluminación para sala–comedor–cocina (o equivalente) con un flujo funcional.",
    forWho: [
      "Remodelaciones de interiores",
      "Casas nuevas que requieren buena zonificación",
      "Espacios donde quieres funcionalidad y estética editorial",
    ],
    includes: [
      "Análisis de necesidades (uso, flujo, almacenamiento, mobiliario)",
      "Propuesta de layout y zonificación",
      "Criterios de iluminación y materiales",
      "Modelado 3D para validación del diseño",
      "Renders interiores (cantidad según cotización) + ajustes por etapa",
    ],
    deliverables: [
      "PDF con propuesta de distribución",
      "Renders interiores en alta resolución",
      "Guía de materiales/colores recomendados",
    ],
    timeline: [
      "Día 1: brief + medidas/fotos",
      "Días 2–5: distribución + 3D",
      "Días 6–10: renders + ajustes + entrega (estimado)",
    ],
    inputs: [
      "Planta/medidas del área o croquis con medidas",
      "Fotos del espacio (si ya existe)",
      "Necesidades (personas, usos, estilo, almacenamiento)",
      "Referencias (links) de interiores",
    ],
    addOns: ["Listado sugerido de mobiliario", "Renders extra", "Recorrido (si se cotiza)"],
  },
  {
    id: "proyecto-completo",
    title: "Proyecto Arquitectónico Completo",
    subtitle:
      "Servicio integral para llevar tu idea a un proyecto coherente: diseño, desarrollo y visualización final.",
    forWho: [
      "Casa habitación",
      "Local / espacio comercial",
      "Proyectos que requieren coherencia interior–exterior",
    ],
    includes: [
      "Programa arquitectónico (necesidades, m² objetivo, prioridades)",
      "Anteproyecto (distribución + volumetría)",
      "Ajustes por etapas con revisiones definidas",
      "Modelado 3D y renders finales para presentación",
      "Paquete de planos en PDF (según alcance acordado)",
    ],
    deliverables: [
      "PDF de planos (según paquete: plantas/cortes/fachadas, etc.)",
      "Modelado 3D (según cotización)",
      "Renders finales (interiores/exteriores, según cotización)",
    ],
    timeline: [
      "Semana 1: brief + anteproyecto",
      "Semana 2: ajustes + desarrollo",
      "Semana 3+: renders/entrega (depende de m² y complejidad)",
    ],
    inputs: [
      "Ubicación y restricciones (fraccionamiento/municipio)",
      "Medidas del terreno y orientación (ideal: norte)",
      "Programa arquitectónico deseado",
      "Referencias (links) y presupuesto estimado",
    ],
    addOns: ["Más áreas/renders", "Etapas adicionales", "Recorrido (si se cotiza)"],
    notes: [
      "Los planos específicos incluidos se definen según el paquete contratado.",
    ],
  },
  {
    id: "renders",
    title: "Renders y Visualización 3D",
    subtitle:
      "Imágenes fotorrealistas para preventa, presentación o validación de decisiones antes de construir.",
    forWho: ["Preventas", "Portafolio profesional", "Proyectos en etapa de decisión"],
    includes: [
      "Revisión de información base (planos/croquis/modelo)",
      "Definición de estilo visual (luz, atmósfera, materiales)",
      "Renders con encuadres estratégicos",
      "Ajustes de color/composición para entrega final",
    ],
    deliverables: [
      "Renders en alta resolución (JPG/PNG)",
      "Versiones optimizadas para web",
      "Opcional: video recorrido (si se cotiza)",
    ],
    timeline: [
      "1–2 días: preparación (según calidad de info)",
      "2–5 días: producción y entrega (según número de vistas)",
    ],
    inputs: [
      "Plantas con medidas (o modelo 3D)",
      "Referencias de estilo (materiales, mood, iluminación)",
      "Lista de vistas deseadas (ángulos)",
      "Fecha objetivo de entrega",
    ],
    addOns: ["Renders nocturnos", "Más vistas", "Animación/recorrido"],
  },
];

export default function ServiciosPage() {
  return (
    <main id="content">
      {/* Header editorial */}
      <section className="section">
        <div className="container">
          <p className="kicker">Servicios</p>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h1 className="max-w-[26ch]">
                Alcances claros, entregables definidos y un proceso ordenado.
              </h1>
              <p className="muted mt-4 max-w-[68ch]">
                Esta página detalla cada servicio para que sepas exactamente qué incluye,
                qué necesitas compartir y qué entregables recibes. Trabajamos 100% en línea
                desde Chiapas para México y EE. UU.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#lista" className="btn btn-primary">
                  Ver servicios detallados
                </a>
                <a href="#faq" className="btn btn-ghost">
                  Preguntas frecuentes
                </a>
              </div>

              {/* Índice */}
              <div className="mt-8">
                <p className="kicker">Índice</p>
                <div className="grid grid-2 mt-3">
                  {SERVICES.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="card card-pad motion-safe"
                      style={{ textDecoration: "none" }}
                    >
                      <p className="mb-1 font-medium">{s.title}</p>
                      <p className="muted mb-0 text-[0.95rem]">{s.subtitle}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar de cotización */}
            <aside className="card card-pad">
              <p className="kicker">Para cotizar</p>
              <h3 className="mt-2">Lo que necesitamos de ti</h3>
              <p className="muted mt-2">
                Con esta información te damos una propuesta precisa y rápida.
              </p>

              <div className="divider my-4" />

              <ul className="muted m-0 grid gap-3 p-0" style={{ listStyle: "none" }}>
                <li className="flex gap-2">
                  <span aria-hidden>•</span> Ubicación (ciudad/estado) y tipo de proyecto
                </li>
                <li className="flex gap-2">
                  <span aria-hidden>•</span> Medidas o m² + fotos del sitio (si aplica)
                </li>
                <li className="flex gap-2">
                  <span aria-hidden>•</span> Referencias (Pinterest/links) y estilo deseado
                </li>
                <li className="flex gap-2">
                  <span aria-hidden>•</span> Presupuesto estimado y fecha objetivo
                </li>
              </ul>

              <div className="divider my-5" />

              <a
                href="https://api.whatsapp.com/send?phone=5212217677185"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full justify-center"
              >
                Cotizar por WhatsApp
              </a>

              <p className="muted mt-4 text-[0.95rem]">
                Nota: Ajustamos alcances según complejidad, m² y número de vistas/entregables.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Lista detallada */}
      <section id="lista" className="section">
        <div className="container">
          <p className="kicker">Detalle</p>
          <h2 className="max-w-[30ch]">Servicios, alcances y entregables</h2>
          <p className="muted mt-3 max-w-[70ch]">
            Usa esta guía como referencia. En la cotización definimos el paquete exacto
            (vistas, nivel de detalle, revisiones y tiempos).
          </p>

          <div className="mt-8 grid gap-6">
            {SERVICES.map((s) => (
              <article key={s.id} id={s.id} className="card card-pad">
                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                  <div>
                    <h3 className="mb-2">{s.title}</h3>
                    <p className="muted mb-0">{s.subtitle}</p>

                    <div className="divider my-5" />

                    <SectionTitle>¿Para quién es?</SectionTitle>
                    <Bullets items={s.forWho} />

                    <div className="divider my-5" />

                    <SectionTitle>Incluye</SectionTitle>
                    <Bullets items={s.includes} />

                    {s.notes?.length ? (
                      <>
                        <div className="divider my-5" />
                        <p className="muted mb-0 text-[0.95rem]">
                          {s.notes.join(" ")}
                        </p>
                      </>
                    ) : null}
                  </div>

                  <aside className="rounded border p-5">
                    <p className="kicker">Entregables</p>

                    <div className="mt-3">
                      <SectionTitle small>Entregables</SectionTitle>
                      <Bullets items={s.deliverables} />
                    </div>

                    <div className="divider my-4" />

                    <div>
                      <SectionTitle small>Tiempo estimado</SectionTitle>
                      <Bullets items={s.timeline} />
                    </div>

                    <div className="divider my-4" />

                    <div>
                      <SectionTitle small>Qué necesitamos</SectionTitle>
                      <Bullets items={s.inputs} />
                    </div>

                    {s.addOns?.length ? (
                      <>
                        <div className="divider my-4" />
                        <SectionTitle small>Opcionales</SectionTitle>
                        <Bullets items={s.addOns} />
                      </>
                    ) : null}

                    <div className="divider my-5" />

                    <div className="flex flex-wrap gap-3">
                      <a href="/contacto" className="btn btn-primary">
                        Cotizar este servicio
                      </a>
                      <a href="#faq" className="btn btn-ghost">
                        Ver FAQ
                      </a>
                    </div>
                  </aside>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    
      {/* CTA final / contacto */}
      
    </main>
  );
}

/** Helpers (sin componentes externos) */
function SectionTitle({
  children,
  small,
}: {
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <p className={`mb-2 ${small ? "text-[0.95rem]" : ""} font-medium`}>
      {children}
    </p>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="muted m-0 grid gap-2 p-0" style={{ listStyle: "none" }}>
      {items.map((x) => (
        <li key={x} className="flex gap-2">
          <span aria-hidden>•</span>
          <span>{x}</span>
        </li>
      ))}
    </ul>
  );
}
