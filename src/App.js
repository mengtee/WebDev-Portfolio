import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ProjectCard } from "./components/ProjectCard";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

// Using Pascal casing
function App() {
  return (
    // JSX markup (similar to HTML but is not), react unable to return multiple element, the div class allow return multiple class
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      {/* <Investments /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
