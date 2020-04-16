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
        <h3> An odyssey of gifts, for generous and inspired giving</h3>
          <img src={KevsAesopsGift} className="mainfloatImg"alt="ladderimg" />
            
            <p> Seasonal Gift Kits </p>
            <p> Aesop favourites  </p>
            <p> Small gestures </p>
            <p> Fragrant formulations </p>
            <p> Treats for self </p>
            <p> All gifts </p>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h4 id="handandbod"> For hands and body </h4>
            <h3 id="dailycleansing"> Daily cleansing </h3>
            <p> Ensure impecable hygiene with our </p>
            <p> range of mild yet efficacious formulations </p>


            <div className="threesoappicswords" >  
              <img src={ kev_Reverence_Handwash } className="handwashpic"alt="handwash" />
              <img src={ kev_Redemption_BodyScrub } className="bodyscrubpic"alt="bodyscrub" />
              <img src={ KevBodyCleansingSlab } className="cleanseSlabpic"alt="slabimg" />  
              <h6 id="txtUnderPic" > Reverence Aromatique Hand Wash </h6>
              <h6 id="txtUnderPic" > Redemption Body Scrub </h6>
              <h6 id="txtUnderPic" > Body Cleansing Slab </h6>
              <p id="txtUnderPic"> Woody, earthy, smoky aroma </p>
              <p id="txtUnderPic" > Bamboo Stem and Pumice, to polish skin </p>
              <p id="txtUnderPic" > Enriched with Bergamot Rind, Tahitan </p>
            </div>

            <button> See All Body -> </button>
      </div>
    );
  }
}

export default App;