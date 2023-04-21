import './App.css';
import Header from './components/Header';
import Jobs from './components/Jobs';
import Projects from './components/Projects';
import Studies from './components/Studies';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Jobs/>
      <Studies/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
