import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { FaCar } from "react-icons/fa6";
import LoginForm from "../LoginForm/LoginForm";
import Register from "../RegisterForm/Register";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact Us" },
  ];

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle login form visibility
  const toggleLoginForm = () => {
    setIsLoginVisible(!isLoginVisible);
  };

  const toggleRegister = () => {
    setIsRegisterVisible(!isRegisterVisible);
  };

  const switchToRegister = () => {
    setIsLoginVisible(false);
    setIsRegisterVisible(true);
  };

  return (
    <>
      <header className="sm:px-8 px-4 py-2 z-10 w-full bg-[#fbbf24]">
        <nav className="flex justify-between items-center max-container">
          <FaCar className="text-5xl px-2" />
          <p className="text-2xl font-bold">EthioFlavors</p>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
            <button
              onClick={toggleLoginForm}
              className="rounded-full shadow-md bg-white hover:bg-slate-200 py-2 px-3"
            >
              Sign In
            </button>
            <button
              onClick={toggleRegister} // New button to toggle registration form visibility
              className="rounded-full shadow-md bg-white hover:bg-slate-200 py-2 px-3"
            >
              Register
            </button>
            <a href="/">
              <IoCartOutline className="text-3xl" />
            </a>
          </div>
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={toggleMenu}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 bottom-0 z-50 w-96 bg-slate-100">
          <nav className="fixed top-0 right-0 bottom-0 lg:bottom-auto bg-slate-100 w-96 ">
            <div
              className="hidden max-lg:block fixed right-0 px-8 py-4 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className="lg:hidden flex flex-col items-center justify-center h-full border-2 ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Render LoginForm */}
      {isLoginVisible && (
        <LoginForm
          onClose={() => setIsLoginVisible(false)}
          onSwitchToRegister={switchToRegister}
        />
      )}
      {/* Render Registration */}
      {isRegisterVisible && (
        <Register onClose={() => setIsRegisterVisible(false)} />
      )}
    </>
  );
};

export default Navbar;
