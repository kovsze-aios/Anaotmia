"use client";

import Link from "next/link";

import { useI18n } from "@/i18n";
import { SUBJECT_CARDS, ANATOMY_DOMAINS } from "./subjectCatalog";

/**
 * Landing-page subject grid.
 *
 * A client component so it can read the locale context. That costs nothing in
 * rendering strategy — it still prerenders into the static HTML — and it is
 * what lets the whole landing page follow the language switcher rather than
 * going English above the fold and Polish below it.
 */
export function Topics() {
  const { t } = useI18n();

  return (
    <div className="topics">
      {/* ─── Subject selector ─── */}
      <h2>{t.subjects.chooseSubject}</h2>
      <p className="topics__subtitle">{t.subjects.chooseSubjectHint}</p>

      <div className="topics__subjectboxes">
        {SUBJECT_CARDS.map((card) => (
          <Link key={card.key} href={card.href} className="subject-card focus-ring">
            <div className="subject-card__img" style={{ background: card.color }}>
              <span className="subject-card__icon">{card.icon}</span>
            </div>
            <div className="subject-card__content">
              <div className="subject-card__subtitle">{t.subjects[card.subtitleKey]}</div>
              <div className="subject-card__title">{t.subjects[card.key]}</div>
              <div className="subject-card__desc">
                {t.subjects[card.bodyKey]}{" "}
                <strong>{t.subjects[card.emphasisKey]}</strong>
              </div>
              <div className="subject-card__cta">{t.subjects.subjectCta}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* ─── Anatomy domain grid ─── */}
      <h2 style={{ marginTop: "60px" }}>{t.domains.heading}</h2>
      <p className="topics__subtitle">{t.domains.hint}</p>
      <div className="topics__topicboxes">
        {ANATOMY_DOMAINS.map((topic) => (
          <Link
            key={topic.key}
            href="/theory/anatomia"
            className="topicbox focus-ring"
          >
            <div className="topicbox__img" style={{ background: topic.color }}>
              <span
                className="topicbox__icon"
                style={{
                  fontSize: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                {topic.icon}
              </span>
            </div>
            <div className="topicbox__content">
              <div className="topicbox__title">{t.domains[topic.key]}</div>
              <div className="topicbox__description">{t.domains[topic.bodyKey]}</div>
              <div className="topicbox__cta">{t.domains.cta}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
