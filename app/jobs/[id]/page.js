// app/jobs/[id]/page.js
import Back from '@/app/components/Back';
import {jobs} from '../../data/job'
import Link from 'next/link';

export async function generateMetadata({params}){
  const {id}=await params;
  const job=jobs.find((j)=>j.id===id)
  if(!job){
    return {
      title: "Job Not Found"
    }
  }
  return {
    title: `${job.title} at ${job.company}`,
    description: job.description,
  }
}

export default async function Jobdetails({params}){
  const {id}=await params
  const job=jobs.find((j)=>j.id===id)
  
  if(!job){
    return (
      <div className="bg-white rounded-lg shadow-sm p-12 text-center border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Job not found</h2>
        <p className="text-gray-500">The job you're looking for doesn't exist</p>
      </div>
    )
  }

  return(
    <div>
      <Back/>
      
      <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {job.title}
            </h1>
            <p className="text-xl text-gray-700 font-medium mb-2">
              {job.company}
            </p>
            <p className="text-gray-500 flex items-center gap-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.location}
            </p>
          </div>
          
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
            job.type === 'Full-time' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-blue-100 text-blue-700'
          }`}>
            {job.type}
          </span>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {job.description}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link href={`/jobs/${job.id}/apply`} className='bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-xl'>
          Apply Now
        </Link>
        </div>
      </div>
    </div>
  )
}