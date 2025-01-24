import React, { useEffect, useState } from 'react';

const TasksAndReminders = () => {
  const [tasks] = useState([]);

  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  // const fetchTasks = async () => {
  //   const response = await fetch('http://localhost:5001/api/tasks');
  //   const data = await response.json();
  //   setTasks(data.filter(task => new Date(task.endDate) > new Date())); // Filter expired tasks
  // };

  // const deleteTask = async (id) => {
  //   await fetch(`http://localhost:5001/api/tasks/${id}`, { method: 'DELETE' });
  //   fetchTasks();
  // };

  // const editTask = async (id, updatedTask) => {
  //   await fetch(`http://localhost:5001/api/tasks/${id}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(updatedTask),
  //   });
  //   fetchTasks();
  // };
  
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-2 sm:px-4 py-4">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">
            Tasks and Reminders
          </h1>
          {/* Enable horizontal scrolling for smaller screens */}
          <div className="overflow-x-auto">
            <table className="w-full bg-white border rounded-lg text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-xs sm:text-sm leading-normal">
                  <th className="py-2 px-3 sm:py-3 sm:px-6 text-left">S/N</th>
                  <th className="py-2 px-3 sm:py-3 sm:px-6 text-left">Task</th>
                  <th className="py-2 px-3 sm:py-3 sm:px-6 text-left">Start Date</th>
                  <th className="py-2 px-3 sm:py-3 sm:px-6 text-left">End Date</th>
                  <th className="py-2 px-3 sm:py-3 sm:px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 font-light">
                {tasks.map((task, index) => (
                  <tr
                    key={task._id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-2 px-3 sm:py-3 sm:px-6">{index + 1}</td>
                    <td className="py-2 px-3 sm:py-3 sm:px-6">{task.title}</td>
                    <td className="py-2 px-3 sm:py-3 sm:px-6">
                      {new Date(task.startDate).toLocaleString()}
                    </td>
                    <td className="py-2 px-3 sm:py-3 sm:px-6">
                      {new Date(task.endDate).toLocaleString()}
                    </td>
                    <td className="py-2 px-3 sm:py-3 sm:px-6 text-center">
                      <button
                        onClick={() => deleteTask(task._id)}
                        className="bg-red-500 text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 rounded-lg mr-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() =>
                          editTask(task._id, { ...task, title: "Updated Task" })
                        }
                        className="bg-blue-500 text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 rounded-lg"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default TasksAndReminders;
  