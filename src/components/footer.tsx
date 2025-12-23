"use client";

import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        background: "var(--bg)",
      }}
    >
      <div className="container section" style={{ paddingTop: "3rem" }}>
        <div style={{ display: "grid", gap: "2rem" }}>

          {/* Top */}
          <div style={{ display: "grid", gap: "1.75rem" }}>

            {/* Brand */}
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                AES Arquitectos
              </div>
              <p className="muted" style={{ maxWidth: 420, marginTop: 6 }}>
                Estudio de arquitectura trabajando 100% en línea desde Chiapas,
                México. Diseño de fachadas, áreas sociales y proyectos completos.
              </p>
            </div>

            {/* Links */}
            <div style={{ display: "grid", gap: "0.75rem" }}>
              <Link href="/proyectos" className="footer-link">Proyectos</Link>
              <Link href="/servicios" className="footer-link">Servicios</Link>
              <Link href="/contacto" className="footer-link">Contacto</Link>
            </div>

            {/* Contact */}
            <div style={{ display: "grid", gap: "0.75rem" }}>
              <a
                href="mailto:contacto@aesarquitectos.com"
                className="footer-link"
              >
                <FiMail className="icon" />
                contacto@aesarquitectos.com
              </a>

              <span className="footer-link">
                <FiPhone className="icon" />
                México · Atención en línea
              </span>
            </div>

            {/* Social */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid var(--line)",
              paddingTop: "1.5rem",
            }}
          >
            <span className="muted">
              © {year} AES Arquitectos. Todos los derechos reservados.
            </span>

            <Link href="/contacto" className="btn btn-ghost">
              Cotizar proyecto <FiArrowUpRight className="icon" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
