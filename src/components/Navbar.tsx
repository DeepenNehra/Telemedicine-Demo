'use client';

import { useRouter } from 'next/navigation';
import { logout, getUser } from '@/lib/auth';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!user) return null;

  return (
    <nav className="bg-blue-800 border-b-4 border-gray-400 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">Telemedicine Portal</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-white">{user.name}</p>
              <p className="text-xs text-gray-300">
                {user.role === 'doctor' ? 'Doctor' : 'Patient'}
              </p>
            </div>
            
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gray-300 text-black font-bold border-2 border-black"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
