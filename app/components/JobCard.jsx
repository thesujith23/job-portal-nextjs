"use client"
import Link from "next/link"

export function JobCard({job}){
  return(
    <Link 
      href={`/jobs/${job.id}`}
      className="block bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all"
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition">
          {job.title}
        </h2>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          job.type === 'Full-time' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-blue-100 text-blue-700'
        }`}>
          {job.type}
        </span>
      </div>
      
      <p className="text-gray-600 font-medium mb-2">{job.company}</p>
      <p className="text-gray-500 text-sm flex items-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {job.location}
      </p>
    </Link>
  )
}