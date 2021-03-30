import './App.css';
import Table from './Table'
import React, { useState, useEffect } from 'react'


export default function App() {
  const [rows, setRows] = useState([]);
  const [fetched, setFetched] = useState(()=> false);
  
  useEffect(() => {
    const url = 'http://localhost:3000/api/issues';
    fetch(url)
        .then(res=>res.json())
        .then(json=>{
          setRows(json);
          setFetched(true);
        });
  }, [])

  if(!fetched){
    return (
      <div>
        Loading...
      </div>
    )
  }
  else{
    return (
      <div className='appClass'>
        <h1>Issues GitHub</h1>
        <Table rows={rows} />
      </div>
    )
  }
  
}
