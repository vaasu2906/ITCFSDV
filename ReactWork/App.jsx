const container=document.getElementById('container');
const containernew=document.getElementById('containernew');
const root=ReactDOM.createRoot(container);
const pic = React.createElement("img", {src: "https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg",style: {width: "150px",height: "150px",borderRadius: "50%",},});
const h2=React.createElement("h2",{style:{backgroundColor:'brown',color:'white',paddingLeft:'452px'}},"Welcome to react development using CDN");
const name=React.createElement("h3",{},"Vibhor");
const li1=React.createElement("li",{},"Java ");
const li2=React.createElement("li",{},"Python");
const li3=React.createElement("li",{},"React");
const ul = React.createElement("ul",{ style: { backgroundColor: "pink",textDecoration:'underline'   } }, li1,li2,li3);
const header=React.createElement("div",{style:{display:'flex',alignItems:'center',gap:'200px',backgroundColor:'#4a3b42',color:'white    '}},pic,name)
const wrapper=React.createElement('div',{},h2,header,ul);
root.render(wrapper);

//jsx

const li4=<li>Angular</li>
const li5=<li>Vue js</li>
const ul1=<ul>{li4}{li5}</ul>
const h21=<h2>Welcome to react development</h2>

const Container1=(
    <div>
    {wrapper},
    {h21},
    {ul1}
    </div>
)
root.render(Container1);
// root.render(ul1);

