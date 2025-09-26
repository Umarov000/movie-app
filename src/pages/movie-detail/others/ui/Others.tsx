import { memo } from "react";
import { CastView } from "../../../../entities/cast";
import { useParams } from "react-router-dom";

export const Others = memo(() => {
  const { id } = useParams();

  return (
    <div className="container">
      <h2 className="text-2xl font-semibold text-[#cdc6c6]">Others</h2>
      <CastView type="crew" id={id as string} />
    </div>
  );
});
