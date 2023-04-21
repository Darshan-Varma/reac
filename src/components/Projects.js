import React, { useState, useEffect } from 'react';
import image from '../images/ludo.png'

function Projects() {

  const [data,setData] = useState([])

  const getData = () =>{
    fetch('projects.json',{headers:{
      'Content-type':'application/json',
      'Accept':'application/json'
    }}).then((response)=>{
      return response.json()
    }).then((projectsJson)=>{
      setData(projectsJson)
    })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
    <h2 class="projects subtitle">SELECTED PROJECTS</h2>

    <hr></hr>
    {data.map(item => (
      <div className="flex-container">
        <div>
          <img src={image} width="200" height="200"></img>
        </div>
        <div className='content'>
          <h2>{item.title}</h2>
          <ul>
            <li>
              {item.content}
            </li>
          </ul>
          
          <h3>Link : </h3><a href={item.url}> {item.url}</a>
        </div>
      </div>
    ))}
    <hr></hr>
  </div>
  );
}

export default Projects;