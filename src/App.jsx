import Pages from "./Pages/Pages";
import Category from "./components/Category";
import Logo from "./components/Logo";
import Search from "./components/Search";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          marginTop: "0%",
          marginBottom: "0%",
          marginRight: "20%",
          marginLeft: "20%",
        }}
      >
        <Logo />
        <Search />
        <Category />
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
