import React, { useEffect, useState } from 'react';
import { fetchJobsByLanguage } from '../../utils/api';
import JobItem from './JobItem';
import "./JobList.css"



function JobList() {
  const [jobs, setJobs] = useState([]);
  const [language, setLanguage] = useState('');

  // const getdata = () => {
  //   console.log(language, "inside")
  //   axios.get(`https://fakestoreapi.com/products/category/${language}`)
  //   .then((res)=> console.log(res.data))
  // }

  useEffect(() => {
    if (language) {
      fetchJobsByLanguage(language)
        .then((data) => setJobs(data.results));
    }

  }, [language]);

  
  console.log(jobs, "okk")
  
  return (
    <div>
    <h1> Search Job by programming language </h1>
      <input
      id='inputbox'
        type="text"
        placeholder="Enter programming "
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      />
      
      <div id='jobcard' >
        {jobs?.map((job) => (
           <JobItem key={job.id} job={job} />  
        ))}
        </div>
    </div>
  );
}

export default JobList;


