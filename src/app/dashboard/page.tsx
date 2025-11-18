'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getUser } from '@/lib/auth';
import Navbar from '@/components/Navbar';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [roomCode, setRoomCode] = useState('');

  useEffect(() => {
    const currentUser = getUser();
    if (!currentUser) {
      router.push('/auth');
    } else {
      setUser(currentUser);
    }
  }, [router]);

  const generateRoomCode = () => {
    if (!user) return;
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    router.push(`/call/${code}?role=${user.role}`);
  };

  const joinRoom = () => {
    if (!user || !roomCode.trim()) return;
    router.push(`/call/${roomCode.trim()}?role=${user.role}`);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="spinner w-12 h-12"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-slide-up">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Welcome back, {user.role === 'doctor' ? 'Dr.' : ''} {user.name}! 👋
              </h1>
              <p className="text-gray-600 text-lg">
                {user.role === 'doctor' 
                  ? 'Ready to help your patients today?' 
                  : 'How can we help you today?'}
              </p>
            </div>
            <div className="hidden md:block">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {user.role === 'doctor' ? 'Start Consultation' : 'Join Consultation'}
          </h2>
          
          {user.role === 'doctor' ? (
            <div className="space-y-4">
              <button
                onClick={generateRoomCode}
                className="w-full btn btn-primary btn-lg group"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>Start New Consultation</span>
                <svg className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <p className="text-sm text-gray-600 text-center">
                A unique room code will be generated for your patient to join
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  placeholder="Enter room code (e.g., ABC123)"
                  className="input flex-1 text-lg"
                  maxLength={6}
                />
                <button
                  onClick={joinRoom}
                  disabled={!roomCode.trim()}
                  className="btn btn-primary btn-lg px-8"
                >
                  Join Call
                </button>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Enter the room code provided by your doctor
              </p>
            </div>
          )}
        </div>

        {/* Profile Card */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-100"
                />
                <div>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <span className="inline-block mt-1 badge badge-primary capitalize">{user.role}</span>
                </div>
              </div>
              
              {user.role === 'doctor' && user.specialization && (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Specialization</p>
                  <p className="font-semibold text-gray-900">{user.specialization}</p>
                </div>
              )}
              
              {user.role === 'doctor' && user.experience && (
                <div>
                  <p className="text-sm text-gray-600">Experience</p>
                  <p className="font-semibold text-gray-900">{user.experience} years</p>
                </div>
              )}
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium text-gray-700">Edit Profile</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-gray-700">Consultation History</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-gray-700">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
