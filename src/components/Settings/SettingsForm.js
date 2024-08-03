import React, { useState } from 'react';
import './SettingsForm.css';

const SettingsForm = () => {
  const [preferences, setPreferences] = useState({});

  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form className="settings-form" onSubmit={handleSubmit}>
      <h2>Settings</h2>
      <label>
        Preference 1:
        <input type="text" name="preference1" onChange={handleChange} />
      </label>
      <label>
        Preference 2:
        <input type="text" name="preference2" onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default SettingsForm;
