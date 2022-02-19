const express = require("express");
const app = express();

// OPTION 1 with pug library

app.set('view engine','pug')
app.set('views','views')

app.get('/',(req,res)=>{
    let arr =[]
    for(let i = 1; i<=50; i++){
        arr.push(`Soy ${ i%2==0? 'Par!':'Impar!'}`)
    }
    res.render('index',{text:arr});
})



// OPTION 2
// app.get("/", (req, res)=>{
//        let arr = []
//         for(let i = 1; i<=50; i++){
//             arr.push(`<p>${i} ${i%2==0? 'Soy Par!': 'Soy Impar!'}</p>`)
//         }

//         res.send(arr.join(' '))

// })



app.listen(3000, ()=>{console.log("Listening on port 3000...")})