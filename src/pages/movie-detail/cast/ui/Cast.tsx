import { memo } from "react";
import { useParams } from "react-router-dom";
import { CastView } from "../../../../entities/cast";
export const Cast = memo(() => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="container">
      <h2 className="text-2xl font-semibold text-[#cdc6c6]">Cast</h2>
      <CastView type="cast" id={id as string} />
    </div>
  );
});
