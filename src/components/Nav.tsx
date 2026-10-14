import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`} id="top">
      <div className="nav__inner">
        <a className="brand" href="#top" aria-label="OG-Rainhard, home">
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M16 2 4 9v14l12 7 12-7V9L16 2Z" stroke="currentColor" strokeWidth="1.6" />
              <path d="M16 9v14M9.5 12.5l13 7M22.5 12.5l-13 7" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </span>
          <span className="brand__text">
            OG<span>·</span>RAINHARD
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="btn btn--ghost nav__cta" href="#contact">
          Get in touch
        </a>
      </div>
    </header>
  );
}
