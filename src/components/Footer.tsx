import Link from "next/link";
import {
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  TiktokIcon,
  RedditIcon,
  TelegramIcon,
} from "./icons";

const sitemapColumns = [
  {
    sections: [
      {
        title: "Basics",
        links: [
          { label: "Anatomy Basics", href: "#" },
          { label: "Upper Extremity", href: "#" },
          { label: "Spine and Back", href: "#" },
          { label: "Thorax", href: "#" },
          { label: "Abdomen", href: "#" },
          { label: "Pelvis and Perineum", href: "#" },
          { label: "Lower Extremity", href: "#" },
          { label: "Head and Neck", href: "#" },
          { label: "Neuroanatomy", href: "#" },
          { label: "Cross sections", href: "#" },
          { label: "Radiological anatomy", href: "#" },
          { label: "All topics", href: "#" },
        ],
      },
      {
        title: "Histology",
        links: [
          { label: "Tissues", href: "#" },
          { label: "Systems", href: "#" },
          { label: "All topics", href: "#" },
        ],
      },
      {
        title: "How to study",
        links: [
          { label: "Study schedules", href: "#" },
          { label: "Anatomy learning tips", href: "#" },
          { label: "Memory palaces", href: "#" },
          { label: "How to learn anatomy", href: "#" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Upper Extremity",
        links: [
          { label: "Shoulder", href: "#" },
          { label: "Arm", href: "#" },
          { label: "Elbow", href: "#" },
          { label: "Forearm", href: "#" },
          { label: "Wrist", href: "#" },
          { label: "Hand", href: "#" },
        ],
      },
      {
        title: "Lower Extremity",
        links: [
          { label: "Hip and thigh", href: "#" },
          { label: "Leg", href: "#" },
          { label: "Knee", href: "#" },
          { label: "Ankle", href: "#" },
          { label: "Foot", href: "#" },
        ],
      },
      {
        title: "Spine and Back",
        links: [
          { label: "Back", href: "#" },
          { label: "Spine", href: "#" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Thorax",
        links: [
          { label: "Thoracic wall", href: "#" },
          { label: "Breasts", href: "#" },
          { label: "Mediastinum", href: "#" },
          { label: "Lungs", href: "#" },
          { label: "Heart", href: "#" },
          { label: "Blood vessels", href: "#" },
          { label: "Lymphatics", href: "#" },
        ],
      },
      {
        title: "Abdomen",
        links: [
          { label: "Abdominal wall", href: "#" },
          { label: "Stomach", href: "#" },
          { label: "Liver", href: "#" },
          { label: "Pancreas", href: "#" },
          { label: "Spleen", href: "#" },
          { label: "Intestines", href: "#" },
          { label: "Kidneys", href: "#" },
          { label: "Blood vessels", href: "#" },
          { label: "Lymphatics", href: "#" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Pelvis and Perineum",
        links: [
          { label: "Male pelvis", href: "#" },
          { label: "Female pelvis", href: "#" },
        ],
      },
      {
        title: "Head and Neck",
        links: [
          { label: "Skull", href: "#" },
          { label: "Face", href: "#" },
          { label: "Neck", href: "#" },
          { label: "Nose", href: "#" },
          { label: "Ear", href: "#" },
          { label: "Oral cavity", href: "#" },
          { label: "Eye", href: "#" },
          { label: "Pharynx", href: "#" },
          { label: "Larynx", href: "#" },
          { label: "Brain", href: "#" },
          { label: "Blood vessels and lymphatics", href: "#" },
        ],
      },
    ],
  },
  {
    sections: [
      {
        title: "Neuroanatomy",
        links: [
          { label: "Meninges", href: "#" },
          { label: "Ventricular system", href: "#" },
          { label: "Cerebral hemispheres", href: "#" },
          { label: "Brainstem", href: "#" },
          { label: "Cerebellum", href: "#" },
          { label: "Cranial nerves", href: "#" },
          { label: "Spinal cord", href: "#" },
          { label: "Pathways", href: "#" },
        ],
      },
      {
        title: "Cross sections",
        links: [
          { label: "Head and neck", href: "#" },
          { label: "Thorax", href: "#" },
          { label: "Abdomen", href: "#" },
          { label: "Male pelvis", href: "#" },
          { label: "Female pelvis", href: "#" },
        ],
      },
    ],
  },
];

const socialIcons = [
  { icon: FacebookIcon, href: "https://www.facebook.com/kenhubcom/", title: "Facebook" },
  { icon: YoutubeIcon, href: "https://www.youtube.com/channel/UCHn_K1zOBYZqtmIYkXLEIQw", title: "Youtube" },
  { icon: InstagramIcon, href: "https://www.instagram.com/kenhub_english/", title: "Instagram" },
  { icon: PinterestIcon, href: "https://www.pinterest.com/kenhub_official/", title: "Pinterest" },
  { icon: TwitterIcon, href: "https://x.com/kenhub", title: "X (Twitter)" },
  { icon: TiktokIcon, href: "https://www.tiktok.com/@kenhub", title: "TikTok" },
  { icon: RedditIcon, href: "https://www.reddit.com/r/kenhub", title: "Reddit" },
  { icon: TelegramIcon, href: "https://t.me/kenhub", title: "Telegram" },
];

export function Footer() {
  return (
    <footer>
      <div className="l-container">
        <div className="logos">
          <div className="logos-headline">
            Trusted by leading health institutions
          </div>
          <div className="images">
            <img
              src="/images/logo-fresenius.svg"
              title="Hochschule Fresenius - University of Applied Sciences"
              width={165}
              height={40}
              alt="Fresenius"
            />
            <img
              src="/images/logo-fub.svg"
              title="Freie Universität Berlin"
              width={119}
              height={40}
              alt="FU Berlin"
            />
            <img
              src="/images/logo-duth.webp"
              title="Democritus University of Thrace"
              width={114}
              height={40}
              alt="DUTH"
            />
            <img
              src="/images/logo-uc-denver.svg"
              title="University of Colorado Denver | Anschutz Medical Campus"
              width={242}
              height={44}
              alt="UC Denver"
            />
            <img
              src="/images/logo-dpu.webp"
              title="Danube Private University"
              width={174}
              height={40}
              alt="DPU"
            />
          </div>
        </div>

        <div className="l-sitemap">
          {sitemapColumns.map((column, colIdx) => (
            <div key={colIdx} className="l-sitemap__column">
              {column.sections.map((section, secIdx) => (
                <div key={secIdx} className="l-sitemap__section">
                  <div className="l-sitemap__title">{section.title}</div>
                  {section.links.map((link) => (
                    <div key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}

          <div className="l-sitemap__column">
            <div className="l-sitemap__section">
              <div className="l-sitemap__title">
                <Link href="/en/quality">Our quality commitment</Link>
              </div>
              <div className="quality-guidelines">
                <p className="tiny">
                  Grounded on academic literature and research, validated by
                  experts, and trusted by more than 7 million users.{" "}
                  <Link href="/en/quality">Read more.</Link>
                </p>
              </div>
            </div>

            <div className="l-sitemap__section">
              <div className="l-sitemap__title">
                <Link href="/en/diversity-and-inclusion">
                  Diversity and Inclusion
                </Link>
              </div>
              <div className="quality-guidelines">
                <p className="tiny">
                  Kenhub fosters a safe learning environment through diverse
                  model representation, inclusive terminology and open
                  communication with our users.{" "}
                  <Link href="/en/diversity-and-inclusion">Read more.</Link>
                </p>
              </div>
            </div>

            <div className="social">
              <p className="tiny">Follow us for daily anatomy content</p>
              <div className="icons-container">
                {socialIcons.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.title}
                      className="circle circle--medium-gray"
                      href={social.href}
                      title={social.title}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon width={16} height={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
