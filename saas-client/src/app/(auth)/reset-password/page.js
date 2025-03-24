import { KeyIcon, ArrowLeftIcon } from "lucide-react";
import Link from 'next/link';

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] bg-white/5 rounded-xl border border-white/10 p-8 space-y-8">
        <div className="text-center space-y-4">
          <KeyIcon className="mx-auto h-10 w-10 text-blue-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Reset Password
          </h1>
          <p className="text-gray-300 text-sm">
            Enter your email to reset your password
          </p>
        </div>

        <form className="space-y-6">
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
          <button
            type="submit"
            className="w-full px-4 py-2.5 bg-blue-500 rounded-lg text-sm font-medium text-white hover:bg-blue-600 transition-colors"
          >
            Reset Password
          </button>
        </form>

        <div className="space-y-4">
          <Link 
            href="/login" 
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 rounded-lg border border-white/10 text-sm text-white hover:bg-white/10 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Login
          </Link>
          <div className="text-center text-sm text-gray-300">
            Remember your password?{' '}
            <Link href="/login" className="text-blue-400 hover:text-blue-300">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}