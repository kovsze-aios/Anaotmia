import { CheckIcon } from "./icons";
import Image from "next/image";

export function Benefits() {
  return (
    <section className="benefits">
      {/* Row 1: Spend less time studying */}
      <div className="benefits__row benefits__row--equal">
        <div className="image">
          <Image
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
              <div className="circle circle--half-medium green"></div>
              <span>
                Complex topics broken down into easy-to-digest chunks
              </span>
            </li>
            <li>
              <div className="circle circle--half-medium green"></div>
              <span>
                Active recall questions to reinforce your understanding
              </span>
            </li>
            <li>
              <div className="circle circle--half-medium green"></div>
              <span>
                Spaced repetition to make knowledge stick long-term
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Row 2: Trusted by future medical professionals */}
      <div className="benefits__row benefits__row--reverse">
        <div className="image">
          <Image
            src="/images/home_cta-bg.webp"
            alt="Medical students studying"
            width={544}
            height={480}
          />
        </div>
        <div className="text">
          <h2>Trusted by future medical professionals</h2>
          <ul className="benefits__list">
            <li>
              <div className="circle circle--half-medium blue"></div>
              <span>
                Used by students at top medical universities worldwide
              </span>
            </li>
            <li>
              <div className="circle circle--half-medium blue"></div>
              <span>
                Content aligned with standard medical curricula
              </span>
            </li>
            <li>
              <div className="circle circle--half-medium blue"></div>
              <span>
                Continuously updated to reflect latest medical knowledge
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Row 3: Learn anywhere, anytime */}
      <div className="benefits__row benefits__row--equal">
        <div className="image">
          <Image
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
              <div className="circle circle--half-medium green"></div>
              <span>Available on desktop, tablet, and mobile</span>
            </li>
            <li>
              <div className="circle circle--half-medium green"></div>
              <span>Offline access to all study materials</span>
            </li>
            <li>
              <div className="circle circle--half-medium green"></div>
              <span>Sync your progress across all devices</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
