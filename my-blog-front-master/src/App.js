import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import NotFound from './pages/NotFound';
 
//components
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
    <NavBar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/articles-list" element={<ArticlesList/>} />
          <Route exact path="/article/:name" element={<Article/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
 
export default App;

// // Components
// import Home from './pages/Home';
// import About from './pages/About';
// import Article from './pages/Article';
// import ArticlesList from './pages/ArticlesList';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
// function App() {
//   return (
//     <Router>
//       <Navbar/>
//       <div className="max-w-screen-md mx-auto pt-20">
//         <Routes>
//           <Route exact path="/" element={<Home/>} />
//           <Route exact path="/about" element={<About/>} />
//           <Route exact path="/articles-list" element={<ArticlesList/>} />
//           <Route exact path="/article/:name" element={<Article/>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }