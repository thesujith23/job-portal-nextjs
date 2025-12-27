// components/Navbar.jsx
"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition">
            Job Portal
          </Link>
          
          <div className="flex gap-6">
            <Link 
              href="/" 
              className={`text-sm font-medium transition ${
                pathname === "/" 
                  ? "text-blue-600" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/jobs" 
              className={`text-sm font-medium transition ${
                pathname.startsWith("/jobs") 
                  ? "text-blue-600" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Jobs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}