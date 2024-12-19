"use client";

import { useState, FormEvent, useEffect } from "react";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface Approach {
  approach: string;
  timeComplexity: string;
  spaceComplexity: string;
  solution: string;
  tags: string[];
}

export default function AdminLeetCodeForm() {
  const [formData, setFormData] = useState({
    problem: "",
    leetCodeLink: "",
    approaches: [
      { approach: "", timeComplexity: "", spaceComplexity: "", solution: "", tags: [] as string[], },
    ] as Approach[],
  });

  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-up");
    }
  }, [isSignedIn, isLoaded, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApproachChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newApproaches = [...formData.approaches];
    newApproaches[index] = { ...newApproaches[index], [field]: value };
    setFormData((prev) => ({ ...prev, approaches: newApproaches }));
  };

  const addApproach = () => {
    setFormData((prev) => ({
      ...prev,
      approaches: [
        ...prev.approaches,
        { approach: "", timeComplexity: "", spaceComplexity: "", solution: "", tags: [] as string[], },
      ],
    }));
  };

  const addTag = (index: number, tag: string) => {
    const newApproaches = [...formData.approaches];
    if (!newApproaches[index].tags.includes(tag)) {
      newApproaches[index].tags.push(tag);
    }
    setFormData((prev) => ({ ...prev, approaches: newApproaches }));
  };

  const removeTag = (index: number, tag: string) => {
    const newApproaches = [...formData.approaches];
    newApproaches[index].tags = newApproaches[index].tags.filter(
      (t) => t !== tag
    );
    setFormData((prev) => ({ ...prev, approaches: newApproaches }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataToSubmit = {
      ...formData,
      title: `${formData.problem} (${formData.leetCodeLink})`,
    };

    try {
      await axios.post("/api/leetcode", dataToSubmit);
      console.log("Problem submitted:", dataToSubmit);
      router.push("/leetcode"); 
    } catch (error) {
      console.error("Error posting problem:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        
      {/* Left Form */}
      <div className="w-full md:w-1/2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Problem Title */}
          <div>
            <label className="block text-sm font-semibold mb-1">Problem</label>
            <input
              type="text"
              name="problem"
              value={formData.problem}
              onChange={handleInputChange}
              placeholder="Enter the problem title"
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 
             bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 
             placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none 
             focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              required
            />
          </div>

          {/* LeetCode Link */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              LeetCode Link
            </label>
            <input
              type="url"
              name="leetCodeLink"
              value={formData.leetCodeLink}
              onChange={handleInputChange}
              placeholder="Paste the actual LeetCode problem link here"
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 
             bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 
             placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none 
             focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              required
            />
          </div>

          {/* Dynamic Approaches */}
          {formData.approaches.map((approach, index) => (
            <div key={index} className="mb-6 p-4 border rounded">
              <h3 className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-100">
                Approach {index + 1}
              </h3>
              <label className="block text-sm font-medium">Approach</label>
              <textarea
                rows={3}
                value={approach.approach}
                onChange={(e) =>
                  handleApproachChange(index, "approach", e.target.value)
                }
                placeholder="Describe the approach"
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 
             bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 
             placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none 
             focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                required
              />
              <label className="block text-sm font-medium">Time Complexity</label>
              <input
                type="text"
                value={approach.timeComplexity}
                onChange={(e) =>
                  handleApproachChange(index, "timeComplexity", e.target.value)
                }
                placeholder="e.g. O(n)"
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 
             bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 
             placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none 
             focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <label className="block text-sm font-medium">Space Complexity</label>
              <input
                type="text"
                value={approach.spaceComplexity}
                onChange={(e) =>
                  handleApproachChange(index, "spaceComplexity", e.target.value)
                }
                placeholder="e.g. O(1)"
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 
             bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 
             placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none 
             focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <label className="block text-sm font-medium">Solution Code</label>
              <textarea
                rows={4}
                value={approach.solution}
                onChange={(e) =>
                  handleApproachChange(index, "solution", e.target.value)
                }
                placeholder="Paste the solution code here"
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 
             bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 
             placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none 
             focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                required
              />

                {/* Tags Section */}
              <label className="block text-sm font-medium">Tags</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {approach.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs flex items-center gap-2"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(index, tag)}
                      className="text-red-500 hover:text-red-700"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Add a tag (e.g. Python, DFS)"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.currentTarget.value.trim()) {
                    e.preventDefault();
                    addTag(index, e.currentTarget.value.trim());
                    e.currentTarget.value = "";
                  }
                }}
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 
             bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-200 
             placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none 
             focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />

            </div>
          ))}
          <button
            type="button"
            onClick={addApproach}
            className="text-blue-500 text-sm font-semibold"
          >
            + Add Another Approach
          </button>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded"
          >
            Post Problem
          </button>
        </form>
      </div>

      {/* Right Preview Section */}
        <div className="w-full md:w-1/2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg ml-4 relative overflow-hidden">
        

        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-4">
            {formData.problem || "LeetCode Problem Title"}
        </h2>

        {/* LeetCode Link */}
        {formData.leetCodeLink && (
            <p className="text-sm text-blue-500 mb-4">
            Problem Link:{" "}
            <a
                href={formData.leetCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
            >
                {formData.leetCodeLink}
            </a>
            </p>
        )}

        {/* Approaches */}
        <div className="space-y-8">
            {formData.approaches.map((approach, index) => (
            <div
                key={index}
                className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow transition-transform hover:scale-105"
            >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Approach {index + 1}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {approach.approach || "Add your approach description here."}
                </p>

                {/* Time and Space Complexity */}
                <div className="flex justify-start gap-4 text-sm mb-4">
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                    Time Complexity:{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {approach.timeComplexity || "N/A"}
                    </span>
                </span>
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                    Space Complexity:{" "}
                    <span className="font-semibold text-green-600 dark:text-green-400">
                    {approach.spaceComplexity || "N/A"}
                    </span>
                </span>
                </div>

                {/* Code Block with Scrollbar */}
                <div className="bg-gray-900 text-white rounded-lg p-4 font-mono text-sm shadow-inner overflow-x-auto max-w-full">
                <pre className="whitespace-pre">
                    <code>
                    {approach.solution || "// Your solution code will appear here."}
                    </code>
                </pre>
                </div>
            </div>
            ))}
        </div>
        </div>


    </div>
  );
}

