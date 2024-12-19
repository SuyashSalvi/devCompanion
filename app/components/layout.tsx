"use client";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Abstract Patterned Background */}
      <div className="absolute inset-0 -z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-10"
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
      <div className="relative z-10">{children}</div>
    </div>
  );
}
