var idNumber=1;
var names = [];

const namesDisplay = document.getElementById('names')
const displayArray = ()=>{
    namesDisplay.innerHTML = "";
    names.forEach((name, index) => {
        let div = document.createElement('div')
        div.innerText = name;   
        div.id = index
        if (index % 2 == 0){
            div.className = "bg-light"
        }else{
            div.className = "bg-dark text-white"
        }
        namesDisplay.appendChild(div)
    })
}

document.querySelector(".btn").addEventListener("click", function (e){
    let value = document.getElementById('exampleInputEmail1').value;
    if (value != ''){
        names.push(value)
        displayArray()
        localStorage.setItem('test', JSON.stringify(names));
    }
})

namesDisplay.addEventListener('dblclick', e => {
    let target = e.target.innerText
    names = names.filter((name)=>{
        if (name != target) return name;
    })
    displayArray()
    localStorage.setItem('test', JSON.stringify(names));
    // console.log(e)
})
const fetch_local = () => {
    let arr = JSON.parse(localStorage.getItem("test"));
    if (arr == null) return;
    names = arr
    displayArray()
}

// // var idNumber=1;
// // let outputData = document.getElementById('data')
// // document.querySelector(".btn").addEventListener("click", function (e){
// //     e.preventDefault();
// //     let list = document.createElement('p');
// //     list.setAttribute('id',`${idNumber}`);
// //     idNumber=idNumber+1;    
// //     list.innerText=document.getElementById('exampleInputEmail1').value;
// //     document.getElementById('exampleInputEmail1').value="";
// //     outputData.appendChild(list);
// //     console.log(list);
    
// //     list.addEventListener("dblclick", function(e){
// //         // e.preventDefault();
// //         // e.path[0].innerText="paper"
// //         outputData.removeChild(list);
// //     });

// // });


// // const getTodos = async() =>{
// //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// //     const array = await res.json()
// //     console.log(array);
// //     let curry = array.map((item)=>{
// //         `return 
// //         <h3> ${item.title} </h3>
// //         <hp> ${item.completed} </hp>
// //         `
// //     })
// //      = curry
// // }

// // getTodos();



// // let boo ={
// //     userId:9999,
// //     id:999,
// //     title:"lorem ipsum kdrn ih",
// //     completed: true

// // }
// // const postData = async() => {
// //     const res = await fetch('https://jsonplaceholder.typicode.com/todos', {method: 'POST', body: boo});
// //     const data = await res.json() // this converts the json's object to javascript objects
// // }

// // postData();

// // const getTodos = async() => {
// //     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
// //     const data = await res.json() // this converts the json's object to javascript objects
// //     console.log(data);
// //     // getting the data from object gotten from the end point
// //     let text = data.map((item) => {
// //         return `
// //         <p> ${item.title} </p>
// //         <p> ${item.completed} </p>     
// //         `
// //     })
// //     document.querySelector('#section').innerHTML= text
// // }

// // getTodos();

// var idNumber=1;
// let outputData = document.getElementById('data')
// document.querySelector(".btn").addEventListener("click", function (e){
//     e.preventDefault();
//     let list = document.createElement('p');
//     list.setAttribute('id',`${idNumber}`);
//     idNumber=idNumber+1;    
//     list.innerText=document.getElementById('exampleInputEmail1').value;
    
    
//     // console.log(outputData);
//     let beta = list.outerHTML
//     localStorage["son"]=beta// localStorage.setItem('son', JSON.stringify(beta))
//     var fromStorage=localStorage.getItem('son')
//     // var processedData = JSON.parse(fromStorage)
//     // outputData.innerHTML=processedData;
//     outputData.innerHTML=fromStorage;
//     document.getElementById('exampleInputEmail1').value="";
//     // console.log(processedData);
    
//     outputData.addEventListener("dblclick", function(e){
//         // e.preventDefault();
//         // e.path[0].innerText="paper"
//         // outputData.removeChild(list);
//         outputData.innerHTML='';
//     });

// });



// var btnelm = document.getElementById("ELM_ID").outerHTML;  // <== here

// localStorage["data"] = btnelm;
// console.log(localStorage["data"]);

// var names = [];
// for(var i= 0; i<4; i++)
// names[i] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));

//...
// var names = [];
// for(var i= 0; i<4; i++)
// names[i] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));
// var storedNames = JSON.parse(localStorage.getItem("names"));