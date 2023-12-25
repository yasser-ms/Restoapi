import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { Slink } from "../styles/style";
import { NavLink } from "react-router-dom";
import React from "react";

function Category() {
  return (
    <List >
      <Slink to={"/Cuisine/Italian"} 
   >
        <FaPizzaSlice></FaPizzaSlice>
        <h4>Italien</h4>
      </Slink>
      <Slink to={"/Cuisine/American"}>
        <FaHamburger></FaHamburger>
        <h4>American</h4>
      </Slink>
      <Slink to={"/Cuisine/Thai"}>
        <GiNoodles></GiNoodles>
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/Cuisine/Japanese"}>
        <GiChopsticks></GiChopsticks>
        <h4>Japanese</h4>
      </Slink>
    </List>
  );
}
const List = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0rem;
`;
export default Category;
