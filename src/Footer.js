import {Component} from 'react';
import './Footer.css';

class MenuBar extends Component{
    render() {
        return(
            <div class="menu-bar">
                    <div class="menu-list">
                        <div class="sub-menu">자막 및 음성</div>
                        <div class="sub-menu">음성 지원</div>
                        <div class="sub-menu">고객 센터</div>
                        <div class="sub-menu">기프트 카드</div>
                    </div>
                    <div class="menu-list">
                        <div class="sub-menu">미디어 센터</div>
                        <div class="sub-menu">투자 정보(IR)</div>
                        <div class="sub-menu">입사 정보</div>
                        <div class="sub-menu">이용 약관</div>
                    </div>
                    <div class="menu-list">
                        <div class="sub-menu">개인 정보</div>
                        <div class="sub-menu">법적 고지</div>
                        <div class="sub-menu">쿠키 설정</div>
                        <div class="sub-menu">회사 정보</div>
                    </div>
                    <div class="menu-list">
                        <div class="sub-menu">문의하기</div>
                    </div>
                </div>
        );
    }
}

class SnsIcons extends Component{
    render(){
        return (
            <div class="sns-icons">
                <div class="sns-icon">
                    <i class="fab fa-facebook-square fa-2x"></i>
                </div>
                <div class="sns-icon">
                    <i class="fab fa-instagram fa-2x"></i>
                </div>
                <div class="sns-icon">
                    <i class="fab fa-twitter fa-2x"></i>
                </div>
                <div class="sns-icon">
                    <i class="fab fa-youtube fa-2x"></i>
                </div>
            </div>
        );
    }
}

class Footer extends Component{
    render() {
        return(
            <div class="bottom-menu">
                <SnsIcons></SnsIcons>
                <MenuBar></MenuBar>
                <div class="service-code">
                    서비스 코드
                </div>
                <div class="netflix-address">
                    넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587<br/>
                    대표: 레지널드 숀 톰프슨<br/>
                    이메일 주소 : korea@netflix.com<br/>
                    주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161<br/>
                    사업자등록번호: 165-87-00119<br/>
                    클라우드 호스팅 : Amazon Web Services Inc.<br/>
                    공정거래위원회 웹사이트<br/>
                </div>
            </div>
        );
    }
}

export default Footer;
