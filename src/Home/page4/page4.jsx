import cl from  "./page4.module.css"; 

import med_backBut from "./assets/icons/med_backBut.svg";
import pic_2 from "./assets/img/pic-2.svg";
import pic_1 from "./assets/img/pic-1.svg";
import pic_3 from "./assets/img/pic-3.svg";
import pic from "./assets/img/pic.svg";
import PiterTwo from "./assets/img/PiterTwo.svg";
import { Link } from 'react-router-dom';

const page4 = () => {
  return (
    <>
      <main className={cl.profile}>
        <Link to={"/"}>
          <a href="#!" id={cl.back}>
            <img src={med_backBut} alt="" />
          </a>
        </Link>
        <div className={cl.user_images}>
          <div id={cl.circle_img}>
            <img src={pic_2} alt="" id={cl.user_img} />
          </div>
          <p id={cl.tag_saved}>5 сохранений</p>
        </div>
        <div className={cl.user_date}>
          <h1 id={cl.user_name}>ДАРЬЯ</h1>
          <p id={cl.user_tag}>@DASHADASHKA</p>
        </div>
      </main>

      <section className={cl.saved}>
        <div className={cl.texxt_title}>
          <h2>СОХРАНЕНИЯ</h2>
          <span>(5)</span>
        </div>
        <div className={cl.list_saved}>
          <div className={cl.block_saved}>
            <img src={pic} alt="" />
            <div className={cl.like_icon}></div>
            <p>ПРОСТРАНСТВА</p>
            <h2>
              Арт-квартал <br /> Брусницын
            </h2>
          </div>
          <div className={cl.block_saved}>
            <img src={pic_1} alt="" />
            <div className={cl.like_icon}></div>
            <p>ПРОСТРАНСТВА</p>
            <h2>Особняк Мясникова</h2>
          </div>
          <div className={cl.block_saved}>
            <img src={pic_2} alt="" />
            <div className={cl.like_icon}></div>
            <p>ПРОСТРАНСТВА</p>
            <h2>Севкабель Порт</h2>
          </div>
          <div className={cl.block_saved}>
            <img src={pic_3} alt="" />
            <div className={cl.like_icon}></div>
            <p>ПРОСТРАНСТВА</p>
            <h2>Третье место</h2>
          </div>
        </div>
        <div className={cl.but}>ПОКАЗАТЬ ВСЕ</div>
      </section>

      <section className={cl.invite}>
        <img src={PiterTwo} alt="" />
        <h2>Зови друзей!</h2>
        <p>
          На случай если очень хочется поделиться нашим приложением с друзьями:{" "}
          <br /> отправляй эту пригласительную ссылку 👇
        </p>
        <p id={cl.hrefTG}>t.me/spbneformal_app_bot</p>
        <div className={cl.but}>СКОПИРОВАТЬ ССЫЛКУ</div>
      </section>

      <section className={cl.homeBlock3}></section>

      <section className={cl.homeBlock4}></section>
    </>
  );
};

export default page4;
