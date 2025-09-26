import { memo, type FC } from "react";
import { useMovie } from "../../model/useMovie";
import { createImageUrl } from "@/shared/utils";
import { Image } from "antd";
import { NavLink } from "react-router-dom";

interface Props {
  id: string;
}
const tabs = [
  { path: "", label: "Reviews" },
  { path: "cast", label: "Cast" },
  { path: "others", label: "Other" },
];



export const MovieInfo: FC<Props> = memo(({ id }) => {
  const { getMovieById, getMovieInfo } = useMovie();
  const { data } = getMovieById(id);
  const { data: imageData } = getMovieInfo(id, "images");
  console.log(data);

  return (
    <div>
      <section>
        {data?.backdrop_path && (
          <img
            src={createImageUrl(data.backdrop_path)}
            alt={data.title}
            className="w-full max-h-[600px] object-contain"
          />
        )}
      </section>

      <section className="container py-6 space-y-3">
        <h1 className="text-3xl font-bold text-[#cdc6c6] ">{data?.title}</h1>

        <p className="text-lg text-[#A1A1A1]">
          Budget: {data?.budget ? `${data.budget.toLocaleString()} USD` : "N/A"}
        </p>
        <div className="flex flex-row flex-wrap gap-2">
          {data?.genres?.map((item: any) => (
            <p key={item.id} className="text-[#A1A1A1]">
              #{item.name}
            </p>
          ))}
        </div>

        {data?.homepage && (
          <a
            href={data.homepage}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Official Website
          </a>
        )}
      </section>

      <section className="container flex overflow-x-auto gap-2 pb-4">
        {imageData?.backdrops
          ?.slice(0, 20)
          .map((item: { file_path: string }, inx: number) => (
            <Image
              key={inx}
              className="min-w-[200px]"
              src={createImageUrl(item.file_path)}
              alt=""
            />
          ))}
      </section>
      <div className="container flex gap-4">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end
            className={({ isActive }) =>
              `px-4 py-2 font-medium ${
                isActive
                  ? "border-b-2 border-py text-py dark:text-white"
                  : "text-gray-400 dark:text-gray-300"
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
});
