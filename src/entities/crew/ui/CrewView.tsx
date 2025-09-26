import { memo, useState } from "react";
import { useParams } from "react-router-dom";
import { createImageUrl } from "../../../shared/utils";
import { FaLink } from "react-icons/fa";
import { useCrew } from "../model/useCrew";

export const CrewView = memo(() => {
  const { id } = useParams();
  const { getCrewById } = useCrew();
  const { data, isLoading } = getCrewById(id as string);
  const [showFullBio, setShowFullBio] = useState(false);

  if (isLoading) {
    return (
      <div className="container py-10">
        <div className="animate-pulse flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 h-96 bg-gray-800 rounded-xl shadow-md" />
          <div className="flex-1 flex flex-col gap-4">
            <div className="h-6 w-3/4 bg-gray-700 rounded" />
            <div className="h-4 w-1/2 bg-gray-700 rounded" />
            <div className="h-3 w-full bg-gray-700 rounded" />
            <div className="h-3 w-full bg-gray-700 rounded" />
            <div className="h-3 w-full bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    );
  }

  console.log(data);

  return (
    <div className="container py-10 flex flex-col md:flex-row gap-6 text-gray-100">
      {/* Image */}
      <div className="w-full md:w-64 h-96 rounded-xl overflow-hidden shadow-lg border border-gray-700 bg-gray-900">
        {data.profile_path ? (
          <img
            src={createImageUrl(data.profile_path)}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500 text-lg font-semibold">
            No Image
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-white">{data.name}</h1>
        <p className="text-gray-400 italic">{data.known_for_department}</p>

        {/* Details */}
        <div className="flex flex-wrap gap-3 text-sm">
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-lg shadow-sm">
            <span>
              Birth day: {data.birthday}{" "}
              {data.deathday ? `(died: ${data.deathday})` : ""}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          {data.place_of_birth && (
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-lg shadow-sm">
              <span> Place of birth: {data.place_of_birth}</span>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          {data.popularity && (
            <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-lg shadow-sm">
              <span> Popularity: {data.popularity}</span>
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          {data.homepage && (
            <div className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-lg hover:bg-gray-600 transition-all rounded-lg">
              <FaLink className="text-blue-400" />
              <a
                href={data.homepage}
                target="_blank"
                className="hover:underline text-blue-300"
              >
                Official Website
              </a>
            </div>
          )}
        </div>

        {/* Biography */}
        <div className="mt-4">
          <h2 className="font-semibold text-white mb-2 text-xl">Biography</h2>
          <p
            className={`text-gray-300 whitespace-pre-line transition-all duration-300 ${
              !showFullBio ? "line-clamp-6" : ""
            }`}
          >
            {data.biography}
          </p>
          {data.biography.length > 300 && (
            <button
              className="mt-2 text-blue-400 hover:text-blue-300 font-medium"
              onClick={() => setShowFullBio(!showFullBio)}
            >
              {showFullBio ? "See Less" : "See More"}
            </button>
          )}
        </div>

        {/* Also Known As */}
        {data.also_known_as.length > 0 && (
          <div className="mt-4">
            <h2 className="font-semibold text-white mb-2 text-xl">
              Also Known As
            </h2>
            <ul className="list-disc list-inside text-gray-400">
              {data.also_known_as.map((alias, idx) => (
                <li key={idx}>{alias}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});
