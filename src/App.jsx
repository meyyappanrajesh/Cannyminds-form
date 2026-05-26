import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    tenth: "",
    twelfth: "",
    package: "",
    company: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Application Submitted Successfully 🚀");

    console.log(formData);
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #38bdf8 0%, #a78bfa 25%, #f472b6 50%, #fb7185 75%, #facc15 100%)",
      }}
      className="min-h-screen flex items-center justify-center p-5 overflow-hidden relative"
    >
     
      <div className="absolute w-72 h-72 bg-pink-400 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>

      <div className="absolute w-72 h-72 bg-cyan-400 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>

      <div className="absolute w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      
      <form
        onSubmit={handleSubmit}
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.2)] rounded-3xl p-10 w-full max-w-4xl hover:scale-[1.01] transition duration-500"
      >
        
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold tracking-wide flex items-center justify-center gap-2">
            
          
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]">
              Canny Minds
            </span>

        

          </h1>

          <p className="text-white/80 mt-3 text-lg">
            Technology Candidate Registration
          </p>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Full Name", name: "name", type: "text" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Phone Number", name: "phone", type: "text" },
            { label: "Date of Birth", name: "dob", type: "date" },
            { label: "10th Percentage", name: "tenth", type: "number" },
            { label: "12th Percentage", name: "twelfth", type: "number" },
            { label: "Current Package", name: "package", type: "text" },
            { label: "Current Working Company", name: "company", type: "text" },
          ].map((field, index) => (
            <div key={index} className="group">
              <label className="block text-white mb-2 font-semibold">
                {field.label}
              </label>

              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label}`}
                className="w-full p-4 rounded-2xl bg-white/20 border border-white/20 text-white placeholder-white/70 outline-none transition duration-300 focus:scale-105 focus:bg-white/30 focus:ring-2 focus:ring-pink-300 hover:bg-white/25"
                required
              />
            </div>
          ))}
        </div>

       
        <button
          type="submit"
          style={{
            background:
              "linear-gradient(135deg, #38bdf8 0%, #a78bfa 25%, #f472b6 50%, #fb7185 75%, #facc15 100%)",
          }}
          className="w-full mt-10 text-white text-lg font-bold py-4 rounded-2xl shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition duration-300"
        >
          Submit Application 
        </button>
      </form>
    </div>
  );
};

export default App;