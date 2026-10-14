/* ============================================================
   Projects data — EDIT HERE.
   url: ""  ->  shows a disabled "Live soon" button.
   Paste the real deployment URL (e.g. https://your-app.vercel.app)
   to turn the card's primary button into a live link.
   repo: GitHub repo URL (leave "" to hide the source button).
   ============================================================ */
const PROJECTS = [
  {
    id: "volt",
    name: "VOLT",
    tag: "crypto exchange",
    badge: "Live product",
    desc: "A pro-grade spot exchange: its own central limit order book with price-time priority, escrow on both sides, configurable maker/taker fees, and live depth over SSE with candlestick charts.",
    chips: ["Next.js 15", "TypeScript", "MongoDB", "SSE", "viem", "SIWE"],
    url: "",
    repo: "https://github.com/EverKrypton/exchange"
  },
  {
    id: "oddsly",
    name: "Oddsly",
    tag: "crypto sportsbook",
    badge: "Live product",
    desc: "A self-hosted fixed-odds crypto sportsbook. Real fixtures, transparent odds, parlays and cash-out, USDT (BEP20) deposits and payouts via OxaPay, instant settlement and an operator panel.",
    chips: ["Next.js 15", "TypeScript", "MongoDB", "OxaPay", "2FA / TOTP", "PWA"],
    url: "",
    repo: "https://github.com/EverKrypton/oddsly"
  }
];

/* sparkline path generator (decorative, per project) */
function sparkPath(seed, w, h) {
  let s = seed * 9301 + 49297;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const n = 22;
  let pts = [];
  let y = h * 0.6;
  for (let i = 0; i < n; i++) {
    y += (rnd() - 0.45) * (h * 0.16);
    y = Math.max(h * 0.12, Math.min(h * 0.92, y));
    pts.push([ (i / (n - 1)) * w, y ]);
  }
  const d = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const area = d + ` L ${w} ${h} L 0 ${h} Z`;
  return { d, area };
}

function renderProjects() {
  const host = document.getElementById("projects");
  if (!host) return;

  PROJECTS.forEach((p, i) => {
    const { d, area } = sparkPath(i + 7, 400, 90);
    const stroke = p.id === "oddsly" ? "var(--emerald)" : "var(--violet-2)";

    const card = document.createElement("article");
    card.className = "card card--" + p.id;
    card.innerHTML = `
      <div class="card__visual">
        <span class="card__badge">${p.badge}</span>
        <svg class="card__chart" viewBox="0 0 400 90" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="g-${p.id}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${stroke}" stop-opacity="0.35"/>
              <stop offset="100%" stop-color="${stroke}" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <path d="${area}" fill="url(#g-${p.id})"/>
          <path d="${d}" fill="none" stroke="${stroke}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="card__body">
        <h3 class="card__name">${p.name} <span class="card__tag">/ ${p.tag}</span></h3>
        <p class="card__desc">${p.desc}</p>
        <div class="chips">${p.chips.map(c => `<span class="chip">${c}</span>`).join("")}</div>
        <div class="card__actions">
          ${p.url
            ? `<a class="btn btn--primary" href="${p.url}" target="_blank" rel="noopener">Visit site ↗</a>`
            : `<span class="btn btn--primary btn--soon" aria-disabled="true">Live soon</span>`}
          ${p.repo
            ? `<a class="btn btn--ghost" href="${p.repo}" target="_blank" rel="noopener">Source ↗</a>`
            : ""}
        </div>
      </div>`;
    host.appendChild(card);
  });
}

/* scroll reveal */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, idx) => {
      if (e.isIntersecting) {
        const el = e.target;
        const delay = Number(el.dataset.delay || 0);
        setTimeout(() => el.classList.add("is-in"), delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el, i) => {
    if (el.classList.contains("hero__stats") || el.classList.contains("hero__actions")) {
      el.dataset.delay = String(120 + i * 40);
    }
    io.observe(el);
  });
}

/* sticky nav shadow */
function initNav() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initReveal();
  initNav();
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
