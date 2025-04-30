import React, { useState } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title }) => {
  console.log("Popup isOpen:", isOpen);

  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("location", formData.location);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://formspree.io/f/mayknzaq", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: form,
      });

      if (response.ok) {
        console.log("Message sent successfully!");
        onClose(); 
      } else {
        console.log("Error submitting message:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* <div className="bg-white w-[500px] h-[] rounded-lg shadow-xl max-w-md w-full"> */}
      <div className="bg-white rounded-lg bg-opacity-90 backdrop-blur-[10px] shadow-xl p-6 w-[90%] sm:max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">
            EswariBuilder
          </h1>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
        </div>
        <div className="py-2 md:pb-6">
          <h2 className="text-xl font-bold">
            LET'S <span className="text-black">TALK</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "email", "phone", "location"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={(formData as any)[field]}
              onChange={handleChange}
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black py-2"
              required
            />
          ))}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full bg-transparent border-b border-gray-300 focus:outline-none focus:border-black py-2"
            rows={3}
            required
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black  hover:bg-black/80 text-white font-bold px-5 py-2 rounded"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      </div>
    // </div>
  );
};

export default Popup;


// import React, { useState, useEffect } from "react";

// interface PopupProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title: string;
// }

// const Popup: React.FC<PopupProps> = ({ isOpen, onClose, title }) => {
//   console.log("Popup isOpen:", isOpen);

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div
//         className="absolute inset-0 bg-black bg-opacity-50"
//         onClick={onClose}
//       ></div>
//       <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-md w-full">
//         <h2 className="text-xl font-bold mb-4">Welcome to our website!</h2>
//         <p className="mb-4">
//           Thank you for visiting. Check out our special offers!
//         </p>
//         <button
//           onClick={onClose}
//           className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Popup;
