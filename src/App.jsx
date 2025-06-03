import "./App.css";
import { Filter } from "./components/Filter";
import { ImageSquare } from "./components/ImageSquare";
import logoReact from "./assets/logo-react.png";

function App() {
  return (
    <div className="app">
      <h1>
        Frameworks modernes à l'épreuve : benchmark synthétique de performance
        extrême entre Vue, React et Angular.
      </h1>
      <div className="infos-container">
        <div className="flex-col-justify-between">
          <img src={logoReact} className="logo" alt="" />
          <Filter />
        </div>
        <div className="flex-col-justify-between">
          Informations à propos de l'app - React
          <div>TTFB : </div>
          <div>LCP : </div>
          <div>FCP : </div>
          <div>TBT : </div>
          <div>TTI : </div>
        </div>
      </div>
      <div className="img-container">
        <ImageSquare />
        <ImageSquare />
        <ImageSquare />
      </div>
    </div>
  );
}

export default App;
