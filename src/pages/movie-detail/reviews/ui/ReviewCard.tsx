import { useState } from "react";
import type { IReview } from "./Review";

export const ReviewCard = ({ review }: { review: IReview }) => {
  const [expanded, setExpanded] = useState(false);

  // Matnni 3 qatordan keyin qisqartirish
  const MAX_LENGTH = 200; // taxminan 3 qator
  const isLong = review.content.length > MAX_LENGTH;
  const displayText = expanded
    ? review.content
    : review.content.slice(0, MAX_LENGTH) + (isLong ? "..." : "");

  return (
    <div className="p-4 rounded-lg shadow-sm bg-[#d4d4d4]">
      <p className="text-sm text-gray-500">
        By <span className="font-medium">{review.author}</span> •{" "}
        {new Date(review.created_at).toLocaleDateString()}
      </p>

      <p className="mt-2 text-gray-800 dark:text-gray-200 whitespace-pre-line">
        {displayText}
      </p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-blue-600 hover:underline text-sm"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};
