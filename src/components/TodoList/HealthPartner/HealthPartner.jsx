import React, { useState } from 'react';
import { Home, Utensils, PhoneOutgoing, Menu, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import healthpartner from '/src/assets/health_partner.jpg';
import healthyrecipe from '/src/assets/healthyrecipes.png';
import mindfultechniques from '/src/assets/mindfultechniques.jpg';
import workoutroutine from '/src/assets/workout-routine.png';

const HealthPartner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAskCoach = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5002/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: prompt }),
      });

      const data = await response.json();
      if (response.ok) {
        setAnswer(data.result.response.candidates[0].content.parts[0].text);
      } else {
        alert(`Error fetching response: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      alert(`Error connecting to the server: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-2 sm:p-5">
      <button
        className="fixed top-2 right-2 z-10 p-2 bg-white rounded-lg shadow-lg sm:top-5 sm:right-5"
        onClick={toggleMenu}
      >
        <Menu size={20} sm:size={24} />
      </button>

      <div className="flex flex-col bg-white/80 rounded-lg shadow-lg backdrop-blur-sm border border-white/20 mb-4 sm:mb-5">
        <main className="flex-1 p-2 sm:p-5">
          <h1 className="text-lg font-bold sm:text-xl">Health Partner Overview</h1>
          <div className="my-3 sm:my-4">
            <img
              src={healthpartner}
              alt="hero"
              className="w-full h-40 sm:h-64 object-cover rounded-lg"
            />
          </div>
          <h2 className="text-base font-semibold sm:text-lg">Your Health Journey</h2>
          <p className="text-sm sm:text-base">
            A vibrant page showcasing the user's health partner journey.
          </p>
          <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
            <button className="py-1 px-3 sm:py-2 sm:px-4 bg-purple-600 text-white rounded-lg transition hover:bg-purple-700 text-sm sm:text-base">
              Workout Plans
            </button>
            <button className="py-1 px-3 sm:py-2 sm:px-4 bg-purple-600 text-white rounded-lg transition hover:bg-purple-700 text-sm sm:text-base">
              Nutrition Tips
            </button>
            <button className="py-1 px-3 sm:py-2 sm:px-4 bg-purple-600 text-white rounded-lg transition hover:bg-purple-700 text-sm sm:text-base">
              Progress Tracker
            </button>
          </div>
        </main>
      </div>

      <div className="flex flex-col bg-white/80 rounded-lg shadow-lg backdrop-blur-sm border border-white/20 mb-4 sm:mb-5 p-2 sm:p-5">
        <div className="mb-3 sm:mb-4">
          <textarea
            className="w-full h-24 sm:h-32 p-2 sm:p-3 border rounded-lg resize-none text-sm sm:text-base"
            placeholder="Type your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            className="w-full py-1 mt-2 sm:py-2 sm:mt-3 bg-purple-600 text-white rounded-lg transition hover:bg-purple-700 text-sm sm:text-base"
            onClick={handleAskCoach}
          >
            Ask Coach
          </button>
          <textarea
            className="w-full h-24 sm:h-32 p-2 sm:p-3 mt-2 sm:mt-3 border rounded-lg resize-none text-sm sm:text-base"
            placeholder="Your answer displayed here"
            value={answer}
            readOnly
          />
        </div>

        <div className="space-y-2 sm:space-y-3">
          <div className="flex justify-between items-center p-2 sm:p-3 bg-purple-600 text-white rounded-lg text-sm sm:text-base">
            Fitness Tips <ChevronDown />
          </div>
          <div className="flex justify-between items-center p-2 sm:p-3 bg-purple-600 text-white rounded-lg text-sm sm:text-base">
            Nutrition Guidance <ChevronDown />
          </div>
          <div className="flex justify-between items-center p-2 sm:p-3 bg-purple-600 text-white rounded-lg text-sm sm:text-base">
            Wellness Strategies <ChevronDown />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-5">
          <div className="bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] sm:hover:translate-y-[-5px]">
            <img
              src={workoutroutine}
              alt="Workout Routine"
              className="w-full h-32 sm:h-44 object-cover rounded-t-lg"
            />
            <div className="p-2 sm:p-3">
              <h3 className="text-sm sm:text-lg font-semibold">Workout Routine</h3>
              <p className="text-xs sm:text-sm">A personalized workout plan just for you!</p>
            </div>
          </div>
          <div className="bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] sm:hover:translate-y-[-5px]">
            <img
              src={healthyrecipe}
              alt="Healthy Recipes"
              className="w-full h-32 sm:h-44 object-cover rounded-t-lg"
            />
            <div className="p-2 sm:p-3">
              <h3 className="text-sm sm:text-lg font-semibold">Healthy Recipes</h3>
              <p className="text-xs sm:text-sm">Discover delicious and nutritious recipes.</p>
            </div>
          </div>
          <div className="bg-gray-800 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] sm:hover:translate-y-[-5px]">
            <img
              src={mindfultechniques}
              alt="Mindfulness Techniques"
              className="w-full h-32 sm:h-44 object-cover rounded-t-lg"
            />
            <div className="p-2 sm:p-3">
              <h3 className="text-sm sm:text-lg font-semibold">Mindfulness Techniques</h3>
              <p className="text-xs sm:text-sm">Explore techniques for mental well-being.</p>
            </div>
          </div>
        </div>
      </div>

      <aside
        className={`fixed flex flex-col items-center inset-y-0 bg-gray-100 left-0 w-[60px] sm:w-[80px] h-full transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <nav className="p-2 sm:p-5 flex flex-col items-center space-y-6 sm:space-y-11">
          <li className="flex flex-col items-center text-gray-700 hover:text-blue-600 transition space-y-1 sm:space-y-2 cursor-pointer">
            <NavLink to="/todolist" className="flex flex-col items-center">
              <Home />
              <span className="text-xs sm:text-sm">Home</span>
            </NavLink>
          </li>
          <li className="flex flex-col items-center space-y-1 cursor-pointer">
            <Utensils />
            <span className="text-xs sm:text-sm">Nutrition</span>
          </li>
          <li className="flex flex-col items-center space-y-1 cursor-pointer">
            <PhoneOutgoing />
            <span className="text-xs sm:text-sm">Call Outbound</span>
          </li>
        </nav>
      </aside>
    </div>
  );
};

export default HealthPartner;
