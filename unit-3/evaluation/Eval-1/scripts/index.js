let image=['https://image.shutterstock.com/image-photo/bangkok-thailand-december-8-2019-600w-1588449007.jpg',
'https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/11/ghayal-once-again-movie-poster-3.jpg',
'https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-india-movie-poster-design-bollywood-padmaavat.jpg',
'https://rukminim1.flixcart.com/image/416/416/jcc9ci80/poster/g/x/c/medium-pl-avengers-assemble-wall-poster-19-13-inches-matte-original-imaetdvafjtmjhbh.jpeg?q=70',
'https://images.squarespace-cdn.com/content/v1/5c75dfa97d0c9166551f52b1/1571759141591-I1RAI5I59E74DIYCLY57/Large_3909.jpg',
'https://i.ytimg.com/vi/O_Wtp6Hyzu8/maxresdefault.jpg'];

localStorage.setItem("Images", JSON.stringify(image));
let picture=document.getElementById("pic");
function slideImage(){
    let img=JSON.parse(localStorage.getItem("Images"));
    let i=0;
    let x=setInterval(function(){
        if(i===img.length){
            i=0;
        }
        picture.src=img[i];
        i++;
    },1500);
}
slideImage();

let MovieData=[
    {
        name:"Fashion",
        releaseDate:"29 Oct 2008",
        url:"https://filmfare.wwmindia.com/content/2021/jun/priyanka-chopra-movies-fashion-71624284903.jpg",
        rating:6.9
    },
    {
        name:"Gunde",
        releaseDate:"14 Feb 2014",
        url:"https://www.sbs.com.au/movies/sites/sbs.com.au.film/files/styles/double/public/images/1/0/1082_gunday-704.jpg?itok=22al36Ci&mtime=1439621501",
        rating:5.7
    },
    {
        name:"Burfi",
        releaseDate:"14 Sep 2012",
        url:"https://www.bollywoodhungama.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-29-at-12.46.39-PM.jpeg",
        rating:8.1
    },
    {
        name:"Tare Jaamin Par",
        releaseDate:"21 Dec 2007",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJScilXWCEPSLj7GKDD1ItjPy2L16rTutKOA&usqp=CAU",
        rating:8.4
    },
    {
        name:"Lagaan",
        releaseDate:"15 June 2001",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrktGoHrEppwb9_YOpYC0R0e_TY9XNapnu40s4KSn-bm6WG7o0n2aetzYZAaVfq7JC2gw&usqp=CAU",
        rating:8.1
    },
    {
        name:"Ataraangi Re",
        releaseDate:"24 Dec 2021",
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEeQ_p4te7tADpnsloA-H58wzeFKs_03vOA&usqp=CAU",
        rating:6.7
    },
    {
        name:"Holiday",
        releaseDate:"6 June 2014",
        url:"https://filmfare.wwmindia.com/content/2020/sep/akshaykumarbirthdayarticle101599568816.jpg",
        rating:7.3
    },
    {
        name:"Raabta",
        releaseDate:"9 June Dec 2017",
        url:"https://m.media-amazon.com/images/I/A172a5FxVaL._SX679_.jpg",
        rating:5.2
    },
    {
        name:"Dil Bechara",
        releaseDate:"24 July 2020",
        url:"https://www.deccanherald.com/sites/dh/files/articleimages/2020/06/25/Dil%20Bechara-1593083302.jpg",
        rating:8.1
    },
]

localStorage.setItem("movies",JSON.stringify(MovieData));
renderMovie(MovieData);
function renderMovie(x){
    document.getElementById("movies").innerHTML="";
    //console.log(x)
    x.map(function(el){
        console.log(el)
        let div1=document.createElement('div');
        let div2=document.createElement('div');
        div2.setAttribute("id","div2")
        let div3=document.createElement('div');
    
        let name=document.createElement('p');
        name.textContent=el.name;
    
        let pic=document.createElement('img');
        pic.setAttribute("src", el.url);
    
        let date=document.createElement('p');
        date.textContent=`Release Date ${el.releaseDate}`;
    
    
        let rat=document.createElement('p');
        rat.textContent=`Rating : ${el.rating}`;
    
        div1.append(pic);
        div2.append(name,date,rat);
        div3.append(div1,div2);
        document.getElementById("movies").append(div3);
    });
}

function sortMovie(){
    let way=document.getElementById("sortbtn").value;
    let data;
    //console.log(way);
    if(way==='asc'){
        data=MovieData.sort(function compare(a,b){
            return a.rating-b.rating;
        })
    }else if(way==='dec'){
        data=MovieData.sort(function compare(a,b){
            return b.rating-a.rating;
        })
    }
    renderMovie(data);
}