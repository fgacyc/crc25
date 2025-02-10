import Hero from './components/Hero/Hero';
import Testimony from './components/Testimony/Testimony';
import Schedule from './components/Schedule/Schedule';
import Venue from './components/Venue/Venue';
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <Testimony />
      <Schedule />
      <Venue />
    </div>
  );
}

export default App;
