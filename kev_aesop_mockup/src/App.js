import React from 'react';
import './App.css';
import KevsAesopsGift from './component/images/KevsAesopsGift.png';
import KevBodyCleansingSlab from './component/kevOdyssey/KevBodyCleansingSlab.png';
import kev_Redemption_BodyScrub from './component/kevOdyssey/kev_Redemption_BodyScrub.png';
import kev_Reverence_Handwash from './component/kevOdyssey/kev_Reverence_Handwash.png';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }
  render() {
    return (
      <div id="leftpage" >
        <br/>
        <h4> An odyssey of gifts, for generous and inspired giving</h4>
          <img src={KevsAesopsGift} className="mainfloatImg"alt="ladderimg" />
          <img src={ kev_Reverence_Handwash } className="handwashpic"alt="handwash" />
            <h6> Reverence Aromatique Hand Wash </h6>
            <p id="txtUnderPic"> Woody, earthy, smoky aroma </p>

          <img src={ kev_Redemption_BodyScrub } className="bodyscrubpic"alt="bodyscrub" />
            <h6> Redemption Body Scrub </h6>
            <p id="txtUnderPic" > Bamboo Stem and Pumice, to polish skin </p>
          
          <img src={ KevBodyCleansingSlab } className="cleanseSlabpic"alt="slabimg" />
            <h6> Body Cleansing Slab </h6>
            <p id="txtUnderPic" > Enriched with Bergamot Rind, Tahitan </p>  
            
            <p> Seasonal Gift Kits </p>
            <p> Aesop favourites  </p>
            <p> Small gestures </p>
            <p> Fragrant formulations </p>
            <p> Treats for self </p>
            <p> All gifts </p>


            <h4 id="handandbod"> For hands and body </h4>
            <h3 id="dailycleansing"> Daily cleansing </h3>
            <p> Ensure impecable hygiene with our range of mild yet efficacious formulations </p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button> See all Body -> </button>
      </div>
    );
  }
}

export default App;