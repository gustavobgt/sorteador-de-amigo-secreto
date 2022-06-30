import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Formulario } from "./components/Formulario";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route element={Formulario} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
