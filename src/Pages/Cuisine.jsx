import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink, useParams } from "react-router-dom";
import { Grid, CuisineCard } from "../styles/style";

function Cuisine() {
  const params = useParams();
  const [cuisine, setcuisine] = useState([]);

  const GetCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=238907a2f14a47d8adb17cb6a5a43346&number=10&cuisine=${name}`
    );
    const response = await data.json();
    setcuisine(response.results);
  };
  useEffect(() => {
    GetCuisine(params.type);
    console.log(cuisine);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <NavLink to={`/Recipe/${item.id}`}>
            <CuisineCard key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </CuisineCard>
          </NavLink>
        );
      })}
    </Grid>
  );
}

export default Cuisine;
