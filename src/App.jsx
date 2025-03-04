import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import TodoList from './components/TodoList/TodoList';
import Groceries from './components/TodoList/Groceries/Groceries';
import Email from './components/TodoList/Email/Email';
import TasksAndReminders from './components/TodoList/TasksAndRemainders/TasksAndReminders';
import HealthPartner from './components/TodoList/HealthPartner/HealthPartner';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todolist" element={<TodoList/>}/>
        <Route path="/grocery" element={<Groceries/>}/>
        <Route path="/email" element={<Email/>}/>
        <Route path="/tasks&reminders" element={<TasksAndReminders/>}/>
        <Route path="/healthpartner" element={<HealthPartner/>}/>
      </Routes>
    </Router>
  );
}



export default App;
