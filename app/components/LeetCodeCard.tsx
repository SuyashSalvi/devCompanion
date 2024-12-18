export default function LeetCodeCard({
    problem,
    solution,
    approach,
    timeComplexity,
    spaceComplexity,
    leetCodeLink,
  }: {
    problem: string;
    solution: string;
    approach: string;
    timeComplexity: string;
    spaceComplexity: string;
    leetCodeLink: string;
  }) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
          {problem}
        </h3>
        <div className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
          <p>
            <span className="font-medium">Solution:</span> {solution}
          </p>
          <p>
            <span className="font-medium">Approach:</span> {approach}
          </p>
          <p>
            <span className="font-medium">Time Complexity:</span> {timeComplexity}
          </p>
          <p>
            <span className="font-medium">Space Complexity:</span> {spaceComplexity}
          </p>
        </div>
        <a
          href={leetCodeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-500 hover:underline"
        >
          View Problem on LeetCode →
        </a>
      </div>
    );
  }
  