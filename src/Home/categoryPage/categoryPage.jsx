import React, {useEffect, useState} from "react";
import cl from "./categoryPage.module.css";
import darya from "../../Home/categoryPage/imgs/header/darya.svg";
import loop from "../../Home/categoryPage/imgs/header/loop.svg";
import tool from "../../Home/categoryPage/imgs/header/tool.svg";
import saintPetersburg from "../../Home/categoryPage/imgs/main/section__places/saint-petersburg.png";
import coffee from "../../Home/categoryPage/imgs/main/section__places/icons/coffee.svg";
import circus from "../../Home/categoryPage/imgs/main/section__places/icons/circus.svg";
import woman from "../../Home/categoryPage/imgs/main/section__places/icons/woman.svg";
import castle from "../../Home/categoryPage/imgs/main/section__places/icons/castle.svg";
import tree from "../../Home/categoryPage/imgs/main/section__places/icons/tree.svg";
import loopp from "../../Home/categoryPage/imgs/main/section__places/icons/loop.svg";

import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import useFetch from "../../components/hooks/useFetch.js";
import Posts from "../../components/Posts.jsx";
import Slider from "../../components/Slider.jsx";
import Footer from "../../components/Footer.jsx";
import Loader from "../../components/UI/Loader/Loader.jsx";

const categoryPage = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const { data, loading, error } = useFetch(
      `https://places-test-api.danya.tech/api/categories`
  );

  const handleLoopClick = () => {
    setIsInputOpen(true);
  };

  return (
      <>
      {loading ? (
          <div className={cl.loaderContainer}>
            <Loader/>
          </div>
      ) : (
          <div className={cl.wrapper}>
            <header className={cl.header}>
      {!isInputOpen && (
          <div className={`${cl.header__container} ${cl._container}`}>
            <Link to={"/accountPage"}>
              <div className={cl.header__block__1}>
                <div className={cl.header__block__1__image__block}>
                  <img src={darya} alt=""/>
                </div>
                <div className={cl.header__text}>
                  <div className={cl.header__block__1__name}>Дарья</div>
                  <div className={cl.header__block__1__saves}>5 сохранений</div>
                </div>
              </div>
            </Link>

            <div className={cl.header__block__2}>
              <div className={cl.header__block__2__image__block}>
                <img className={cl.header__block__2__img} src={tool} alt=""/>
                <Link to={"/searchPage"}>
                  <img
                      className={cl.header__block__2__img}
                      src={loop}
                      alt=""
                      onClick={handleLoopClick}
                  />
                </Link>
              </div>
            </div>
          </div>
      )}
      {isInputOpen && <Input/>}
    </header>

    <main className={cl.main}>
      <section className={cl.section__places}>
        <div className={`${cl.section__places__container} ${cl._container}`}>
          <h2 className={cl.section__places__header}>КУДА ПОЙДЕМ?</h2>

          <div
              className={`${cl.section__places__image__block} ${cl.image__block}`}
          >
            <img
                className={cl.image__block__img}
                src={saintPetersburg}
                alt=""
            />
          </div>

          <div className={`${cl.section__places__card__block} ${cl.card}`}>
            <Link to={"/page2/food"}>
              <div className={cl.card__item}>
                <div className={cl.card__item__img}>
                  <img src={coffee} alt=""/>
                </div>
                <p className={cl.card__item__paragraph}>Где поесть</p>
              </div>
            </Link>
            <Link to={"/page2/interesting"}>
              <div className={cl.card__item}>
                <div className={cl.card__item__img}>
                  <img src={circus} alt=""/>
                </div>
                <p className={cl.card__item__paragraph}>Интересные места</p>
              </div>
            </Link>
            <Link to={"/page2/dance"}>
              <div className={cl.card__item}>
                <div className={cl.card__item__img}>
                  <img src={woman} alt=""/>
                </div>
                <p className={cl.card__item__paragraph}>Развлечения</p>
              </div>
            </Link>
            <Link to={"/page2/castle"}>
              <div className={cl.card__item}>
                <div className={cl.card__item__img}>
                  <img src={castle} alt=""/>
                </div>
                <p className={cl.card__item__paragraph}>Музеи и выставки</p>
              </div>
            </Link>
            <Link to={"/page2/tree"}>
              <div className={cl.card__item}>
                <div className={cl.card__item__img}>
                  <img src={tree} alt=""/>
                </div>
                <p className={cl.card__item__paragraph}>Загородом</p>
              </div>
            </Link>
            <Link to={"/page2/search"}>
              <div className={cl.card__item}>
                <div className={cl.card__item__img}>
                  <img src={loopp} alt=""/>
                </div>
                <p className={cl.card__item__paragraph}>Экскурсии</p>
              </div>
            </Link>
          </div>
          <div className={cl.section__places__button}>
            <button className={cl.section__places__btn}>
              Искать места рядом с вами
            </button>
          </div>
        </div>
      </section>
      <Slider/>
      <Posts/>
    </main>

    <Footer/>
  </div>

             )}
      </>
)
  ;
};

export default categoryPage;
