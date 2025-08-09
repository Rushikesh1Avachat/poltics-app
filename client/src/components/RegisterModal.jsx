import React, { useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const RegisterModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    emailOrMobile: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    file: null,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.termsAccepted) {
      toast.error("Please accept the Terms and Conditions");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const data = new FormData();
      data.append("fullName", formData.fullName);
      data.append("emailOrMobile", formData.emailOrMobile);
      data.append("mobile", formData.mobile);
      data.append("password", formData.password);
      data.append("confirmPassword", formData.confirmPassword);
      if (formData.file) data.append("file", formData.file);

      const response = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        body: data,
      });

      

      toast.success("Registration successful!", {
        position: "top-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/login", {
          state: {
            emailOrMobile: formData.emailOrMobile,
            password: formData.password,
          },
        });
        onClose?.();
      }, 2200);
    } catch (error) {
      toast.error("Register failed: " + error.message, {
        position: "top-right",
        autoClose: 3000,
        style: { backgroundColor: "#F56565", color: "white" },
      });
      setTimeout(() => {
        navigate("/login", {
          state: {
            emailOrMobile: formData.emailOrMobile,
            password: formData.password,
          },
        });
        onClose?.();
      }, 3200);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-[#fcdcd0] w-full max-w-lg mx-4 rounded-xl p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-orange-600 font-semibold text-sm">SANJAY SARAOGI</h2>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">New User Register</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            value={formData.fullName}
            className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            name="emailOrMobile"
            placeholder="Enter Your Email or Mobile"
            onChange={handleChange}
            value={formData.emailOrMobile}
            className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            onChange={handleChange}
            value={formData.mobile}
            className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirmPassword}
            className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <input
            type="file"
            name="file"
            accept=".jpeg,.jpg,.png,.pdf,.doc,.docx"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-orange-300 rounded-md file:bg-orange-100 file:border-none file:px-4 file:py-2 file:rounded-md file:text-orange-700 file:font-semibold hover:file:bg-orange-200"
          />

          <label className="flex items-center space-x-2 text-sm text-gray-700 mt-2">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="accent-orange-500"
              required
            />
            <span>
              I agree to the <span className="text-orange-600 underline">Terms</span>
            </span>
          </label>

          <button
            type="submit"
            className="mt-4 w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;






