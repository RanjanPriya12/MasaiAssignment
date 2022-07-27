
document.querySelector("form").addEventListener("submit", SignInFunction);
let LoginArr = JSON.parse(localStorage.getItem("Data"));
function SignInFunction(event) {
    event.preventDefault();
    let email = document.querySelector("#mail").value;
    let pwd = document.querySelector("#password").value;
    let count = 0;
    for (let i = 0; i < LoginArr.length; i++) {
        if (LoginArr[i].email == email && LoginArr[i].pass == pwd) {

            window.location.href = "index.html";
            alert("Login SuccesFully");
        }
        else {
            count++;
        }
    }
    if (count == LoginArr.length) {
        alert("Invalid Credential");
    }
}
