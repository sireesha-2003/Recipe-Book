const API_KEY = "e3ebfecab4934b7383d63fe0e23331db";
const recipeListEl = document.getElementById("recipe-list")

function displayRecipes(recipes){
    recipeListEl.innerHTML = "";
    recipe.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt= "recipe.image";

        recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        recipeIngredientsEl = document.createElement("p")
        recipeIngredientsEl.innerHtML = `
            <strong>Ingredients:</strong> ${recipe.extendedIngredients
            .map((ingredients)=>ingredients.original)
            .join(", ")}
        `;


        recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";


        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);
    });
}


 async function getRecipes(){
    const response = await fetch(
        `https://spoonacular.com/food-api/console/recipes/random?number=10&apiKey=${API_KEY}`
    );

    const data = await response.json()
    return data.recipes
 }



async function init(){
    const recipes = await getRecipes();
    displayRecipes(recipes)
}

init();