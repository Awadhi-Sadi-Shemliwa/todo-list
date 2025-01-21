import React, { useState } from 'react';
import {PlusCircle,ShoppingCart,Mail,Calendar,Dumbbell,Home,User,Settings,LogOut,Menu,} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import foodimage from '/src/assets/foodimage.png';
import quinoabowl from '/src/assets/quinoa-bowl.jpg';
import fruitsmoothie from '/src/assets/fruit-smoothie.jpg';



const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Groceries', path: '/grocery', description: 'Buy fruits, vegetables, and snacks', icon: ShoppingCart },
    { id: 2, title: 'Emails', path: '/email', description: 'Respond to important emails', icon: Mail },
    { id: 3, title: 'Tasks, Reminders & Events', path: '/tasks&remainders', description: 'Plan for the upcoming events', icon: Calendar },
    { id: 4, title: 'Health Partner (Gym)', path: '/healthpartner', description: 'Workout with your partner', icon: Dumbbell },
  ]);

  const [newTodo, setNewTodo] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [caloriesBurned, setCaloriesBurned] = useState(500);


  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTask = {
        id: Date.now(),
        title: newTodo,
        path: `/tasks&reminders-${Date.now()}`, // Assign a dynamic path for the new task
        description: 'New task added by user',
        icon: Calendar, // Default icon for new tasks
        startDate: new Date().toLocaleDateString(),
        endDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString(),
      };

      setTodos((prevTodos) => [...prevTodos, newTask]); // Add the new task to the todos array
      setNewTodo(''); // Clear the input field
    }
  };
  

  const foodSuggestions = [
    { name: 'Grilled Chicken Salad', description: 'A healthy option packed with protein', image: foodimage },
    { name: 'Quinoa Bowl', description: 'Rich in fiber and nutrients', image: quinoabowl },
    { name: 'Fruit Smoothie', description: 'Refreshing and low in calories', image: fruitsmoothie },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-blue-300 to-blue-400">
      <div className="flex min-h-screen p-5">
        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
          <header className="flex flex-col items-center mb-8 text-center">
            <h1 className="text-4xl font-bold">Login Luxe</h1>
            <div className="flex flex-col items-center mt-4">
              <img src="/src/assets/react.svg" alt="User profile" className="w-28 h-28 rounded-full shadow-lg" />
              <div className="mt-3">
                <h2 className="text-2xl">Welcome, User!</h2>
                <p className="text-gray-600">Your personalized dashboard</p>
              </div>
            </div>
            <button className="fixed top-5 right-5 z-10 p-2 text-xl" onClick={toggleMenu}>
              <Menu />
            </button>
          </header>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-lg w-full">
            <h2 className="text-2xl mb-4">Your To-Do List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {todos.map((todo) => (
                <NavLink
                  to={todo.path}
                  key={todo.id}
                  className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-4 shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex flex-col items-center text-center">
                    <todo.icon className="w-8 h-8 mb-3" />
                    <h3 className="text-xl">{todo.title}</h3>
                    <p className="text-gray-700">{todo.description}</p>
                  </div>
                </NavLink>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4">
            <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow p-3 border rounded-lg focus:outline-none"
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-800 transition"
        >
          <PlusCircle/>Add Task 
        </button>
    </div>

      
      <div>
</div>

          </div>

          <div className="mt-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-lg w-full">
            <h2 className="text-2xl">Calorie Update</h2>
            <p>You've burned {caloriesBurned} calories today!</p>
          </div>

          <div className="mt-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-lg w-full">
            <h2 className="text-2xl">Food Suggestions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {foodSuggestions.map((food, index) => (
                <div key={index} className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg overflow-hidden shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                  <img src={food.image} alt={food.name} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl">{food.name}</h3>
                    <p className="text-gray-700">{food.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside
  className={`fixed flex flex-col items-center inset-y-0 bg-gray-100 right-auto left-0 w-[80px] h-full transform ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform duration-300`}
>
  <nav className="p-5 flex flex-col items-center space-y-11 ">
    <button
      className="flex flex-col items-center space-y-1 cursor-pointer"
      onClick={toggleMenu}
    >
      <Home />
      <span className="text-xs">Home</span>
    </button>
    <button
      className="flex flex-col items-center space-y-1 cursor-pointer"
      onClick={toggleMenu}
    >
      <User />
      <span className="text-xs">Profile</span>
    </button>
    <button
      className="flex flex-col items-center space-y-1 cursor-pointer"
      onClick={toggleMenu}
    >
      <Settings />
      <span className="text-xs">Settings</span>
    </button>
    <button
      className="flex flex-col items-center space-y-1 cursor-pointer"
      onClick={toggleMenu}
    >
      <LogOut />
      <span className="text-xs">Logout</span>
    </button>
  </nav>
</aside>

        </div>
      </div>
    </div>
  );
};

export default TodoList;

