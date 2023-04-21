import React, { useState, useEffect } from 'react';

function Skill() {

  const [data,setData] = useState([])

  const getData = () =>{
    fetch('skills.json',{headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    }}).then((response)=>{
      return response.json()
    }).then((skillsJson)=>{
      setData(skillsJson)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <h2 className="skills subtitle">SKILLS</h2>
      <hr></hr>
        <div className="flex-container">
          <div className='content'>
            {data.map(item => (
            <ul>
              <li>
                <h3>{item.title}</h3>
              </li>
            </ul>
            ))}
          </div>
        </div>
    </div>
  );
}

export default Skill;