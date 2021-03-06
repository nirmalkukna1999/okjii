import React from "react";
import { MDBIcon } from "mdbreact";
import Asset1 from '../../img/home/Asset1.png';
import {} from "mdbreact";

const daily = () => {
return (
<div className="container-fluid okjii-daily">
  <div className="container pt-1">
  <div className="row">
  <div className="col-sm-6 col-md-12 col-lg-6">  
     <figure className="daily-figure-img pt-4">
              <img src={Asset1} className="img-fluid" width="90%" alt=""/>
    </figure>
</div>
  <div className="col-sm-6 col-md-12 col-lg-6">
  <h1><b className="daily">Daily</b> useable from nearby shops</h1>
              <p>Who knows your tastes and needs better than your local kirana shop?
It is our mission to upgrade our traditional kirana stores and fulfill your needs in the best way.</p>
              <ul className="list-unstyle">
                <li> 
                <MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Many payment options</li>
                <li> <MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Local kirana stores on your smartphone</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Browse with ease all of their products</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Digitalization of evergreen “UDHAAR”</li>
                <li><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Digitalization of faith, reliability &amp; local taste</li>
              </ul>

  </div>
  </div>
</div>
</div>

);
}

export default daily;






