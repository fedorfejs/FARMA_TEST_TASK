import React, { useEffect, useRef, useState } from "react";

export default function Third_slide(props) {
  const { setSlideThird } = props;
  const modalContentRef = useRef(null);
  const [slide, setSlide] = useState(0);
  const [modalON, setModalON] = useState(false);
  const [colored, setColored] = useState(false);

  const handleHome = () => {
    setSlideThird((prev) => prev + 2048);
  };

  const handleClickModal = () => {
    setModalON(true);
  };

  const handleCloseModal = () => {
    setModalON(false);
  };

  const handleModalNext = () => {
    let action = slide - 450;
    if (action === -450) {
      setSlide((prev) => prev - 450);
      setColored(!colored);
    }
  };
  const handleModalPrev = () => {
    let action = slide + 450;
    if (action === 0) {
      setSlide((prev) => prev + 450);
      setColored(!colored);
    }
  };

  useEffect(() => {
    if (modalContentRef.current) {
      modalContentRef.current.style.transform = `translateX(${slide}px)`;
    }
    if (modalON) {
      document.getElementById("myModal").style.display = "block";
    } else {
      document.getElementById("myModal").style.display = "none";
    }
  }, [modalON, slide]);

  return (
    <div className="carusel__component__third components">
      <div className="main__container__third">
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span onClick={handleCloseModal} className="close">
              &times;
            </span>
            <div
              className="arrow__right arrows"
              onClick={handleModalNext}
            ></div>
            <div className="arrow__left arrows" onClick={handleModalPrev}></div>
            <div
              className={
                colored ? "dot1 dots bg__dot__empty" : "dot1 dots bg__dot"
              }
            ></div>
            <div
              className={
                colored ? "dot2 dots bg__dot" : "dot2 dots bg__dot__empty"
              }
            ></div>

            <div className="modal__header">
              <p>Преимущества</p>
              <h1>
                Brend<strong>XY</strong>
              </h1>
            </div>
            <div className="modal__main__content">
              <div className="modal__window__content" ref={modalContentRef}>
                <div className="left__slide">
                  <p className="number__modal">01</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="number__modal">02</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <p className="number__modal">03</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>

                <div className="right__slide">
                  <p className="number__modal">04</p>
                  <p>Modi expedita voluptas nostrum vel blanditiis fuga at .</p>
                  <p className="number__modal">05</p>
                  <p>Modi expedita voluptas nostrum vel blanditiis fuga at.</p>
                  <p className="number__modal">06</p>
                  <p>Modi expedita voluptas nostrum vel blanditiis fuga at.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__bg__third"></div>
        <div className="home__btn__third" onClick={handleHome}></div>
        <div className="main__text__third">
          <p className="p__text__third">Ключевое сообщение</p>
          <h1 className="h1__main__text__third">
            Brend<strong id="strong__XY">XY</strong>
          </h1>
        </div>
        <div className="main__content__third">
          <div className="plate"></div>
          <div className="icon"></div>
          <div className="first__box">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              repellendus aspernatur officia.
            </p>
          </div>
          <div className="second__box">
            <p>Lorem ipsum dolor sit amet </p>
          </div>
          <div className="third__box" onClick={handleClickModal}></div>
        </div>
        <div className="bootle"></div>
        <div className="bubbles">
          <div className="bubble1 bubble__rotate1"></div>
          <div className="bubble2 bubble__rotate2"></div>
          <div className="bubble3 bubble__rotate1"></div>
          <div className="bubble4 bubble__rotate2"></div>
          <div className="bubble5 bubble__rotate2"></div>
          <div className="bubble6 "></div>
          <div className="bubble7 bubble__rotate2"></div>
          <div className="bubble8 bubble__rotate1"></div>
          <div className="onpoint_third"></div>
        </div>
      </div>
    </div>
  );
}
