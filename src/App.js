import { Route, Routes } from "react-router-dom";
import './App.css';
import Articles from './pages/Articles';
import Home from './pages/Home';
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

function App() {
  // const [isShow, setIsShow] = useState(true);

  return (
    <div className="App">
      <h2 className="add-margin">React Router</h2>

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/articles">Articles</a>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
