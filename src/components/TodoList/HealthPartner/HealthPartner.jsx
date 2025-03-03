import React, { useState } from 'react';
import { Home, Utensils, PhoneOutgoing, Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import healthpartner from '/src/assets/health_partner.jpg';
import healthyrecipe from '/src/assets/healthyrecipes.png';
import mindfultechniques from '/src/assets/mindfultechniques.jpg';
import workoutroutine from '/src/assets/workout-routine.png';

const HealthPartner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');
  const [nutritionPairs, setNutritionPairs] = useState([
    { favorite: 'Pizza', alternative: 'Quinoa Bowl', benefits: 'Low-carb, high-fiber, nutrient-rich' },
  ]);
  const [progress, setProgress] = useState({
    waterIntake: 70, // Percentage
    exerciseGoals: 85, // Percentage
    dietAdherence: 60, // Percentage
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleAddFavorite = () => {
    const newFavorite = prompt('Enter your favorite food:');
    const newAlternative = 'Quinoa Bowl'; // Static for simplicity; could use AI logic
    const newBenefits = 'Low-carb, high-fiber, nutrient-rich'; // Static for simplicity
    setNutritionPairs([...nutritionPairs, { favorite: newFavorite, alternative: newAlternative, benefits: newBenefits }]);
    setPrompt(''); // Clear input
  };

  const handleAddAlternative = () => {
    const index = nutritionPairs.length - 1;
    const newAlternative = prompt('Enter a healthy alternative:');
    const newBenefits = prompt('Enter health benefits:');
    setNutritionPairs((prev) =>
      prev.map((pair, i) =>
        i === index ? { ...pair, alternative: newAlternative, benefits: newBenefits } : pair
      )
    );
  };

  const handleAskCoach = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5002/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: prompt }),
      });

      const data = await response.json();
      if (response.ok) {
        setAnswer(data.result.response.candidates[0].content.parts[0].text);
      } else {
        setAnswer(`Error: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      setAnswer(`Error connecting to the server: ${error.message}`);
    }
    setPrompt(''); // Clear input after submission
  };

  return (
    <div className="flex flex-col min-h-screen p-2 sm:p-5 bg-gradient-to-br from-purple-300 via-blue-300 to-blue-400">
      <button
        className="fixed top-2 right-2 z-10 p-1 bg-white rounded-lg shadow-lg sm:top-5 sm:right-5"
        onClick={toggleMenu}
      >
        <Menu size={20} className="sm:size-16" />
      </button>

      {/* 1. HealthPartner Overview */}
      <div className=" p-4 sm:p-6 rounded-lg shadow-md mb-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">HealthPartner Overview</h1>
        <div className="relative w-full h-[100px] sm:h-[150px] bg-gradient-to-r from-yellow-300 via-white to-blue-500 rounded-lg overflow-hidden mb-2">
          <span className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl font-bold text-blue-800">
            PARTNER
          </span>
        </div>
        <p className="text-sm sm:text-base text-gray-600">
          Your personal health companion dedicated to helping you achieve your wellness goals through personalized workout
          plans, nutrition guidance, and expert advice.
        </p>
      </div>

      {/* 2. Nutrition Comparison Table */}
      <div className=" p-4 sm:p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Nutrition Comparison Table</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-purple-300">
              <th className="border p-2 text-left">Favorite Food</th>
              <th className="border p-2 text-left">Healthy Alternative</th>
              <th className="border p-2 text-left">Health Benefits</th>
            </tr>
          </thead>
          <tbody>
            {nutritionPairs.map((pair, index) => (
              <tr key={index} className="border-t">
                <td className="border p-2">{pair.favorite}</td>
                <td className="border p-2">{pair.alternative}</td>
                <td className="border p-2">{pair.benefits}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Add favorite food..."
            className="p-2 border rounded-lg w-full"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            onClick={handleAddFavorite}
            className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700"
          >
            Add Favorite
          </button>
          <button
            onClick={handleAddAlternative}
            className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700"
          >
            Add Alternative
          </button>
          <button
            onClick={() => setNutritionPairs([])}
            className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700"
          >
            Clear Pairs
          </button>
        </div>
      </div>

      {/* 3. Progress Tracker */}
      <div className=" p-4 sm:p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Progress Tracker</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center">
            <h3 className="text-sm sm:text-base font-medium text-gray-700">Water Intake</h3>
            <div className="relative w-24 h-24 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#9333ea" // Purple-600 for progress fill
                  strokeWidth="8"
                  strokeDasharray={`${progress.waterIntake * 2.51} 251`}
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm sm:text-base font-bold text-gray-800">
                {progress.waterIntake}%
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">70 fl oz</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm sm:text-base font-medium text-gray-700">Exercise Goals</h3>
            <div className="relative w-24 h-24 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#9333ea" // Purple-600 for progress fill
                  strokeWidth="8"
                  strokeDasharray={`${progress.exerciseGoals * 2.51} 251`}
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm sm:text-base font-bold text-gray-800">
                {progress.exerciseGoals}%
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">85 min</p>
          </div>
          <div className="text-center">
            <h3 className="text-sm sm:text-base font-medium text-gray-700">Diet Adherence</h3>
            <div className="relative w-24 h-24 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#9333ea" // Purple-600 for progress fill
                  strokeWidth="8"
                  strokeDasharray={`${progress.dietAdherence * 2.51} 251`}
                  strokeDashoffset="0"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm sm:text-base font-bold text-gray-800">
                {progress.dietAdherence}%
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">60,000 calories</p>
          </div>
        </div>
      </div>

      {/* 4. Ask Coach */}
      <div className=" p-4 sm:p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Ask Coach</h2>
        <textarea
          className="w-full h-20 sm:h-24 p-2 sm:p-3 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Ask your health-related questions..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={handleAskCoach}
          className="mt-2 w-full sm:w-auto px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Get Advice
        </button>
        {answer && (
          <p className="mt-2 text-sm sm:text-base text-gray-800 bg-purple-300 p-2 rounded-lg">{answer}</p>
        )}
      </div>

      {/* 5. Healthy Recipes & Mindful Techniques */}
      <div className=" p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Healthy Recipes & Mindful Techniques</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-purple-300 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Featured Recipe</h3>
            <img
              src={healthyrecipe}
              alt="Featured Recipe"
              className="w-full h-[150px] sm:h-[200px] object-cover rounded-lg mb-2"
            />
            <p className="text-sm sm:text-base text-gray-700">
              Quinoa Buddha Bowl: A nutritious bowl packed with proteins, healthy fats, and fresh veggies.
            </p>
          </div>
          <div className="bg-purple-300 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Mindfulness Practice</h3>
            <img
              src={mindfultechniques}
              alt="Mindfulness Technique"
              className="w-full h-[150px] sm:h-[200px] object-cover rounded-lg mb-2"
            />
            <p className="text-sm sm:text-base text-gray-700">
              5-Minute Breathing Exercise: Inhale for 4, hold for 4, exhale for 4. Repeat for 5 minutes.
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed flex flex-col items-center inset-y-0 bg-gray-100 left-0 w-[60px] sm:w-[80px] h-full transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <nav className="p-2 sm:p-5 flex flex-col items-center space-y-6 sm:space-y-11">
          <li className="flex flex-col items-center text-gray-700 hover:text-purple-600 transition space-y-1 sm:space-y-2 cursor-pointer">
            <NavLink to="/" className="flex flex-col items-center">
              <Home />
              <span className="text-xs sm:text-sm">Home</span>
            </NavLink>
          </li>
          <li className="flex flex-col items-center space-y-1 cursor-pointer text-gray-700 hover:text-purple-600">
            <Utensils />
            <span className="text-xs sm:text-sm">Nutrition</span>
          </li>
          <li className="flex flex-col items-center space-y-1 cursor-pointer text-gray-700 hover:text-purple-600">
            <PhoneOutgoing />
            <span className="text-xs sm:text-sm">Call Outbound</span>
          </li>
        </nav>
      </aside>
    </div>
  );
};

export default HealthPartner;