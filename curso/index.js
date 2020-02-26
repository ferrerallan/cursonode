const express = require('express');

const server= express();

server.use(express.json());

//sem next
/*server.use((req,res) =>{
    console.log('a requisição foi chamada');
 })*/
 
//next
server.use((req,res,next) =>{
    console.log('a requisição foi chamada');
    next();
 })

//middlewares especificos
server.use('/users',(req,res,next) =>{
    console.log('o ponto users foi chamado');
    next();
 })



server.get('/',(req,res)=>{
    return res.json({'message':'ola mundo'})
})

server.get('/nada',(req,res)=>{
    return res.json({'message':'nadinha'})
})


http://localhost:3333/allan
server.get('/:nome',(req,res)=>{
    const nome = req.params.nome;
    return res.json({'retorno':nome})
})

//http://localhost:3333/query/teste?fruta=maca
server.get('/query/teste',(req,res)=>{
    const fruta = req.query.fruta;
    return res.json({'retorno':fruta})
})


//lembrar do server.use(express.json());
server.post('/formulario',(req,res)=>{
    const name = req.body.name;
    return res.json({'conteuso':name});
})

humanos = ['sara','allan','zilda'];

//get
server.get('/users/:id',(req,res)=>{
    const usuario = humanos[req.params.id];
    return res.json({'usuario':usuario});
})

//inserir
server.post('/users',(req,res)=>{
    const usuario = req.body.nome;
    humanos.push(usuario);
    return res.json(humanos);
})

//excluir
server.delete('/users/:id',(req,res)=>{
    humanos.splice(req.params.id,1) ;

    return res.json(humanos);
})


//alterar
server.put('/users',(req,res)=>{
    humanos[req.body.id] = req.body.nome;

    return res.json(humanos);
})


server.listen(3333);