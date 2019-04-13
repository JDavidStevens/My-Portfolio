import React, { Component } from 'react';
import './stack.css';
import ReactLogo from '../../assets/Portfolio Logos/transparentReact.png';
import JSLogo from '../../assets/Portfolio Logos/JS Logo.png';
import NodeLogo from '../../assets/Portfolio Logos/nodejs.png';
import HTMLLogo from '../../assets/Portfolio Logos/HTML.png';
import CSSLogo from '../../assets/Portfolio Logos/css.png';
import ReduxLogo from '../../assets/Portfolio Logos/Redux Logo.png';
import MobXLogo from '../../assets/Portfolio Logos/MobX.png';
import PostgresLogo from '../../assets/Portfolio Logos/Postgresql Logo.png';
import AuthLogo from '../../assets/Portfolio Logos/Auth0 Logo.png';
import GitLogo from '../../assets/Portfolio Logos/Git Logo.png';
import GitHubLogo from '../../assets/Portfolio Logos/Github.png';


class Stack extends Component {
  render() {
    return (
      <div className="stack" id="technologies">
        <h1 className='tech-title'>Technologies</h1>
        <div className="image-container">
          <div className="row-one">
          <div><div><img src={ReactLogo} alt='React'/></div><span>React.js</span></div>
          <div><div><img src={JSLogo} alt='JavaScript'/></div><span>JavaScript</span></div>
          <div><div><img src={NodeLogo} alt='Node.js'/></div><span>Node.js</span></div>
          <div><div><img src={HTMLLogo} alt='HTML 5'/></div><span>HTML</span></div>
          </div>
          <div className="row-two">
          <div><div><img src={CSSLogo} alt='CSS'/></div><span>CSS</span></div>
          <div><div><img src={ReduxLogo} alt='Redux'/></div><span>Redux</span></div>
          <div><div><img src={MobXLogo} alt='MobX'/></div><span>MobX</span></div>
          </div>
          
          <div className="row-three">
          <div><div><img src={PostgresLogo} alt='PostgreSQL'/></div><span>PostgreSQL</span></div>
          <div><div><img src={AuthLogo} alt='Auth0'/></div><span>Auth0</span></div>
          <div><div><img src={GitLogo} alt='Git'/></div><span>Git</span></div>
          <div><div><img src={GitHubLogo} alt='GitHub'/></div><span>GitHub</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stack;