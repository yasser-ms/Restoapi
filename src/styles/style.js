import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapped = styled.div`
  margin: 4rem 0rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
`;

export const CuisineCard = styled.div`
  min-height: 10rem;
  border-radius: 2rem;
  margin: 2rem 0rem;
  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a {
    text-decoration: none;
  }
  h4 {
    align-items: center;
    padding: 1rem;
  }
`;

export const Card = styled.div`
  min-height: 10rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Explore = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  input {
    width: 150px;
    height: 60px;
    padding: 0px 20px;
    flex: 1;
    border-radius: 2rem;
    border: 0;
    outline: 0;
    background: rgb(56, 56, 56);
    color: white;
    font-weight: 500;
  }
  button {
    width: 150px;
    height: 60px;
    border: 3px solid rgb(56, 56, 56);
    border-radius: 45px;
    transition: all 0.3s;
    cursor: pointer;
    background: white;
    font-size: 1.2em;
    font-weight: 550;
    font-family: "Montserrat", sans-serif;
  }

  button:hover {
    background: rgb(56, 56, 56);
    color: white;
    font-size: 1.5em;
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    margin: 1rem;
  }
  h4{
    margin: 1rem;
  }
  ul {
    padding: 2rem;
    border: 1px solid black;
    border-radius: 1rem;
  }
  li {
    padding: 3px 0px;
    font-weight: 500;
  }
  p {
    padding: 2rem;
    border: 1px solid black;
    border-radius: 1rem;
    letter-spacing: 1px;
  }
`;
