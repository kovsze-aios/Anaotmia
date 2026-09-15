import { FacebookIcon, GitHubIcon, InstagramIcon } from "./icons";
import { DonateButton } from "./DonateButton";

/**
 * The project's accounts, in the order they are worth following: the two
 * places the material is published, then the place it is built.
 *
 * LinkedIn used to sit here on a `#` href. There is no LinkedIn account behind
 * it, and an icon that goes nowhere costs a reader a click to learn that, so
 * it is gone rather than pointing somewhere plausible.
 *
 * `title` carries the same text as `aria-label` on purpose: the icons have no
 * visible text, so pointer users need the tooltip and assistive tech needs the
 * name, and they should agree.
 */
const socialLinks = [
  { icon: FacebookIcon, href: "https://www.facebook.com/sportnotespl/", title: "Facebook" },
  { icon: InstagramIcon, href: "https://www.instagram.com/sportnotes.ai", title: "Instagram" },
  { icon: GitHubIcon, href: "https://github.com/kovsze-aios", title: "GitHub" },
];

export function Footer() {
  return (
    <footer className="footer-minimal">
      <div className="l-container">
        <div className="footer-minimal__inner">
          {/* Social icons row */}
          <div className="footer-minimal__socials">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.title}
                  href={social.href}
                  title={social.title}
                  aria-label={social.title}
                  className="footer-minimal__social-link focus-ring"
                  // Leaving the site, so a new tab — and `noopener` with it, or
                  // the opened page gets a handle on this one through
                  // `window.opener`.
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon width={22} height={22} aria-hidden="true" />
                </a>
              );
            })}
          </div>

          {/* Signature at one end, support at the other. Support stays down
              here rather than in the topbar, where a monetisation control
              competes with navigation on every page. */}
          <div className="footer-minimal__bar">
            <p className="footer-minimal__attribution">Projekt Medycyna © 2026</p>
            <DonateButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
