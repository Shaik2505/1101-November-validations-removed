import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthForm from "../components/AuthForm"; // Adjust the path as necessary
import LandingPage from "./LandingPage";

const Navbar = ({ onSignInClick }) => {
  const [navbarColor, setNavbarColor] = useState("bg-primary");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarColor("bg-gray-300 shadow-lg");
      } else {
        setNavbarColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 p-4 flex justify-between items-center ${navbarColor}`}
    >
      <h1 className="text-xl font-bold text-black">Health</h1>
      <button
        onClick={onSignInClick}
        className="px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition"
      >
        Sign In
      </button>
    </nav>
  );
};

const Login = ({ setIsAuthenticated }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
    localStorage.removeItem("formData");
  };

  const handleAuth = async (formData, setErrors) => {
    const url = isSignUp
      ? "http://localhost:5000/users"
      : `http://localhost:5000/users?email=${formData.email}`;

    try {
      if (isSignUp) {
        await axios.post(url, {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      } else {
        const { data } = await axios.get(url);

        if (data.length === 0 || data[0].password !== formData.password) {
          setErrors({ email: "Username and password incorrect" });
          return;
        }
      }

      setIsAuthenticated(true);
      localStorage.setItem(
        "userData",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: "+20-01274318900", // Placeholder phone number
          address: "285 N Broad St, Elizabeth, NJ 07208, USA", // Placeholder address
        })
      );
      localStorage.removeItem("formData");
      navigate("/body/home");
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br">
      <Navbar onSignInClick={() => setShowAuthForm(true)} />
      <LandingPage />

      {showAuthForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-xl">
          <div className="bg-white p-6 h-2/3 md:h-auto rounded-lg shadow-lg w-full max-w-md mx-3 overflow-y-scroll relative">
            <button
              onClick={() => setShowAuthForm(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl focus:outline-none"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>
            <AuthForm isSignUp={isSignUp} handleAuth={handleAuth} />
            <p className="text-center text-sm text-gray-600 mt-4">
              {isSignUp ? (
                <>
                  Already a user?{" "}
                  <button
                    onClick={toggleForm}
                    className="text-blue-500 hover:underline focus:outline-none"
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  New user?{" "}
                  <button
                    onClick={toggleForm}
                    className="text-blue-500 hover:underline focus:outline-none"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
