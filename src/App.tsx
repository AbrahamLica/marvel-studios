import { Fragment, useState } from "react";
import { GlobalStyle } from "./AppGlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import HomeCharacters from "./Components/Characters/HomeCharacters/HomeCharacters";
import DetailsCharacters from "./Components/DetailsCharacters/DetailsCharacters";
import Comics from './Components/Comics/Comics'

function App() {
  return (
    <Fragment>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagecharacters" element={<HomeCharacters />} />
          <Route path="/detailsCharacters" element={<DetailsCharacters />} />
          <Route path="/pagecomics" element={<Comics/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
