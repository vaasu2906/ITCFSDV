import React,{useState} from 'react'

function StateHandling() {

    const [counter,setCounter]=useState(20);
    function increaseValue(){
        // alert("hii");
        setCounter(counter+10);
    }
    // function decreaseValue(){
    //     setCounter(counter-10);
    // }
  return (
    <div>StateHandling
        <h2>Counter value={counter}</h2>
        <button onClick={increaseValue}>Increase Value</button>
        {/* <button onClick={decreaseValue}>Decrease Value</button> */}
        <button onClick={()=>setCounter(counter-20)}>Decrease Value</button>
    </div>
  )
}

export default StateHandling