document.getElementById("form-receita").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const container = document.getElementById("container").value;
    const nome = document.getElementById("nome").value;
    const ingredientes = document.getElementById("ingredientes").value;
    const modoPreparo = document.getElementById("modo-preparo").value;
    const imagemInput = document.getElementById("imagem");
    const mensagem = document.getElementById("mensagem"); 
    const mensagemImagem = document.getElementById("mensagem-imagem"); 
    const formularioReceita = document.getElementById("form-receita");
    const SubmitBtn = document.getElementsByClassName("submit");
    if (imagemInput.files.length > 0) {
        
   
        const imagemFile = imagemInput.files[0];
    mensagem.textContent = "Receita adicionada com sucesso!";
    mensagemImagem.textContent = "Imagem adicionada com sucesso!"; 
    mensagemImagem.style.color = "green"; 
    mensagemImagem.style.display = "block"; 
    
    document.getElementById("form-receita").reset();
} else {
    mensagem.textContent = ""; 
    mensagemImagem.textContent = "Por favor, selecione uma imagem."; 
    mensagemImagem.style.color = "red"; 
    mensagemImagem.style.display = "block"; 
    console.log("Nenhuma imagem foi selecionada.");
        }
});

SubmitBtn.addEventListener("click",()=>{
    const card = document.createElement('div');
    card.class = ('card');
    card.style.border="1px solid #ccc;";
    card.style.borderRadius="8px";
    card.style.boxShadow="0 2px 4px rgba(0, 0, 0, 0.1);";
    card.style.margin="10px";
    card.style.padding="20px";    
    card.style.width="300px";    
    card.style.textAlign="center";    
    card.style.background="#fff";    
    card.style.flex="0";    

    const img = document.createElement('img');
    img.src = imagemInput
    img.style.width="100%";
    img.alt = "CapaCard";

    const titulo = document.createElement('h4');
    titulo.style.color = "#black";
    titulo.textContent = nome;

    card.appendChild(img);
    card.appendChild(titulo);
    container.appendChild(card);

});

SubmitBtn.addEventListener("click",()=>{
    const paginaReceita = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Receita</title>
    <link rel="stylesheet" href="receitas.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <script src="https://unpkg.com/scrollreveal"></script>
    
</head>
<body>
    <header>
        <section class="menu">
            <nav id="nav">
                <div class="logo">
                    <a href="index.html">INÍCIO</a>
                </div>
                
                <ul id="nav-links1">
                    <li class="active"><a href="receitas.html">RECEITAS</a></li>
                    <li class="nav-item"><a href="usuario.html">PERFIL</a></li>
                    <li class="nav-item"><a href="login.html">LOGIN</a></li>
                    <li class="nav-item"><a href="pesquisa.html">PESQUISA</a></li>
                </ul>
                
                <div id="input">
                    <a href="login.html"><input class="signin" type="submit" value="Login" name="signin"></a>
                    <a href="cadastro.html"><input class="signup" type="submit" value="Cadastro" name="signup"></a>
                </div>
    
                <button id="mobile_btn">
                    <i class='bx bx-menu'></i>
                </button>
            </nav>  
    
            <div id="mobile_menu">
                <ul id="nav-links2">
                    <li class="nav-item1"><a href="receitas.html">Receitas</a></li>
                    <li class="nav-item1"><a href="usuario.html">Perfil</a></li>
                    <li class="nav-item1"><a href="login.html">Login</a></li>
                    <li class="nav-item1"><a href="pesquisa.html">Pesquisa</a></li>
                </ul>
            </div>
        </section>
    </header>
        <main>
            <section class="category">
                <div class="list-items">
                    <h3>Receitas Populares</h3>

                    <div class="card-list">
                        <div id="card">
                            <a href="receitas.html">
                                <img src="assets/tacaca4.jpg" alt="tacaca">
                            </a>
                        <div class="food-title">
                            <h1>Tacacá</h1>
                        </div>

                        <div class="desc-food">
                            <p>"Receita muito popular no Norte do Brasil! Feito com tucupi, folhas de jambu e goma de tapioca. Vale muito a pena provar, um clássico!"</p>
                        </div>

                        <div class="price">
                        <span>Postado por: <a href="receitas.html">Eduardo</a></span> <span><i class='bx bx-like'></i></span>
                        </div>
                    </div>

                    <div id="card">
                        <a href="usuarioReceita1.html">
                            <img src="assets/panquecaDoce.jpg" alt="PanquecaDoce">
                        </a>
               

                    <div class="food-title">
                        <h1>Panqueca Doce</h1>
                    </div>

                    <div class="desc-food">
                        <p>"Clássico café da manhã norte americano! Comece da melhor forma possível, com uma receita prática de paqueca. Você vai adorar!"</p>
                    </div>

                    <div class="price">
                        <span>Postado por: <a href="usuarioReceita1.html">David</a></span> <span><i class='bx bx-like'></i></span>
                    </div>
                </div>

                <div id="card">
                    <a href="usuarioReceita2.html">
                        <img src="assets/acaraje.jpg" alt="Acaraje">
                    </a>

                    <div class="food-title">
                        <h1>Acarajé</h1>
                    </div>

                    <div class="desc-food">
                        <p>"Um prato típico da Bahia, feito com massa de feijão fradinho e frito no azeite do dendê! Experimente essa iguaria ancestral!"</p>
                    </div>

                    <div class="price">
                        <span>Postado por: <a href="usuarioReceita2.html">Nataly</a></span> <span><i class='bx bx-like'></i></span>
                    </div>
                </div>

                <div id="card">
                    <a href="usuarioReceita3.html">
                        <img src="assets/tortadoce.jpg" alt="Torta Docr">
                    </a>

                    <div class="food-title">
                        <h1>Torta de Chocolate</h1>
                    </div>

                    <div class="desc-food">
                        <p>"Receita presente em qualquer reunião de família! A torta unânime e que todos gostam! Essa receita vai conquistar você toda a sua família!"</p>
                    </div>

                    <div class="price">
                        <span>Postado por: <a href="usuarioReceita3.html">Ana</a></span> <span><i class='bx bx-like'></i></span>
                    </div>
            </div>
        </div>
    </div>
</section>
</main>
    <footer>
        <footer id="footer">
            Copyright 2024 © - Site Receitas™ 
        </footer>
    </footer>
    <script src="receitas.js"></script>
</body>
</html>
`;
const main = docu.createElement = ('main');
const section = createElement = ('section');
section.class = ('category');
const div = createElement = ('div');

const blob = new Blob([paginaReceita],{type: 'text/hmtl'});
const url = URL.createObjectURL(blob);
});
