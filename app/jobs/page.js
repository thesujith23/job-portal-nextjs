// app/jobs/page.js
import { jobs } from "../data/job"
import JobFilter from "../components/JobFilter"

export const metadata = {
  title: "Browse Jobs - Job Portal",
  description: "Browse latest job openings",
}

export default function JobsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-500 mb-2">
          Job Openings
        </h1>
        <p className="text-gray-600">
          Find your perfect opportunity from {jobs.length} available positions
        </p>
      </div>

      <JobFilter jobs={jobs} />
    </div>
  )
}