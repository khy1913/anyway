import React, { Component } from 'react'
import './header.css'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isSideCoverVisible: false
        };
      }

    openSideCover = () => {
        this.setState({ isSideCoverVisible: true });
    }

    closeSideCover = () => {
        this.setState({ isSideCoverVisible: false });
    }

    render() {
        const { isSideCoverVisible } = this.state;

        return (
            <div>
                <header id="header">
                    <div className="moblie_header_inner">
                        <div className="hamburger">
                        <button type="button" onClick={this.openSideCover} id="sideBar_open"><i className="icon_menu"></i></button>
                    </div>
                    <div className="logo">
                        <a href="index.html" className="logo_a"><img src="./images/main/sulwhasoo_white_logo.png" alt="설화수로고"></img></a>
                    </div>
                    <div className="search"><img src="./images/main/icon/search_white_icon.png" alt="서치아이콘"></img></div>
                    </div>
                
                    <div className="pc_header_inner">
                        <div className="pc_lnb w1100">
                            <div className="language_select">한국/한국어 <img src="./images/main/icon/language_arrow_white.png" alt="언어선택탭" id="language_icon"></img></div>
                            <div className="pc_logo"><a href="index.html"><img src="./images/main/sulwhasoo_white_logo.png" alt="설화수로고" id="pc_orange_logo"></img></a></div>
                            <div className="search_area">
                                <span>매장찾기</span>
                                <span>구매하기</span>
                                <span><img src="./images/main/icon/search_white_icon.png" alt="서치아이콘" id="search_icon"></img></span>
                            </div>
                        </div>
                        <div className="pc_nav">
                            <ul className="pc_gnb_menu">
                                <li className="pc_nav_d1"><a href="#" className="d1_menu">윤조</a></li>
                                <li className="pc_nav_d1"><a href="#" className="d1_menu">자음생</a></li>
                                <li className="pc_nav_d1"><a href="gift.html" className="d1_menu">기프트</a></li>
                                <li className="pc_nav_d1"><a href="#" className="d1_menu">제품</a>
                                    <ul className="pc_nav_d2_box">
                                        <div className="pc_nav_d2_container d2_box1">
                                            <li className="pc_nav_d2"><a href="#" className="d2_hover">스킨케어</a></li>
                                            <li className="pc_nav_d2"><a href="#" className="d2_hover">메이크업</a></li>
                                            <li className="pc_nav_d2"><a href="#" className="d2_hover">남성</a></li>
                                        </div>
                                    </ul>
                                </li>
                                <li className="pc_nav_d1"><a href="#" className="d1_menu">스파</a>
                                    <ul className="pc_nav_d2_box">
                                        <div className="pc_nav_d2_container d2_box2">
                                            <li className="pc_nav_d2"><a href="#" className="d2_hover">소개</a></li>
                                            <li className="pc_nav_d2"><a href="#" className="d2_hover">스파 프로그램</a></li>
                                            <li className="pc_nav_d2"><a href="#" className="d2_hover">예약</a></li>
                                            <li className="pc_nav_d2"><a href="#" className="d2_hover">매장 찾기</a></li>
                                        </div>
                                    </ul>
                                </li>
                                <li className="pc_nav_d1"><a href="#" className="d1_menu">플래그십 스토어</a>
                                    <ul className="pc_nav_d2_box">
                                        <div className="pc_nav_d2_container d2_box3">
                                            <li className="pc_nav_d2"><a href="#" className="d2_hover">설화수 북촌</a></li>
                                            <li className="pc_nav_d2"><a href="#" className="d2_hover">설화수 도산</a></li>
                                        </div>
                                    </ul>
                                </li>
                                <li className="pc_nav_d1"><a href="#" className="d1_menu">ABOUT 설화수</a>
                                    <ul className="pc_nav_d2_box">
                                        <div className="pc_nav_d2_container d2_box4">
                                            <li className="pc_nav_d2"><a href="#" className="d2_menu">브랜드 스토리</a>
                                                <ul className="pc_nav_d3_box">
                                                    <li className="pc_nav_d3"><a href="#">브랜드 빌리프</a></li>
                                                    <li className="pc_nav_d3"><a href="#">브랜드 캠페인</a></li>
                                                </ul>
                                            </li>
                                            <li className="pc_nav_d2"><a href="#" className="d2_menu">브랜드 앰버서더</a>
                                                <ul className="pc_nav_d3_box">
                                                    <li className="pc_nav_d3"><a href="#">로제</a></li>
                                                    <li className="pc_nav_d3"><a href="#">틸다 스윈튼</a></li>
                                                </ul>
                                            </li>
                                            <li className="pc_nav_d2"><a href="#" className="d2_menu">ART</a>
                                                <ul className="pc_nav_d3_box">
                                                    <li className="pc_nav_d3"><a href="#">MET</a></li>
                                                    <li className="pc_nav_d3"><a href="#">설화문학전</a></li>
                                                </ul>
                                            </li>
                                            <li className="pc_nav_d2"><a href="#" className="d2_menu">HERITAGE</a>
                                                <ul className="pc_nav_d3_box">
                                                    <li className="pc_nav_d3"><a href="#">SINCE 1932</a></li>
                                                    <li className="pc_nav_d3"><a href="#">명작컬렉션</a></li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>

                {isSideCoverVisible && (
                    <div className="side_cover" onClick={this.closeSideCover}>
                        <div class="side_header">
                        <a href="#" class="orange_logo"></a>
                        <button type="button" class="close_btn"></button>
                        </div>
                        <nav id="side_bar" class="side_bar">
                        <div class="sideBox">
                            <div class="side_content">
                            <ul id="global_nav" class="nav_list">
                                <li class="nav_d1"><a href="#" class="no_depth_menu">윤조</a></li>
                                <li class="nav_d1"><a href="#" class="no_depth_menu">자음생</a></li>
                                <li class="nav_d1"><a href="gift.html" class="no_depth_menu">기프트</a></li>
                                <li class="nav_d1"><a href="#" class="depth_toggle">제품</a>
                                <ul class="nav_d2_box">
                                    <li class="nav_d2"><a href="#" class="nav_d2_menu">스킨케어</a></li>
                                    <li class="nav_d2"><a href="#" class="nav_d2_menu">메이크업</a></li>
                                    <li class="nav_d2"><a href="#">남성</a></li>
                                </ul>
                                </li>
                                <li class="nav_d1"><a href="#" class="depth_toggle">스파</a>
                                <ul class="nav_d2_box">
                                    <li class="nav_d2"><a href="#" class="nav_d2_menu">소개</a></li>
                                    <li class="nav_d2"><a href="#" class="nav_d2_menu">스파 프로그램</a></li>
                                    <li class="nav_d2"><a href="#" class="nav_d2_menu">예약</a></li>
                                    <li class="nav_d2"><a href="#">매장 찾기</a></li>
                                </ul>
                                </li>
                                <li class="nav_d1"><a href="#" class="depth_toggle">플래그십 스토어</a>
                                <ul class="nav_d2_box">
                                    <li class="nav_d2"><a href="#" class="nav_d2_menu">플래그십 스토어</a></li>
                                    <li class="nav_d2"><a href="#" class="nav_d2_menu">설화수 북촌</a></li>
                                    <li class="nav_d2"><a href="#">설화수 도산</a></li>
                                </ul>
                                </li>
                                <li class="nav_d1"><a href="#" class="depth_toggle">ABOUT 설화수</a>
                                <ul class="nav_d2_box">
                                    <li class="nav_d2"><a href="#" class="nav_d2_menu nav_d3_menu">브랜드 스토리</a>
                                    <ul class="nav_d3_box">
                                        <li class="nav_d3"><a href="#">브랜드 빌리프</a></li>
                                        <li class="nav_d3"><a href="#">브랜드 캠페인</a></li>
                                    </ul>
                                    </li>
                                    <li class="nav_d2"><a href="#" class="nav_d2_menu nav_d3_menu">브랜드 앰버서더</a>
                                    <ul class="nav_d3_box">
                                        <li class="nav_d3"><a href="#">로제</a></li>
                                        <ul class="nav_d4_box">
                                        <li class="nav_d4"><a href="#">PART 1 SULWHASOO REBLOOM</a></li>
                                        <li class="nav_d4"><a href="#">PART 2 ROSÉ IN BUKCHON</a></li>
                                        </ul>
                                        <li class="nav_d3"><a href="#" class="nav_d2_menu">틸다 스윈튼</a></li>
                                    </ul>
                                    </li>
                                    <li class="nav_d2 b500"><a href="#" class="nav_d2_menu nav_d3_menu">ART</a>
                                    <ul class="nav_d3_box">
                                        <li class="nav_d3 b500"><a href="#">MET</a></li>
                                        <li class="nav_d3"><a href="#" class="nav_d2_menu">설화문화전</a></li>
                                    </ul>
                                    </li>
                                    <li class="nav_d2 b500"><a href="#" class="nav_d2_menu nav_d3_menu">HERITAGE</a>
                                    <ul class="nav_d3_box">
                                        <li class="nav_d3 b500"><a href="#">SINCE 1932</a></li>
                                        <li class="nav_d3"><a href="#">명작컬렉션</a></li>
                                    </ul>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            <div class="other_info">
                                <ul>
                                <li><a href="#">로그인</a></li>
                                <li>매장찾기</li>
                                </ul>
                                <button type="button" class="mobile_select_language">
                                <span>LANGUAGE</span>
                                <span class="language_select">한국/한국어 <img src="/images/main/icon/plus.png" alt="플러스아이콘"></img></span>
                                </button>
                            </div>
                            </div>
                        </div>
                        </nav>
                    </div>
                )}
            </div>
        )
    }
}
export default Header;