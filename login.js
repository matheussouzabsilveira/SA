function entrar(){
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const ende = document.getElementById("ende").value
    const dial = document.getElementById("dial")
    const aviso = document.getElementById("aviso")
    const close = document.getElementById("close")

    const dadosString = localStorage.getItem("dados");
    const dados = JSON.parse(dadosString);

    if(dados.email === email && dados.senha === senha){
        window.location.href = "main.html";
    }else{
        dial.showModal()
        aviso.innerHTML = "login ou senha incorretos!"
    }

    close.onclick = function(){
        dial.close()
    }

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("ende").value = "";
}