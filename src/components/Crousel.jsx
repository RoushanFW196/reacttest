
import React from 'react';
import Cards from './Cards';

const crousel = () => {
  return (
   

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* <img src="..." class="d-block w-100" alt="..."> */}
      <p>hello</p>
      <Cards/>
    </div>
    <div class="carousel-item">
      {/* <img src="..." class="d-block w-100" alt="..."> */}
      <p>hello2</p>
      <Cards/>
    </div>
    <div class="carousel-item">
      {/* <img src="..." class="d-block w-100" alt="..."> */}
      <p>hello3</p>
      <Cards/>
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


  )
}

export default crousel;