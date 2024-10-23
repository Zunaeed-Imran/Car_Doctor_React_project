
import './App.css'
import AboutUs from './components/AboutUs';
import CoreFeatures from './components/CoreFeatures';
import PopularProduct from './components/PopularProduct';
import Service from './components/Service';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Footer from './layout/Footer';
import Hero from './layout/Hero';
import PageTitle from './services/PageTitle';

function App() {


  return (
    <>
      <div>
        <PageTitle title={'Car Doctor'} />
        <Hero />
        <AboutUs />
        <Service />
        <PopularProduct />
        <Team />
        <CoreFeatures />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default App
