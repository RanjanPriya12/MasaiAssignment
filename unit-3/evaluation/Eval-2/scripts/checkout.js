let Data=localStorage.getItem('userData') || [];
let naame=document.getElementById('name').value;
let pass=document.getElementById('pass').value;
let phone=document.getElementById('number').value;
let l=document.getElementById('address').value;

function user(name,pas,mobile,add){
    this.name=name;
    this.pass=pas;
    this.phone=mobile;
    this.location=add;
}


let btn=document.getElementById('submit');
btn.onclick=function(event){
    myfunc();
}

function myfun(){
    window.location.href='payment.html';
}
let newuser= new user(naame,pass,phone,l);
//Data.push(newuser);

localStorage.setItem('userData',JSON.stringify(userArr));
