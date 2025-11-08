'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { getUser } from '@/lib/auth';
import VideoCall from '@/components/VideoCall';

export default function CallPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [showRoomCode, setShowRoomCode] = useState(true);

  const roomId = params.roomId as string;
  const role = (searchParams.get('role') || 'patient') as 'doctor' | 'patient';

  useEffect(() => {
    const currentUser = getUser();
    if (!currentUser) {
      router.push('/auth');
    } else {
      setUser(currentUser);
    }

    // Hide room code after 5 seconds
    const timer = setTimeout(() => {
      setShowRoomCode(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Room Code Display for Doctor */}
      {role === 'doctor' && showRoomCode && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
          <p className="text-sm font-medium">Share this room code with your patient:</p>
          <p className="text-2xl font-bold text-center mt-1">{roomId}</p>
        </div>
      )}

      <VideoCall roomId={roomId} role={role} />
    </div>
  );
}
