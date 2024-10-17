import React, { useState } from 'react';
import './CallsAndReminders.css';

const ToggleSwitch = ({ label, description, isOn, onToggle }) => (
  <div className="setting-item">
    <div className="setting-info">
      <h3>{label}</h3>
      <p>{description}</p>
    </div>
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={onToggle} />
      <span className="slider round"></span>
    </label>
  </div>
);

const CallsAndReminders = () => {
  const [notifications, setNotifications] = useState(false);
  const [soundAlerts, setSoundAlerts] = useState(false);
  const [vibrateMode, setVibrateMode] = useState(false);

  const saveSettings = () => {
    // Here you would typically save the settings to a backend or local storage
    console.log('Settings saved:', { notifications, soundAlerts, vibrateMode });
    alert('Settings saved successfully!');
  };

  return (
    <div className='allcall'>
    <div className="calls-reminders-container">
      <header>
        <h1>Reminder Settings</h1>
        <p>An interactive settings page for users to customize reminders for calls. Features toggle switches for notifications, sound options, and a save button.</p>
      </header>

      <div className="settings-list">
        <ToggleSwitch 
          label="Enable Call Notifications"
          description="Receive notifications for incoming calls."
          isOn={notifications}
          onToggle={() => setNotifications(!notifications)}
        />
        <ToggleSwitch 
          label="Sound Alerts"
          description="Turn on sound alerts for calls."
          isOn={soundAlerts}
          onToggle={() => setSoundAlerts(!soundAlerts)}
        />
        <ToggleSwitch 
          label="Vibrate Mode"
          description="Enable vibration for incoming call alerts."
          isOn={vibrateMode}
          onToggle={() => setVibrateMode(!vibrateMode)}
        />
      </div>

      <button className="save-button" onClick={saveSettings}>
        Save Settings
      </button>

      <button className="secondary-button">
        Return to Calls Overview
      </button>

      <button className="secondary-button">
        Access Other Features
      </button>
    </div>
    </div>
  );
};

export default CallsAndReminders;