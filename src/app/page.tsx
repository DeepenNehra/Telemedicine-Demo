import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200">
      {/* Basic Header */}
      <div className="bg-blue-800 py-4 border-b-4 border-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">
              Telemedicine Portal
            </h1>
            <Link
              href="/auth"
              className="px-4 py-2 bg-gray-300 text-black font-bold border-2 border-black"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Welcome to Online Doctor Consultation
          </h2>
          <p className="text-xl text-gray-700">
            Connect with healthcare professionals through video calls
          </p>
        </div>

        {/* Notice Box */}
        <div className="bg-yellow-100 border-2 border-yellow-600 p-4 mb-8">
          <p className="text-center text-lg font-bold text-gray-800">
            New Feature: Video Consultation Available Now
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-6 items-center mb-12">
          <Link
            href="/auth"
            className="w-80 py-4 bg-blue-600 text-white text-xl font-bold border-2 border-black text-center"
          >
            I am a Doctor
          </Link>
          <Link
            href="/auth"
            className="w-80 py-4 bg-green-600 text-white text-xl font-bold border-2 border-black text-center"
          >
            I am a Patient
          </Link>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border-2 border-gray-400 p-6">
            <div className="text-5xl mb-4 text-center">📹</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Video Calls</h3>
            <p className="text-center text-gray-600">
              Talk to doctors via video
            </p>
          </div>

          <div className="bg-white border-2 border-gray-400 p-6">
            <div className="text-5xl mb-4 text-center">🔒</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Secure</h3>
            <p className="text-center text-gray-600">
              Your data is protected
            </p>
          </div>

          <div className="bg-white border-2 border-gray-400 p-6">
            <div className="text-5xl mb-4 text-center">⚡</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Fast</h3>
            <p className="text-center text-gray-600">
              Connect in seconds
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-blue-100 border-2 border-blue-400 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Our Statistics
          </h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white border-2 border-gray-400 p-4 text-center">
              <div className="text-3xl font-bold text-blue-800">100+</div>
              <div className="text-sm text-gray-600">Doctors</div>
            </div>
            <div className="bg-white border-2 border-gray-400 p-4 text-center">
              <div className="text-3xl font-bold text-blue-800">500+</div>
              <div className="text-sm text-gray-600">Patients</div>
            </div>
            <div className="bg-white border-2 border-gray-400 p-4 text-center">
              <div className="text-3xl font-bold text-blue-800">99%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
            <div className="bg-white border-2 border-gray-400 p-4 text-center">
              <div className="text-3xl font-bold text-blue-800">24/7</div>
              <div className="text-sm text-gray-600">Available</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-400 border-2 border-gray-600 p-6 text-center">
          <p className="text-lg font-bold text-gray-800">
            Best Healthcare Platform
          </p>
          <p className="text-sm text-gray-700 mt-2">
            © 2024 Telemedicine Portal
          </p>
        </div>
      </div>
    </div>
  );
}
