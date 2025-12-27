export default function Loading(){
     return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white rounded-lg shadow-sm p-12 text-center border border-gray-200">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Loading Job Details
        </h2>
        <p className="text-gray-500">
          Please wait a moment...
        </p>
      </div>
    </div>
  )
}