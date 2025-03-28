"use client";

import { useState } from "react";
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    //  Simulate API submission (Replace with actual API call)
    setTimeout(() => {
      setSuccess("Your message has been sent!");
      setFormData({name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",});
    }, 1000);
  };

  return (
    <div className="md:-mt-10 relative z-30 max-w-3xl mx-auto bg-white dark:bg-[#1f2133] p-12 rounded-2xl shadow-md">
  {error && <p className="text-red-500 text-sm">{error}</p>}
  {success && <p className="text-green-500 text-sm">{success}</p>}
  
  <form onSubmit={handleSubmit} className="space-y-4">
    
    {/* Name & Email Side by Side */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-[#4C4C4C] dark:text-[#dad8d8] pb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border dark:text-white border-[#C4C4C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
        />
      </div>
      <div>
        <label className="block text-[#4C4C4C] dark:text-[#dad8d8] pb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border dark:text-white border-[#C4C4C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
        />
      </div>
    </div>

    {/* Phone & Subject Side by Side */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-[#4C4C4C] dark:text-[#dad8d8] pb-2">Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border dark:text-white border-[#C4C4C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
        />
      </div>
      <div> 
        <label className="block text-[#4C4C4C] dark:text-[#dad8d8] pb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border dark:text-white border-[#C4C4C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
        />
      </div>
    </div>

    {/* Full Width Message */}
    <div>
      <label className="block text-[#4C4C4C] dark:text-[#dad8d8] pb-2">Message</label>
      <textarea
        name="message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-3 border dark:text-white border-[#C4C4C4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7C4EE4]"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-[#7C4EE4] text-white py-4 rounded-md  transition"
    >
      Send Message
    </button>
  </form>
</div>

  );
};

export default ContactForm;
