let express = require('express');
let app=express();
let db=[];
let bodyParser = require('body-parser');



app.use(express.static('public'));
app.use(express.static('views'));
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

app.engine("html",require('ejs').renderFile);
app.set("view engine","html");


app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
    
    //res.send("Hello world");
})



app.get('/addcustomer',function(req,res){
    res.sendFile(__dirname + "/addcustomer.html");
})


app.post('/newCustomer',function(req,res){
// console.log(req.body);
db.push(req.body);
res.send(db);

})

app.get('/allcustomers',function(req,res){

    res.render('allCustomer.html');
    customers: db
})


app.listen(8080);
console.log("Listening on port 8080");
