import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./icons";

const socialLinks = [
  { icon: GitHubIcon, href: "#", title: "GitHub" },
  { icon: LinkedInIcon, href: "#", title: "LinkedIn" },
  { icon: InstagramIcon, href: "#", title: "Instagram" },
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
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon width={22} height={22} aria-hidden="true" />
                </a>
              );
            })}
          </div>

          {/* Attribution */}
          <p className="footer-minimal__attribution">
            Projekt Medycyna © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
