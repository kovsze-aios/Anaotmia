import { ActiveRecall } from "@/components/ActiveRecall";
import type { MaturaQuestion } from "@/server/models";

export interface MaturaQuestionCardProps {
  question: MaturaQuestion;
}

export function MaturaQuestionCard({ question: q }: MaturaQuestionCardProps) {
  return (
    <div className="matura-question">
      <div className="matura-question__header">
        <span className="matura-question__number">
          Zadanie {q.questionNumber}
        </span>
        <span className="matura-question__points">
          {q.points} pkt
        </span>
        <span className="matura-question__topic">
          {q.topicCategory}
        </span>
      </div>

      {q.instruction && (
        <div className="matura-question__instruction">
          <p>{q.instruction}</p>
        </div>
      )}

      <div className="matura-question__text">
        <p>{q.questionText}</p>
      </div>

      <ActiveRecall
        question={`Zadanie ${q.questionNumber} — zobacz odpowiedź`}
        answer={q.officialCkeAnswer}
        examRef={`CKE ${q.year}`}
      />
    </div>
  );
}
