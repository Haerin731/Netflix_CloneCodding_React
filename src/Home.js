import { Component } from 'react';
import Overlay from './Overlay.js';
import Footer from './Footer.js';
import MovieCards from './MovieCards.js';
import './Home.css';
import './Footer.css';
import './MovieCards.css';

class Home extends Component{
    render(){
        return(
            <div>
                <body>
                    <div class="home">
                        <video
                            src="./sweethome.mp4"
                            poster="./sweethome.jpg"
                            autoplay 
                            muted
                        >
                        </video>
                        
                        <Overlay></Overlay>
                        <MovieCards></MovieCards>
                    </div>
                </body>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;