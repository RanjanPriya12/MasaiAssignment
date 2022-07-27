

import navbarImport from "./components/navbar.js";

let div=document.getElementById("navbar");
div.innerHTML=navbarImport();

import {getMyData,appendData } from "./scripts/getdata.js";
 

let url="https://www.themealdb.com/api/json/v1/1/categories.php";
let data=await getMyData(url);
//console.log("Data",data);
let parent=document.querySelector("#container");
appendData(data,parent);

let search=document.getElementById('search');
search.addEventListener('keypress',(event)=>{
    if(event.key=='Enter'){
        showItem(data);
    }
})

function showItem(item){
    console.log("item",item);
    parent.innerHTML="";
    //console.log(typeof(item))
    let searchItem=document.getElementById('search').value;
    let flag='false';
    item.map(function(ele){
        if(searchItem==ele.strCategory){
            //console.log(searchItem);
            flag='true';
            let div=document.createElement('div');
            let image=document.createElement('img');
            image.src=ele.strCategoryThumb;

            let div1=document.createElement('div');
            div1.append(image); 
            let itemName=document.createElement('h1')
            itemName.textContent=ele.strCategory;
            itemName.style.color='red';

            let orderButton=document.createElement('button');
            orderButton.textContent='Order Now';

            let val=Math.round(Math.random()*500);
            let price=document.createElement('h3');
            price.textContent=`Price : ${val} Rs.`;

            let discount=Math.round(Math.random()*30);
            let dis=document.createElement('h3');
            dis.textContent=`${discount}%  OFF`;

            let div2=document.createElement('div');
            div2.setAttribute('id','Price');
            div2.append(price,dis);

            let div3=document.createElement('div');
            div3.append(orderButton);
            
            div.append(div1,itemName,div2,div3);
            div.style.display='flex';
            div.style.width='350px';
            div.style.height='620px';
    
            div.style.flexDirection='column';
            div2.style.justifyContent='space-evenly';
            parent.append(div);
        }
    });
    if(flag=='false'){
        alert('Opps Item is Not Found')
        let div=document.createElement('div');
        let image=document.createElement('img');
        image.src='https://media0.giphy.com/media/f7XPfwrMIfn7g6zDVV/200w.webp?cid=ecf05e47j4bta3d56uxqq91r2vdvwtive6omkxkax6t2rl23&rid=200w.webp&ct=g';
        image.style.height='400px';
        image.style.width='460px';
        div.append(image);
        div.style.height='620px';
        div.style.width='330px';
        parent.append(div);
    }
}