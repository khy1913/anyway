import React from 'react';
import '../js/gift.js'
import './side_menu.css';

function Side_menu(props) {
    return (
      <div className="side_cover">
        <div className="side_header">
          <a href="#" className="orange_logo"></a>
          <button classNameName="close_btn"></button>
        </div>
        <nav id="side_bar" className="side_bar">
          <div className="sideBox">
            <div className="side_content">
              <ul id="global_nav" className="nav_list">
                <li className="nav_d2"><a href="#" class="no_depth_menu">윤조</a></li>
                <li className="nav_d1"><a href="#" className="no_depth_menu">자음생</a></li>
                <li className="nav_d1"><a href="gift.html" className="no_depth_menu">기프트</a></li>
                <li className="nav_d1"><a href="#" className="depth_toggle">제품</a>
                  <ul className="nav_d2_box">
                    <li className="nav_d2"><a href="#" className="nav_d2_menu">스킨케어</a></li>
                    <li className="nav_d2"><a href="#" className="nav_d2_menu">메이크업</a></li>
                    <li className="nav_d2"><a href="#">남성</a></li>
                  </ul>
                </li>
                <li className="nav_d1"><a href="#" className="depth_toggle">스파</a>
                  <ul className="nav_d2_box">
                    <li className="nav_d2"><a href="#" className="nav_d2_menu">소개</a></li>
                    <li className="nav_d2"><a href="#" className="nav_d2_menu">스파 프로그램</a></li>
                    <li className="nav_d2"><a href="#" className="nav_d2_menu">예약</a></li>
                    <li className="nav_d2"><a href="#">매장 찾기</a></li>
                  </ul>
                </li>
                <li className="nav_d1"><a href="#" className="depth_toggle">플래그십 스토어</a>
                  <ul className="nav_d2_box">
                    <li className="nav_d2"><a href="#" className="nav_d2_menu">플래그십 스토어</a></li>
                    <li className="nav_d2"><a href="#" className="nav_d2_menu">설화수 북촌</a></li>
                    <li className="nav_d2"><a href="#">설화수 도산</a></li>
                  </ul>
                </li>
                <li className="nav_d1"><a href="#" className="depth_toggle">ABOUT 설화수</a>
                  <ul className="nav_d2_box">
                    <li className="nav_d2"><a href="#" className="nav_d2_menu nav_d3_menu">브랜드 스토리</a>
                      <ul className="nav_d3_box">
                        <li className="nav_d3"><a href="#">브랜드 빌리프</a></li>
                        <li className="nav_d3"><a href="#">브랜드 캠페인</a></li>
                      </ul>
                    </li>
                    <li className="nav_d2"><a href="#" className="nav_d2_menu nav_d3_menu">브랜드 앰버서더</a>
                      <ul className="nav_d3_box">
                        <li className="nav_d3"><a href="#">로제</a></li>
                        <ul className="nav_d4_box">
                          <li className="nav_d4"><a href="#">PART 1 SULWHASOO REBLOOM</a></li>
                          <li className="nav_d4"><a href="#">PART 2 ROSÉ IN BUKCHON</a></li>
                        </ul>
                        <li className="nav_d3"><a href="#" className="nav_d2_menu">틸다 스윈튼</a></li>
                      </ul>
                    </li>
                    <li className="nav_d2 b500"><a href="#" className="nav_d2_menu nav_d3_menu">ART</a>
                      <ul className="nav_d3_box">
                        <li className="nav_d3 b500"><a href="#">MET</a></li>
                        <li className="nav_d3"><a href="#" className="nav_d2_menu">설화문화전</a></li>
                      </ul>
                    </li>
                    <li className="nav_d2 b500"><a href="#" className="nav_d2_menu nav_d3_menu">HERITAGE</a>
                      <ul className="nav_d3_box">
                        <li className="nav_d3 b500"><a href="#">SINCE 1932</a></li>
                        <li className="nav_d3"><a href="#">명작컬렉션</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="other_info">
                <ul>
                  <li><a href="#">로그인</a></li>
                  <li>매장찾기</li>
                </ul>
                <button type="button" className="mobile_select_language">
                  <span>LANGUAGE</span>
                  <span className="language_select">한국/한국어 <img src="/images/main/icon/plus.png" alt="플러스아이콘"></img></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Side_menu;