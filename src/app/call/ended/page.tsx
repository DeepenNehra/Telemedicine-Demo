import Link from 'next/link';

export default function CallEndedPage() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white border-4 border-gray-500 p-10">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">✓</div>
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              Consultation Complete
            </h1>
            <p className="text-lg text-gray-700">
              Thank you for using our service
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-300 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Next Steps:</h2>
            
            <div className="space-y-4">
              <div className="bg-white border-2 border-gray-400 p-4">
                <h3 className="font-bold text-gray-800 mb-1">Email Summary</h3>
                <p className="text-sm text-gray-600">
                  You will receive a consultation summary via email within 24 hours
                </p>
              </div>

              <div className="bg-white border-2 border-gray-400 p-4">
                <h3 className="font-bold text-gray-800 mb-1">Prescription</h3>
                <p className="text-sm text-gray-600">
                  Check your dashboard for prescription details
                </p>
              </div>

              <div className="bg-white border-2 border-gray-400 p-4">
                <h3 className="font-bold text-gray-800 mb-1">Follow-up</h3>
                <p className="text-sm text-gray-600">
                  Schedule next appointment if recommended by doctor
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/dashboard"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-bold border-2 border-black"
            >
              Back to Dashboard
            </Link>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Need help? Contact support
          </p>
        </div>
      </div>
    </div>
  );
}
