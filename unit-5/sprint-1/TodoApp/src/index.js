import img from "./image/logo.png";
import "./index.css";

let root=document.getElementById('root');

let image=document.createElement('img');
image.src=img;
let div=document.createElement('div');
div.setAttribute("class","imageContainer");
div.append(image);

root.append(div);

let form=document.createElement('form');
form.setAttribute('id','form');

let input=document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "text");
input.setAttribute('placeholder', 'Enter your task to Add');

let submit=document.createElement("input");
submit.setAttribute("type","submit");
submit.setAttribute("id", "submit");
submit.setAttribute("value", "Add");

let div1=document.createElement('div');
div1.append(input,submit);
form.append(div1);
root.append(form);


let table=document.createElement("table");
table.setAttribute('id','table');
let caption=document.createElement('caption');
caption.setAttribute('id','caption');
caption.textContent="My Todo List";
table.append(caption);
root.append(table);

let thead=document.createElement('thead');
let task=document.createElement('th');
task.textContent="Task";

let del=document.createElement('th');
del.textContent="Delet It?";
let tr1=document.createElement('tr');
tr1.append(task,del);
thead.append(tr1);
table.append(thead);
root.append(table);

let tbody=document.createElement('tbody');


submit.addEventListener("click", getValue);


let todoArr=JSON.parse(localStorage.getItem('task')) || [];
displayTodos(todoArr);
function getValue(event){

    event.preventDefault();
    let yourTask=document.getElementById('text').value;
    let obj={
        task:yourTask,
    }
    todoArr.push(obj);
    localStorage.setItem('task', JSON.stringify(todoArr));
    displayTodos(todoArr);
}


function displayTodos(arr){
    tbody.innerHTML="";
    arr.map((el,index)=>{
        let tr=document.createElement('tr');
        let td1=document.createElement('td');
        td1.textContent=el.task;
        let td2=document.createElement('td');
        td2.setAttribute('id','del');
        td2.textContent="Delete";
        tr.append(td1,td2);
        tbody.appendChild(tr);
        table.appendChild(tbody);
        root.appendChild(table);
        td2.addEventListener('click',function (){
            deletTask(index);
        });         
        
    });

    function deletTask(index){
        todoArr.splice(index,1);
        localStorage.setItem('task',JSON.stringify(todoArr));
        displayTodos(todoArr);
    }
}

