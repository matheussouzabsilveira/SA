
function abrirModal(nomePizza, precoPizza, imagemPizza) {
    // Exibir o modal
    const dial = document.getElementById("dial");
    dial.showModal();

    // Atualizar informações no modal
    const nome = document.getElementById("nome");
    const fotoPizza = document.getElementById("foto-pizza");

    nome.value = nomePizza;
    fotoPizza.src = imagemPizza;

    // Zerar o campo de preço
    document.getElementById("preco").innerText = "0.00$";

    // Função para atualizar o preço com base na quantidade
    function clicar() {
        const quantidade = parseInt(document.getElementById("quantia").value);
        const preco = document.getElementById("preco");

        if (quantidade < 1 || quantidade > 5) {
            preco.innerText = "ERRO";
        } else {
            preco.innerText = `${precoPizza[quantidade - 1]}$`;
        }
    }

    // Adicionar o evento de clique para calcular o preço
    document.getElementById("calcular").onclick = clicar;

    // Validar ao clicar em finalizar
    document.getElementById("fim").onclick = function () {
        const quantia = document.getElementById("quantia").value;
        const obs = document.getElementById("obs").value;
        const precoelement = document.getElementById("preco").innerText;

        // Validação
        if (!nome.value) {
            alert("Por favor, preencha o campo de nome.");
        } else if (!quantia || precoelement === "ERRO") {
            alert("Por favor, escolha uma quantidade válida.");
        } else if (precoelement === "0.00$") {
            alert("O preço não pode ser 0.00$. Por favor, selecione uma quantidade válida.");
        } else {
            const pedido = {
                nome: nome.value,
                imagem: fotoPizza.src,
                quantia: quantia,
                observacao: obs,
                preco: precoelement,
            };

            console.log(pedido); // Debug: veja os valores

            // Criar uma chave única no localStorage para a pizza
            const chave = `Pedido_${nomePizza.replace(/\s+/g, "_")}`;
            localStorage.setItem(chave, JSON.stringify(pedido));
            dial.close();
        }
    };
}

// Funções específicas para cada pizza
function parmaebrie() {
    abrirModal("Parma e Brie", [40.00, 80.00, 120.00, 160.00, 200.00], "imagens/transferir.jpg");
}

function cogumeloparis() {
    abrirModal("Cogumelo Paris", [35.00, 70.00, 105.00, 140.00, 175.00], "imagens/transferir.jpg");
}

function blumenau() {
    abrirModal("Blumenau", [38.00, 76.00, 114.00, 152.00, 190.00], "imagens/transferir.jpg");
}

function mozzarellaealho() {
    abrirModal("Mozzarella e Alho", [30.00, 60.00, 90.00, 120.00, 150.00], "imagens/transferir.jpg");
}

function mozzarella() {
    abrirModal("Mozzarella", [25.00, 50.00, 75.00, 100.00, 125.00], "imagens/transferir.jpg");
}

function pestoconfit() {
    abrirModal("Pesto Confit", [45.00, 90.00, 135.00, 180.00, 225.00], "imagens/transferir.jpg");
}

function abobrinhapestoebrie() {
    abrirModal("Abobrinha Pesto e Brie", [42.00, 84.00, 126.00, 168.00, 210.00], "imagens/transferir.jpg");
}

function burrataeparma() {
    abrirModal("Burrata e Parma", [50.00, 100.00, 150.00, 200.00, 250.00], "imagens/transferir.jpg");
}

function cocacola() {
    abrirModal("Coca-cola", [5.00, 10.00, 15.00, 20.00, 25.00], "imagens/coca.jpeg");
}

function guarana() {
    abrirModal("Guaraná", [5.00, 10.00, 15.00, 20.00, 25.00], "imagens/guarana.jpeg");
}

function fantauva() {
    abrirModal("Fanta Uva", [5.00, 10.00, 15.00, 20.00, 25.00], "imagens/fanta.jpeg");
}

function sprite() {
    abrirModal("Sprite", [5.00, 10.00, 15.00, 20.00, 25.00], "imagens/sprite.jpeg");
}