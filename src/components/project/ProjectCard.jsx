import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { useRef } from "react";

const ProjectCard = ({ project }) => {
  const { title, images = [], text, url, github } = project;
  const swiperRef = useRef(null);

  return (
    <div className="flex flex-col rounded-lg bg-[#908275] p-5 min-h-[730px]">
      {images.length > 0 && (
        <div className="relative rounded overflow-hidden h-full">
          {images.length === 1 ? (
            <LazyLoadImage
              src={images[0]}
              alt={title}
              effect="blur"
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="h-full"
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index} className="h-full">
                    <LazyLoadImage
                      src={img}
                      alt={`${title} ${index + 1}`}
                      effect="blur"
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                           w-9 h-9 rounded-full bg-[#DFD5C9]/90 border border-[#908275]/40
                           flex items-center justify-center hover:bg-[#DFD5C9] transition"
                aria-label="Previous slide"
              >
                <span className="text-[#908275] text-lg font-black leading-none">
                  ‹
                </span>
              </button>

              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10
                           w-9 h-9 rounded-full bg-[#DFD5C9]/90 border border-[#908275]/40
                           flex items-center justify-center hover:bg-[#DFD5C9] transition"
                aria-label="Next slide"
              >
                <span className="text-[#908275] text-lg font-black leading-none">
                  ›
                </span>
              </button>
            </>
          )}
        </div>
      )}

      <div className="flex flex-col justify-between flex-grow mt-3 px-5">
        <div>
          <h4 className="text-lg text-white font-black min-h-[2.3rem] text-center">
            {title}
          </h4>
          <p className="text-white text-base font-medium tracking-wider">
            {text}
          </p>
        </div>

        <div className="mt-4 flex gap-3">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-32 text-center px-4 py-3 bg-[#DFD5C9] text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-500 transition-colors"
            >
              Live Site
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-32 text-center px-4 py-3 bg-[#DFD5C9] text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-500 transition-colors"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    github: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default ProjectCard;
