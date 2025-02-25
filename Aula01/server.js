const express = require('express');

const app = express();

const port = 3001;

app.get('/', (req,res) =>{ // função oculta
res .send("Página Principal"); // Send -> Mensagem que desejo aplicar
}); // req vem de requisição e resp vem de resposta

app.get('/home', (req,res) =>{ 
    res.send("Página Home"); 
    }); 

    app.get('/login', (req,res) =>{ 
        res.send("Pagina login");
        }); 

// =>  função oculta
 // Send -> Mensagem que desejo aplicar
 // Req vem de requisição e Resp vem de resposta

app.listen(port, () => {
    console.log("Servidor rodando na porta", port);
});