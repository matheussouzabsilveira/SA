function entrar(){
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const ende = document.getElementById("ende").value
    const dial = document.getElementById("dial")
    const aviso = document.getElementById("aviso")
    const close = document.getElementById("close")

if(nome.length == 0 || email.length == 0 || senha.length == 0 || ende.length == 0){
        dial.showModal()
        aviso.innerHTML = "Preencha todos os campos"
    }else{

        const dados = {
            nome: nome,
            email: email,
            senha: senha,
            endereço: ende
        }

        localStorage.setItem("dados", JSON.stringify(dados))

        const dadostring = localStorage.getItem("dados")

        const dadosobject = JSON.parse(dadostring)

        dial.showModal()
        aviso.innerHTML = "Seus dados foram salvos, seja bem vindo " + nome + "!"
        window.location.href = "main.html";
    }

    close.onclick = function(){
        dial.close()
    }


    

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("ende").value = "";
}
