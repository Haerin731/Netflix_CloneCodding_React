import { Component } from 'react';
import './MovieCardHidden.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

class MovieCardHidden extends Component{
    render(){
        return(
            <div class="hidden">
                <div class="hidden-items">
                    <div class="movie-menu-list">
                        <div class="other-items">
                            <div class="movie-menu">
                                <span class="tooltip">재생하기</span>
                                <div class="menu-button-right-padding">
                                    <FontAwesomeIcon icon={faPlay} size="sm"/>
                                </div>
                            </div>
                            <div class="movie-menu">
                                <span class="tooltip">내가 찜한 콘텐츠에서 삭제</span>
                                <div class="menu-button">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            </div>
                            <div class="movie-menu">
                                <span class="tooltip">평가한 콘텐츠</span>
                                <div class="menu-button">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </div>
                            </div>
                            <div class="movie-menu">
                                <span class="tooltip">맘에 안 들어요</span>
                                <div class="menu-button">
                                    <FontAwesomeIcon icon={faThumbsDown} />
                                </div>
                            </div>
                            <div class="movie-menu">
                                <span class="tooltip">줄에서 삭제</span>
                                <div class="menu-button-right-padding">
                                    <FontAwesomeIcon icon={faTimes} />
                                </div>
                            </div>
                        </div>
                        <div class="description">
                            <div class="movie-menu">
                                <div class="menu-button">
                                    <span class="tooltip">회차 및 상세 정보</span>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="episode">
                        시즌 8: 16화 고백
                    </div>
                    <div class="progress-info">
                        <div class="progress_bar"></div>
                        <div class="time_info">
                            총 21분 중 16분
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCardHidden;