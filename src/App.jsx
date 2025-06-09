import "./App.css";
import { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { ImageSquare } from "./components/ImageSquare";
import { PerformanceStats } from "./components/PerformanceStats";
import logoReact from "./assets/logo-react.png";

function App() {
  const totalImages = 800;
  const imagesPerBatch = 50;

  const [order, setOrder] = useState("asc");
  const [index, setIndex] = useState(1);

  const allImages = Array.from({ length: totalImages }, (_, i) => {
    const num = order === "asc" ? i + 1 : totalImages - i;
    return `/assets/photo (${num}).jpg`;
  });

  const [visibleImages, setVisibleImages] = useState(
    allImages.slice(0, imagesPerBatch)
  );

  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (bottom && index * imagesPerBatch < totalImages) {
      const newIndex = index + 1;
      setVisibleImages(allImages.slice(0, newIndex * imagesPerBatch));
      setIndex(newIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index, order]);

  useEffect(() => {
    setIndex(1);
    setVisibleImages(allImages.slice(0, imagesPerBatch));
  }, [order]);

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
        {visibleImages.map((src, i) => (
          <ImageSquare key={i} src={src} />
        ))}
      </div>
    </div>
  );
}

export default App;
