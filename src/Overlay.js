import './Overlay.css';
import {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const GetNavItem = ({name}) => {
    return (
        <span class="nav-item">{name}</span>
    );
}

class Navigation extends Component{
    render(){
        return (
            <div class="nav">
                <GetNavItem name="홈"></GetNavItem>
                <GetNavItem name="TV 프로그램"></GetNavItem>
                <GetNavItem name="영화"></GetNavItem>
                <GetNavItem name="NEW! 요즘 대세 영화"></GetNavItem>
                <GetNavItem name="내가 찜한 콘텐츠"></GetNavItem> 
            </div>
        );
    }
}

class OverlayMenu extends Component{
    render(){
        return (
            <div class="menu">
                <span className="menu-item"><FontAwesomeIcon icon={faSearch} className="search" /></span>
                <span className="menu-item">키즈</span>
                <span className="menu-item"><FontAwesomeIcon icon={faGift} className="gift" /></span>
                <span className="menu-item"><FontAwesomeIcon icon={faUser} className="user" /></span>
                <span className="menu-item">A</span>
            </div>
        );
    }
}

class BannerButtons extends Component{
    render(){
        return (
            <div className="buttons">
                            <Link to="../Play">
                <div className="white-button" 
                    onclick="location.href='netflix_play.html'">
                    <FontAwesomeIcon icon={faPlay} className="play" />
                    재생
                </div>
        </Link>

                <div className="grey-button">
                    <FontAwesomeIcon icon={faInfoCircle} className="infoCircle" />
                    상세정보
                </div>
            </div>
        );
    }
}

class Banner extends Component{
    render(){
        return (
            <div className="banner">
                <div className="n-series">
                    <div className="n">N</div>
                    <div className="series">시리즈</div>
                </div>
                <div className="title">스위트 홈</div>
                <div className="badge">
                    오늘 한국에서 콘덴츠 순위 1위
                </div>
                <div className="description">
                    가족을 모두 잃은 은둔형 외톨이. 낡은 아파트에 혼자 살게 된 10대 소년 현수가 이웃들을 위해 무기를 든다. 괴물들이 날뛰기 전까지 몰랐다. 이렇게 살고 싶었을 줄은..
                </div>
                <BannerButtons></BannerButtons>
                <div className="extra">
                    <div className="replay" onclick="play()">
                        <FontAwesomeIcon icon={faSyncAlt} className="infoCircle" />
                    </div>
                    <div className="rating">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/KMRB_D.png" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

class Overlay extends Component{
    render(){
        return (
            <div className="overlay">
                <div className="header">
                    <div className="logo">NETFLIX</div>
                    <Navigation></Navigation>
                    <OverlayMenu></OverlayMenu>
                </div>
                <Banner></Banner>
            </div>
        );
    }
}

export default Overlay;