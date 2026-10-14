import Reveal from "./Reveal";

const STACK = [
  "Next.js 15 · App Router",
  "TypeScript · React 19",
  "Tailwind CSS v4 · Motion",
  "MongoDB · Mongoose",
  "SSE · Lightweight Charts",
  "viem · Sign-In with Ethereum",
  "OxaPay · webhooks · HMAC",
  "Vercel · CI/CD",
];

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="wrap about__grid">
        <Reveal className="about__col">
          <>
            <span className="kicker">About</span>
            <h2 id="about-title">Full-stack, from schema to pixel.</h2>
            <p>
              I take products from an empty repo to something people can log into and
              trust with money. That means order books and matching engines, auth and 2FA,
              payment webhooks, admin panels, and interfaces that stay legible under
              pressure.
            </p>
            <p>
              I care about correctness, latency and finish — the kind of detail that makes
              a crypto product feel real instead of a demo.
            </p>
          </>
        </Reveal>

        <Reveal className="about__col" delay={120}>
          <>
            <span className="kicker">Toolkit</span>
            <ul className="stack">
              {STACK.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </>
        </Reveal>
      </div>
    </section>
  );
}
