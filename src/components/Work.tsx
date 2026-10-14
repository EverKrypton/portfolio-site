import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { CONTACT, PROJECTS } from "../data/projects";

export default function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <Reveal className="section-head">
          <>
            <span className="kicker">Selected work</span>
            <h2 id="work-title">Products I've built</h2>
            <p>Live, self-hosted, and built from the database up — not templates.</p>
          </>
        </Reveal>

        <div className="projects">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 90}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="work__note">
            More builds live on{" "}
            <a href={CONTACT.repos} target="_blank" rel="noopener">
              GitHub ↗
            </a>{" "}
            and games on{" "}
            <a href={CONTACT.itch} target="_blank" rel="noopener">
              itch.io ↗
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
