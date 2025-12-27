"use client"
import { JobCard } from "./JobCard"
import { useState } from "react"

export default function JobFilter({jobs}){
  const [location, setLocation] = useState("")
  const [type, setType] = useState("All")
  const [title, setTitle] = useState("")

  const filteredJobs = jobs.filter((job) => {
    const matchLocation =
      location === "" ||
      job.location.toLowerCase().includes(location.toLowerCase())

    const matchType =
      type === "All" || job.type === type

    const matchTitle =
      title === "" ||
      job.title.toLowerCase().includes(title.toLowerCase())

    return matchLocation && matchType && matchTitle
  })

  return(
    <div>
      {/* Filters Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Filter Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input 
              type="text"
              value={location} 
              placeholder="Search location..." 
              onChange={(e)=>setLocation(e.target.value)}
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Title
            </label>
            <input 
              type="text"
              value={title} 
              placeholder="Search title..." 
              onChange={(e)=>setTitle(e.target.value)}
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Job Type
            </label>
            <select 
              value={type} 
              onChange={(e)=>setType(e.target.value)}
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
            >
              <option>All</option>
              <option>Internship</option>
              <option>Full-time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div>
        <p className="text-sm text-gray-600 mb-4">
          {filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found
        </p>

        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center border border-gray-200">
            <p className="text-gray-500 text-lg">No jobs found matching your criteria</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredJobs.map((j)=>(
              <JobCard key={j.id} job={j}/>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}