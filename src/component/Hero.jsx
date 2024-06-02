import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ setPlayStatus, heroData, setHeroCount, heroCount }) => {
  const handleClick = () => {
    setPlayStatus((prev) => !prev);
  };

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroText}>
        <h1>{heroData[heroCount].text1}</h1>
        <p>{heroData[heroCount].text2}</p>
      </div>
      <button className={styles.toggleButton} onClick={handleClick}>Toggle Play Status</button>
      <button className={styles.nextButton} onClick={() => setHeroCount((prev) => (prev + 1) % heroData.length)}>Next Hero</button>
    </div>
  );
}

export default Hero;
