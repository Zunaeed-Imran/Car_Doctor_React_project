
import './App.css'
import AboutUs from './components/AboutUs';
import CoreFeatures from './components/CoreFeatures';
import PopularProduct from './components/PopularProduct';
import Service from './components/Service';
import Team from './components/Team';
import Hero from './layout/Hero';

function App() {


  return (
    <>
      <div>
        <Hero />
        <AboutUs />
        <Service />
        <PopularProduct />
        <Team />
        <CoreFeatures/>
      </div>
    </>
  );
}

export default App
