import { Routes, Route } from "react-router-dom"
// import './App.css'
import './css/main.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from "./pages/Projects"

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/projects" exact element={<Projects />} />
    </Routes>
  );
}

export default App;
