const express=require('express');
const app=express();

app.get('/home',(req,res)=>{
    res.send('hello');
});

app.get('/books',(req,res)=>{

    res.send([{
        'Physics':'Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force. Physics is one of the most fundamental scientific disciplines, and its main goal is to understand how the universe behaves.',
        'Chemistry':'Chemistry is the study of substances—that is, elements and compounds—while biology is the study of living things. However, these two branches of science meet in the discipline of biochemistry, which studies the substances in living things and how they change within an organism.',
        'History': 'About 50 million years ago the vast tectonic plate we now know as the subcontinent of India crashed into Asia and produced the world’s largest mountain range, the Himalayas – “the abode of snow” in Sanskrit – which separates the Tibetan Plateau from the Indian subcontinent.',
        'Social Science':'social science, any branch of academic study or science that deals with human behaviour in its social and cultural aspects. Usually included within the social sciences are cultural (or social) anthropology, sociology, psychology, political science, and economics.',
    }]);
})

app.listen(4000,()=>{
    console.log('Listening on port 4000');
});