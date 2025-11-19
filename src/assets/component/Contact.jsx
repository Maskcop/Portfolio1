import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/raeqjora", userInfo);
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Contact Me</h1>
      <p className="text-center text-gray-300 mb-8">
        Please fill out the form below to get in touch with me.
      </p>
      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-800 w-full max-w-md px-8 py-6 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Send Your Message</h2>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-400 mb-1">Full Name</label>
            <input
              {...register("name", { required: "Full Name is required" })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-400 mb-1">Email Address</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-400 mb-1">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-300 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;