// para fazer cadastro
const botao = document.getElementById("btnCadastrar");
const listaUsuariosCadastrados = [];

//cadastrar
botao.addEventListener('click', function(){
    const objUsuario = {
        usuario: document.getElementById('usuario').value,
        senha: document.getElementById('senha').value
    };
    listaUsuariosCadastrados.push(objUsuario);
    const listaJson = JSON.stringify(listaUsuariosCadastrados);
    localStorage.setItem('usuarios', listaJson);
    
}

);