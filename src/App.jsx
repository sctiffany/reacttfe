import "./App.css";
import { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { ImageSquare } from "./components/ImageSquare";
import { PerformanceStats } from "./components/PerformanceStats";
import logoReact from "./assets/logo-react.png";

function App() {
  const totalImages = 800;
  const [order, setOrder] = useState("asc");

  const allImages = Array.from({ length: totalImages }, (_, i) => {
    const num = order === "asc" ? i + 1 : totalImages - i;
    return `/assets/photo (${num}).jpg`;
  });

  return (
    <div className="app">
      <h1>
        Frameworks modernes à l'épreuve : benchmark synthétique de performance
        extrême entre Vue, React et Angular.
      </h1>
      <div className="infos-container">
        <div className="flex-col-justify-between">
          <img src={logoReact} className="logo" alt="logo" />
          <Filter setOrder={(value) => setOrder(value)} />
        </div>
        <PerformanceStats />
      </div>
      <div className="img-container">
        {allImages.map((src, i) => (
          <ImageSquare key={i} src={src} />
        ))}
      </div>
    </div>
  );
}

export default App;
