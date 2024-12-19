"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-center p-8">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-20 animate-spin-slow"
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

      <div className="max-w-lg mx-auto">
        {/* 404 Text */}
        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-4 animate-pulse">
          404
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Illustration */}
        <div className="relative mx-auto w-60 h-60 mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-float shadow-lg"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle cx="50" cy="50" r="40" stroke="#FFFFFF" strokeWidth="2" />
            <path
              d="M30 50 A20 20 0 0 1 70 50 A20 20 0 0 1 30 50"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeDashoffset="2"
              className="animate-dash"
            />
          </svg>
        </div>

        {/* Call to Action */}
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>

      {/* Additional Animations */}
      <style jsx>{`
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-dash {
          animation: dash 2s linear infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes dash {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </div>
  );
}
