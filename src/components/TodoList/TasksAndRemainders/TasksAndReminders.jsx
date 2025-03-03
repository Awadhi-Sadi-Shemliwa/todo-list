import React, { useState, useEffect } from 'react';
import { useTasks } from '../TaskContext'; // Import the context hook

const TasksAndReminders = () => {
  const { tasks, setTasks } = useTasks();
  const [editingTaskId, setEditingTaskId] = useState(null); // Track which task is being edited
  const [editForm, setEditForm] = useState({ title: '', startDate: '', endDate: '' });

  // Request notification permission on component mount
  useEffect(() => {
    if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
      Notification.requestPermission();
    }
  }, []);

  // Check for upcoming or overdue tasks
  useEffect(() => {
    const checkTasks = () => {
      const now = new Date();
      tasks.forEach((task) => {
        const endDate = new Date(task.endDate);
        const timeDiff = endDate - now;
        const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

        if (timeDiff <= oneDay && timeDiff > 0 && Notification.permission === 'granted') {
          new Notification(`Task Reminder: "${task.title}" ends soon!`, {
            body: `End Date: ${task.endDate}`,
          });
        } else if (timeDiff <= 0 && Notification.permission === 'granted') {
          new Notification(`Task Overdue: "${task.title}"`, {
            body: `Ended on: ${task.endDate}`,
          });
        }
      });
    };

    // Check every minute
    const interval = setInterval(checkTasks, 60 * 1000);
    checkTasks(); // Run immediately on mount

    return () => clearInterval(interval); // Cleanup on unmount
  }, [tasks]);

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setEditForm({
      title: task.title,
      startDate: task.startDate,
      endDate: task.endDate,
    });
  };

  const saveEdit = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, ...editForm } : task
      )
    );
    setEditingTaskId(null); // Exit edit mode
  };

  const cancelEdit = () => {
    setEditingTaskId(null); // Exit edit mode without saving
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-blue-300 to-blue-400">
      <div className="container mx-auto px-2 sm:px-4 py-4">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center">
          Tasks and Reminders
        </h1>
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
                <tr key={task.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-3 sm:py-3 sm:px-6">{index + 1}</td>
                  {editingTaskId === task.id ? (
                    <>
                      <td className="py-2 px-3 sm:py-3 sm:px-6">
                        <input
                          type="text"
                          name="title"
                          value={editForm.title}
                          onChange={handleEditChange}
                          className="border p-1 w-full"
                        />
                      </td>
                      <td className="py-2 px-3 sm:py-3 sm:px-6">
                        <input
                          type="date"
                          name="startDate"
                          value={new Date(editForm.startDate).toISOString().split('T')[0]}
                          onChange={handleEditChange}
                          className="border p-1 w-full"
                        />
                      </td>
                      <td className="py-2 px-3 sm:py-3 sm:px-6">
                        <input
                          type="date"
                          name="endDate"
                          value={new Date(editForm.endDate).toISOString().split('T')[0]}
                          onChange={handleEditChange}
                          className="border p-1 w-full"
                        />
                      </td>
                      <td className="py-2 px-3 sm:py-3 sm:px-6 text-center">
                        <button
                          onClick={() => saveEdit(task.id)}
                          className="bg-green-500 text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 rounded-lg mr-2"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="bg-gray-500 text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 rounded-lg"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="py-2 px-3 sm:py-3 sm:px-6">{task.title}</td>
                      <td className="py-2 px-3 sm:py-3 sm:px-6">{task.startDate}</td>
                      <td className="py-2 px-3 sm:py-3 sm:px-6">{task.endDate}</td>
                      <td className="py-2 px-3 sm:py-3 sm:px-6 text-center">
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="bg-red-500 text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 rounded-lg mr-2"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => startEditing(task)}
                          className="bg-blue-500 text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 rounded-lg"
                        >
                          Edit
                        </button>
                      </td>
                    </>
                  )}
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