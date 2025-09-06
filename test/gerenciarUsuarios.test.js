const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('testar as funções de Gestão de Usuarios', function () {
    it('Validar que posso adicionar um novo nome de usuario na lista', function () {
        // 1. Adicinar um novo nome na lista de usuarios
        adicionarNovoUsuario('maria');

        // 2. Retornar a lista de usuarios na caixa lista de usuarios
        const listaDeUsuarios = retornarUsuarios();
      
        // 3. Comparar se o novo nome esta no fim da lista de usuarios  
          expect(listaDeUsuarios.at(-1)).to.equal('maria');
    });
});
    