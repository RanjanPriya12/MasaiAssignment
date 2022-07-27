let arr = JSON.parse(localStorage.getItem('cart'));
//console.log(arr);

let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i].prize;
}
let total1=document.getElementById('total');
total1.textContent=`Total Amount : ${sum}`;
renderCart(arr);
function renderCart(arr){
    
    arr.forEach(function (ele,index) {
        console.log(ele,index);
        let div = document.createElement('div');
    
        let image = document.createElement('img');
        image.src = ele.src;
        image.style.width='200px';
    
        let title = document.createElement('p');
        title.textContent = ele.n;
    
        let price = document.createElement('p');
        price.textContent =`Price : ${ele.prize} Rs`;

        let remove=document.createElement('button');
        remove.textContent="Remove";
        remove.setAttribute('id','removeitem')
    
        div.append(image,title,price,remove);
        document.getElementById('cart').append(div);
        remove.onclick=function(event){
            removeItem(index);
        }
    });
    function removeItem(index){
        arr.splice(index,1);
        localStorage.setItem('cart',JSON.stringify(arr));
        newarr=localStorage.getItem('cart');
        renderCart(newarr);
    }
}

    






