import { Suspense } from 'react';
import './App.css';
import Banner from './Component/Banner/Banner';
import Game from './Component/Gamess/Game';
import Navber from './Component/Navber/Navber';
import SupportSection from './Component/SupportSection/SupportSection';
import Footer from './Component/Footer/footer';
import divider from 'daisyui/components/divider';


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
        fallback={
          <div className="bg-[#052416]">
            <div className=" container mx-auto pb-100 flex items-center pt-20  ">
              <span className="loading loading-bars loading-xl mx-auto "></span>
            </div>
          </div>
        }
      >
        <Game gamePromise={gamePromise}></Game>
      </Suspense>
      <SupportSection></SupportSection>
      <Footer></Footer>
    </>
  );
}

export default App;
