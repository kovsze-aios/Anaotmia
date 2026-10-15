"use client";

import Link from "next/link";

import { useI18n } from "@/i18n";
import { SUBJECT_CARDS, EXAM_SHEETS } from "./subjectCatalog";

/**
 * Card grid for the `/theory` index.
 *
 * Split out of the route so the page itself can stay a server component and
 * keep fetching navigation on the server, while the copy here follows the
 * locale context. Both still prerender statically.
 */
export function TheoryIndex() {
  const { t } = useI18n();

  return (
    <div className="topics">
      <h2>{t.nav.textbook}</h2>
      <p className="topics__subtitle">{t.subjects.chooseSubjectHint}</p>

      <div className="topics__subjectboxes">
        {SUBJECT_CARDS.map((card) => (
          <Link key={card.key} href={card.href} className="subject-card focus-ring">
            <div className="subject-card__img" style={{ background: card.color }} aria-hidden="true">
              <span className="subject-card__icon">{card.icon}</span>
            </div>
            <div className="subject-card__content">
              <div className="subject-card__subtitle">{t.subjects[card.subtitleKey]}</div>
              <div className="subject-card__title">{t.subjects[card.key]}</div>
              <div className="subject-card__desc">
                {t.subjects[card.bodyKey]}{" "}
                <strong>{t.subjects[card.emphasisKey]}</strong>
              </div>
              <div className="subject-card__cta" aria-hidden="true">{t.subjects.subjectCta}</div>
            </div>
          </Link>
        ))}
      </div>

      <h2 style={{ marginTop: "60px" }}>{t.subjects.examSheets}</h2>
      <p className="topics__subtitle">{t.subjects.examSheetsHint}</p>
      <div className="topics__subjectboxes">
        {EXAM_SHEETS.map((sheet) => (
          <Link key={sheet.href} href={sheet.href} className="subject-card focus-ring">
            <div className="subject-card__img" style={{ background: sheet.color }} aria-hidden="true">
              <span className="subject-card__icon">{sheet.icon}</span>
            </div>
            <div className="subject-card__content">
              <div className="subject-card__subtitle">{t.subjects.maturaSubtitle}</div>
              <div className="subject-card__title">{t.sidebar[sheet.key]}</div>
              <div className="subject-card__cta" aria-hidden="true">{t.subjects.examSheetsCta}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
