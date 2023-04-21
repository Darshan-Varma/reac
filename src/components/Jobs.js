import React, { useState, useEffect } from 'react';
import image from '../images/ludo.png'

function Jobs() {

  const [data,setData] = useState([])

  const getData = () =>{
    fetch('jobs.json',{headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    }}).then((response)=>{
      return response.json()
    }).then((jobsJson)=>{
      setData(jobsJson)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
    <h2 class="workex subtitle">PROFESSIONAL EXPERIENCE</h2>

    <hr></hr>
    {data.map(item => (
      <div className="flex-container">
        <div>
          <img src={item.url} width="200" height="200"></img>
        </div>
        <div className='content'>
          <h2>{item.company_name}</h2>
          <p className="workDuration">{item.start_at} - {item.end_at}</p>
          <h4>{item.title}</h4>
          {item.job_description}
          
        </div>
      </div>
    ))}
    <hr></hr>
  </div>
  );
}

export default Jobs;