const express = require('express');
const userService = require ('./userService');

const app = express() // app = nome qualquer para o express
app.use(express.json()); // habilitação do json no express

//rota para criar usuário

app.post('/users', (req, res) => {
    const {nome, email} = req.body; 
    if (!nome || !email) {
        return res.status(400).json
        ({error: "Nome e Email são obrigatórios"})
    }

    const user = userService.addUser(nome, email);
    res.status(200).json({user})
})

 // rota para listar o usuário

 app.get("/users", (req, res) =>  {
    res.json(userService.getUsers());
})

const port = 3000;
app.listen(port, () => {
    console.log("Servidor rodando na porta", port)
})