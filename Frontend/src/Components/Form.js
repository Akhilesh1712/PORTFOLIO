import "./Form.css";
import React, { useState } from 'react';

const Form = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || "");
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <form>
          <h2>Contact Us</h2>
          <label>
            Your Name
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Your Email
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Subject
            <input type="text" placeholder="Subject" />
          </label>
          <label>
            Enter Message
            <textarea rows="6" placeholder="Type your message here..."></textarea>
          </label>
          <label className="attachment">
            Attach Document
            <input type="file" onChange={handleFileChange} />
            {fileName && <span className="file-name">Selected: {fileName}</span>}
          </label>
          <button className="btn4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
