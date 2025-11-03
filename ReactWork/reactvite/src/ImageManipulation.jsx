import React, { useState } from 'react'
import img from "./IMG.png"


function ImageManipulation() {
    const [catHeight,setCatHeight]=useState(200);
    
  return (
    <div>
      <div>ImageManipulation</div>
      <div style={{ margin:'0px auto',border:'2px solid green ',width:'350px',height:'500px',paddingLeft:'150px',paddingTop:'150px'}}>
        <img src={img} height={catHeight} width={200} alt="IMG image" />
      </div>   
      <div>
        <button onClick={()=>setCatHeight(catHeight+20)}>Increase Height</button></div> 
        <button onClick={()=>setCatHeight(catHeight-10)}>Decrease Height</button>
    </div>
  )
}

export default ImageManipulation
