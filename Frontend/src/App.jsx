import { useState } from "react";
import "./App.css";
import Header from "./componentes/layout/header/Header";
import MainContent from "./componentes/layout/MainContent/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body className="terminal-dots">
        <Header />
        <MainContent />
      </body>
    </>
  );
}

export default App;
