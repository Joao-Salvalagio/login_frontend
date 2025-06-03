// para fazer login
const entrar = document.getElementById('Entrar');

entrar.addEventListener('click', 
    function () {
        const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios"));

        let login;
        let senha;

        login = document.getElementById('usuario').value;
        senha = document.getElementById('senha').value;

        let valido = usuariosCadastrados.find(
            //functio ()
            // () => {}
            user => user.usuario === login && user.senha === senha
        );
    }
);