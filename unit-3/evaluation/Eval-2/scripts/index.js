let url='https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian';
async function getData(){
    try{
        let data= await fetch(url);
        let res= await data.json();
        let mydata=res.meals;
        //console.log("Data",mydata);
        render(mydata);
    }catch(err){

    }
    
}
getData();
function render(data){
    //console.log(data)
    data.map(function(el){
        let div=document.createElement('div');

        let image=document.createElement('img');
        image.src=el.strMealThumb;

        let name=document.createElement('p');
        name.textContent=el.strMeal;

        let val=Math.round(Math.random()*500);
        let price=document.createElement('p');
        price.textContent=`Price: ${val} Rs.`;
        let b=val;

        let btn=document.createElement('button');
        btn.textContent='Add To Cart';
        btn.setAttribute('id','addtocart')
        btn.onclick=function(event){
            let img=image.src,n=name.textContent;
            addToCart(img,n,b);
        };
        
        div.append(image,name,price,btn);
        document.getElementById('menu').append(div);

    });
        
    
    function addToCart(image,name,price){
        //console.log(name,price)
        let obj={
            n:name,
            src:image,
            prize:price,
        }
        alert('Item is Succesfully added to your Cart');
        let cart=JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(obj);
        localStorage.setItem('cart',JSON.stringify(cart));
        updateCounter();
    }
    
    updateCounter();
    function updateCounter(){
        
        let c=JSON.parse(localStorage.getItem('cart'))|| [];
        /*c.map(function(ele){
            ++count;
        });*/
        let count=c.length;

        let num=document.getElementById('cartitem');
        num.textContent=`Cart Items ${count}`
    }
}
