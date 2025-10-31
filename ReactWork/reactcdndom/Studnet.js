const parent=document.getElementById("container")
console.log(parent);
const root=ReactDOM.createRoot(parent);
const h2=React.createElement("h2",{style:{backgroundColor:'brown',color:'white',paddingLeft:'452px'}},"Profile Page");
// root.render(h2)


const Name=<h2 style={{ color: '#333', fontSize: '24px', margin: '10px 0'} }>Vibhor</h2>
const Roll_No=<p style={{ color: '#555', fontSize: '18px' }}>2300320130274</p>
const Branch=<p style={{ color: '#555', fontSize: '18px' }}>Information Techonology</p>
const Section=<p style={{ color: '#555', fontSize: '18px' }}>IT-C</p>
const College=<p style={{ color: '#555', fontSize: '18px' }}>ABESEC</p>


const Profile=(
    <div className="PROFILE" style={{border:"1px solid black",padding:"10px",width:'300px'}}>
    {Name}{Roll_No}{Branch}{Section}{College}
    </div>
)
const APP=(
    <div>
        {h2}
        {Profile}
    </div>
)
root.render(APP)