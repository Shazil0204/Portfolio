import { useState } from "react";
import axios from "axios";
import transition from "../Components/transition";

const Contact: React.FC = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValue);
    const res = await axios.post("http://localhost:1000", formValue);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-emerald-950">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-gray-700">
            Name:
            <input
              type="text"
              name="name"
              required
              value={formValue.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Email:
            <input
              type="email"
              name="email"
              required
              value={formValue.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Phone (optional):
            <input
              type="number"
              name="phoneNo"
              value={formValue.phoneNo}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Message:
            <textarea
              name="message"
              required
              value={formValue.message}
              onChange={handleChange}
              maxLength={1024}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full mb-5 bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
        <p className="text-black text-justify">
          Important Notice: Your information is not yet secure. Please be aware
          that any information you provide through this contact form is
          currently not encrypted and may be vulnerable to interception. Proceed
          with caution and avoid sharing sensitive personal information at this
          time. We are working on improving security measures to protect your
          data.
        </p>
      </form>
    </div>
  );
};

export default transition(Contact);
