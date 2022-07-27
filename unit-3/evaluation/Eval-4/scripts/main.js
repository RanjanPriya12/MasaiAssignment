async function apiCall(url) {
    //add api call logic here
    let res=await fetch(url);
    let mydata=await res.json();
    console.log("data",mydata);
    return mydata;

}


function appendArticles(articles, main) {
    //add append logic here
    articles.map((ele)=>{
        let div=document.createElement('div');

        let title=document.createElement('h2');
        title.textContent=ele.title;

        let detail=document.createElement('p');
        detail.textContent=ele.content;

        let para=document.createElement('p');
        para.innerHTML=ele.description;

        let image=document.createElement('img');
        image.src=ele.urlToImage;

        let date=document.createElement('h4');
        date.textContent=`Published Date : ${ele.publishedAt}`;

        div.append(image,title,date,para,detail);

        let newsData=[];
        div.addEventListener('click',()=>{
            newsData.push(ele);
            localStorage.setItem('News',JSON.stringify(newsData));
            window.location.href='news.html';
        });
        main.append(div);
    });

}

export { apiCall, appendArticles }