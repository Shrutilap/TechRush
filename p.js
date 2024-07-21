document.getElementById('foodForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const ingredient = document.getElementById('ingredient').value.trim();

    if (ingredient === "") {
        displayerrormsg('Please enter ingredients to search for recipes.');
        return;
    }

    getrecipes(ingredient);
});

async function getrecipes(ingredient) {
    const appId = '047d8c99';
    const appKey = 'fd2d0549a8f7e1b3c03ce3ef6e1158c8';
    const url = `https://api.edamam.com/search?q=${ingredient}&app_id=${appId}&app_key=${appKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayrecipes(data.hits);
    } catch (error) {
        console.error('Error fetching the data:', error);
        displayerrormsg('There was an error fetching the recipes. Please try again later.');
    }
}

function displayrecipes(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>Sorry, no recipes were found for the entered ingredients. Please try again with different ingredients.</p>';
        return;
    }

    results.forEach(result => {
        const recipe = result.recipe;
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('card-container');
        recipeElement.innerHTML = `
            <div class="card">
                <div class="front">
                    <img src="${recipe.image}" alt="${recipe.label}">
                </div>
                <div class="back">
                    <h2>${recipe.label}</h2>
                    <p>${recipe.ingredientLines.join(', ')}</p>
                    <a href="${recipe.url}" target="_blank">View Recipe</a>
                </div>
            </div>
        `;
        resultsDiv.appendChild(recipeElement);
    });
}

function displayerrormsg(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>${message}</p>`;


}

var dive_in = document.getElementByClassName('divein');
function toggleCSS(){
    var back = document.getElementsByTagName('body');
    back.style.height = '100vh';

}
dive_in.addEventListener("click", toggleCSS);

var search_button = document.getElementsByClassName('search-button');
function changeCSS(){
    var back = document.getElementsByTagName('body');
    back.style.height = '0';

}
search_button.addEventListener("click", changeCSS);

