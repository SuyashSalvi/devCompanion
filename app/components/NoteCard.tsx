export default function NoteCard({ title, content }: { title: string; content: string }) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
          {content}
        </p>
      </div>
    );
  }
  