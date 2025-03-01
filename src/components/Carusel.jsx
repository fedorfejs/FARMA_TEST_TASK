import React, { useRef, useEffect, useState } from "react";
import First_slide from "./First_slide";
import Second_slide from "./Second_slide";
import Third_slide from "./Third_slide";

export default function Carusel() {
  const [animation, setAnimation] = React.useState(false);
  const [slide, setSlide] = useState(1024);
  const carusel = useRef(null);
  const mainCarusel = useRef(null);
  const startX = useRef(0);
  const startPosition = useRef(0);
  const handleTouchStart = (e) => {
    if (slide !== 0) {
      setAnimation(false);
    }

    startX.current = e.touches[0].clientX;
    document.addEventListener("touchmove", handleTouchMove, { once: true });
    startPosition.current = slide;
    document.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    const touchX = e.touches[0].clientX;
    const deltaX = touchX - startX.current;

    if (deltaX < -7) {
      setAnimation(true);
      if (slide === -1024) {
        return;
      } else {
        setSlide((prev) => prev - 1024);
      }
    }
    if (deltaX > 7) {
      setAnimation(true);
      if (slide === 1024) {
        return;
      } else {
        setSlide((prev) => prev + 1024);
      }
    }
  };

  const handleTouchEnd = () => {
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  };

  useEffect(() => {
    if (mainCarusel.current && carusel.current) {
      mainCarusel.current.style.transition = "transform 3s ease-in-out";
      carusel.current.style.transform = `translateX(${slide}px)`;
    }
  }, [slide]);
  return (
    <div className="main__carusel" ref={mainCarusel}>
      <div
        className="carusel__component"
        ref={carusel}
        onTouchStart={handleTouchStart}
      >
        <First_slide setSlide={setSlide} setAnimation={setAnimation} />
        <Second_slide
          setSlide={setSlide}
          setAnimation={setAnimation}
          animation={animation}
        />
        <Third_slide setSlideThird={setSlide} />
      </div>
    </div>
  );
}
