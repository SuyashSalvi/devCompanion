// "use client";

// import { useState, FormEvent } from "react";
// import { useSession } from "next-auth/react";
// import axios from "axios";

// export default function AdminLeetCode() {
//   const { data: session, status } = useSession();
//   const [post, setPost] = useState({
//     problem: "",
//     solution: "",
//     approach: "",
//     timeComplexity: "",
//     spaceComplexity: "",
//     leetCodeLink: "",
//   });
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       await axios.post("/api/leetcode", post);
//       setSuccessMessage("LeetCode problem added successfully!");
//       setErrorMessage(""); // Clear any previous errors
//       setPost({
//         problem: "",
//         solution: "",
//         approach: "",
//         timeComplexity: "",
//         spaceComplexity: "",
//         leetCodeLink: "",
//       });
//     } catch (error) {
//       setErrorMessage("Failed to post the LeetCode problem. Please try again.");
//     }
//   };

//   // If user session is not loaded yet
//   if (status === "loading") {
//     return <p>Loading...</p>;
//   }

//   // If user is not logged in
//   if (!session) {
//     return <p>You need to be logged in to access this page.</p>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8 sm:p-20">
//       <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
//         Add a New LeetCode Problem
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-4"
//       >
//         <div>
//           <label htmlFor="problem" className="block font-medium text-gray-700 dark:text-gray-300">
//             Problem Title
//           </label>
//           <input
//             id="problem"
//             type="text"
//             value={post.problem}
//             onChange={(e) => setPost({ ...post, problem: e.target.value })}
//             required
//             className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
//           />
//         </div>

//         <div>
//           <label htmlFor="solution" className="block font-medium text-gray-700 dark:text-gray-300">
//             Solution
//           </label>
//           <textarea
//             id="solution"
//             value={post.solution}
//             onChange={(e) => setPost({ ...post, solution: e.target.value })}
//             required
//             className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
//           />
//         </div>

//         <div>
//           <label htmlFor="approach" className="block font-medium text-gray-700 dark:text-gray-300">
//             Approach
//           </label>
//           <textarea
//             id="approach"
//             value={post.approach}
//             onChange={(e) => setPost({ ...post, approach: e.target.value })}
//             required
//             className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
//           />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <label
//               htmlFor="timeComplexity"
//               className="block font-medium text-gray-700 dark:text-gray-300"
//             >
//               Time Complexity
//             </label>
//             <input
//               id="timeComplexity"
//               type="text"
//               value={post.timeComplexity}
//               onChange={(e) => setPost({ ...post, timeComplexity: e.target.value })}
//               required
//               className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="spaceComplexity"
//               className="block font-medium text-gray-700 dark:text-gray-300"
//             >
//               Space Complexity
//             </label>
//             <input
//               id="spaceComplexity"
//               type="text"
//               value={post.spaceComplexity}
//               onChange={(e) => setPost({ ...post, spaceComplexity: e.target.value })}
//               required
//               className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
//             />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="leetCodeLink" className="block font-medium text-gray-700 dark:text-gray-300">
//             LeetCode Link
//           </label>
//           <input
//             id="leetCodeLink"
//             type="url"
//             value={post.leetCodeLink}
//             onChange={(e) => setPost({ ...post, leetCodeLink: e.target.value })}
//             required
//             className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Submit
//         </button>
//       </form>

//       {successMessage && (
//         <p className="mt-4 text-green-600 dark:text-green-400">{successMessage}</p>
//       )}
//       {errorMessage && (
//         <p className="mt-4 text-red-600 dark:text-red-400">{errorMessage}</p>
//       )}
//     </div>
//   );
// }
