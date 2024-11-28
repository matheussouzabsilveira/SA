function carregar(){
    const login = document.getElementById("login")
    const cadastro = document.getElementById("cadastro")
    const perfil = document.getElementById("perfil")
    const usuarioLogado = localStorage.getItem("dados")
    if (usuarioLogado) {
        login.style.display = "none"
        cadastro.style.display = "none"
        perfil.style.display = "inline-block"
    }
}

    function btnSair() {
        const btnsair = document.getElementById("sair");

        btnsair.style.display = btnsair.style.display === "none" ? "inline" : "none"
    }

    function sair(){
        const btnsair = document.getElementById("sair");
        login.style.display = "inline-block"
        cadastro.style.display = "inline-block"
        perfil.style.display = "none"
        btnsair.style.display = "none"
    }