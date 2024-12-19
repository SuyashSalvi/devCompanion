"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";

interface Problem {
  _id: string;
  problem: string;
  createdAt: string;
  approaches: {
    approach: string;
    timeComplexity: string;
    spaceComplexity: string;
    solution: string;
    tags: string[];
  }[];
}

export default function LeetCodeProblemDetailPage() {
  const [problem, setProblem] = useState<Problem | null>(null);
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);
  const router = useRouter();
  const params = useParams();
  const id = params?.id; // Dynamically extract `id`

  useEffect(() => {
    const fetchProblem = async () => {
      if (!id) return; // If no ID, do nothing

      try {
        const response = await axios.get(`/api/leetcode/${id}`);
        setProblem(response.data);
      } catch (error) {
        console.error("Error fetching problem:", error);
        router.push("/leetcode");
      }
    };

    fetchProblem();
  }, [id, router]);

  const handleCopyToClipboard = (code: string, index: number) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCodeIndex(index); // Mark the copied approach
      setTimeout(() => setCopiedCodeIndex(null), 6000); // Reset the copied status after 6 seconds
    });
  };

  if (!problem) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 pt-24">
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          {problem.problem}
        </h1>

        {/* Date */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {problem.createdAt &&
            new Date(problem.createdAt).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </p>

        {/* Approaches */}
        <div className="space-y-6">
          {problem.approaches.map((approach, index) => (
            <div
              key={index}
              className="relative p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Approach {index + 1}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {approach.approach}
              </p>

              {/* Time & Space Complexity */}
              <div className="flex gap-4 mb-4">
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  Time Complexity:{" "}
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    {approach.timeComplexity}
                  </span>
                </span>
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  Space Complexity:{" "}
                  <span className="font-bold text-green-600 dark:text-green-400">
                    {approach.spaceComplexity}
                  </span>
                </span>
              </div>

              {/* Solution with Copy Button */}
              <div className="relative bg-gray-900 text-white rounded-lg p-4 overflow-x-auto font-mono">
                <pre className="whitespace-pre-wrap">{approach.solution}</pre>
                <button
                  onClick={() => handleCopyToClipboard(approach.solution, index)}
                  className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white rounded-full shadow-lg"
                >
                  {copiedCodeIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="w-5 h-5 text-green-500"
                    >
                      <path d="M13.485 1.515a1.5 1.5 0 0 1 0 2.121l-7.071 7.071a1.5 1.5 0 0 1-2.121 0l-2.121-2.121a1.5 1.5 0 0 1 2.121-2.121l1.06 1.06 6.01-6.01a1.5 1.5 0 0 1 2.122 0z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="w-5 h-5"
                    >
                      <path d="M10 1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM4 0h6a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm2 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 3zm0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 5z" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {approach.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => router.push("/leetcode")}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to All Problems
        </button>
      </div>
    </div>
  );
}
