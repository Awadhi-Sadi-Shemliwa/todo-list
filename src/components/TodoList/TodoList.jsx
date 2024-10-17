import React, { useState } from 'react';
import { PlusCircle, ShoppingCart, Mail, Calendar, PhoneCall, Dumbbell, Home, User, Settings, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom'; 
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Groceries', path:'/grocery', description: 'Buy fruits, vegetables, and snacks', icon: ShoppingCart },
    { id: 2, title: 'Emails', path:'/email', description: 'Respond to important emails', icon: Mail },
    { id: 3, title: 'Calls,Reminders & Events', path:'/calls&remainders' , description: 'Plan for the upcoming events', icon: Calendar },
    { id: 4, title: 'Health Partner (Gym)', path:'/healthpartner' , description: 'Workout with your partner', icon: Dumbbell },
  ]);

  const [newTodo, setNewTodo] = useState('');
const [caloriesBurned, setCaloriesBurned] = useState(500);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), title: newTodo, description: '', icon: PlusCircle }]);
      setNewTodo('');
    }
  };

  const foodSuggestions = [
    { name: 'Grilled Chicken Salad', description: 'A healthy option packed with protein', image: '/api/placeholder/300/200' },
    { name: 'Quinoa Bowl', description: 'Rich in fiber and nutrients', image: '/api/placeholder/300/200' },
    { name: 'Fruit Smoothie', description: 'Refreshing and low in calories', image: '/api/placeholder/300/200' },
  ];

  return (
    <div className='all'>
          <div className="app-container">
      <header className="app-header">
        <h1>Login Luxe</h1>
        <div className="profile-section">
          <img src="/api/placeholder/80/80" alt="User profile" className="profile-pic" />
          <div className="profile-info">
            <h2>Welcome, User!</h2>
            <p>Your personalized dashboard</p>
          </div>
        </div>
      </header>

      <div className="todo-list-container">
        <h2 className="todo-list-title">Your To-Do List</h2>
        <div className="todo-list-grid">
          {todos.map((todo) => (
            <NavLink 
              to={todo.path} 
              key={todo.id} 
              className="todo-item" 
              style={{ textDecoration: 'none',
                color: 'black'
               }} // Ensure link styles are removed
            >
              <div className="todo-content">
                <todo.icon className="todo-icon" />
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
              </div>
            </NavLink>
          ))}
        </div>

        <div className="add-todo">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            className="add-todo-input"
          />
          <button onClick={addTodo} className="add-todo-button">
            <PlusCircle />
            Add Task
          </button>
        </div>
      </div>

      <div className="calorie-update">
        <h2>Calorie Update</h2>
        <p>You've burned {caloriesBurned} calories today!</p>
      </div>

      <div className="food-suggestions">
        <h2>Food Suggestions</h2>
        <div className="food-grid">
          {foodSuggestions.map((food, index) => (
            <div key={index} className="food-item">
              <img src={food.image} alt={food.name} className="food-image" />
              <h3>{food.name}</h3>
              <p>{food.description}</p>
            </div>
          ))}
        </div>
      </div>

      <nav className="bottom-nav">
        <button className="nav-button1"><Home /> Home</button>
        <button className="nav-button1"><User /> Profile</button>
        <button className="nav-button1"><Settings /> Settings</button>
        <button className="nav-button1"><LogOut /> Logout</button>
      </nav>
    </div>
    </div>

  );
};

export default TodoList;
