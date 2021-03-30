import '../styles/App.css';
import Table from './Table'
import React, { useState, useEffect } from 'react'
import { getAllIssues } from '../api/APIGet';

export default function App() {
  const [rows, setRows] = useState([]);
  const [fetched, setFetched] = useState(() => false);

  useEffect(() => {
    getAllIssues()
      .then(res=>{
        setRows(res);
        setFetched(true);
      })
      .catch((err) => console.log(err))
  }, [])

  if (!fetched) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  else {
    return (
      <div className='appClass'>
        <h1>Issues GitHub</h1>
        <Table rows={rows} />
      </div>
    )
  }

}
