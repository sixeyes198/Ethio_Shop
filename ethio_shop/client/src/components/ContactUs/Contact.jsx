import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      console.log("Form submitted successfully:", formData);
      setFormData({ name: "", email: "", message: "" }); // Reset form data
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="py-12 bg-[#f8fafc]	" id="contact-us">
      <div className="container mx-auto px-4">
        {/* title header */}
        <div className="text-container mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Contact Us
          </h2>
        </div>
        {/* contact form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          {/* name input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Name"
            />
          </div>
          {/* email input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
            />
          </div>
          {/* message input */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-y"
              rows="5"
              placeholder="Enter your message"
            />
          </div>
          {/* submit button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg border border-blue-700 hover:bg-blue-600 hover:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
