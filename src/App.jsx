import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [isRegisterMode, setIsRegisterMode] = useState(true);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username && password && (!isRegisterMode || email)) {
      if (isRegisterMode) {
        setRegisteredUsers([...registeredUsers, { username, password, email }]);
        alert('Registered successfully!');
      } else {
        const isRegistered = registeredUsers.some(
          (user) => user.username === username && user.password === password
        );
        if (isRegistered) {
          alert('Login successful!');
        } else {
          alert('Invalid username or password!');
        }
      }
      setEmail('');
      setUsername('');
      setPassword('');
    } else {
      alert('Please fill in all fields!');
    }
  };

  const toggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col sm:flex-row items-center justify-center font-mono">
      <div className="bg-white p-8 shadow-lg mb-4 sm:mr-4 sm:mb-0 sm:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {isRegisterMode ? 'Create an Account' : 'Log In'}
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          {isRegisterMode && (
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            {isRegisterMode ? 'Register' : 'Log In'}
          </button>
          <p className="text-sm text-center mt-2">or</p>
          <button
            type="button"
            onClick={toggleMode}
            className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
          >
            {isRegisterMode
              ? 'Already have an account? Log In'
              : 'Create an Account'}
          </button>
        </form>
      </div>
      <div className="bg-indigo-300 rounded-lg shadow-lg sm:w-1/2">
        <img
          className="w-full h-auto object-cover rounded-lg shadow-lg"
          src="https://picsum.photos/400/600"
          alt="login-pic"
        />
      </div>
    </div>
  );
}

export default App;
