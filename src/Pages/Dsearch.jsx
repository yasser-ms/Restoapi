import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Grid, Card, Gradient, Wrapped } from "../styles/style";
function Dsearch() {
  const [SearchedRecipes, setSearchedRecipes] = useState([]);
  const Params = useParams();
  const GetSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=226e725ba06e4b798928d643e6e5fb3c&number=20&query=${name}`
    );
    const response = await data.json();
    localStorage.setItem("cuisine", JSON.stringify(response.results));
    setSearchedRecipes(response.results);
  };

  useEffect(() => {
    GetSearched(Params.search);
  }, [Params.search]);

  return (
    <Wrapped>
      <h4 style={{ margin: "2rem" }}>Our Best {Params.search}</h4>
      <Grid>
        {SearchedRecipes.map((searchrecipe) => {
          return (
            <NavLink to={`/Recipe/${searchrecipe.id}`}>
              <Card key={searchrecipe.id}>
                <p>{searchrecipe.title}</p>
                <img src={searchrecipe.image} alt={SearchedRecipes.title} />
                <Gradient />
              </Card>
            </NavLink>
          );
        })}
      </Grid>
    </Wrapped>
  );
}

export default Dsearch;
