
import React from 'react'
import Cards from "./Cards";
import "./cards.css";
const Body = () => {


 const handlepin=()=>{
     
 }




  return (
    <div className="cards-container">
{/* 
        <div className="card-details">
        <span className="card-title">Indigo</span>
        <span onClick={handlepin}>
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/73/73169.png"/>
        </span>
        <Cards/>
        </div>
       
     <div className="card-details">
        <span className="card-title">Indigo</span>
        <span onClick={handlepin}>
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/73/73169.png"/>
        </span>
        <Cards/>
        </div>

        <div className="card-details">
        <span className="card-title">Vistara</span>
        <span>
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/73/73169.png"/>
        </span>
        <Cards/>
        </div>
       

        <div className="card-details">
        <span className="card-title">client3</span>
        <span>
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/73/73169.png"/>
        </span>
        <Cards/>
        </div>
       
 */}


 <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">

    <div className="card-details">
        <span className="card-title">Indigo</span>
        <span onClick={handlepin}>
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/73/73169.png"/>
        </span>
        <Cards/>
        </div>




    </div>
    <div class="carousel-item">
    
    <div className="card-details">
        <span className="card-title">Rainbow</span>
        <span onClick={handlepin}>
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/73/73169.png"/>
        </span>
        <Cards/>
        </div>


    </div>

    <div class="carousel-item">
    <div className="card-details">
        <span className="card-title">Vistara</span>
        <span>
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/73/73169.png"/>
        </span>
        <Cards/>
        </div>
    </div>


    <div class="carousel-item">
    <div className="card-details">
        <span className="card-title">client3</span>
        <span>
            <img className="icon" src="https://cdn-icons-png.flaticon.com/512/73/73169.png"/>
        </span>
        <Cards/>
        </div>
    </div>




  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>








    </div>
  )
}

export default Body;
