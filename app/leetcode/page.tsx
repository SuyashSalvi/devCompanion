"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

interface Problem {
  _id: string;
  problem: string;
  createdAt: string;
  approaches: {
    tags: string[];
  }[];
}

export default function LeetCodeSolutionsPage() {
  const [problems, setProblems] = useState<Problem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get("/api/leetcode");
        // Sort problems by createdAt in descending order
        const sortedProblems = response.data.sort(
          (a: Problem, b: Problem) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setProblems(sortedProblems);
      } catch (error) {
        console.error("Error fetching problems:", error);
      }
    };

    fetchProblems();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 pt-24">
      {/* Abstract Patterned Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-10"
          preserveAspectRatio="none"
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
      <h1 className="text-3xl font-extrabold text-center mb-8 text-gray-800 dark:text-white">
        LeetCode Solutions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {problems.map((problem) => (
          <div
            key={problem._id}
            onClick={() => router.push(`/leetcode/${problem._id}`)}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow relative cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {problem.problem}
            </h2>

            {/* Date and Day */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {problem.createdAt
                ? `${format(new Date(problem.createdAt), "EEEE, MMM d, yyyy")}`
                : "N/A"}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {problem.approaches.flatMap((approach) =>
                approach.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
