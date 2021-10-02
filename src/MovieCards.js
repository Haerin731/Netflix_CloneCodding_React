import MovieCardHidden from './MovieCardHidden.js';
import './MovieCards.css';
import './MovieCardHidden.css';

const GetCategory = ({title}) => {
    return (
        <div class="category">
                <div class="subtitle">
                    {title}
                </div>
                <div class="list">
                    <GetMovieCard src = "https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWROWc4ipy4upELRXgU25JKDF6f0f83XKF2sgMbtdp5Nf4nyKIeKe9ZsNGeTV5PCo-p1-GFODIoWSS7WG-pAMGMW_GM.webp?r=d03"></GetMovieCard>
                    <GetMovieCard src = "https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXDK-s7kGPUkRWRLc2DNGgA52iPF65Qs_cU8NU7E6DMmTBZRHQ03WDWUrUkAZD397Q_ijj_AOMGzEhql8q2LCukXsjRqGADzS04-fmw7wMdd59wNUk9vGahOadcWN-pOS4F9hLdyYuYj5NRGWDOpR7FVzDFp4N2ofSo6r1-KWzXb1Niv1MAb-hWl_VU7.webp?r=84b"></GetMovieCard>
                    <GetMovieCard src = "https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdpT8YY65LBIxbhPu0lCquTt5zxG50CLtEFNDkS3oIcb7NYUNa2Fcg1V5QfoEu7yTBZukxFysUE3uMx24QV7xMC0ikU.webp?r=8be"></GetMovieCard>
                    <GetMovieCard src = "https://source.unsplash.com/224x126/?a"></GetMovieCard>
                    <GetMovieCard src = "https://source.unsplash.com/224x126/?b"></GetMovieCard>
                    <GetMovieCard src = "https://source.unsplash.com/224x126/?c"></GetMovieCard>
                    <GetMovieCard src = "https://source.unsplash.com/224x126/?d"></GetMovieCard>
                </div>
            </div>
    )
}

const GetMovieCard = ({src}) => {
    return (
    <div class="movie">
        <img src={src} alt=""/>
        <MovieCardHidden></MovieCardHidden>
    </div>
    );
}

const MovieCards = ({user}) => {
    var userTitle = user + "님이 시청중인 컨텐츠";
    return (
        <div class="category-list">
                <GetCategory title="지금 뜨는 컨텐츠"></GetCategory>
                <GetCategory title={userTitle}></GetCategory>
                <GetCategory title="TV 프로그램"></GetCategory>
                <GetCategory title="TV 프로그램,흥미진진"></GetCategory>
                <GetCategory title="시련에 맞서는 연인"></GetCategory>
                <GetCategory title="TV프로그램, 코미디"></GetCategory>
                <GetCategory title="액션 & 어드벤쳐"></GetCategory>
                <GetCategory title="내가 찜한 콘텐츠"></GetCategory>
        </div>
    );
}

export default MovieCards;
