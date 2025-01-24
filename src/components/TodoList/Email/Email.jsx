import React, { useState } from 'react';
import { Home, Mail, User, Settings, Menu } from 'lucide-react';
import feedback from '/src/assets/feedback.png';
import newrelease from '/src/assets/newrelease.jpg';
import newsletter from '/src/assets/newsletters.jpg';
import meetingcalendar from '/src/assets/Meeting-Calendar-Reminder.jpg';
import { Link } from 'react-router-dom';

const EmailPreview = ({ title, sender, snippet, imageUrl }) => (
  <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg hover:scale-105 transition-transform">
    {imageUrl && (
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-32 object-cover rounded-md mb-4"
      />
    )}
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-300">From: {sender}</p>
    <p className="text-sm text-gray-400">{snippet}</p>
  </div>
);

const Email = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const emails = [
    {
      title: 'Meeting Reminder',
      sender: 'team@graphic-tale.com',
      snippet: "Don't forget about the meeting tomorrow at 10 AM.",
      imageUrl: meetingcalendar,
    },
    {
      title: 'New Graphic Novel Release',
      sender: 'updates@graphic-tale.com',
      snippet: 'Check out our latest graphic novel, now available!',
      imageUrl: newrelease,
    },
    {
      title: 'Feedback Request',
      sender: 'feedback@graphic-tale.com',
      snippet: 'We would love to hear your thoughts on our latest release.',
      imageUrl: feedback,
    },
    {
      title: 'Weekly Newsletter',
      sender: 'newsletter@graphic-tale.com',
      snippet: 'Catch up on the latest news and updates from Graphic Tale.',
      imageUrl: newsletter,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-gray-100">
      {/* Menu Toggle */}
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-gray-700 rounded-full shadow-md md:hidden"
        onClick={toggleMenu}
      >
        <Menu size={24} />
      </button>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside
          className={`fixed md:static bg-gray-800 text-white w-60 md:w-20 h-full z-40 transform transition-transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <nav className="flex flex-col items-center space-y-6 py-8">
            <Link to="/todolist">
              <button
                className="flex flex-col items-center text-sm hover:text-blue-400"
                onClick={toggleMenu}
              >
                <Home size={20} />
                Home
              </button>
            </Link>
            <button
              className="flex flex-col items-center text-sm hover:text-blue-400"
              onClick={toggleMenu}
            >
              <Mail size={20} />
              Emails
            </button>
            <button
              className="flex flex-col items-center text-sm hover:text-blue-400"
              onClick={toggleMenu}
            >
              <User size={20} />
              Profile
            </button>
            <button
              className="flex flex-col items-center text-sm hover:text-blue-400"
              onClick={toggleMenu}
            >
              <Settings size={20} />
              Settings
            </button>
          </nav>
        </aside>

        {/* Dashboard */}
        <main className="flex-1 p-4 md:ml-20">
          <header className="text-center mb-6">
            <h1 className="text-2xl font-bold">Email Overview</h1>
            <p className="text-sm text-gray-200">
              A clean, visually appealing dashboard displaying all emails. Each
              email has a title, sender, and a brief snippet.
            </p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {emails.map((email, index) => (
              <EmailPreview key={index} {...email} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Email;
