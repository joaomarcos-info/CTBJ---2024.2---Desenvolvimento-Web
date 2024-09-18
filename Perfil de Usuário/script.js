function mostrarPerfil(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var bio = document.getElementById('bio').value;

    if (nome === ""  || email === ""){
        alert("Por favor, preencha o nome e o e-mail.");  
        return;  
    }

    var perfil = '
        <h2> Seu Perfil:</h2>
        <p><strong>Nome: </strong> ${nome}</p>
        <p><strong>E-mail: </strong> ${email}</p>
        <p><strong>Biografia: </strong>${bio}</p>
    ';

    var resultado = document.getElementById('perfilResultado');

    resultado.innerHTML = perfil;
    resultado.style.display = "block";
}