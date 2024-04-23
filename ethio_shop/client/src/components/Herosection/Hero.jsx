function Hero() {
  return (
    <div className="w-full bg-gray-100 h-96">
      <img
        src="src\components\assets\2AGFP17_1_2048x2048teffHarvest.jpg"
        alt="women working in field"
        className="w-full h-full object-cover object-top"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold ">EthioFlavors</h1>
        <p className="text-lg ">Description Subheading</p>
        <div className="mt-4">
          <button className="px-6 py-2 text-center text-white bg-[#fbbf24] rounded-md shadow-md">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
