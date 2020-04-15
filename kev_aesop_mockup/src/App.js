import React from 'react';
import './App.css';
import KevsAesopsGift from './component/images/KevsAesopsGift.png';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

     };
  }
  render() {
    return (
      <div id="leftpage" >
        <h4> An odyssey of gifts, for generous and inspired giving</h4>
          <img src={KevsAesopsGift} className="mainfloatImg"alt="ladderimg" />
            <p>
              <ul>
                <li> Seasonal Gift Kits </li>
                <li> Aesop favourites  </li>
                <li> Small gestures </li>
                <li> Fragran formulations </li>
                <li> Treats for self </li>
                <li> All gifts </li>
              </ul>
            </p>
      
        <h4> For hands and body </h4>
        <h3> Daily cleansing </h3>
          <p> Ensure impecable hygiene with our range of mild yet efficacious formulations </p>
          <button> See all Body -> </button>
      </div>
    );
  }
}

export default App;