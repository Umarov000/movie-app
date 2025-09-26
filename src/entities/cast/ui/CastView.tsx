import { memo, type FC } from "react";
import { useCast } from "../model/useCast";
import { createImageUrl } from "../../../shared/utils";
import { Skeleton } from "antd";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  type: string;
}

export const CastView: FC<Props> = memo(({ id, type }) => {
  const { getCasts } = useCast();
  const { data, isLoading } = getCasts(id);
  const navigate = useNavigate();

  const renderCard = (item: any, i: number) => {
    if (isLoading) {
      return (
        <div
          key={i}
          className="bg-gray-900 rounded-lg p-2 w-[120px] sm:w-[140px] md:w-[160px] flex-shrink-0"
        >
          <div className="w-full aspect-[2/3]">
            <Skeleton.Avatar active shape="square" className="w-full h-full" />
          </div>
          <Skeleton.Input active size="small" className="mt-2 w-full" />
        </div>
      );
    }

    return (
      <div
        key={item.cast_id || item.credit_id || i}
        className="cursor-pointer bg-gray-900 rounded-lg overflow-hidden 
                   w-[120px] sm:w-[140px] md:w-[160px] opacity-[70%] flex-shrink-0
                   hover:opacity-[100%]"
        onClick={() => navigate(`/crew/${item.id}`)}
      >
        {item.profile_path ? (
          <img
            className="w-full aspect-[2/3] object-cover"
            src={createImageUrl(item.profile_path)}
            alt={item.original_name}
          />
        ) : (
          <div className="w-full aspect-[2/3] flex items-center justify-center bg-gray-800 text-gray-500">
            <FaUser size={36} />
          </div>
        )}
        <div className="p-2">
          <p className="text-sm font-medium text-white truncate">
            {item.original_name}
          </p>
          <p className="text-xs text-gray-400 truncate">
            {type === "crew" ? item.job : item.character}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="py-4">
      <div className="flex gap-3 overflow-x-auto px-1 scrollbar-hide">
        {(isLoading ? Array.from({ length: 10 }) : data?.[type]).map(
          (item: any, i: number) => renderCard(item, i)
        )}
      </div>
    </div>
  );
});
