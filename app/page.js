// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Welcome to Tech Hire
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        Discover your next career opportunity. Browse through hundreds of job listings and find the perfect match for your skills.
      </p>
      <Link 
        href="/jobs"
        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
      >
        Browse Jobs
      </Link>
    </div>
  );
}