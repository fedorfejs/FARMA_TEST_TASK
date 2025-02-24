import React, { useEffect, useRef, useState } from "react";

export default function Second_slide(props) {
  const { animation, setAnimation } = props;
  const setslide = props.setSlide;
  const [value, setValue] = useState(0);
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);
  const textContainerRef = useRef(null);
  const sperm1 = useRef(null);
  const sperm2 = useRef(null);
  const sperm3 = useRef(null);
  const sperm4 = useRef(null);
  const sperm5 = useRef(null);

  const handleHome = () => {
    setslide((prev) => prev + 1024);
    setAnimation(false);
  };

  const handleMouseDown = (e) => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  const handleMouseMove = (e) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const thumbRect = thumbRef.current.getBoundingClientRect();
    const sliderHeight = sliderRect.height;
    const thumbHeight = thumbRect.height;
    const min = 0;
    const max = sliderHeight - thumbHeight;

    let newTop = e.clientY - sliderRect.top - thumbHeight / 2;
    newTop = Math.max(min, Math.min(newTop, max));

    thumbRef.current.style.top = `${newTop}px`;
    setValue(Math.round((newTop / max) * 100));

    const textContainer = textContainerRef.current;
    const textHeight = textContainer.scrollHeight - textContainer.clientHeight;
    const scrollTop = (newTop / max) * textHeight;
    textContainer.style.transform = `translateY(-${scrollTop}px)`;
  };

  const handleTouchMove = (e) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const thumbRect = thumbRef.current.getBoundingClientRect();
    const sliderHeight = sliderRect.height;
    const thumbHeight = thumbRect.height;
    const min = 0;
    const max = sliderHeight - thumbHeight;

    let newTop = e.touches[0].clientY - sliderRect.top - thumbHeight / 2;
    newTop = Math.max(min, Math.min(newTop, max));

    thumbRef.current.style.top = `${newTop}px`;
    setValue(Math.round((newTop / max) * 100));

    const textContainer = textContainerRef.current;
    const textHeight = textContainer.scrollHeight - textContainer.clientHeight;
    const scrollTop = (newTop / max) * textHeight;
    textContainer.style.transform = `translateY(-${scrollTop}px)`;
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchEnd = () => {
    document.removeEventListener("touchmove", handleTouchMove);
    document.removeEventListener("touchend", handleTouchEnd);
  };

  useEffect(() => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const thumbRect = thumbRef.current.getBoundingClientRect();
    const sliderHeight = sliderRect.height;
    const thumbHeight = thumbRect.height;
    const max = sliderHeight - thumbHeight;

    const initialTop = (value / 100) * max;
    thumbRef.current.style.top = `${initialTop}px`;

    const textContainer = textContainerRef.current;
    const textHeight = textContainer.scrollHeight - textContainer.clientHeight;
    const scrollTop = (initialTop / max) * textHeight;
    textContainer.style.transform = `translateY(-${scrollTop}px)`;
  }, [value, animation]);

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
            officia, fugiat autem dolore molestiae esse error porro quod
            repellendus impedit necessitatibus debitis vitae quos repudiandae
            magni aliquid dolorum quam, natus eius aperiam. Maxime aspernatur
            fugit possimus similique? Deserunt officiis, molestiae reiciendis
            doloribus praesentium vitae nisi obcaecati ut animi commodi ex
            labore tempora, quo quam consequuntur voluptatem aut ratione soluta.
            Obcaecati esse veritatis possimus laborum! Ipsam explicabo, rem
            minus vero corporis quidem quae aperiam laboriosam deserunt error
            natus aut nam facilis veritatis voluptates? Eligendi sit doloremque
            architecto in earum inventore similique possimus corrupti ad, quidem
            illo voluptate nisi veritatis nihil quo totam! Sint, accusamus optio
            officiis asperiores voluptas illum vel nihil voluptates repellat
            vitae nostrum doloribus placeat ducimus! Non cumque nihil unde
            aspernatur odio magnam exercitationem explicabo temporibus
            reiciendis sit accusamus enim earum, itaque quae et quam doloremque
            voluptates dolores incidunt ut totam? Iure sint soluta praesentium
            fuga consectetur ex, temporibus voluptatum, quia laudantium, culpa
            deserunt incidunt fugit excepturi earum ea ad saepe tenetur
            distinctio sed delectus in odio. Cumque dolorem quo minima
            voluptatum laboriosam officia quia maxime earum, fuga consectetur
            expedita laborum libero quibusdam maiores eligendi, repellendus illo
            excepturi ducimus! Asperiores nam voluptatum nisi a, nostrum aliquam
            facilis inventore magnam dolorum atque, cupiditate iusto quae?
            Consectetur animi numquam tempora quos molestias sit fuga veritatis
            blanditiis cum soluta ab voluptates, alias ratione id expedita
            reprehenderit quaerat cumque, minus possimus voluptas enim
            obcaecati. Ad, in porro aspernatur dolorem officiis iure alias
            excepturi quisquam quia molestias nobis, deleniti vel incidunt
            doloremque officia exercitationem vero, dolorum quibusdam. Modi
            dolorem vel id officiis non velit atque aliquam nam quam aliquid.
            Libero sed neque veniam excepturi obcaecati culpa, pariatur earum
            rerum, necessitatibus accusamus minus id quae unde fugiat placeat
            corporis esse quaerat quo magni inventore corrupti dicta sapiente.
            Ut commodi sunt aspernatur possimus nam, provident hic repudiandae
            perferendis laboriosam dolorum, alias vitae est iure! Quod
            perferendis architecto excepturi molestias non at distinctio quaerat
            doloribus. Consequuntur veniam dolore cum possimus aliquam aut illum
            excepturi distinctio illo. Modi minima voluptate ad repudiandae in
            inventore voluptas illo dicta officiis sequi aliquid magnam, illum
            officia animi repellendus natus sunt nobis eveniet qui voluptatibus
            similique eaque autem rem? Totam nobis quas consequuntur quod
            blanditiis ducimus amet quaerat eligendi corporis placeat nulla ab
            officiis similique ipsum, iusto repellendus alias maxime cupiditate
            nemo excepturi quia molestiae magnam odio accusamus? Incidunt
            provident, soluta eligendi, atque perferendis nesciunt quam
            asperiores numquam, quibusdam ratione aliquid eveniet molestiae
            aspernatur vitae omnis magni recusandae architecto sunt. A rem
            debitis, magni explicabo rerum laborum facere iusto at earum quasi
            ab eum tempore minus quo ratione! Aliquam ducimus eum, temporibus
            voluptatibus sed asperiores! Quod vero laudantium laboriosam tempore
            consectetur vel. Omnis ullam voluptates mollitia ipsam, deleniti
            fugiat eius ab impedit velit rem recusandae et odit totam nobis unde
            ad doloremque expedita pariatur cum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ducimus modi impedit quia? Nihil dolor
            at deleniti! Soluta beatae quaerat iusto non inventore debitis
            quidem neque quo distinctio vitae perferendis saepe necessitatibus
            laboriosam incidunt totam impedit, natus dicta? Ab consectetur
            dolore facere expedita incidunt, minima, excepturi impedit
            praesentium nihil, quos dolorem! Repudiandae nam atque cum ipsa sed
            fugiat animi aliquam repellat, ad excepturi quidem necessitatibus
            rerum quisquam! Ipsam unde quod dolorum sequi. Cupiditate ipsum nemo
            deserunt in soluta delectus deleniti asperiores dignissimos commodi,
            aperiam sapiente, corporis, incidunt dicta voluptate eveniet. Ipsum
            fugiat aliquid neque sit dolores temporibus modi rem id. Nemo itaque
            explicabo voluptatibus quibusdam asperiores, enim a beatae deleniti
            incidunt, totam natus ex ad placeat! Maiores, repudiandae illum
            fugit nam expedita officiis minima reprehenderit, asperiores in,
            harum amet perspiciatis eos quisquam labore ducimus ipsa. Dicta,
            delectus tenetur? Nisi blanditiis, neque officia aspernatur
            voluptates repellat accusantium ullam aliquam magnam quas quae, est
            dignissimos voluptas sequi asperiores necessitatibus atque, tenetur
            cumque impedit dolorum ipsum. Porro, optio, nisi assumenda fugit
            quas earum debitis ipsum officiis consequuntur exercitationem qui
            iure doloribus dignissimos sit nihil ipsa? Vero distinctio harum
            consequuntur amet iure voluptates porro suscipit nobis possimus
            expedita necessitatibus deserunt excepturi adipisci pariatur
            aspernatur praesentium tenetur aperiam, aliquid eveniet obcaecati,
            dolor perspiciatis? Qui id nulla veritatis, magni ipsam facere
            dicta. Unde, hic! Autem omnis delectus, optio sint, tempora dolore
            cum voluptatibus magni beatae recusandae unde atque quam nostrum non
            eum! Beatae accusantium, quis eum vitae assumenda cupiditate
            dolorem, quasi hic aspernatur officiis neque molestias a omnis
            exercitationem minima nihil expedita sapiente alias error quisquam
            atque labore? Esse molestiae optio quo inventore facere cupiditate,
            culpa doloribus iste assumenda harum accusamus eaque praesentium
            repellat quos reprehenderit vero. Corrupti aspernatur illum eaque
            atque, debitis doloribus quidem placeat ad quasi, vel magni rerum
            perferendis? Neque repudiandae distinctio nihil hic debitis error
            modi minus repellendus harum enim dolor consectetur nobis ratione
            consequuntur a dolore deserunt, mollitia autem? Omnis culpa dolores,
            ab sed alias magnam ad possimus commodi illo aliquam consectetur
            architecto itaque obcaecati pariatur repellendus enim corrupti eius
            veniam rem hic! Corporis ducimus praesentium facilis, enim minima,
            deserunt aliquam fugit rem quas aperiam perferendis magnam!
            Necessitatibus sapiente amet ullam blanditiis quos, molestiae
            accusantium totam quidem quas voluptatum doloribus. Ab hic
            perspiciatis consequatur adipisci ullam maxime velit nam itaque
            ducimus omnis dignissimos laudantium incidunt quia sequi quas atque
            earum, beatae sapiente harum suscipit qui voluptate at repudiandae?
            Ex velit amet quaerat suscipit iure autem alias ratione, optio
            cumque nobis odit voluptas veniam cum esse minima perferendis quae
            sunt asperiores error nam aliquid et! Consequatur vel itaque
            provident totam ad dolor quod cupiditate nam voluptas? Voluptatibus
            tempora deleniti, neque voluptates, nemo iusto pariatur commodi est
            omnis aspernatur ullam repellat eaque animi consequuntur repellendus
            necessitatibus iste ducimus incidunt sapiente consequatur quas
            corporis. Reprehenderit, incidunt! Itaque, ab. Amet quibusdam
            temporibus blanditiis voluptate, culpa ducimus cupiditate soluta
            nesciunt ipsam vitae laborum itaque sequi iste eum libero cum neque
            nemo quae dolor deserunt! Illo sit natus in temporibus sequi, vel
            odio, id quod reprehenderit neque, optio obcaecati quasi! Aperiam
            itaque expedita laboriosam repellat officiis enim illo veniam,
            maxime a provident earum molestiae ea eum quam tenetur temporibus.
            Saepe, rerum dolorum quae nobis nisi ducimus sunt sit doloribus aut
            eius rem error suscipit veritatis nemo assumenda quam velit
            voluptates. Expedita fuga magnam facere! Doloribus facilis ipsum
            animi voluptatibus! Earum consequatur, iure accusamus consectetur,
            tenetur nihil nobis natus quos qui quaerat veritatis modi non,
            assumenda aspernatur unde repudiandae distinctio quod officiis dolor
            ducimus! Ipsum, tempora dolores! Laboriosam quas quasi natus
            officia! Culpa distinctio molestiae, nostrum magnam suscipit harum
            veritatis aspernatur consequuntur reprehenderit ullam sed voluptate
            ad minima iusto totam quidem explicabo ipsa eius incidunt! Error ex
            natus repellat nam laboriosam autem modi eius esse velit commodi
            reprehenderit rerum nisi, cum earum molestias temporibus doloremque,
            tempore doloribus quo quaerat. Reprehenderit magni esse natus
            architecto in iste placeat eaque porro, suscipit velit sunt
            explicabo recusandae. Exercitationem asperiores corporis,
            consequatur adipisci quasi ipsa laudantium eveniet doloremque qui
            nihil tenetur modi aperiam doloribus, facilis laboriosam est
            consectetur inventore animi, sed id possimus architecto cupiditate.
            Doloremque pariatur ex et quas! Quasi, in animi dicta, eos atque
            veritatis, asperiores amet culpa totam at mollitia consequatur
            laudantium provident fuga quam distinctio quos. Minima animi maxime
            eveniet velit consequatur eos cumque cupiditate vel corrupti in
            explicabo quaerat corporis dolorum voluptate asperiores, alias
            beatae quos itaque ipsum sequi doloremque distinctio dolores.
            Reiciendis ipsa accusantium assumenda itaque nobis. Fuga
            perspiciatis in iusto, quidem temporibus quod eaque totam numquam
            reprehenderit molestias est culpa reiciendis accusantium architecto
            nesciunt a debitis quam consequatur mollitia vero voluptates
            doloribus nihil omnis sed! At veritatis, expedita quam modi
            distinctio neque ipsam exercitationem optio odio ex saepe provident.
            Atque, quas dicta? Consequatur natus doloribus eos beatae maiores id
            qui incidunt consectetur quas, facere, facilis culpa enim
            perspiciatis ipsam doloremque a corrupti voluptas odit itaque
            expedita ut officiis corporis sequi! Magni assumenda cumque,
            accusantium quis voluptate, dolore dolor, eius non quia vel delectus
            architecto. At molestias itaque, sunt maxime laboriosam incidunt
            dignissimos pariatur, aperiam quidem recusandae aut minus cum
            assumenda iste esse quis ducimus enim placeat. Unde natus id sit
            obcaecati atque, quas eius? Esse cum, illum animi fugiat id minima.
            Ab itaque ea cum at incidunt inventore laborum, maxime sequi quos
            aspernatur placeat repellat possimus eveniet, rerum dignissimos fuga
            sunt illo repudiandae dolorum rem soluta ipsam est! Dolorem
            reiciendis quidem libero nobis, impedit cum quo, esse incidunt
            doloribus cupiditate ipsum voluptas. Maxime qui assumenda optio
            veniam dolore accusamus. Ut optio perferendis mollitia nisi
            reprehenderit corporis eius ducimus voluptate eligendi est eum
            autem, omnis qui eos, tempora quo nam dolorum commodi. Eligendi
            praesentium voluptatem molestias delectus quaerat qui, facilis eos
            nisi ducimus nostrum hic iste quod minus explicabo consectetur atque
            officia suscipit perspiciatis pariatur voluptate illum. Repudiandae
            tenetur facere quae eius commodi! Fugiat ad sequi repudiandae in
            facilis temporibus quas mollitia, praesentium, neque ducimus,
            architecto nulla distinctio odit aliquam consequatur tempore!
            Recusandae accusamus ipsam aperiam nisi doloremque autem totam
            dolor, magnam earum quos ex esse optio eos aliquid, velit iure, qui
            numquam impedit? Temporibus, aperiam debitis.
          </p>
        </div>
      </div>
      <div className="onpoint"></div>
      <div
        className={animation ? "sperm_animation sperm1" : "sperm1"}
        ref={sperm1}
      ></div>
      <div
        className={animation ? "sperm_animation sperm2" : "sperm2"}
        ref={sperm2}
      ></div>
      <div
        className={animation ? "sperm_animation sperm3" : "sperm3"}
        ref={sperm3}
      ></div>
      <div
        className={animation ? "sperm_animation sperm4" : "sperm4"}
        ref={sperm4}
      ></div>
      <div
        className={animation ? "sperm_animation sperm5" : "sperm5"}
        ref={sperm5}
      ></div>
    </div>
  );
}
