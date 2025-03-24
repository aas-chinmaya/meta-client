'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function DashboardPage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Welcome back, {user?.firstName}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2 text-white">Active Projects</h3>
            <p className="text-3xl font-bold text-blue-400">3</p>
          </div>
          
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2 text-white">Monthly Usage</h3>
            <p className="text-3xl font-bold text-blue-400">85%</p>
          </div>
        </div>
      </div>
    </div>
  );
}