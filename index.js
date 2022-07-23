
var express=require('express')
var ejs=require('ejs')
var bodyParser=require('body-parser')
var mysql=require('mysql')
var session=require('express-session')

mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"Nodejs_Project"
})

var app=express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.listen(8080);
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({secret:"secret"}))

// localhost:8080
app.get('/',function(req,res){


    var con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"Nodejs_Project"
    })

    con.query("SELECT * FROM products",(err,result)=>{

        res.render('pages/index',{result:result});

    })

    
});

app.post('/add_to_cart',function(req,res){
    
})