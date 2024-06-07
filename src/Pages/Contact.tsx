import { useState, ChangeEvent, FormEvent } from "react";
import CryptoJS from "crypto-js";
import transition from "../Components/transition";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors: Partial<FormData> = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (formData.message.length > 1024) {
      errors.message = "Message must be 1024 characters or less";
    }

    return errors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Encrypt the form data
      const encryptedFormData = {
        name: CryptoJS.AES.encrypt(formData.name, "secret key").toString(),
        email: CryptoJS.AES.encrypt(formData.email, "secret key").toString(),
        phone: CryptoJS.AES.encrypt(formData.phone, "secret key").toString(),
        message: CryptoJS.AES.encrypt(
          formData.message,
          "secret key"
        ).toString(),
      };

      // Send the encrypted form data to PHP server
      try {
        const response = await fetch("http://your-server-url/submit.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(encryptedFormData),
        });
        if (response.ok) {
          console.log("Form submitted successfully");
        } else {
          console.error("Failed to submit form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      setFormErrors(errors);
    }
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
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
          {formErrors.name && (
            <p className="text-red-500 text-sm">{formErrors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Email:
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
          {formErrors.email && (
            <p className="text-red-500 text-sm">{formErrors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Phone (optional):
            <input
              type="text"
              name="phone"
              value={formData.phone}
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
              value={formData.message}
              onChange={handleChange}
              maxLength={1024}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
            />
          </label>
          {formErrors.message && (
            <p className="text-red-500 text-sm">{formErrors.message}</p>
          )}
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default transition(Contact);
