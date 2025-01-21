import React, { useState } from 'react';
import { Home, Mail, User, Settings, Menu } from 'lucide-react';
import feedback from '/src/assets/feedback.png';
import newrelease from '/src/assets/newrelease.jpg';
import newsletter from '/src/assets/newsletters.jpg';
import meetingcalendar from '/src/assets/Meeting-Calendar-Reminder.jpg';
import { Link } from 'react-router-dom';


const EmailPreview = ({ title, sender, snippet, imageUrl }) => (
  <div className="email-preview">
    {imageUrl && <img src={imageUrl} alt={title} className="email-image" />}
    <h3>{title}</h3>
    <p className="email-sender">From: {sender}</p>
    <p className="email-snippet">{snippet}</p>
  </div>
);

const Email = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const emails = [
    {
    title: "Meeting Reminder",
    sender: "team@graphic-tale.com",
    snippet: "Don't forget about the meeting tomorrow at 10 AM.",
    imageUrl: meetingcalendar
    },
    {
    title: "New Graphic Novel Release",
    sender: "updates@graphic-tale.com",
    snippet: "Check out our latest graphic novel, now available!",
    imageUrl: newrelease
    },
    {
    title: "Feedback Request",
    sender: "feedback@graphic-tale.com",
    snippet: "We would love to hear your thoughts on our latest release.",
    imageUrl: feedback
    },
    {
    title: "Weekly Newsletter",
    sender: "newsletter@graphic-tale.com",
    snippet: "Catch up on the latest news and updates from Graphic Tale.",
    imageUrl: newsletter
    }
    ];

  return (


    <div className="email-container">
    <div>
          <button className="menu-toggle" onClick={toggleMenu}>
    <Menu size={24} />
  </button>
    </div>
      <div className="email-dashboard">
        <header>
          <h1>Email Overview</h1>
          <p>A clean, visually appealing dashboard displaying all emails. Each email has a title, sender, and a brief snippet. Users can click to view details or mark emails as important.</p>
        </header>
        <div className="email-grid">
          {emails.map((email, index) => (
            <EmailPreview key={index} {...email} />
          ))}
        </div>
      </div>
      <aside className={`sidebar1 ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
          <li><Link to="/todolist"> <button className="nav-button" onClick={toggleMenu}> <Home size={20} /> Home </button> </Link> </li>
            <li><button className="nav-button active" onClick={toggleMenu}><Mail size={20} /> Emails</button></li>
            <li><button className="nav-button" onClick={toggleMenu}><User size={20} /> Profile</button></li>
            <li><button className="nav-button" onClick={toggleMenu}><Settings size={20} /> Settings</button></li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Email;