import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import { toast } from 'react-toastify'; // Correctly import toast functions
import 'react-toastify/dist/ReactToastify.css'; // Correctly import toast CSS

const Form = () => {
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      toast.success('Email sent successfully!');
    } catch (error) {
      toast.error('Failed to send email');
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <label>
            Your Name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Your Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Subject
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Enter Message
            <textarea
              name="message"
              rows="6"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <label className="attachment">
            Attach Document
            <input
              type="file"
              onChange={handleFileChange}
            />
            {fileName && <span className="file-name">Selected: {fileName}</span>}
          </label>
          <button className="btn4" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
