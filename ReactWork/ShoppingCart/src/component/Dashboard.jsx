import React, { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const resdata = await response.json();
      setData(resdata);
      console.log(resdata);
    }
    getData();
  }, []);
  function AddtoCart(element){
    alert(element.title)
  }

  return (
    <div >
      {data.length === 0 ? (
        <h2>Data not Found</h2>
      ) : (
        <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap", marginTop:"40px"}}>
          {/* Product Cards */}
          {data.map((element) => (
            <div
              key={element.id}
              style={{ border: "2px solid red", height: "500px", width: "30%", marginBottom: "20px",display: "flex",
                flexDirection: "column",alignItems: "center",justifyContent: "center",boxSizing: "border-box",padding: "10px",}}
            >
              <img src={element.image} height={100} width={100} alt={element.title} />
              <h3>{element.title}</h3>
              <p>{element.description}</p> 
              <p>{element.price}</p>
              <button onClick={()=>AddtoCart(element)}>Add to Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
