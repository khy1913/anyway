import React, { useEffect } from 'react'
import Header from '../commonComponent/Header'
import Gift_section from '../structureComponent/gift/Gift_section'
import Jihambo_section from '../structureComponent/gift/Jihambo_section'
import Gift_outro from '../structureComponent/gift/Gift_outro'
import Footer from '../commonComponent/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Gift() {
  useEffect(() => {
    // 라이브러리 초기화
    AOS.init();

    // 비디오 컨트롤 관련 함수
    const playVideoAndShowControls = (video) => {
      video.play();
      video.controls = true;
    };

    const pauseVideoAndHideControls = (video) => {
      video.pause();
      video.controls = false;
    };

    // 비디오 마우스 오버/리브 이벤트 처리
    const videoContainers = document.querySelectorAll('.video_container .content_box');
    videoContainers.forEach((container) => {
      const video = container.querySelector('video');
      const posterImg = container.querySelector('.poster_img');
      const videoTxt = container.querySelector('.video_poster_txt');
      const videoBtn = container.querySelector('.more_info');

      container.addEventListener('mouseenter', () => {
        posterImg.style.opacity = '0';
        videoTxt.style.opacity = '0';
        videoBtn.style.opacity = '0';

        playVideoAndShowControls(video);
      });

      container.addEventListener('mouseleave', () => {
        pauseVideoAndHideControls(video);

        posterImg.style.opacity = '1';
        videoTxt.style.opacity = '1';
        videoBtn.style.opacity = '1';
      });
    });


    // a 막기
    const aLinks = document.querySelectorAll('a[href="#"]');
    aLinks.forEach((aLink) => {
      aLink.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
  }, []);

  return (
    <div>
      <Header />
      <Gift_section/>
      <Jihambo_section />
      <Gift_outro />
      <Footer />
    </div>
  )
}

export default Gift
