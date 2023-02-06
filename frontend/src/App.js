import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from "./pages/Home";
import About from "./pages/About";

import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/articles-list" element={<ArticlesList/>}/>
          <Route path="/article/:name" element={<Article/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div> 
    </BrowserRouter>
  );
}

export default App;