import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import './FridgeRaiders.css';

import FridgeLanding from '../../assets/Screen Shots/FridgeraidersLanding.PNG';
import FridgeSearch from '../../assets/Screen Shots/FridgeraidersSearch.PNG';
import FridgeResults from '../../assets/Screen Shots/FridgeraidersResults.PNG';

class FridgeRaiders extends Component {
  render() {
    return (
      <div className="frideRaiders-wrapper">
      <Carousel
      showThumbs={false}
      infiniteLoop={true}
      >
          <div>
          <img src={FridgeLanding} alt=""/>
          <p>Landing page for Fridgeraiders </p>
          </div>
          <div>
          <img src={FridgeSearch} alt=""/>
          <p>Enter ingredients to search for recipes which include those items</p>
          </div>
          <div>
          <img src={FridgeResults} alt=""/>
          <p>After submittin ingredients, user recieves a list of suggested recipes</p>
          </div>
      </Carousel>
      <h1><a href='https://www.fridge-raiders.site/#/'>Fridge-raiders.site</a></h1>
        <p>Worked with a group of fellow students to create Fridgeraiders, a recipe/cooking app. This appallows users to enter ingredients which they have on hand and receive a list of recipes whichinclude those ingredients. The sight uses a third-party API which draws recipes from a number ofsources to provide users with a large variety of culinary options.</p>
        <p>The front-end for this site was built using React, JavaScript, HTML, and CSS. SASS was also used for styling features</p>
        <p>The back-end utilizes Node.js for the server which connects to a database using Massive. The database is with PostgreSQL.</p>
        <p>Feel free to view to code to this project at: <a href='https://github.com/Fridgerators/fridgeraider'>https://github.com/Fridgerators/fridgeraider</a></p>
      </div>
    );
  }
}

export default FridgeRaiders;