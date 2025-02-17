// Classe Usuario
class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email; // Correção da atribuição
        this._senha = senha; // Atributo privado
        this.nivelAcesso = 'baixo'; // Valor padrão para nivelAcesso
    }

    autenticar(senha) {
        return senha === this._senha && this.nivelAcesso === 'alto'; // Verifica o nivel de acesso
    }

    alterarSenha(novaSenha) {
        this._senha = novaSenha;
        console.log('Senha alterada com sucesso');
    }
}

// Classe Admin que herda de Usuario
class Admin extends Usuario {
    constructor(nome, email, senha, nivelAcesso) {
        super(nome, email, senha); // Chama o construtor da classe pai
        this.nivelAcesso = nivelAcesso; // Atribuição correta
    }

    banirUsuario(usuario) {
        console.log(`${usuario.nome} foi banido do sistema pelo admin ${this.nome}`);
    }

    // Polimorfismo: sobrescrevendo o método autenticar
    autenticar(senha) {
        // No Admin, autenticação só será verdadeira se o nível for 'alto'
        if (senha === this._senha && this.nivelAcesso === 'alto') {
            console.log(`${this.nome} autenticado com sucesso`);
            return true;
        }
        console.log(`${this.nome} falhou na autenticação`);
        return false;
    }
}

// Exemplo de uso

const usuario1 = new Usuario('Luiz', 'luizretiupe@gmail.com', '2009');
const usuario2 = new Admin('Maria', 'maria@gmail.com', '2000', 'alto');

console.log(usuario1.autenticar('2009')); // false (não tem nível 'alto')
console.log(usuario1.autenticar('2008')); // false
console.log(usuario1.autenticar('testesenha')); // false
console.log(usuario1.alterarSenha('testando')); // Senha alterada com sucesso

// Teste da autenticação para Admin
console.log(usuario2.autenticar('2000')); // Maria autenticada com sucesso
console.log(usuario2.autenticar('wrongPassword')); // Maria falhou na autenticação

usuario2.banirUsuario(usuario1); // Luiz foi banido do sistema pelo admin Maria
