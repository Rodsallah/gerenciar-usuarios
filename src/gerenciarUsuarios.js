const usuarios = [
   {
     nome: 'matheus',
     email: 'matheus@gospel.com'
   },
   {
     nome: 'marcos',
     email: 'marcos@gospel.com'
   },
   {
     nome: 'lucas',
     email: 'lucas@gospel.com'
   },
   {
     nome: 'joao',
     email: 'joao@gospel.com'
   }
];
    
function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(usuario) {
usuarios.push(usuario);
}
 // capturarPropriedadeDoUsuario(0, 'nome');
 function capturarPropriedadeDoUsuario(indiceDoUsuario, propriedade) {
    return usuarios.at (indiceDoUsuario) [propriedade];
 }   
module.exports = {
     retornarUsuarios,
     adicionarNovoUsuario
}