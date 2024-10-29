$(document).ready(function() {
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
    });
})

const arrayReceitas = [
{ 
    titulo: "Tacacá",
    subtitulo: "Ingredientes",
    ingredientes: "4 xícaras (chá) de água, 1/2 xícara (chá) de polvilho azedo (ou goma de mandioca), 1 colher (chá) de sal, 500 g de camarão salgado (seco), 4 folhas de chicória, 4 dentes de alho bem amassados, 3 pimentas-de-cheiro, 2 maços de jambu, 2 litros de tucupi",
    preparo: "Coloque o tucupi em uma panela com o alho bem amassado, o sal, a chicória e as pimentas. Leve ao fogo, Quando começar a ferver, abaixe o fogo, tampe a panela e deixe cozinhar por 30 minutos aproximadamente, Simultaneamente em outra panela, cozinhe o jambu até ficar tenro,Retire do fogo, escorra e reserve, Lave bem os camarões e leve-os ao fogo em uma panela com 4 xícaras de água, Deixe ferver por aproximadamente 5 minutos, Retire a cabeça e a casca, Em uma panela, misture o polvilho com a água dos camarões, leve ao fogo e mexa até obter um mingau, Sirva em uma cuia com uma concha de tucupi, um pouco do mingau, algumas folhas de jambu e os camarões",
},
{
    titulo: "Paqueca Doce",
    subtitulo: "Ingredientes",
    ingredientes: "1 xícara (chá) de farinha de trigo, 2 colheres (sopa) de manteiga derretida, 1 colher (sopa) de fermento em pó, 1 colher (chá) de sal, 1 xícara (chá) de leite, 2 colheres (sopa) de açúcar, 1 ovo",
    preparo: "Bata os ovos levemente, junte o leite e a manteiga e o açúcar, Adicione a farinha de trigo, o fermento (se a farinha já não conter) e o sal. Note que vai ficar um pouco espessa, o que é normal para este tipo de panqueca, Modele as panquecas em uma frigideira antiaderente untada com manteiga, Sirva com mel, geleia, frutas ou iogurte,"
},
]

// criar o elemento
const nomeReceita = document.createElement('section')

// popular o elemento
nomeReceita.innerHTML = `<section>
            <div class="card">
                <img src="assets/eduardo.jpg" alt="user" style="border-radius: 50%; margin-right: 20px; display: block;">
            </div>
            <div>
                <strong>Cozinheiro Eduardo</strong>
                <blockquote>Especialista em Comida regionalista</blockquote>
            </div>
        </section>

        <section id="listaReceita">
            <h1 id="receita">Tacacá</h1>
            <h3 id="Receita">Ingredientes</h3>
            <div class="description">
                <ul type="none">
                    <li> - 4 xícaras (chá) de água</li>
                    <li> - 1/2 xícara (chá) de polvilho azedo (ou goma de mandioca)</li>
                    <li> - 1 colher (chá) de sal</li>
                    <li> - 500 g de camarão salgado (seco)</li>
                    <li> - 4 folhas de chicória</li>
                    <li> - 4 dentes de alho bem amassados</li>
                    <li> - 3 pimentas-de-cheiro</li>
                    <li> - 2 maços de jambu</li>
                    <li> - 2 litros de tucupi</li>
                </ul>                      
            </div>
        </section>

        <section>    
                <h3 id="Receita">Modo de preparo</h3>
                <div class="description">
                    <ul type="none">
                        <li> - Coloque o tucupi em uma panela com o alho bem amassado, o sal, a chicória e as pimentas.
                        Leve ao fogo.</li>
                        <li> - Quando começar a ferver, abaixe o fogo, tampe a panela e deixe cozinhar por 30 minutos aproximadamente.</li>
                        <li> - Simultaneamente em outra panela, cozinhe o jambu até ficar tenro.</li>
                        <li> - Retire do fogo, escorra e reserve.</li>
                        <li> - Lave bem os camarões e leve-os ao fogo em uma panela com 4 xícaras de água.</li>
                        <li> - Deixe ferver por aproximadamente 5 minutos.</li>
                        <li> - Retire a cabeça e a casca.</li>
                        <li> - Em uma panela, misture o polvilho com a água dos camarões, leve ao fogo e mexa até obter um mingau.</li>
                        <li> - Sirva em uma cuia com uma concha de tucupi, um pouco do mingau, algumas folhas de jambu e os camarões.</li>
                    </ul>
                </div>
        </section>  `


const main = document.querySelector('section')
main.appendChild(nomeReceita)
