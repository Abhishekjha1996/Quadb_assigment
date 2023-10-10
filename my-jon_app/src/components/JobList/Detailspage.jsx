import React, { useEffect, useState } from 'react'
import { fetchJobDetails } from '../../utils/api';
import { Link, useParams } from 'react-router-dom';


const Detailspage = () => {
  const [jobs, setJobs] = useState({});
let params = useParams()
console.log(params.joblist_id, "param")

  useEffect(() => {
    if (params.joblist_id) {
      fetchJobDetails(params.joblist_id)
        .then((data) => setJobs(data));
    }

  }, []);

  console.log(jobs)

  return (
    <div>
      <li>
      <h3>{jobs.title}</h3>
      <p>{jobs.company}</p>
      <p>{jobs.id}</p>
      <Link to={`/joblist/${jobs.id}`} > more</Link>
      <button>View Details</button>
    </li>
    </div>
  )
}

export default Detailspage