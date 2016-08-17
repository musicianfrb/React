import React, {Component} from 'react';
import { render } from 'react-dom';

// first we import some components
import { Router, Route, Link } from 'react-router';

import About from './components/About/About';
import Home from './components/Home/Home';
import Repos from './components/Repos/Repos';



class App extends Component {
  render(){
    return (
      <div>
        <header>App</header>
        <menu>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/repos">Repos</Link></li>
          </ul>
        </menu>
        {this.props.children}
      </div>
    )
  }
}

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="repos" component={Repos}/>
    </Route>
  </Router>
), document.getElementById('root'));



