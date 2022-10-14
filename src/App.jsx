import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const handleClick = () => setIsToggleOn(!isToggleOn)

  return (
    <div>
      <Navbar isToggleOn={isToggleOn} handleClick={handleClick} />
      <Home />
      <About />
      <Skills />
      <Projects isToggleOn={isToggleOn} />
      <Contact />
    </div>
  );
}

export default App;
