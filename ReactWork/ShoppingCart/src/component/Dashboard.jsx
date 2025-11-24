import React, { useState, useEffect } from "react";

function Dashboard() {
  const [counter, setCounter] = useState(10);
  const [pointer, setPointer] = useState(50);

  useEffect(() => {
    console.log(counter);
    console.log(pointer);
  }, [counter]);

  return (
    <div>
      <h2>Counter Value = {counter}</h2>
      <h2>Pointer Value ={pointer}</h2>
      <button onClick={() => setCounter(counter + 20)}>Increment Counter</button>
      <button onClick={()=>setPointer(pointer+1)}>Increment Pointer</button>
    </div>
  );
}

export default Dashboard;
