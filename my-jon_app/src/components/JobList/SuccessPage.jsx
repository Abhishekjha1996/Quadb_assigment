import React from 'react';
import { Link } from 'react-router-dom';

function SuccessPage({ data }) {
  let jobs = JSON.parse(localStorage.getItem("singledata")) || [];
  console.log(jobs)
  return (
    <div>
    <div>
      <h2>Application Submitted Successfully</h2>
      <h3>Preview of Your Application:</h3>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Cover Letter Note: {data.coverLetter}</p>
      <p>Resume/Cover Letter: {data.resume.name}</p>
    </div>
    <div>
    <h2> Job Application you Applied </h2>
      <h3>Preview of Your Application:</h3>
      <p>Title: {jobs.title}</p>
      <p>Salary: {jobs.salary_min}</p>
      <p>Contract Time: {jobs.contract_time}</p>
      <p>Contract Type: {jobs.contract_type}</p>

    </div>



    <button> <Link to="/">HOME</Link></button>
   
    </div>
  );
}

export default SuccessPage;
