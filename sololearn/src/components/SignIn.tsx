import React from 'react';
import { ArrowRight, LogIn, UserPlus, Sparkles, CircleDot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute opacity-10"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${10 + Math.random() * 20}s linear infinite`,
          transform: `rotate(${Math.random() * 360}deg)`,
        }}
      >
        <CircleDot size={20 + Math.random() * 40} />
      </div>
    ))}
  </div>
);

function App() {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          @keyframes float {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-20px, -20px) rotate(180deg); }
            100% { transform: translate(0, 0) rotate(360deg); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .feature-item { opacity: 0; }
          .feature-item:nth-child(1) { animation: fadeIn 0.6s ease-out forwards; }
          .feature-item:nth-child(2) { animation: fadeIn 0.6s ease-out 0.2s forwards; }
          .feature-item:nth-child(3) { animation: fadeIn 0.6s ease-out 0.4s forwards; }
          .card-hover { position: relative; overflow: hidden; }
          .card-hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
            transition: 0.5s;
          }
          .card-hover:hover::before { left: 100%; }
          body{
          margin-top: -70px}
        `}
      </style>
      <div className="relative min-h-screen w-full bg-[radial-gradient(circle_at_50%_50%,_#000000,_#1a1a1a)] flex items-center justify-center p-4">
        <AnimatedBackground />
        <div className="relative max-w-4xl w-full bg-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-white">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-100">Platform</span>
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-white to-transparent rounded-full" />
              </div>
              <p className="text-lg text-white/80">Join our community and unlock a world of possibilities.</p>
              <div className="space-y-4 mt-8">
                <div className="feature-item flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white/90">Discover amazing features</span>
                </div>
                <div className="feature-item flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white/90">Connect with others</span>
                </div>
                <div className="feature-item flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white/90">Grow your network</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <button className="card-hover w-full group bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10" onClick={() => navigate("/Loginmain")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      <LogIn className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white">Sign In</h3>
                      <p className="text-white/60">Already have an account?</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </div>
              </button>
              <button className="card-hover w-full group bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10" onClick={() => navigate("/SignUp")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      <UserPlus className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white">Sign Up</h3>
                      <p className="text-white/60">Create a new account</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </div>
              </button>
              <button className="w-full bg-gray-700 text-white rounded-xl p-4 mt-2 transition-all duration-300 hover:bg-gray-600" onClick={() => window.history.back()}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



  










// import React, { useState } from "react";
// import { ArrowRight, LogIn, UserPlus, Sparkles, CircleDot } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const AnimatedBackground = () => (
//   <div className="absolute inset-0 overflow-hidden">
//     {[...Array(20)].map((_, i) => (
//       <div
//         key={i}
//         className="absolute opacity-10"
//         style={{
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           animation: `float ${10 + Math.random() * 20}s linear infinite`,
//           transform: `rotate(${Math.random() * 360}deg)`,
//         }}
//       >
//         <CircleDot size={20 + Math.random() * 40} />
//       </div>
//     ))}
//   </div>
// );

// const SignIn: React.FC = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState<{ email: string; password: string }>({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token); // Save the JWT token
//         alert("Login successful!");
//         navigate("/"); // Redirect to the home page
//       } else {
//         alert(data.message || "Login failed!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <style>
//         {`
//           @keyframes float {
//             0% { transform: translate(0, 0) rotate(0deg); }
//             50% { transform: translate(-20px, -20px) rotate(180deg); }
//             100% { transform: translate(0, 0) rotate(360deg); }
//           }
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(10px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//           .feature-item { opacity: 0; }
//           .feature-item:nth-child(1) { animation: fadeIn 0.6s ease-out forwards; }
//           .feature-item:nth-child(2) { animation: fadeIn 0.6s ease-out 0.2s forwards; }
//           .feature-item:nth-child(3) { animation: fadeIn 0.6s ease-out 0.4s forwards; }
//           .card-hover { position: relative; overflow: hidden; }
//           .card-hover::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: -100%;
//             width: 100%;
//             height: 100%;
//             background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
//             transition: 0.5s;
//           }
//           .card-hover:hover::before { left: 100%; }
//         `}
//       </style>
//       <div className="relative min-h-screen w-full bg-[radial-gradient(circle_at_50%_50%,_#000000,_#1a1a1a)] flex items-center justify-center p-4">
//         <AnimatedBackground />
//         <div className="relative max-w-4xl w-full bg-black/40 backdrop-blur-xl rounded-2xl p-8 shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-white/10">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div className="space-y-6 text-white">
//               <div className="space-y-2">
//                 <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//                   Welcome Back
//                 </h1>
//                 <div className="h-1 w-20 bg-gradient-to-r from-white to-transparent rounded-full" />
//               </div>
//               <p className="text-lg text-white/80">
//                 Log in to access your account.
//               </p>
//             </div>
//             <div className="space-y-4">
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-white mb-2">Email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg bg-gray-800 text-white"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-white mb-2">Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-lg bg-gray-800 text-white"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-500"
//                 >
//                   Sign In
//                 </button>
//               </form>
//               <button
//                 className="w-full bg-gray-700 text-white rounded-lg p-3 mt-2 hover:bg-gray-600"
//                 onClick={() => navigate("/SignUp")}
//               >
//                 Create an Account
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignIn;