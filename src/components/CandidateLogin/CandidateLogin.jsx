import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const CandidateLogin = ({navigateToRegister}) => {

  const [formData, setFormData] = useState({
          email: '',
          password: '',
  });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
      const { name, value} = e.target;
      
      setFormData((prev) => ({
          ...prev,
          [name]: value,
     }))   
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData)
    }

  return (
    
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 [&::-webkit-scrollbar]:hidden">
      <div className="w-[85%] max-w-lg bg-white rounded-lg shadow-lg p-8 overflow-x-hidden max-h-[90vh] scrollbar-hide">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-2">Login to your account</h2>
            <p className="text-gray-600">Welcome back!</p>
          </div>
          <hr />
          <div className="space-y-4">
            <div className="relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full p-2 border-black border-b-[1.5px] focus:outline-none peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-md text-black duration-300 transform top-0 -translate-y-4 scale-75 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Email address
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full p-2 border-black border-b-[1.5px] focus:outline-none peer"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-md text-black duration-300 transform top-0 -translate-y-4 scale-75 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                Password
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            LOG IN
          </button>
          <div className="text-center space-y-3">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/candidate_register">
              <span
                onClick={navigateToRegister}
                className="text-blue-500 hover:text-blue-600 font-medium cursor-pointer"
              >
                Create an account
              </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CandidateLogin;
