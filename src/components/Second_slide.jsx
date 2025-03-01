import React, { useRef } from "react";

export default function Second_slide(props) {
  const { animation, setAnimation, setSlide } = props;
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);
  const textContainerRef = useRef(null);
  const isDragging = useRef(false);

  const handleTouchStart = (e) => {
    isDragging.current = true;
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    if (isDragging.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const thumbRect = thumbRef.current.getBoundingClientRect();
      const sliderHeight = sliderRect.height;
      const thumbHeight = thumbRect.height;
      const min = 0;
      const max = sliderHeight - thumbHeight;

      let newTop = e.touches[0].clientY - sliderRect.top - thumbHeight / 2;
      newTop = Math.max(min, Math.min(newTop, max));

      updateThumbPosition(newTop, max);
      updateTextPosition(newTop, max);
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const thumbRect = thumbRef.current.getBoundingClientRect();
      const sliderHeight = sliderRect.height;
      const thumbHeight = thumbRect.height;
      const min = 0;
      const max = sliderHeight - thumbHeight;

      let newTop = e.clientY - sliderRect.top - thumbHeight / 2;
      newTop = Math.max(min, Math.min(newTop, max));

      updateThumbPosition(newTop);
      updateTextPosition(newTop, max);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const updateThumbPosition = (newTop) => {
    thumbRef.current.style.top = `${newTop}px`;
  };

  const updateTextPosition = (newTop, max) => {
    const textContainer = textContainerRef.current;
    const textHeight = textContainer.scrollHeight - textContainer.clientHeight;
    const scrollTop = (newTop / max) * textHeight;
    textContainer.style.transform = `translateY(-${scrollTop}px)`;
  };

  const handleHome = () => {
    setSlide((prev) => prev + 1024);
    setAnimation(false);
  };

  return (
    <div className="carusel__component__second components">
      <div className="conatiner__second__slide">
        <div className="bg__second"></div>
        <div className="home__btn__second" onClick={handleHome}>
          <div className="home__btn__text__second"></div>
        </div>
        <div className="text__message">
          <p className="text__message__p">Текст сообщения</p>
        </div>
      </div>
      <div className="black__line"></div>
      <div
        className="slider-container"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="slider-thumb" ref={thumbRef}></div>
      </div>
      <div className="text-container-container">
        <div className="text-container" ref={textContainerRef}>
          <p className="text__p__slider__content">
            <strong>Lorem ipsum dolor sit amet</strong> consectetur adipisicing
            elit. Voluptates quia itaque molestiae maiores ut non sunt nulla
            quas beatae, amet hic explicabo dolores magni nisi autem obcaecati
            sint pariatur est repellendus laboriosam porro nostrum omnis? Unde
            porro repudiandae quas laborum harum cumque ullam vero corporis
            itaque, incidunt exercitationem quam officiis minima libero nemo,
            ducimus at! Voluptatum non impedit fugiat quod voluptas adipisci
            officia consequuntur libero! Quidem deserunt sint quis, enim aliquid
            explicabo voluptatem accusamus sed dolorum aperiam labore
            necessitatibus culpa voluptatum itaque magnam id. Veritatis sint
            officiis expedita illum aspernatur voluptatem voluptate cum
            blanditiis sit. Delectus, odit ad reprehenderit tenetur aperiam
            nobis deserunt distinctio. Aut voluptates corporis quae mollitia
            officia, fugiat autem dolore molestiae esse error corporis quae m
            vero corporis itaque, incidunt exercitationem quam officiis minima
            libero nemo, ducimus at! Voluptatum non impedit fugiat quod voluptas
            adipisci officia consequuntur libero! Quidem deserunt sint quis,
            enim aliquid explicabo voluptatem accusamus sed dolorum aperiam
            labore necessitatibus culpa voluptatum itaque magnam id. Veritatis
            sint officiis expedita illum aspernatur voluptatem voluptate cum
            blanditiis sit. Delectus, odit ad reprehenderit tenetur aperiam
            nobis deserunt distinctio. Aut voluptates corporis quae mollitia
            officia, fugiat autem dolore molestiae ess mollitia officia, fugiat
            autem dolore molestiae esse error voluptas illum vel nihil
            voluptates repellat vitae nostrum doloribus placeat ducimus! Non
            cumque nihil unde aspernatur odio magnam exercitationem explicabo
            temporibus
          </p>
        </div>
      </div>
      <div className="onpoint"></div>
      <div className={animation ? "sperm_animation sperm1" : "sperm1"}></div>
      <div className={animation ? "sperm_animation sperm2" : "sperm2"}></div>
      <div className={animation ? "sperm_animation sperm3" : "sperm3"}></div>
      <div className={animation ? "sperm_animation sperm4" : "sperm4"}></div>
      <div className={animation ? "sperm_animation sperm5" : "sperm5"}></div>
    </div>
  );
}
