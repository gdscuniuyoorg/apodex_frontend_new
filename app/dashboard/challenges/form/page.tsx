// Form.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import dynamic from "next/dynamic";
import Button from "../Button";
// const DynamicButton = dynamic(() => import("../Button"), { ssr: false }); // Dynamically import Button component

const ChallengeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    // Add more fields as needed
  });

  const router = useRouter();

  const handlePrev = () => {
    router.push("/challenges");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit the form data (e.g., send it to the server)
    console.log("Form data:", formData);
    // Clear the form fields after submission if needed
    setFormData({
      title: "",
      description: "",
      // Add more fields as needed
    });
  };

  return (
    <div  className="">
      <h2>Create a New Challenge</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {/* Add more form fields as needed */}
        <Button type="submit" onClick={handlePrev}>Submit</Button>
      </form>
    </div>
  );
};

export default ChallengeForm;
