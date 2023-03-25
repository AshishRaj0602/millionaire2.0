import React, { useState ,useEffect} from 'react'
import "./lifeline.css"
const Lifeline = ({setqueNum,}) => {
  const [lifeline,setLifeline] =useState(true);
  
  const lifelineHandler=() => {
    if(lifeline){
    setLifeline(false);
      setTimeout(() =>{
        setqueNum((prev)=> prev+1);
      },3000);
    }
  }
  return (
    // lifeline
    <div className={lifeline? "lifeline act":"lifeline inactive"}>
      <button className={lifeline? "button":"button disable"} onClick={lifelineHandler} >Life-line</button>
    </div>
  )
}

export default Lifeline
