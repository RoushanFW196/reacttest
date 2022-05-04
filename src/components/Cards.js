
import React from 'react'
import Cardsslice from './Cardsslice';

const Cards = () => {
  return (
      <div >
    <Cardsslice heading={"Accounting"} title1={"Not Started"} title2={"In Progress"} title3={"Completed"}/>
    <Cardsslice heading={"Reconcilliation"} title1={"Not Started"} title2={"In Progress"} title3={"Completed"} />
    <Cardsslice heading={"Financial Reporting"} title1={"Not Started"} title2={"In Progress"} title3={"Completed"}/>
    <Cardsslice heading={"Middle Office"} title1={"Not Started"} title2={"In Progress"} title3={"Completed"}/>
    </div> 
    
  )
};

export default Cards;