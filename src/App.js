// import './styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

//  a central place to organize and assemble the components that make up your application's user interface.  It acts as the "container"
// It has the root component of the react app because every view and component are handled with hierarchy in React, 
// where <App /> is the top most component in the hierarchy. This gives you the feel that you maintain hierarchy in your code starting from

// BrowserRouter: provides routing functionality to the entire application. wrap our content first
// Routes: An application can have multiple <Routes>, it can be nested. The first <Route> has a path of /
// The nested <Route>s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.
// The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
// *: path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.

function App() {
  return (  
    <BrowserRouter>   
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/skills" element={<Skills />}  />
          <Route path="/about" element={<About />}  />
          <Route path="/projects" element={<Projects />}  />
          <Route path="/contact" element={<Contact />}  />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
