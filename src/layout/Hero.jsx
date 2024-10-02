import $heroImg from "../assets/pageImage/hero.jpeg";


function Hero() {
  return (
    <div className="pt-1">
      <div className="hero min-h-screen">
        <img src={$heroImg} alt="hero-image" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="mb-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-3">
              <button className="btn btn-primary">Discover More</button>
              <button className="btn btn-outline text-white">Latest Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
