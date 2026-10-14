import type { Project } from "../data/projects";

function sparkPath(seed: number, w: number, h: number) {
  let s = seed * 9301 + 49297;
  const rnd = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const n = 22;
  const pts: [number, number][] = [];
  let y = h * 0.6;
  for (let i = 0; i < n; i++) {
    y += (rnd() - 0.45) * (h * 0.16);
    y = Math.max(h * 0.12, Math.min(h * 0.92, y));
    pts.push([(i / (n - 1)) * w, y]);
  }
  const d = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  return { d, area: `${d} L ${w} ${h} L 0 ${h} Z` };
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { d, area } = sparkPath(index + 7, 400, 90);
  const stroke = project.id === "oddsly" ? "var(--emerald)" : "var(--violet-2)";
  const gid = `g-${project.id}`;

  return (
    <article className={`card card--${project.id}`}>
      <div className="card__visual">
        <span className="card__badge">{project.badge}</span>
        <svg className="card__chart" viewBox="0 0 400 90" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={stroke} stopOpacity="0.35" />
              <stop offset="100%" stopColor={stroke} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill={`url(#${gid})`} />
          <path d={d} fill="none" stroke={stroke} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>

      <div className="card__body">
        <h3 className="card__name">
          {project.name} <span className="card__tag">/ {project.tag}</span>
        </h3>
        <p className="card__desc">{project.desc}</p>

        <div className="chips">
          {project.chips.map((c) => (
            <span className="chip" key={c}>
              {c}
            </span>
          ))}
        </div>

        <div className="card__actions">
          {project.url ? (
            <a className="btn btn--primary" href={project.url} target="_blank" rel="noopener">
              Visit site ↗
            </a>
          ) : (
            <span className="btn btn--primary btn--soon" aria-disabled="true">
              Live soon
            </span>
          )}
          {project.repo && (
            <a className="btn btn--ghost" href={project.repo} target="_blank" rel="noopener">
              Source ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
