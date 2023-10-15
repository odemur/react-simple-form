import React, { useState } from "react";
import Field from "./Field";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  whatsApp: string;
}

const Form: React.FC = () => {
  const initialFormData: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    whatsApp: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = (): boolean => {
    const validationErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First Name is required";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = "Invalid email format (e.g., user@domain.com)";
    }

    if (!formData.whatsApp.trim()) {
      validationErrors.whatsApp = "WhatsApp is required";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data submitted:", formData);
    }
  };

  return (
    <div className="App">
      <h1>React Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <Field
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <Field
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={errors.lastName}
        />
        <Field
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <Field
          label="WhatsApp"
          name="whatsApp"
          value={formData.whatsApp}
          onChange={handleChange}
          error={errors.whatsApp}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
