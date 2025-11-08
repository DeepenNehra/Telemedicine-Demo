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

  const createRoom = () => {
    const roomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    router.push(`/call/${roomId}?role=doctor`);
  };

  const joinRoom = () => {
    if (roomCode.trim()) {
      router.push(`/call/${roomCode.trim()}?role=patient`);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-700">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome */}
        <div className="bg-blue-100 border-2 border-blue-400 p-6 mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">
            Welcome, {user.role === 'doctor' ? `Dr. ${user.name}` : user.name}
          </h1>
          <p className="text-lg text-gray-700">
            {user.role === 'doctor' 
              ? 'Start a new consultation' 
              : 'Join your consultation'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Card */}
          <div className="lg:col-span-2">
            {user.role === 'doctor' ? (
              <div className="bg-white border-2 border-gray-400 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Start Video Consultation
                </h2>
                <p className="text-gray-600 mb-6">
                  Create a room and share the code with your patient
                </p>
                <button
                  onClick={createRoom}
                  className="px-6 py-3 bg-blue-600 text-white font-bold border-2 border-black"
                >
                  Create Room
                </button>
              </div>
            ) : (
              <div className="bg-white border-2 border-gray-400 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Join Consultation
                </h2>
                <p className="text-gray-600 mb-6">
                  Enter the room code from your doctor
                </p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={roomCode}
                    onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                    placeholder="ENTER CODE"
                    className="flex-1 px-4 py-3 border-2 border-gray-400 uppercase font-bold"
                  />
                  <button
                    onClick={joinRoom}
                    disabled={!roomCode.trim()}
                    className="px-6 py-3 bg-green-600 text-white font-bold border-2 border-black disabled:bg-gray-400"
                  >
                    Join
                  </button>
                </div>
              </div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white border-2 border-gray-400 p-4 text-center">
                <div className="text-2xl font-bold text-gray-800">0</div>
                <div className="text-sm text-gray-600">Today</div>
              </div>
              <div className="bg-white border-2 border-gray-400 p-4 text-center">
                <div className="text-2xl font-bold text-gray-800">0</div>
                <div className="text-sm text-gray-600">This Week</div>
              </div>
              <div className="bg-white border-2 border-gray-400 p-4 text-center">
                <div className="text-2xl font-bold text-gray-800">0</div>
                <div className="text-sm text-gray-600">Total</div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-400 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
              <div className="text-center py-8 bg-gray-100 border-2 border-gray-300">
                <div className="text-4xl mb-2">📅</div>
                <p className="text-sm text-gray-600">No recent activity</p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-400 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full py-2 text-left px-3 bg-gray-200 border-2 border-gray-400 font-bold text-sm text-black">
                  View Reports
                </button>
                <button className="w-full py-2 text-left px-3 bg-gray-200 border-2 border-gray-400 font-bold text-sm text-black">
                  Settings
                </button>
                <button className="w-full py-2 text-left px-3 bg-gray-200 border-2 border-gray-400 font-bold text-sm text-black">
                  Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
