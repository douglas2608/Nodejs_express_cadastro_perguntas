const express = require("express")
app = express()

const bodyParser = require("body-parser")
app.set('view engine','ejs')


app.use(express.static('static'))
app.use(bodyParser.urlencoded({extended: false}))
//app.use(bodyParser.json())
var status = 0
var cadastrado1 = "DADOS Cadastrado com sucesso "

app.get("/",function(req,res){
    res.render("teste")
})

app.get("/perguntar",function(req,res){

    res.render("perguntar",{cadastrado:cadastrado1,status:status})
})

app.get("/cadastro",function(req,res){
    res.render("cadastro")
})

app.post("/recebendo",function(req,res){
    var titulo2 = req.body.nome
    var descricao = req.body.descreva

    if (descricao && titulo2 ){
        console.log("digitou" + descricao)
        status = 1
    }else if  (descricao == ('') || titulo2 == ('')) {
        status = 2

        console.log("existe espaço em branco")


    }else{
        status = 3
        console.log("não digitou Douglas e sim " + descricao)
    }
    console.log(titulo2)
    console.log(descricao)
    res.render("perguntar",{cadastrado:cadastrado1,status:status})
    //res.send("campo1 = "+ titulo2 + " campo2 =  " + descricao)
})
app.listen(8000)
