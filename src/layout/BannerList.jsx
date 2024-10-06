import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from "../styles/BannerList.module.css";
import { useRef } from "react";

export default function BannerList() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={style.banner_container}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nexDtEl = nextRef.current;
        }}
      >
        <SwiperSlide className={style.swiper_slide}>
          <div className={`${style.list} ${style.banner1}`}>
            <img
              src="http://tkfile.yes24.com/Upload2/Display/202408/20240830/wel_mv_50813_ebedea.jpg/dims/quality/70/"
              alt="늘봄"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>
          <div className={`${style.list} ${style.banner2}`}>
            <img
              src="http://tkfile.yes24.com/Upload2/Display/202409/20240910/wel_mv_50929.jpg/dims/quality/70/"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>
          <div className={`${style.list} ${style.banner3}`}>
            <img
              src="http://tkfile.yes24.com/Upload2/Display/202405/20240524/wel_mv_49795.png/dims/quality/70/"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>
          <div className={`${style.list} ${style.banner4}`}>
            <img
              src="http://tkfile.yes24.com/Upload2/Display/202409/20240905/wel_mv_50841_30094c.png/dims/quality/70/"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={style.btnPrev} ref={prevRef}>
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className={style.btnNext} ref={nextRef}>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
}
