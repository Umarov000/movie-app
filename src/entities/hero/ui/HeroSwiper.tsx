import { memo, useState, type FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { createImageUrl } from "@/shared/utils";
import { FaPlay } from "react-icons/fa";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Props {
  movies: IMovie[];
}

export const HeroSwiper: FC<Props> = memo(({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-1">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
              borderRadius: "12px",
              maxHeight: "640px",
              width: "100%",
              height: "640px",
            } as React.CSSProperties
          }
          loop
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {data?.map((item:IMovie) => (
            <SwiperSlide key={item.id}>
              <div
                className="w-full h-full rounded-xl bg-cover bg-center bg-no-repeat flex items-end justify-center p-6"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${createImageUrl(
                    item?.backdrop_path
                  )})`,
                }}
                title={item.title}
              >
                <div className="text-center max-w-4xl px-6">
                  <h2 className="text-white text-4xl font-bold drop-shadow-lg mb-4">
                    {item.title}
                  </h2>

                  <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="text-white/90 text-[14px] font-medium">
                      {new Date(item.release_date).getFullYear()}
                    </span>
                    <span className="text-white/70 text-[18px]">•</span>

                    <span className="text-white/90 text-[14px]">Comedy</span>
                    <span className="text-white/70 text-[18px]">•</span>
                    <span className="text-white/90 text-[14px]">1:34:56</span>
                    <span className="text-white/70 text-[18px]">•</span>

                    <span className="text-white/90 text-[14px] uppercase tracking-wide">
                      {item.original_language}
                    </span>
                  </div>

                  <button className="bg-white py-4 px-30 text-[#C61F1F] text-py font-semibold flex items-center gap-3 rounded-xl cursor-pointer mx-auto hover:bg-gray-100 transition-colors">
                    <FaPlay className="text-lg" />
                    Смотреть
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-2xl mx-auto">
        <Swiper
          onSwiper={setThumbsSwiper}
          loop
          spaceBetween={10}
          slidesPerView={6}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          className="thumbs-swiper"
        >
          {data?.map((item: any) => (
            <SwiperSlide key={item.id} className="cursor-pointer">
              <div
                className="w-[108px] h-[64px] overflow-hidden rounded-lg mx-auto"
                title={item.title}
              >
                <img
                  src={createImageUrl(item.backdrop_path)}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-50  hover:opacity-100 transition-opacity"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
});
