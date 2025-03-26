'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/lib/redux/features/authSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { ArrowLeftIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] bg-white/5 rounded-xl border border-white/10 p-8 space-y-8">
        <div className="text-center space-y-4">
          <LockClosedIcon className="mx-auto h-10 w-10 text-blue-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-gray-300 text-sm">
            Sign in to your SaaS admin account
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2.5 bg-white/5 rounded-lg border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-2.5 bg-white/5 rounded-lg border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-600 rounded-lg text-base font-semibold text-white hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
            {/* <h2 className="text-sm font-medium mt-1">Access your account</h2>
            <h3 className="text-xs text-white/80 mt-0.5">Secure login process</h3> */}
          </button>
        </form>

        <div className="space-y-4">
          <Link 
            href="/" 
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 rounded-lg border border-white/10 text-sm text-white hover:bg-white/10 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="text-center text-sm text-gray-300 space-y-2">
            <Link href="/reset-password" className="text-blue-400 hover:text-blue-300">
              Forgot password?
            </Link>
            <div>
              New user?{' '}
              <Link href="/register" className="text-blue-400 hover:text-blue-300">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}