import './App.css';
import Home from './Home.js';
import ProfilePage from './ProfilePage.js'
import { Route } from 'react-router-dom';
import NetflixPlay from './NetflixPlay';

const App = () => {
  return (
    <div>
      <Route path="/" exact="true" component={ProfilePage} />
      <Route path="/Home" exact="true" component={Home} />
      <Route path="/Home/:user" exact="true" component={Home} />
      <Route path="/Play" exact="true" component={NetflixPlay} />
    </div>
  );
}

export default App;
