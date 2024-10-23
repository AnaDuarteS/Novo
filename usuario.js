document.getElementById("form-receita").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtendo os valores dos campos
    const nome = document.getElementById("nome").value;
    const ingredientes = document.getElementById("ingredientes").value;
    const modoPreparo = document.getElementById("modo-preparo").value;
    const imagemInput = document.getElementById("imagem");
    const mensagem = document.getElementById("mensagem"); // Mensagem de sucesso ou erro
    const mensagemImagem = document.getElementById("mensagem-imagem"); // Mensagem de aviso da imagem

    // Verifica se uma imagem foi selecionada
    if (imagemInput.files.length > 0) {
        
   
        const imagemFile = imagemInput.files[0];

    // Armazenando a receita no console
    console.log("Nova Receita Adicionada:");
    console.log("Nome:", nome);
    console.log("Ingredientes:", ingredientes);
    console.log("Modo de Preparo:", modoPreparo);
    console.log("Imagem:", imagemFile);

  // Exibindo mensagens
    mensagem.textContent = "Receita adicionada com sucesso!";
    mensagemImagem.textContent = "Imagem adicionada com sucesso!"; // Mensagem de imagem
    mensagemImagem.style.color = "green"; // Cor da mensagem
    mensagemImagem.style.display = "block"; // Exibe a mensagem

    // Limpando os campos do formulário
    document.getElementById("form-receita").reset();
} else {
    mensagem.textContent = ""; // Limpa a mensagem de sucesso
    mensagemImagem.textContent = "Por favor, selecione uma imagem."; // Mensagem de aviso
    mensagemImagem.style.color = "red"; // Cor da mensagem de erro
    mensagemImagem.style.display = "block"; // Exibe a mensagem
    console.log("Nenhuma imagem foi selecionada.");
        }
});
