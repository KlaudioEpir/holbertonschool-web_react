import { useState, useEffect } from 'react';
import './Login.css';

export default function Login() {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    const newFormData = { ...formData, email: newEmail };
    setFormData(newFormData);
    validateForm(newFormData.email, newFormData.password);
  };

  const handleChangePassword = (e) => {
    const newPassword = e.target.value;
    const newFormData = { ...formData, password: newPassword };
    setFormData(newFormData);
    validateForm(newFormData.email, newFormData.password);
  };

  const validateForm = (email, password) => {
    if (email.includes('@') && email.includes('.') && password.length >= 8) {
      setEnableSubmit(true);
    } else {
      setEnableSubmit(false);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Nëse ke prop-in onLogin ose logIn, thërritet këtu:
    // p.sh: props.logIn(formData.email, formData.password);
  };

  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChangeEmail}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChangePassword}
        />
        <input type="submit" value="Ok" disabled={!enableSubmit} />
      </form>
    </div>
  );
}
