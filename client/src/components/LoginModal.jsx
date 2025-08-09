import React, { useState } from 'react'; 
import { X, Eye, EyeOff } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_BACKEND_URL;

const loginSchema = z.object({
  emailOrMobile: z
    .string()
    .nonempty('Email or Mobile is required')
    .refine((value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const mobileRegex = /^[6-9]\d{9}$/;
      return emailRegex.test(value) || mobileRegex.test(value);
    }, 'Enter a valid email or mobile number'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const LoginModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${API_URL}/api/login`, {
        username: data.emailOrMobile,
        password: data.password,
      });

      if (response.status === 200) {
        toast.success("Login successful!");
        // Post-login logic here (close modal or redirect)
        onClose?.();
        navigate('/dashboard'); // example dashboard
      }
    } catch (err) {
      toast.dismiss();

  

        setTimeout(() => {
          onClose?.();
          navigate('/');
        }, 3000);
     
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-orange-100 w-full max-w-md p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <X size={24} />
        </button>
        <h2 className="text-orange-600 font-semibold text-sm">SANJAY SARAOGI</h2>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Email or Mobile"
              {...register('emailOrMobile')}
              className={`w-full px-4 py-2 border ${
                errors.emailOrMobile ? 'border-red-500' : 'border-orange-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
            />
            {errors.emailOrMobile && (
              <p className="text-red-600 text-sm mt-1">
                {errors.emailOrMobile.message}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password')}
              className={`w-full px-4 py-2 border ${
                errors.password ? 'border-red-500' : 'border-orange-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-2.5 text-gray-600 hover:text-orange-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-between text-sm font-medium text-orange-600">
            <Link to="/register" className="hover:underline">
              Don’t have an account? Register
            </Link>
            <Link to="/forgot-password" className="hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-700 text-white py-2 rounded-md hover:bg-orange-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;









