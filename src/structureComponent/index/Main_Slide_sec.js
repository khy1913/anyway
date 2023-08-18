import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';
import './main_slide_sec.css'
import 'swiper/css';

function Main_Slide_sec() {

    const swiperParams = {
        navigation: {
          nextEl: '.pc_swiper_next', 
          prevEl: '.pc_swiper_prev' 
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
          breakpoints: {
            768: {
              navigation: {
                prevEl: '.pc_swiper_prev',
                nextEl: '.pc_swiper_next',
              },
            }
          },
          on: {
            slideChangeTransitionStart: function () {
              // 슬라이드 변경 시 텍스트 애니메이션을 초기 상태로
              var pTags = document.querySelectorAll('.slide_text_wrap p');
              var h2Tags = document.querySelectorAll('.slide_text_wrap h2');
              pTags.forEach(function (pTag) {
                pTag.style.animation = 'none';
                void pTag.offsetWidth; // 리플로우를 강제로 발생시켜 초기 상태로
                pTag.style.animation = 'textFloat 1.3s cubic-bezier(.4,0,.2,1) both';
                pTag.style.animationDelay = '0.3s';
              });
              h2Tags.forEach(function (h2Tag) {
                h2Tag.style.animation = 'none';
                void h2Tag.offsetWidth; // 리플로우를 강제로 발생시켜 초기 상태로
                h2Tag.style.animation = 'textFloat 1.3s cubic-bezier(.4,0,.2,1) both';
                h2Tag.style.animationDelay = '0.5s';
              });
            },
          },
      };
    
  return (
    <section className="main_slide_sections">
        <Swiper {...swiperParams}
            loop= {true} slidesPerView={1}
            autoplay={{delay: 3000, disableOnInteraction: false}}
            speed={1000} 
            effect={'fade'}
            navigation={true}
            modules={[EffectFade, Autoplay, Pagination, Navigation]}
            className="swiper mySwiper swiper-container">
            <ul className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                    <picture>
                        <source srcset="./images/main/slide01_1920.jpg" media="(min-width: 768px)"></source>
                        <img src="./images/main/slide01_768.jpg" alt="슬라이드01"></img>
                    </picture>
                    <div className="slide_text_wrap w1440">
                        <p>NEW BRAND FILM</p>
                        <h2>인삼, 아름다움 그리고 설화수</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide main_slide">
                    <picture>
                        <source srcset="./images/main/slide02_1920.jpg" media="(min-width: 768px)"></source>
                        <img src="./images/main/slide02_768.jpg" alt="슬라이드02"></img>
                    </picture>
                    <div className="slide_text_wrap">
                        <p>NEW GLOBAL AMBASSADOR</p>
                        <h2>설화수, 그리고 <span>TILDA</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide main_slide">
                    <picture>
                        <source srcset="./images/main/slide03_1920.jpg" media="(min-width: 768px)"></source>
                        <img src="./images/main/slide03_768.jpg" alt="슬라이드03"></img>
                    </picture>
                    <div className="slide_text_wrap">
                        <p>Sulwhasoo Flagship Store</p>
                        <h2><span>ROSÉ in BUKCHON</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide main_slide">
                    <picture>
                        <source srcset="./images/main/slide04_1920.jpg" media="(min-width: 768px)"></source>
                        <img src="./images/main/slide04_768.jpg" alt="슬라이드04"></img>
                    </picture>
                    <div className="slide_text_wrap">
                        <p>Concentrated Ginseng Renewing Cream EX</p>
                        <h2>자음생크림</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide main_slide">
                    <picture>
                        <source srcset="./images/main/slide05_1920.jpg" media="(min-width: 768px)"></source>
                        <img src="./images/main/slide05_768.jpg" alt="슬라이드05"></img>
                    </picture>
                    <div className="slide_text_wrap">
                        <p>SULWHASOO FIRST CARE ACTIVATING SERUM VI</p>
                        <h2>윤조에센스 <span>6</span>세대</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide main_slide">
                    <picture>
                        <source srcset="./images/main/slide06_1920.jpg" media="(min-width: 768px)"></source>
                        <img src="./images/main/slide06_768.jpg" alt="슬라이드06"></img>
                    </picture>
                    <div className="slide_text_wrap last_slide_text">
                        <p>Amore mall (7.24-7.30)</p>
                        <h2><span>BRAND WEEK</span></h2>
                    </div>
                </SwiperSlide>
            </ul>
            <button type="button" className="swiper-button pc_swiper_prev"></button>
            <button type="button" className="swiper-button pc_swiper_next"></button>
            <div className="pagination_container">
                <div className="pagination_container_inner">
                <div className="swiper-pagination progressbar"></div>
                <button type="button" className="pause">
                    <span className="stop"></span>
                </button>
                </div>
            </div>
        </Swiper>
    </section>
  )
}

export default Main_Slide_sec
