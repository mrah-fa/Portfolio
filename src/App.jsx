import { useContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import { ThemeContext } from "./components/elements/MainButton/MainButton";
import Nav from "./components/Nav/Nav";
import Reserved from "./components/Reserved/Reserved";
import Details from "./page/Details/Details";
import Contact from "./components/Contact/Contact";

function App() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Reserved
          right="@ 2024. All Rights Reserved"
          developerName="Develpoment by marah"
        />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
