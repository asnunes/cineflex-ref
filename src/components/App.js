import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "./MainScreen";
import NavBar from "./NavBar";
import Movie from "./Movie";
import Session from "./Session";
import Success from "./Success";
import GlobalStyle from "./GlobalStyle";
import ReturnButton from "./ReturnButton";
import { useState } from "react";

export default function App() {
  const [successInfo, setSuccessInfo] = useState({
    title: "",
    date: "",
    time: "",
    tickets: [],
    name: "",
    cpf: "",
  });

  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <ReturnButton />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/sessoes/:idMovie" element={<Movie />} />
        <Route
          path="/assentos/:idSession"
          element={
            <Session
              successInfo={successInfo}
              setSuccessInfo={setSuccessInfo}
            />
          }
        />
        <Route
          path="/sucesso"
          element={<Success successInfo={successInfo} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
