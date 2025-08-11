import React, { useState } from 'react';
import Button from '../components/common/Button';
import FormInput from '../components/common/FormInput';

const LoginPage = ({ setCurrentPage }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login functionality will be implemented in Week 3!');
    setCurrentPage('dashboard');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back</h1>
        <p className="text-gray-600">Sign in to your ServiceHub account</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div onSubmit={handleLogin}>
          <FormInput
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
            required
          />

          <FormInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
            required
          />

          <Button type="button" size="large" className="w-full mb-4" onClick={handleLogin}>
            Sign In
          </Button>
        </div>

        <div className="text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={() => setCurrentPage('register')}
              className="text-blue-600 hover:underline"
            >
              Sign up here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;