// components/JobList/JobItem.js
import { Link} from 'react-router-dom';
import React from 'react';
import "./JobList.css"

function JobItem({ job }) {

  const handleclick = (job) => {
    localStorage.setItem("singledata", JSON.stringify(job))
  }




  console.log(job, "injo")
  return (
    <div id='jobonecard'>
      <h2>{job.title}</h2>
      <h3>{job.description}</h3>
      <h3>Salary: {job.salary_min}</h3>
      <Link to={`/joblist/${job.id}`} > <button onClick={handleclick(job)}>View Details</button> </Link>
    </div>
  );
}

export default JobItem;



// adref
// : 
// "eyJhbGciOiJIUzI1NiJ9.eyJpIjoiNDM0NDczODY5NCIsInMiOiJ3RXEwRG9wbjdoR0ZTOHVpUEZ2a3VBIn0.0tpRjQjabhsa2cPiCz1hdJ8Rvsl83AkC-sQiTpFAWwU"
// category
// : 
// {__CLASS__: 'Adzuna::API::Response::Category', tag: 'it-jobs', label: 'IT Jobs'}
// company
// : 
// {__CLASS__: 'Adzuna::API::Response::Company', display_name: 'Understanding Recruitment'}
// contract_time
// : 
// "full_time"
// contract_type
// : 
// "permanent"
// created
// : 
// "2023-10-02T12:14:59Z"
// description
// : 
// "Python Developer - FinTech Data Salary up to £120k plus Bonus and Benefits Location: London Python Developer - We are actively seeking a Python Developer to join our leading FinTech startup. You will be joining our growing team of multicultural engineers. You will be joining a team who embrace TDD, Clean Code and Refactoring in an agile environment. We are passionate about helping our customers exceed expectations. Our Python Developer will be working closely with the CTO and 4/5 other Python D…"
// id
// : 
// "4344738694"
// location
// : 
// {display_name: 'London, UK', area: Array(2), __CLASS__: 'Adzuna::API::Response::Location'}
// redirect_url
// : 
// "https://www.adzuna.co.uk/jobs/land/ad/4344738694?se=wEq0Dopn7hGFS8uiPFvkuA&utm_medium=api&utm_source=98ef578d&v=5D6F76CE38571AC39DA4C0A525FF0F25E5A98246"
// salary_is_predicted
// : 
// "0"
// salary_max
// : 
// 120000
// salary_min
// : 
// 110000
// title
// : 
// "Python Developer"
// __CLASS__
// : 
// "Adzuna::API::Response::Job"