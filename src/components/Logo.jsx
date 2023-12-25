import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
function Logo() {
  return (
    <NavLink to={'/'}>
      <Logoo>
        <img src="../src/assets/img/chef.jpg" alt="Logo" />
      </Logoo>
    </NavLink>
  );
}
const Logoo = styled.div`
  img {
    max-width: 150px;
  }
`;
export default Logo;
