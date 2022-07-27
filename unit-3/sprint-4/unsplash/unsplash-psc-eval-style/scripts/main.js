

async function getData(url){
    let res=await fetch(url);
    let data=await res.json();
    console.log(data)
    return data;
}

function appendData(data,parent){
    data.map((ele)=>{
        let div=document.createElement('div');

        let image=document.createElement('img');
        image.src=ele.urls.small;

        let title=document.createElement('h4');
        title.innerHTML=ele.user.name;

        div.append(image,title);
        let arr=[];
        div.addEventListener('click',()=>{
            arr.push(ele)
            localStorage.setItem('clicked',JSON.stringify(arr));
            window.location.href='final.html';
        })
        parent.append(div);
    });
}

export {getData,appendData}