import React from "react";
import IngrediantsList from "./IngrediantsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "../Ai"
function Sec() {
    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    
    async function getRecipe() {
      const recipeMarkdown = await getRecipeFromMistral(ingredients)
      setRecipe(recipeMarkdown)
    }


  // Function to add an ingredient
  function addIngredient(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target); // Get form data
    const newIngredient = formData.get("ingredient"); // Extract the "ingredient" value
    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
      event.target.reset() // Reset the form input
    }
  }

  return (
    <main>
      {/* Form with onSubmit handler */}
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>

      
      {ingredients.length > 0 && 
       <IngrediantsList ingredients={ingredients} 
                         getRecipe={getRecipe}
                />
       
       }

        {recipe && <ClaudeRecipe recipe={recipe} />}
      
    </main>
  );
}

export default Sec;
