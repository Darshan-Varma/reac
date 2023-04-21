import React, { useState, useEffect } from 'react';
import image from '../images/ludo.png'

function Education() {

  const [data,setData] = useState([])

  const getData = () =>{
    fetch('studies.json',{headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    }}).then((response)=>{
      return response.json()
    }).then((studiesJson)=>{
      setData(studiesJson)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
    <h2 className="education subtitle">EDUCATION</h2>

    <hr></hr>
    {data.map(item => (
      <div className="flex-container">
        <div className='content'>
          <h2>{item.school_name}</h2>
          <p className="workDuration">{item.start_at} - {item.end_at}</p>
          <h4>{item.education_level}</h4>
          
        </div>
      </div>
    ))}
    <hr></hr>
  </div>
  );
}

export default Education;