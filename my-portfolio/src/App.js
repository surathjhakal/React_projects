import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Header from "./Header";
import About from "./About";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
    </div>
  );
}

export default App;
