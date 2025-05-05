import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file

function SignUp() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle your sign-up logic here
    console.log('Sign Up Data:', { email, phone, password, rememberMe });
  };

  return (
    <div className="sign-up-container">
      <h2 className="sign-up-heading">Create an account</h2>
      <p className="sign-up-subheading">Connect with your friends today!</p>
      <div className="logo-container">
        {/* You would replace this with your actual logo component or image */}
        <div className="logo-placeholder">FORTICIUM</div>
      </div>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <div className="input-group">
          <label htmlFor="email" className="input-label">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="form-input"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone" className="input-label">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="+237 Enter your phone number"
            className="form-input"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="input-label">Password</label>
          <div className="password-input-container">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Choose a strong password"
              className="password-input"
              required
            />
            {/* You might add a toggle visibility icon here */}
          </div>
        </div>
        <div className="remember-forgot-password">
          <label className="remember-me-label">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="remember-me-checkbox"
            />
            Remember Me
          </label>
          <button type="button" className="forgot-password-button">
            Forgot Password
          </button>
        </div>
        <button type="submit" className="sign-up-button">
          Sign Up
        </button>
      </form>
      <div className="social-login">
        <hr className="divider" />
        <p className="social-text">Or sign up with</p>
        <div className="social-buttons">
          {/* You would replace these with your actual social login components or icons */}
          <button type="button" className="social-button">
            <span className="social-icon">in</span> LinkedIn
          </button>
          <button type="button" className="social-button">
            <span className="social-icon">f</span> Facebook
          </button>
        </div>
      </div>
      <p className="login-link">
        Already have an account? <a href="/login" className="login-button">Login</a>
      </p>
    </div>
  );
}

export default SignUp;