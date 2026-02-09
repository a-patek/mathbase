// components/course/CourseBlocks.tsx

import type { AnswerMap } from "@/lib/courseProgress";

export type SectionProps = {
  title: string;
  items: string[];
};

export function SectionCard({ title, items }: SectionProps) {
  const lowerTitle = title.toLowerCase();
  const isNumbered =
    lowerTitle.includes("practice") ||
    lowerTitle.includes("answer") ||
    lowerTitle.includes("quiz");

  const hasNote =
    lowerTitle.includes("practice") &&
    items.length > 0 &&
    !/^\d+\./.test(items[0]);
  const note = hasNote ? items[0] : null;
  const listItems = hasNote ? items.slice(1) : items;

  return (
    <div className="rounded-xl border border-zinc-900 bg-zinc-950/70 p-4">
      <div className="flex items-center justify-between gap-2">
        <h4 className="text-sm font-semibold text-zinc-100">{title}</h4>
      </div>
      {note && <p className="mt-2 text-xs text-zinc-500">{note}</p>}
      <ul className="mt-3 space-y-2">
        {listItems.map((item, idx) => (
          <li key={`${title}-${idx}`} className="flex gap-2 text-sm text-zinc-200">
            {isNumbered ? (
              <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-zinc-900 text-[0.7rem] text-zinc-400">
                {idx + 1}
              </span>
            ) : (
              <span className="mt-2 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
            )}
            <span>{item.replace(/^\d+\.\s*/, "")}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export type McqCardProps = {
  sessionId: string;
  index: number;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  responses: AnswerMap;
  onSelect: (key: string, optionIndex: number) => void;
};

export function McqCard({
  sessionId,
  index,
  question,
  options,
  answerIndex,
  explanation,
  responses,
  onSelect,
}: McqCardProps) {
  const key = `${sessionId}-q${index}`;
  const selected = responses[key];
  const hasAnswer = typeof selected === "number";
  const isCorrect = hasAnswer && selected === answerIndex;

  return (
    <div className="rounded-xl border border-zinc-900 bg-zinc-950/70 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
        MCQ
      </p>
      <p className="mt-2 text-sm font-semibold text-zinc-100">{question}</p>
      <div className="mt-3 space-y-2">
        {options.map((option, optionIndex) => {
          const isSelected = selected === optionIndex;
          const isAnswer = optionIndex === answerIndex;
          const showCorrect = hasAnswer && isAnswer;
          const showWrong = hasAnswer && isSelected && !isAnswer;

          const className = [
            "w-full rounded-lg border px-3 py-2 text-left text-xs md:text-sm transition",
            "border-zinc-800 bg-black/40 text-zinc-200 hover:border-zinc-600",
            isSelected && "border-sky-500/70 bg-sky-500/10 text-sky-100",
            showCorrect && "border-emerald-500/70 bg-emerald-500/10 text-emerald-100",
            showWrong && "border-rose-500/70 bg-rose-500/10 text-rose-100",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={`${key}-opt-${optionIndex}`}
              type="button"
              onClick={() => onSelect(key, optionIndex)}
              className={className}
            >
              {option}
            </button>
          );
        })}
      </div>
      {hasAnswer && (
        <div
          className={`mt-3 rounded-lg border px-3 py-2 text-xs ${
            isCorrect
              ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-100"
              : "border-rose-500/60 bg-rose-500/10 text-rose-100"
          }`}
        >
          <p className="font-semibold">{isCorrect ? "Correct" : "Not quite"}</p>
          <p className="mt-1 text-[0.7rem] text-zinc-200">{explanation}</p>
        </div>
      )}
    </div>
  );
}
