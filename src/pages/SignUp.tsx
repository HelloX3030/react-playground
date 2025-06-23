import { useState } from 'react';
import { supabase } from '../utils/supabase';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setFeedback('Please enter both email and password.');
      return;
    }

    if (!validateEmail(email.trim())) {
      setFeedback('Please enter a valid email address.');
      return;
    }

    if (password.trim().length < 6) {
      setFeedback('Password must be at least 6 characters.');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email.trim(),
      password: password.trim(),
    });

    void data;

    if (error) {
      setFeedback(`Sign-up failed: ${error.message}`);
    } else {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-blue-700 mb-6">Sign Up Page</h1>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <label className="block mb-2 font-semibold text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block mb-2 font-semibold text-gray-700" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Sign Up
        </button>
      </form>

      {feedback && (
        <p className="mt-4 text-center text-sm text-red-600">{feedback}</p>
      )}
    </div>
  );
}

export { SignUp };
