import { VscCheck } from "react-icons/vsc";
import logo from "../assets/logo.png";
function About() {
  return (
    <section id="about-us">
      <div className="bg-[#fde68a] py-12 mb-10 shadow-lg ">
        <div className="container mx-auto">
          {/* About section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            {/* Left side: Image or logo */}
            <div className="text-center md:text-left">
              <img
                src={logo}
                alt="Company Logo"
                className="w-1/2 md:w-full mx-auto md:mx-0"
              />
            </div>

            {/* Right side: Text content */}
            <div className="p-4 md:p-8">
              {/* Subheading */}
              <p className="text-xl md:text-2xl lg:text-3xl text-primary font-semibold">
                Who We Are
              </p>
              {/* Heading */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-2">
                About EthioFlavors
              </h2>
              {/* Text */}
              <p className="mt-4 text-lg text-gray-700">
                EthioFlavors is committed to providing authentic Ethiopian
                imports directly to your doorstep. Our products include the
                finest grains, coffees, and liqueurs, sourced directly from the
                heart of Ethiopia.
              </p>
              {/* List with V icons */}
              <ul className="mt-4 space-y-3">
                <li className="flex items-center text-lg">
                  <VscCheck className="text-green-500 mr-2" />
                  <span>High-quality products</span>
                </li>
                <li className="flex items-center text-lg">
                  <VscCheck className="text-green-500 mr-2" />
                  <span>Direct imports from Ethiopia</span>
                </li>
                <li className="flex items-center text-lg">
                  <VscCheck className="text-green-500 mr-2" />
                  <span>Environmentally friendly practices</span>
                </li>
                <li className="flex items-center text-lg">
                  <VscCheck className="text-green-500 mr-2" />
                  <span>Exceptional customer service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
