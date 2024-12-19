"use client";

import { useEffect } from "react";
// import axios from "axios";
import Link from "next/link";
import { quotes } from "@/utils/quotes";

// interface Note {
//   _id: string;
//   title: string;
//   content: string;
// }

// interface LeetCodePost {
//   _id: string;
//   problem: string;
//   solution: string;
//   approach: string;
//   timeComplexity: string;
//   spaceComplexity: string;
//   leetCodeLink: string;
// }

export default function Home() {
  // const [notes, setNotes] = useState<Note[]>([]);
  // const [leetcodePosts, setLeetCodePosts] = useState<LeetCodePost[]>([]);

  // Randomly select a quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  useEffect(() => {
    // axios.get("/api/notes").then((res) => setNotes(res.data));
    // axios.get("/api/leetcode").then((res) => setLeetCodePosts(res.data));
  }, []);

  return (
    <div className="relative min-h-screen p-8 sm:p-20">
      {/* Abstract Patterned Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-10"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 100 100"
        >
          <circle cx="20" cy="30" r="10" fill="#1D4ED8" />
          <circle cx="80" cy="50" r="15" fill="#6D28D9" />
          <rect x="10" y="70" width="12" height="12" fill="#10B981" />
          <path
            d="M60 30 L70 50 L50 50 Z"
            fill="#F59E0B"
          />
          <circle cx="50" cy="20" r="8" fill="#3B82F6" />
        </svg>
      </div>

      {/* Page Content */}
      <div className="space-y-16">
        {/* Improved Animated Heading */}
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 dark:text-gray-200 mb-4">
            <span className="relative inline-block text-blue-600 dark:text-blue-400">
              Notes & LeetCode Solutions
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Master concepts with in-depth notes and sharpen your coding skills with handpicked
            solutions. Your coding companion for success!
          </p>
        </div>

        {/* Two Fancy Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Notes Box */}
          <Link href="/notes">
            <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-60">
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-all"></div>
              <div className="flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-500 transition-all duration-300">
                  📚 Notes
                </h3>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-all">
                  Dive into technical notes on AWS, System Design, and much more.
                </p>
                <div className="mt-4 text-blue-500 font-semibold group-hover:underline">
                  View Notes →
                </div>
              </div>
            </div>
          </Link>

          {/* LeetCode Solutions Box */}
          <Link href="/leetcode">
            <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-60">
              <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-all"></div>
              <div className="flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-green-500 transition-all duration-300">
                  💻 LeetCode Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-all">
                  Discover LeetCode problems with solutions, approaches, and complexities.
                </p>
                <div className="mt-4 text-green-500 font-semibold group-hover:underline">
                  View Solutions →
                </div>
              </div>
            </div>
          </Link>
        </div>


      {/* Fun Fact or Inspirational Quote Section */}
      <section className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl p-8 shadow-lg border border-gray-300 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 duration-300">
          Did You Know? 💡
        </h2>
        <p className="text-lg text-center max-w-2xl leading-relaxed italic">
          {randomQuote}
        </p>
        <div className="mt-6 text-lg font-semibold">Keep Coding, Keep Learning 🚀</div>
      </section>



        {/* Footer-like Callout */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Ready to unlock your coding potential? Dive into the resources now!
          </p>
        </div>
      </div>
    </div>
  );
}
