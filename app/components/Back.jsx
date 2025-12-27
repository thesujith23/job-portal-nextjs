// components/Back.jsx
"use client"

import { useRouter } from "next/navigation"

export default function Back() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6 transition group"
    >
      <svg 
        className="w-5 h-5 transform group-hover:-translate-x-1 transition" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back to Jobs
    </button>
  )
}