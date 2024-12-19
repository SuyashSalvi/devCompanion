import AdminLeetCodeForm from '@/app/components/AdminLeetCodeForm'; // Client-side component

export default function AdminLeetCodePage() {
  return (
    <div className="relative min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
       {/* Abstract Patterned Background */}
        <div className="absolute inset-0 -z-10 h-screen w-full">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-30"
            preserveAspectRatio="xMidYMid slice"
            viewBox="0 0 100 100"
            >
            <circle cx="20" cy="30" r="10" fill="#1D4ED8" />
            <circle cx="80" cy="50" r="15" fill="#6D28D9" />
            <rect x="10" y="70" width="12" height="12" fill="#10B981" />
            <path d="M60 30 L70 50 L50 50 Z" fill="#F59E0B" />
            <circle cx="50" cy="20" r="8" fill="#3B82F6" />
            </svg>
        </div>

      {/* Page Content */}
      <div className=" container mx-auto p-6 pt-24">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-2">
            Post Daily LeetCode Problem
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Share your LeetCode problems with approaches, solutions, and complexities for easy documentation and sharing.
          </p>
        </div>

        {/* Main Form Section */}
        <div className="z-10 -mt-9">
          <AdminLeetCodeForm />
        </div>
      </div>
    </div>
  );
}
