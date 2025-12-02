"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-red-500">
              Something went wrong!
            </h1>
            <p className="text-gray-400">
              An unexpected error occurred. Please try again.
            </p>
          </div>
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}