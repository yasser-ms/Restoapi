import React, { useEffect, useState } from "react";
import { Wrapped, Card, Gradient } from "../styles/style";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { NavLink } from "react-router-dom";
function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    PopularRecipe();
  }, []);

  const PopularRecipe = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=238907a2f14a47d8adb17cb6a5a43346&number=10`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setPopular(data.recipes); // Assuming that the array of recipes is stored in the 'recipes' property of the 'data' object
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Wrapped>
      <h3>Popular Picks</h3>
      <Splide
        options={{
          perPage: 2,
          arrows: false,
          pagination: false,
          gap: "5rem",
          drag: "free",
        }}
      >
        {popular.length > 0 ? (
          popular.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <NavLink to={`/Recipe/${recipe.id}`}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
              </NavLink>
            </SplideSlide>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Splide>
    </Wrapped>
  );
}

export default Popular;
