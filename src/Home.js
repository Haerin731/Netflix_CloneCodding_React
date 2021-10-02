import { Component } from 'react';
import Overlay from './Overlay.js';
import Footer from './Footer.js';
import MovieCards from './MovieCards.js';
import './Home.css';
import './Footer.css';
import './MovieCards.css';

class Home extends Component{
    // useEffect(()=>{
    //     console.log("홈 컴포넌트 생성");
    //     return () => {
    //         console.log("홈 컴포넌트 소멸");
    //     }
    // }, []);

    render(){
        const { params } = this.props.match;
        var userName = params.user;
        return(
            <html>
                <body>
                    <div className="home">
                        <video
                            src="../sweethome.mp4"
                            poster="../sweethome.jpg"
                            autoPlay 
                            muted
                        >
                        </video>
                        
                        <Overlay></Overlay>
                        <MovieCards user={userName}></MovieCards>
                    </div>
                </body>
                <Footer></Footer>
            </html>
        );
    }
}

export default Home;