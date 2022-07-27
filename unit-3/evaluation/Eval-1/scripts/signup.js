document.querySelector("form").addEventListener("submit",getValue);
let SignData=JSON.parse(localStorage.getItem("Data")) || [];
function getValue(event){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let mbl=document.getElementById("mbl").value;
    let mail=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    console.log(name,mbl,mail,pass);

    let obj={
        name:name,
        mobile:mbl,
        email:mail,
        pass:pass,
    }
    SignData.push(obj);
    localStorage.setItem("Data",JSON.stringify(SignData));
    alert("Singup is successful");
    window.location.href="login.html";
}