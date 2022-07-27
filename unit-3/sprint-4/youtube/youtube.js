// youtube API key='AIzaSyDLmVAGWtsLUyrNLmf04LB9mRao-0xZ53E';
// q parameter
// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&id={ID}&key={YOUR_API_KEY};


let key='AIzaSyB_Wxdwtc0novrttRAOngHfrwLzsyRgyvY';
let url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key=${key}`;
myData();

async function myData(){
    try {
        let data= await fetch(url);
        let res=await data.json();
        //console.log("res",res);
        let finalData=res.items;
        if(finalData==undefined){
            return false;
        }
        //console.log(typeof(finalData))
        //console.log('Data',finalData);
        displayData(finalData);
    } catch (error) {
        console.log(error);
    }
    
}

const displayData = (data) => {
    //console.log(typeof(data))
    let cont = document.getElementById('video_container');
    cont.textContent="";
    data.forEach((ele) => {
        let vId=ele.id;
        //console.log(vId)
        let caption=ele.snippet.title;
        //console.log(vId,caption)
        let div = document.createElement('div');

        let iframe = document.createElement('iframe');
        iframe.setAttribute("allowfullscreen", 'true');
        iframe.src = `https://www.youtube.com/embed/${vId}`;

        let title=document.createElement('p');
        title.textContent=`${caption}`;
        title.style.fontSize='15px';
        
        iframe.style.width='260px';
        iframe.style.height='160px';
        div.append(iframe,title);
        cont.append(div);
    });
};

//let term=document.getElementById('search').value;
//console.log(document.getElementById('search').value);
let url1;
let searchButton=document.getElementById('search');
searchButton.addEventListener('keypress', (event) => { 
    if(event.key=="Enter"){
        let term=document.getElementById('search').value;
        url1=`https://youtube.googleapis.com/youtube/v3/search?&key=${key}&maxResults=15&q=${term}&regionCode=IN&type=video&part=snippet`;
        getMyData();
    }
});

async function getMyData(){
    try {
        let video= await fetch(url1);
        let videoData=await video.json();
        //console.log(videoData)
        videoData=videoData.items;
        if(videoData==undefined){
            return false;
        }
        //console.log((videoData))
        renderVideo(videoData);
    } catch (err){
        console.log(err);
    }
}

const renderVideo=(videolist)=>{
    //console.log(typeof(videolist));
    let container=document.getElementById('video_container');
    container.textContent="";
    videolist.forEach((el) => {
        //console.log(el)
        let div1=document.createElement('div');
        let div2=document.createElement('div');
        let h4=document.createElement('h4');
        h4.textContent=el.snippet.title;
        let channeltitle=document.createElement('p');
        channeltitle.textContent=el.snippet.channelTitle;

        let desc=document.createElement('p');
        desc.textContent=el.snippet.description;
        let id=el.id.videoId;

        let iframe = document.createElement('iframe');
        iframe.setAttribute("allowfullscreen", 'true');
        iframe.src = `https://www.youtube.com/embed/${id}`;

        //console.log(h2.textContent,channeltitle.textContent,desc.textContent,id)
        div2.append(h4,channeltitle,desc);
        div1.append(iframe);
        div1.style.cursor='pointer';
        div2.style.cursor='pointer';

        let arr=[];
        div2.addEventListener('click',()=>{
            arr.push(el);
            console.log(arr);
            localStorage.setItem('DataList',JSON.stringify(arr));
            window.location.href='target.html';
        });

        container.style.display='grid';
        container.style.gridTemplateColumns='300px 700px';
        container.append(div1,div2);
    });
};