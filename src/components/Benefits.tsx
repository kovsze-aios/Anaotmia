import { CheckIcon } from "./icons";

export function Benefits() {
  return (
    <div className="benefits">
      {/* Row 1: Spend less time studying */}
      <div className="benefits__row benefits__row--equal">
        <div className="image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
            src="/images/home_face-7897ee9d.jpg"
            alt="Student studying anatomy"
            width={320}
            height={360}
          />
        </div>
        <div className="text">
          <h2>Spend less time studying</h2>
          <ul className="benefits__list">
            <li>
              <div className="circle circle--half-medium green">
                <CheckIcon width={10} height={10} />
              </div>
              1000s of high quality anatomy illustrations
            </li>
            <li>
              <div className="circle circle--half-medium green">
                <CheckIcon width={10} height={10} />
              </div>
              1000s of detailed anatomy articles
            </li>
            <li>
              <div className="circle circle--half-medium green">
                <CheckIcon width={10} height={10} />
              </div>
              High-quality videos created by anatomy experts
            </li>
            <li>
              <div className="circle circle--half-medium green">
                <CheckIcon width={10} height={10} />
              </div>
              Reviewed by expert medical professionals
            </li>
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
              <li>
                <div className="circle circle--half-medium green">
                  <CheckIcon width={10} height={10} />
                </div>
                <div>
                  <div className="green">Practice at your level</div>
                  100s of beginner to advanced quizzes
                </div>
              </li>
              <li>
                <div className="circle circle--half-medium green">
                  <CheckIcon width={10} height={10} />
                </div>
                <div>
                  <div className="green">Fix your weak spots fast</div>
                  Spaced repetition quizzes train your memory
                </div>
              </li>
              <li>
                <div className="circle circle--half-medium green">
                  <CheckIcon width={10} height={10} />
                </div>
                <div>
                  <div className="green">Study only what matters</div>
                  Create custom quizzes tailored to your exam needs
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Row 3: Learn anywhere, anytime */}
      <div className="benefits__row benefits__row--equal">
        <div className="image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
            src="/images/home_devices.webp"
            alt="Kenhub on multiple devices"
            width={382}
            height={236}
          />
        </div>
        <div className="text">
          <h2>Learn anywhere, anytime</h2>
          <ul className="benefits__list">
            <li>
              <div className="circle circle--half-medium green">
                <CheckIcon width={10} height={10} />
              </div>
              1000s of videos, articles, and quizzes all in one place
            </li>
            <li>
              <div className="circle circle--half-medium green">
                <CheckIcon width={10} height={10} />
              </div>
              Seamlessly switch between phone, tablet, or computer
            </li>
            <li>
              <div className="circle circle--half-medium green">
                <CheckIcon width={10} height={10} />
              </div>
              Downloadable resources for offline studying
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
