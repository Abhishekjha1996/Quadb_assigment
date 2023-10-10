import React, { useState } from 'react';
import SuccessPage from './SuccessPage';
import "./JobList.css"

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
    resume: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      {isSubmitted ? (
        <SuccessPage data={formData} />
      ) : (
        
        <form id='formcard' onSubmit={handleSubmit} >
          <h2>Application Form</h2>
          <label>
            Name::
            <input
            className='inputboxes'
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Email::
            <input
            className='inputboxes'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Cover Letter:
            <textarea
            className='inputboxes'
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Resume/Cover Letter Upload::
            <input
            className='inputboxes'
              type="file"
              name="resume"
              accept=".pdf, .doc, .docx"
              onChange={handleFileChange}
              required
            />
          </label>
          <button id='submitbtn' type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ApplicationForm;
