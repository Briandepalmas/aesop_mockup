import React from 'react';
import './App.css';
import KevsAesopsGift from './component/images/KevsAesopsGift.png';
import kevBodyCleansingSlab from './component/kevs_odyssey/kevBodyCleansingSlab';
// import kev_Redemption_BodyScrub from './component/kevs_odyssey/kev_Redemption_BodyScrub';
// import kev_Reverence_Handwash from './component/kevs_odyssey/kev_Reverence_Handwash';


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
          <img src={ kevBodyCleansingSlab } className="cleanseSlabpic"alt="slabimg" />
          {/* <img src={ kev_Redemption_BodyScrub } className="bodyscrubpic"alt="ladderimg" />
          <img src={ kev_Reverence_Handwash } className="handwashpic"alt="ladderimg" /> */}
            
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