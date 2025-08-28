import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import translations from "./translations";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <div className="App">
      <header className="App-header">
        <select onChange={(e) => setLang(e.target.value)} value={lang}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ConfiaPay</h1>
        <ConnectButton />

        <h3>{translations[lang].jobList}</h3>
        {/* screens: Post job, Job list, My jobs */}
      </header>


      
      
    </div>
  );
}

export default App;
