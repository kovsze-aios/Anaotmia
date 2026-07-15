/* eslint-disable @next/next/no-img-element */
import { CheckIcon } from "./icons";
import Image from "next/image";

const row1Benefits = [
  "1000s of high quality anatomy illustrations",
  "1000s of detailed anatomy articles",
  "High-quality videos created by anatomy experts",
  "Reviewed by expert medical professionals",
];

const row2Benefits = [
  {
    title: "Practice at your level",
    description: "100s of beginner to advanced quizzes",
  },
  {
    title: "Fix your weak spots fast",
    description: "Spaced repetition quizzes train your memory",
  },
  {
    title: "Study only what matters",
    description: "Create custom quizzes tailored to your exam needs",
  },
];

const row3Benefits = [
  "1000s of videos, articles, and quizzes all in one place",
  "Seamlessly switch between phone, tablet, or computer",
  "Downloadable resources for offline studying",
];

export function Benefits() {
  return (
    <section className="benefits">
      {/* Row 1: Spend less time studying */}
      <div className="benefits__row benefits__row--equal">
        <div className="image relative" style={{ minHeight: "360px", minWidth: "320px" }}>
          <Image
            src="/images/home_face-7897ee9d.jpg"
            alt="Student studying anatomy"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>
        <div className="text">
          <h2>Spend less time studying</h2>
          <ul className="benefits__list">
            {row1Benefits.map((benefit, i) => (
              <li key={i}>
                <div className="circle circle--half-medium green">
                  <CheckIcon width={10} height={10} />
                </div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Row 2: Test yourself */}
      <div className="benefits__row benefits__row--feature">
        <div className="content">
          <div
            className="video"
            style={{
              backgroundImage:
                "url(/images/index_header_background-08c9bf24.jpg)",
            }}
          >
            <div className="video-play-overlay">
              <div className="video-play-overlay__icon" />
            </div>
          </div>
          <div className="text">
            <h2>Test yourself</h2>
            <div className="subtitle">
              Build your confidence and get exam-ready
            </div>
            <ul className="benefits__list">
              {row2Benefits.map((benefit, i) => (
                <li key={i}>
                  <div className="circle circle--half-medium green">
                    <CheckIcon width={10} height={10} />
                  </div>
                  <div>
                    <div className="green">{benefit.title}</div>
                    {benefit.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Row 3: Learn anywhere, anytime */}
      <div className="benefits__row benefits__row--equal">
        <div className="image relative" style={{ minHeight: "236px", minWidth: "382px" }}>
          <Image
            src="/images/home_devices.webp"
            alt="Kenhub on multiple devices"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, 382px"
          />
        </div>
        <div className="text">
          <h2>Learn anywhere, anytime</h2>
          <ul className="benefits__list">
            {row3Benefits.map((benefit, i) => (
              <li key={i}>
                <div className="circle circle--half-medium green">
                  <CheckIcon width={10} height={10} />
                </div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
