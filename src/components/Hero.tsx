import Reveal from "./Reveal";
import { CONTACT } from "../data/projects";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__inner">
        <Reveal>
          <p className="eyebrow">Full-stack developer · Crypto &amp; Web</p>
        </Reveal>

        <Reveal as="h1" className="hero__title">
          <>
            I build crypto products
            <br />
            that feel <span className="grad">fast and finished</span>.
          </>
        </Reveal>

        <Reveal>
          <p className="hero__lede">
            I'm OG-Rainhard — I design and ship production web apps end to end: a
            matching-engine exchange, a payments-backed sportsbook, and more. Next.js,
            TypeScript, MongoDB, on Vercel.
          </p>
        </Reveal>

        <Reveal className="hero__actions">
          <>
            <a className="btn btn--primary" href="#work">
              View my work
            </a>
            <a className="btn btn--ghost" href={CONTACT.github} target="_blank" rel="noopener">
              GitHub ↗
            </a>
          </>
        </Reveal>

        <Reveal as="dl" className="hero__stats" delay={140}>
          <>
            <div>
              <dt>Shipped</dt>
              <dd>2 live products</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>Next.js · TS</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Crypto infra</dd>
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}
