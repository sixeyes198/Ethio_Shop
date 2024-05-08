import img5 from "../assets/img5.jpg";
function Hero() {
  return (
    <section id="home">
      <div className="relative w-full h-screen">
        <img
          src={img5}
          alt="women working in field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 bg-black">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-Poppins text-white text-center px-4">
            EthioFlavors
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-Poppins text-white text-center px-4 mt-2">
            Experience Authentic Ethiopian Imports Delivered to Your Doorstep
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
