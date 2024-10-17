import React from 'react';
import { Home, Mail, User, Settings } from 'lucide-react';
import './Email.css';

const EmailPreview = ({ title, sender, snippet, imageUrl }) => (
  <div className="email-preview">
    {imageUrl && <img src={imageUrl} alt={title} className="email-image" />}
    <h3>{title}</h3>
    <p className="email-sender">From: {sender}</p>
    <p className="email-snippet">{snippet}</p>
  </div>
);

const Email = () => {
  const emails = [
    {
      title: "Meeting Reminder",
      sender: "team@graphic-tale.com",
      snippet: "Don't forget about the meeting tomorrow at 10 AM.",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      title: "New Graphic Novel Release",
      sender: "updates@graphic-tale.com",
      snippet: "Check out our latest graphic novel, now available!",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      title: "Feedback Request",
      sender: "feedback@graphic-tale.com",
      snippet: "We would love to hear your thoughts on our latest release.",
    },
    {
      title: "Weekly Newsletter",
      sender: "newsletter@graphic-tale.com",
      snippet: "Catch up on the latest news and updates from Graphic Tale.",
      imageUrl: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="email-container">
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
      <aside className="sidebar1">
        <nav>
          <ul>
            <li><button className="nav-button"><Home size={20} /> Home</button></li>
            <li><button className="nav-button active"><Mail size={20} /> Emails</button></li>
            <li><button className="nav-button"><User size={20} /> Profile</button></li>
            <li><button className="nav-button"><Settings size={20} /> Settings</button></li>
          </ul>
        </nav>
      </aside>
    </div>
  
  );
};

export default Email;