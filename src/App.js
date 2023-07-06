import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import AboutPage from './components/AboutPage';

//  a central place to organize and assemble the components that make up your application's user interface.  It acts as the "container"
function App() {
  return (  // BrowserRouter: provides routing functionality to the entire application.
    <BrowserRouter>   
      <NavBar />
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
