// // const div=document.getElementsByTagName("div")
// // div[0].innerText="Hello world";
// // div[0].style.color="red";
// // div[0].style.backgroundcolor="cyan";

// // console.log(div  );

// const container=document.getElementsByClassName("container");
// // container[0].innerHTML=`<h2 style=color:red>Hello World</h2>`
// // console.dir(container);
// const h2=document.createElement("h2");
// h2.innerText="ABESEC";
// h2.style.color="red";
// h2.style.backgroundColor="cyan";
// console.log(h2);
// container[0].appendChild(h2);



// const button=document.getElementById("btn");
// console.log(button);

// function msg(){
//             document.getElementById('disp').innerHTML = "<h2>Loading image...</h2>";
//             setTimeout(()=>{
//                 const img=document.createElement('img');
// img.src="https://admissionadvisor.in/assets/frontend/images/college/logo/ABESEC.jpeg"
// img.setAttribute('height','200px');
// img.setAttribute('width','200px');
// console.log(img);
//     document.getElementById('disp').innerHTML = "<h2>HI, I am studying in ABESEC</h2>";
// container[0].appendChild(img);
//             },1000);

//     // console.log("Hi,I am studying in ABESEC");
//     // return "Hi,I am studying in ABESEC";
//     // alert("Hi,I am studying in ABESEC");
//     // const Div = document.createElement('div');

//     // Div.innerText = "Hi, I am studying in ABESEC";
//     // Div.style.backgroundColor = "brown";
//     // Div.style.color = "white";
//     // container[0].appendChild(Div);
//     // document.getElementById('disp').innerHTML = "<h2>HI, I am studying in ABESEC</h2>";

// }
// button.addEventListener('click',msg);

// blocking and non blocking code
// const button=document.getElementById('btn');
// function longData(){
//     console.log("Start");
//     for(let i=0;i<100;i++){
//         console.log(i);
//     }
//     console.log("End");
// }
// button.addEventListener('click',longData);

// console.log("Start");
// setTimeout(()=>{
//     console.log("Welcoem to fsd");
// },2000);
// console.log("End");

// callback function
// function greetmsg(myname){
//     return "Hii,"+myname+" Welcome to ABESEC";
// }
// function msghandler(msg,clbk){
    // console.log(msg);
//     const data=clbk(msg);
//     return data;
// }

// const student=["Vibhor","Akshat","Vasu"];
// student.forEach((name)=>{
//  console.log( msghandler(name,greetmsg));
// })
// // const completemessage=msghandler("Hii",greetmsg);
// console.log(completemessage);

//promise
const mypromise=new Promise((resolve,reject)=>{
    const password="1239*&^%$#@";
    if(password.length>=8)
        resolve("Password length is okay");
    
    else
        reject("password length is not as per our policy");
    
});
// mypromise.then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{console.log(err);})
// .finally(()=>{
//     console.log("All the resource have closed successfully");
// })

async function handledata(){
    
    const data=await mypromise;
    console.log(data);
}
handledata();