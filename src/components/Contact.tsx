import Reveal from "./Reveal";
import { CONTACT } from "../data/projects";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact__inner">
        <Reveal>
          <>
            <span className="kicker">Contact</span>
            <h2 id="contact-title">Building something? Let's talk.</h2>
            <p>Fastest reply on Telegram — usually within a day.</p>
            <div className="contact__links">
              <a className="btn btn--primary" href={CONTACT.telegram} target="_blank" rel="noopener">
                Telegram @ograinhard ↗
              </a>
              <a className="btn btn--ghost" href={CONTACT.github} target="_blank" rel="noopener">
                GitHub ↗
              </a>
              <a className="btn btn--ghost" href={CONTACT.itch} target="_blank" rel="noopener">
                itch.io ↗
              </a>
            </div>
          </>
        </Reveal>
      </div>
    </section>
  );
}
