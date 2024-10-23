const recipes = [
    { name: 'Tacacá', link: 'receitas.html'},
    { name: 'Panqueca Doce', link: 'usuarioReceita1.html' },
    { name: 'Acarajé', link: 'usuarioReceita2.html' },
    { name: 'Torta de Chocolate', link: 'usuarioReceita3.html' },
    { name: 'Quindim de Padaria', link: 'usuarioReceita5.html' },
    { name: 'Arroz de Cuxá Maranhense', link: 'usuarioReceita4.html' },
    { name: 'Pao de Queijo Mineiro', link: 'usuarioReceita6.html' },
    
    // Adicione mais receitas conforme necessário
];

function searchRecipes() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    if (!query){
        document.getElementById('searchResults').innerHTML = '';
        return;    
    }
    // Verifica se há uma correspondência exata
    const exactMatch = recipes.find(recipe => recipe.name.toLowerCase() === query);

    if (exactMatch) {
        // Redireciona para a página da receita correspondente
        window.location.href = exactMatch.link;
    } else {
        // Exibe os resultados de pesquisa com base em correspondência parcial
        const resultsContainer = document.getElementById('searchResults');
        resultsContainer.innerHTML = ''; // Limpa os resultados anteriores

        const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(query));

        if (filteredRecipes.length > 0) {
            filteredRecipes.forEach(recipe => {
                const resultHTML = `
                    <div class="recipe-result">
                        <h3>${recipe.name}</h3>
                        <a href="${recipe.link}">Ver receita</a>
                    </div>
                `;
                resultsContainer.innerHTML += resultHTML;
            });
        } else {
            resultsContainer.innerHTML = '<p>Nenhuma receita encontrada.</p>';
        }
    }
}