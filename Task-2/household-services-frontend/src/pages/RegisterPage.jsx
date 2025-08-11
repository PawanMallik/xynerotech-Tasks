import React, { useState } from 'react';
import Button from '../components/common/Button';
import FormInput from '../components/common/FormInput';

const RegisterPage = ({ setCurrentPage }) => {
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  const handleRegister = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Registration successful! Please log in.');
    setCurrentPage('login');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Create Account</h1>
        <p className="text-gray-600">Join ServiceHub today</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div onSubmit={handleRegister}>
          <FormInput
            label="Full Name"
            placeholder="Enter your full name"
            value={registerData.fullName}
            onChange={(e) => setRegisterData(prev => ({ ...prev, fullName: e.target.value }))}
            required
          />

          <FormInput
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={registerData.email}
            onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
            required
          />

          <FormInput
            label="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            value={registerData.phone}
            onChange={(e) => setRegisterData(prev => ({ ...prev, phone: e.target.value }))}
            required
          />

          <FormInput
            label="Password"
            type="password"
            placeholder="Create a password"
            value={registerData.password}
            onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
            required
          />

          <FormInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={registerData.confirmPassword}
            onChange={(e) => setRegisterData(prev => ({ ...prev, confirmPassword: e.target.value }))}
            required
          />

          <Button type="button" size="large" className="w-full mb-4" onClick={handleRegister}>
            Create Account
          </Button>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => setCurrentPage('login')}
              className="text-blue-600 hover:underline"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;