
import './App.css'
import AboutUs from './components/AboutUs';
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
        <Team/>
      </div>
    </>
  );
}

export default App
