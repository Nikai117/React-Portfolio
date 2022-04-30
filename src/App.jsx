import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Portofolio from "./components/Portofolio/Portofolio";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import "./App.scss"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portofolio />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
