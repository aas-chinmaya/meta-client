export default function AnalyticsPage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        Analytics
      </h1>
      <div className="card p-6">
        <h2 className="text-xl font-semibold mb-4">User Engagement</h2>
        <div className="h-64 bg-white/5 rounded-lg">
          {/* Chart would go here */}
        </div>
      </div>
    </>
  );
}