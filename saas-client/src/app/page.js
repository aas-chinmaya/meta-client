'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LockClosedIcon, ShieldCheckIcon, CogIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8 p-8 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
        <div className="text-center">
          <ShieldCheckIcon className="mx-auto h-16 w-16 text-blue-400" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mt-4">
            MetaBoost Admin Portal
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            Secure and efficient management for your SaaS platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <CogIcon className="mx-auto h-10 w-10 text-blue-400" />
            <h3 className="text-xl font-semibold mt-4">Admin Dashboard</h3>
            <p className="text-gray-300 mt-2">
              Manage users, permissions, and system settings
            </p>
          </div>
          <div className="card p-6 text-center">
            <LockClosedIcon className="mx-auto h-10 w-10 text-blue-400" />
            <h3 className="text-xl font-semibold mt-4">Secure Access</h3>
            <p className="text-gray-300 mt-2">
              Role-based access control for your team
            </p>
          </div>
          <div className="card p-6 text-center">
            <ShieldCheckIcon className="mx-auto h-10 w-10 text-blue-400" />
            <h3 className="text-xl font-semibold mt-4">System Monitoring</h3>
            <p className="text-gray-300 mt-2">
              Real-time insights and analytics
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/login" className="btn-primary px-8 py-3 text-lg">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
