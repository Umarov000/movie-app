import { useMovie } from "../../../../entities/movie";
import { useParams } from "react-router-dom";
import { ReviewCard } from "./ReviewCard";

export interface IReview {
  id: string;
  author: string;
  content: string;
  created_at: string;
}

export const Reviews = () => {
  const { id } = useParams();
  const { getMovieInfo } = useMovie();
  const { data: reviews } = getMovieInfo(id, "reviews");
  console.log(id, reviews);

  return (
    <div>
      <section className="container py-6 space-y-4">
        <h2 className="text-2xl font-semibold text-[#cdc6c6]">Reviews</h2>

        {(!reviews?.results || reviews.results.length === 0) && (
          <p className="text-gray-400 italic">No Reviews yet</p>
        )}

        {reviews?.results?.map((review: IReview) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </section>
    </div>
  );
};


