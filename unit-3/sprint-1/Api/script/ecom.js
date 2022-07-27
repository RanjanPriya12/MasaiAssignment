

let url ='https://fakestoreapi.com/products';
async function getData(){
    try{
        let res= await fetch(url);
        let data= await res.json();
        console.log("Data :",data);
    }catch(err){
        console.log("Err",err);
    }
}