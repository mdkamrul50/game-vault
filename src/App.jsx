import { Suspense } from 'react';
import './App.css';
import Banner from './Component/Banner/Banner';
import Game from './Component/Gamess/Game';
import Navber from './Component/Navber/Navber';
import SupportSection from './Component/SupportSection/SupportSection';
import Footer from './Component/Footer/footer';


const loadGame = async () => {
  const res = await fetch(
    'https://api.rawg.io/api/games?key=15339f43ca8f419481fb0d5e623bc724'
  );
  return res.json();
};

function App() {
  const gamePromise = loadGame();
  return (
    <>
        <Navber></Navber>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Game gamePromise={gamePromise}></Game>
      </Suspense>
     <SupportSection></SupportSection>
     <Footer></Footer>
    </>
  );
}

export default App;
