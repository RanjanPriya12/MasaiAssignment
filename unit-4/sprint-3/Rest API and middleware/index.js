const express=require('express');
const app=express();
//app.use(allBooks);

//app.use(singleBook);

app.get('/books',(req,res)=>{
    return res.send('Fetching All Books');

});

app.get('/book/:name', (req,res)=>{
    const book= req.params.name;
    return res.json({bookName: book});
});
function allBooks(req,res,next){
    console.log('Fetching all books');
    next();
}

function singleBook(req,res,next){
    next();
}
app.listen(4000,()=>{
    console.log('Listening at port 4000');
});