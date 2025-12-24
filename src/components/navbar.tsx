"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
  FiInstagram,
  FiFacebook,
  FiMessageCircle,
} from "react-icons/fi";

type NavItem = { label: string; href: string };

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Inicio", href: "/" },
      { label: "Proyectos", href: "/proyectos" },
      { label: "Servicios", href: "/servicios" },
      { label: "Contacto", href: "/contacto" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  // Cierra el menú cuando cambia la ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50",
          "supports-[backdrop-filter]:backdrop-blur-md",
          "transition-colors duration-200"
        )}
        style={{
          background: "rgba(255,255,255,0.78)",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.14)"
            : "1px solid rgba(0,0,0,0.08)",
        }}
      >
        <div className="container">
          <div
            className="nav-wrap"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "72px",
              gap: "12px",
            }}
          >
            {/* Brand */}
            <Link
              href="/"
              className="brand"
              aria-label="Ir al inicio"
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              <div
                className="brand-mark"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 12,
                  border: "1px solid rgba(0,0,0,0.12)",
                  display: "grid",
                  placeItems: "center",
                  background: "rgba(255,255,255,0.85)",
                  flex: "0 0 auto",
                }}
              >
                <span style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
                  AES
                </span>
              </div>

              <div className="brand-text" style={{ lineHeight: 1.05 }}>
                <div style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>
                  AES Arquitectos
                </div>
                <div className="kicker" style={{ marginTop: 2 }}>
                  Arquitectura & Diseño
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="nav-desktop"
              aria-label="Navegación principal"
              style={{ alignItems: "center", gap: 6 }}
            >
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn("nav-link", active && "is-active")}
                    style={{
                      position: "relative",
                      padding: "10px 12px",
                      borderRadius: 999,
                      border: "1px solid transparent",
                      color: active ? "var(--fg)" : "var(--muted)",
                      transition: "all 180ms var(--ease)",
                    }}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="navActivePill"
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: 999,
                          border: "1px solid rgba(0,0,0,0.18)",
                          background: "rgba(0,0,0,0.04)",
                          zIndex: -1,
                        }}
                        transition={{ duration: 0.22 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="actions" style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div className="social" style={{ gap: 8 }}>
                <a
                  href="https://www.instagram.com/aesarquitectos"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                  aria-label="Instagram"
                  style={{ padding: "10px 12px" }}
                >
                  <FiInstagram className="icon" />
                </a>
                <a
                  href="https://www.facebook.com/AESarquitectura"
                  className="btn btn-ghost"
                  aria-label="Facebook"
                  style={{ padding: "10px 12px" }}
                >
                  <FiFacebook className="icon" />
                </a>
              </div>

              {/* En móvil: CTA compacto (icon) para que no empuje el burger */}
              <Link
                href="/contacto"
                className="btn btn-primary  cta-desktop"
                style={{ whiteSpace: "nowrap" }}
              >
                Cotizar <FiArrowUpRight className="icon" />
              </Link>

             

              {/* Mobile toggle */}
              <button
                className="btn btn-ghost nav-toggle"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={open}
                style={{ padding: "10px 12px" }}
              >
                {open ? <FiX className="icon icon-lg" /> : <FiMenu className="icon icon-lg" />}
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          /* desktop */
          @media (min-width: 900px) {
            .nav-desktop {
              display: flex !important;
            }
            .nav-toggle {
              display: none !important;
            }
            .social {
              display: flex !important;
            }
            .cta-desktop {
              display: inline-flex !important;
            }
            .cta-mobile {
              display: none !important;
            }
          }

          /* mobile */
          @media (max-width: 899px) {
            .nav-desktop {
              display: none !important;
            }
            .social {
              display: none !important;
            }
            .cta-desktop {
              display: none !important;
            }
            .cta-mobile {
              display: inline-flex !important;
              align-items: center;
              justify-content: center;
              border-radius: 999px;
            }
          }

          .nav-link:hover {
            color: var(--fg) !important;
            background: rgba(0, 0, 0, 0.04);
          }

          /* agranda el icon del burger sin tocar tu clase .icon global */
          :global(.icon-lg) {
            width: 20px;
            height: 20px;
          }
        `}</style>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 60,
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              // IMPORTANTE: que el overlay pueda scrollear
              overflow: "hidden",
            }}
            aria-label="Menú móvil"
          >
            {/* top bar inside overlay */}
            <div
              style={{
                height: 72,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 16px",
                borderBottom: "1px solid rgba(0,0,0,0.10)",
                flex: "0 0 auto",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 12,
                    border: "1px solid rgba(0,0,0,0.12)",
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(255,255,255,0.85)",
                  }}
                >
                  <span style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>AES</span>
                </div>
                <div style={{ lineHeight: 1.05 }}>
                  <div style={{ fontWeight: 700, letterSpacing: "-0.02em" }}>Menú</div>
                  <div className="kicker" style={{ marginTop: 2 }}>
                    Navegación
                  </div>
                </div>
              </div>

              <button
                className="btn btn-ghost"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                style={{ padding: "10px 12px" }}
              >
                <FiX className="icon icon-lg" />
              </button>
            </div>

            {/* scrollable content */}
            <div
              style={{
                flex: "1 1 auto",
                overflowY: "auto",
                WebkitOverflowScrolling: "touch",
                padding: 16,
                // deja espacio para que no se pegue al bottom safe-area
                paddingBottom: "calc(16px + env(safe-area-inset-bottom))",
              }}
            >
              <motion.div
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 8, opacity: 0 }}
                transition={{ duration: 0.18 }}
                style={{
                  display: "grid",
                  gap: 10,
                  paddingTop: 6,
                }}
              >
                {navItems.map((item, idx) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.03 * idx, duration: 0.18 }}
                    >
                      <Link
                        href={item.href}
                        className="mobile-link"
                        style={{
                          padding: "16px 14px",
                          borderRadius: 16,
                          border: active
                            ? "1px solid rgba(0,0,0,0.18)"
                            : "1px solid rgba(0,0,0,0.10)",
                          background: active ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.7)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          color: "var(--fg)",
                        }}
                      >
                        <span style={{ fontWeight: active ? 700 : 560, fontSize: 16 }}>
                          {item.label}
                        </span>
                        <FiArrowUpRight style={{ opacity: 0.7 }} aria-hidden="true" />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* bottom actions (ya NO se cortan; quedan con buen padding y el contenedor scrollea) */}
              <div style={{ marginTop: 16 }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 10,
                  }}
                >
                  <a
                    href="https://www.instagram.com/aesarquitectos/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                    style={{
                      justifyContent: "center",
                      padding: "12px 12px",
                      borderRadius: 14,
                    }}
                  >
                    <FiInstagram className="icon" /> Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/AESarquitectura"
                    className="btn btn-ghost"
                    style={{
                      justifyContent: "center",
                      padding: "12px 12px",
                      borderRadius: 14,
                    }}
                  >
                    <FiFacebook className="icon" /> Facebook
                  </a>
                </div>

                <div style={{ marginTop: 10 }}>
                  <Link
                    href="/contacto"
                    className="btn btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "14px 14px",
                      borderRadius: 16,
                    }}
                  >
                    Cotizar <FiArrowUpRight className="icon" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
