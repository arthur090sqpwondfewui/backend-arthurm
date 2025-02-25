const User = require("./user.js")

class userService {
    constructor(){
        this.users = []; //array para armazenar user
        this.nextId = 1; //contador pra gerar ID
        }

        addUser(nome, email){
            const user = new User(
                this.nextId++, nome, email)
                this.users.push(user) // "injetando" no array
                return user;
        }

        getUsers() {
            return this.users
        }

    }

    module.export = new userService;

   