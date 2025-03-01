import React from "react";

export default function First_slide(props) {
  const { setSlide, setAnimation } = props;
  const handleClickNext = () => {
    setSlide((prev) => prev - 1024);
    setAnimation(true);
  };
  return (
    <div className="carusel__component__first components">
      <div className="home__btn">
        <div className="home__btn__text"></div>
      </div>
      <div className="text__container">
        <h1 className="hello__title">Привет,</h1>
        <div className="main__text">
          <p className="p__text">
            Это <strong className="strong__no">не </strong>
          </p>
          <p className="p__text">Коммерческое </p>
          <p className="p__text" id="last__p">
            задание
          </p>
        </div>
        <div className="btn__next" onClick={handleClickNext}>
          <button id="btn__next"></button>
        </div>
      </div>

      <div className="Layer_8"></div>
      <div className="bakti_1"></div>
      <div className="another_bakti"></div>
      <div className="Layer_7"></div>
      <div className="pink_sperm"></div>

      <div className="pinksperm_1"></div>
      <div className="Layer_4"></div>
      <div className="Layer__4__copy"></div>
      <div className="onpoint"></div>
    </div>
  );
}
