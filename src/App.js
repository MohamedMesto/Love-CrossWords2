
/* import logo from './assets/images/team1.jpg'; */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import WordsAdventure from './components/WordsAdventure'
import Team from './components/Team';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import MediaHub from './components/MediaHub';
import Contact from './components/Contact';
/* import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/LanguageSelector'; */

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WordsAdventure" element={<WordsAdventure />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/mediahub" element={<MediaHub />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
