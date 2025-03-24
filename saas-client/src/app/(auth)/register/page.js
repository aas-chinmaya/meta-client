'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from '@/lib/api/axios';
import { toast } from 'react-toastify';
import { UserPlusIcon, ArrowLeftIcon } from 'lucide-react';
import { LockClosedIcon } from '@heroicons/react/24/outline';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    businessName: '',
    businessDetails: ''
  });
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // Add this line
  const [otp, setOtp] = useState(''); // Add this line if not already present

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (step === 1) {
        // Send OTP
        await axios.post('/api/auth/otp/register', {
          email: formData.email
        });
        setStep(2);
      } else {
        // Verify OTP and register
        await axios.post('/api/auth/otp/verify', {
          email: formData.email,
          otp,
          type: 'registration'
        });

        const response = await axios.post('/api/auth/register', formData);
        toast.success('Account created successfully!');
        router.push('/login');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] bg-white/5 rounded-xl border border-white/10 p-8 space-y-8">
        <div className="text-center space-y-4">
          {step === 1 ? (
            <UserPlusIcon className="mx-auto h-10 w-10 text-blue-400" />
          ) : (
            <LockClosedIcon className="mx-auto h-10 w-10 text-blue-400" />
          )}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            {step === 1 ? 'Create Account' : 'Verify OTP'}
          </h1>
          <p className="text-gray-300 text-sm">
            {step === 1 ? 'Register for your SaaS admin account' : 'Enter the OTP sent to your email'}
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {step === 1 ? (
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/5 rounded-lg border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/5 rounded-lg border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              {/* Repeat the same pattern for other fields */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white/5 rounded-lg border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your first name"
                />
              </div>
              {/* Add similar structure for lastName, businessName, and businessDetails */}
            </div>
          ) : (
            <div className="space-y-4">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-300 mb-1">
                OTP
              </label>
              <input
                id="otp"
                type="text"
                value={otp}
                onChange={handleOtpChange}
                className="w-full px-4 py-2.5 bg-white/5 rounded-lg border border-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the OTP sent to your email"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2.5 bg-blue-500 rounded-lg text-sm font-medium text-white hover:bg-blue-600 transition-colors"
          >
            {loading 
              ? (step === 1 ? 'Sending OTP...' : 'Verifying...')
              : (step === 1 ? 'Send OTP' : 'Verify & Register')}
          </button>
        </form>

        {step === 2 && (
          <button
            onClick={() => setStep(1)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 rounded-lg border border-white/10 text-sm text-white hover:bg-white/10 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Registration
          </button>
        )}

        <div className="text-center text-sm text-gray-300">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-400 hover:text-blue-300">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}


