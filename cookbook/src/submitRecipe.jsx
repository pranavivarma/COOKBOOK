import React, { useState } from "react";
import "./SubmitRecipe.css";

const SubmitRecipe = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="submit-recipe-container">
      <h2>Submit a Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Story behind this recipe" value={story} onChange={(e) => setStory(e.target.value)} required />
        <textarea placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
};

export default SubmitRecipe;
