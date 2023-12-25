import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Detail } from "../styles/style";
function Recipe() {
  const [Details, setDetails] = useState({ extendedIngredients: [] });
  const Params = useParams();
  const GetDetails = async (id) => {
    const data = await fetch(
      ` https://api.spoonacular.com/recipes/${id}/information?apiKey=238907a2f14a47d8adb17cb6a5a43346`
    );
    const response = await data.json();
    setDetails(response);
  };

  useEffect(() => {
    GetDetails(Params.id);
    console.log(Details);
  }, [Params.id]);
  const Ingredients = Details.extendedIngredients;
  return (
    <Detail>
      <h2>{Details.title}</h2>
      <div>
        <img
          src={Details.image}
          alt={Details.title}
          style={{
            maxWidth: "500px",
            borderRadius: "1rem",
          }}
        />
      </div>
      <div>
        <h4>Ingredients:</h4>
        <ul>
          {Ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.original}</li>
          ))}
        </ul>
        <div>
          <h4>Instructions: </h4>
          <p>{Details.instructions}</p>
        </div>
      </div>
    </Detail>
  );
}

export default Recipe;
//
