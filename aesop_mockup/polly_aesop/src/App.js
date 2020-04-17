import React from 'react';
import './App.css';
import Aesop from "./images/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg";
 
function Page4() {
   return(
   <div class="container">
     
  
     <div><h6 id="architecture">Architecture and Design &nbsp; Aesop stores are informed by the history, fabric and context of their own environmnets, yet retain an aesthetic consistency. </h6></div>
     
     <h4 id="spaces">Spaces of distinction</h4>
     <h6 id="nearby"> Find a nearby store -></h6>
     <img src={ Aesop } className="fountainImg"alt="waterFountain" />
     <div><h6 id="page"> 1 of 5   &nbsp;  Aesop Bleecker Street</h6></div>
     <h6 id="zip">341 Bleecker St, New York, NY 10014</h6>


</div>
   )

}

export default Page4