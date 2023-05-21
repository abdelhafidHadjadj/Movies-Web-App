import React, { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Movie from "../Pages/movieCard";
import { Link } from "react-router-dom";
import "../Styles/style1.css";
const ImageSlider = ({ displayMv }) => {
  console.log(displayMv);
  const [current, setCurrent] = useState(0);
  const length = displayMv.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(displayMv) || displayMv.length <= 0) {
    return null;
  }

  const displayedSlides = displayMv.slice(current, current + 5); // Get the current slide and the next two slides

  return (
    <>
      <section className="displayMv">
        {displayedSlides.map((slide, index) => {
          return (
            <Link to={`/movies/${slide.id}`} className="article" key={index}>
              <Movie
                title={slide.name}
                img={slide.poster}
                playtime={slide.playtime}
                release={slide.release}
              />
            </Link>
          );
        })}
      </section>
      <div className="flex items-center justify-center gap-2">
        <span className="arrow-btn">
          <BsArrowLeft size={24} className="left-arrow" onClick={prevSlide} />
        </span>
        <span className="arrow-btn">
          <BsArrowRight size={24} className="right-arrow" onClick={nextSlide} />
        </span>
      </div>
    </>
  );
};

export default ImageSlider;
