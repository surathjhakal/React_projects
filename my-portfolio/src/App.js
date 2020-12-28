import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from "./Header";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
// import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    <div className="app">
      <Header />
      <About />
      <Education />
      <hr />
      <Skills />
      <Projects />
      <Footer />
    </div>
    // </BrowserRouter>
  );
}

export default App;
