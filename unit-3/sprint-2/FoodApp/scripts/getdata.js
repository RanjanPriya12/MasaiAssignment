
async function getMyData(url){
    try {
        let res= await fetch(url)
        let data= await res.json();
        //console.log("DAta",data);
        return data.categories;
    }catch(error) {
        console.log("Error:",error)
    }
};
 
function appendData(data,parent){
    data.forEach(element => {
        let div=document.createElement("div");
        let image=document.createElement('img');
        image.src=element.strCategoryThumb;

        let para=document.createElement("p")
        para.textContent=element.strCategoryDescription;

        let itemName=document.createElement('h1')
        itemName.textContent=element.strCategory;
        itemName.style.color='red';
        // order now,price,discount
        let orderButton=document.createElement('button');
        orderButton.textContent='Order Now';

        let val=Math.round(Math.random()*500);
        let price=document.createElement('h3');
        price.textContent=`Price : ${val} Rs.`;

        let discount=Math.round(Math.random()*30);
        let dis=document.createElement('h3');
        dis.textContent=`${discount}%  OFF`;

        //console.log("Price "+val+" Discount "+discount);
        let div1=document.createElement('div');
        div1.setAttribute('id','Price');
        div1.append(price,dis);

        let div2=document.createElement('div');
        div2.append(orderButton);

        let div3=document.createElement('div');
        div3.append(itemName,para);

        let div4=document.createElement('div');
        div4.append(image);

        let div5=document.createElement('div');
        div5.setAttribute('id','check');
        div5.append(div4,div1,div2);

        let div6=document.createElement('div');
        div6.append(itemName);

        let div7=document.createElement('div');
        div7.append(para);

        let div8=document.createElement('div');
        div8.setAttribute('id','description');
        div8.append(div6,div7);

        div.append(div5,div8);
        parent.append(div);
    });
  
}
 
 
 
export {getMyData, appendData};