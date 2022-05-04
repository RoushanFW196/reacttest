import React from 'react';
import Accordians from './Accordians';
import "./cardslice.css";

const Cardsslice = (props) => {
 console.log(props)
  return (
     <div className="card-slice">
       {/* <h1 className="slice-header">{props.heading}</h1> */}
        <Accordians heading={props.heading}/>
        <div className="slice-component">
            <div>
                <p className="slice-title">{props.title1}</p>
                <span className="redspan">2</span>
                <span className="grayspan">6</span>
            </div>

            <div>
                <p className="slice-title">{props.title2}</p>
                <span className="redspan">5</span>
                <span className="grayspan">10</span>
            </div>
            <div>
                <p className="slice-title">{props.title3}</p>
                <span className="redspan">2</span>
                <span className="greenspan">10</span>
            </div>
        </div>
     </div>
  )
}

export default Cardsslice;
