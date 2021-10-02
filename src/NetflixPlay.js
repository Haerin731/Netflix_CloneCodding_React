import './NetflixPlay.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NetflixPlay = () => {
    return(
        <html>
        <body>
        <div class="backward-wrapper">
            <div class="go-backward">
            <FontAwesomeIcon icon={faArrowLeft} className="search" />
            </div>
        </div>
        <div class="play-video">
            <video
            src="../../sweethome.mp4"
            autoPlay 
            muted
            controls
            />
        </div>
        </body>
            </html>
    );
}

export default NetflixPlay;
