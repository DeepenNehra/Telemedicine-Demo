'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveUser } from '@/lib/auth';
import Link from 'next/link';

export default function AuthPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient' as 'doctor' | 'patient'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSignUp) {
      saveUser({
        name: formData.name,
        email: formData.email,
        role: formData.role
      });
    } else {
      saveUser({
        name: formData.email.split('@')[0],
        email: formData.email,
        role: formData.role
      });
    }
    
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Link href="/" className="inline-block mb-4 px-4 py-2 bg-gray-400 text-black font-bold border-2 border-black">
          ← Back
        </Link>

        {/* Login Box */}
        <div className="bg-white border-4 border-gray-500 p-8">
          <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">
            {isSignUp ? 'Sign Up' : 'Login'}
          </h1>

          {/* Toggle Buttons */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 py-2 font-bold border-2 border-black ${
                isSignUp
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 py-2 font-bold border-2 border-black ${
                !isSignUp
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
            >
              Login
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-1">
                  Full Name:
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border-2 border-gray-400"
                  placeholder="Enter your name"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-1">
                Email:
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border-2 border-gray-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-1">
                Password:
              </label>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-3 py-2 border-2 border-gray-400"
                placeholder="Enter password"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-800 mb-1">
                I am a:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'patient' })}
                  className={`py-3 font-bold border-2 border-black ${
                    formData.role === 'patient'
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Patient
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'doctor' })}
                  className={`py-3 font-bold border-2 border-black ${
                    formData.role === 'doctor'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  Doctor
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-700 text-white text-lg font-bold border-2 border-black mt-6"
            >
              {isSignUp ? 'Create Account' : 'Login'}
            </button>
          </form>

          <p className="text-center text-xs text-gray-600 mt-4">
            By continuing, you agree to our terms
          </p>
        </div>
      </div>
    </div>
  );
}
