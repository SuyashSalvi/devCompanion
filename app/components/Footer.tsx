import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 transition-colors duration-300">
      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-primary font-bold">DevCompanion</span>. Built
          with ❤️ by <span className="text-blue-400 font-bold">Suyash Salvi</span> for developers.
        </p>
        <div className="mt-4 flex justify-center items-center gap-4">
          {/* GitHub Button */}
          <a
            href="https://github.com/SuyashSalvi"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:shadow-[0_0_15px_#4F46E5] transition-all"
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
          </a>

          {/* LeetCode Button */}
          <a
            href="https://leetcode.com/u/ssalvi28/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:shadow-[0_0_15px_#22C55E] transition-all"
          >
            <Image
              src="/icons/leetcode.svg"
              alt="LeetCode"
              width={20}
              height={20}
            />
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/suyash-salvi/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:shadow-[0_0_15px_#3B82F6] transition-all"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
