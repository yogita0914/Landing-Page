import './App.css';
import { useState } from 'react';
import Background from './component/Background';
import Navbar from './component/Navbar';
import Hero from './component/Hero';

const App = () => {
  const heroData = [
    { text1: "Dive into", text2: "what you love?" },
    { text1: "Indulge", text2: "your passion" },
    { text1: "Give in to", text2: "your passion" }
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div className="app">
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData}
        setHeroCount={setHeroCount}
        heroCount={heroCount}
      />
    </div>
  );
}

export default App;
