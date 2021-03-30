import TableRow from './TableRow'
import React, { useState } from 'react'

export default function Table(props) {
    const [rows, setRows] = useState(() => props.rows);

    function addRow() {
        setRows(prevRows =>{
            const rowsCopy = prevRows.slice();
            rowsCopy.push({title:"Greska", user:'Mlan', _id:'213'})
            return rowsCopy
        })
    }

    return (
        <>
        <button className='addBtn' onClick={addRow}>New issue</button>
        <div className='issues_div'>
            <table className='issues'>
                <tbody>
                    {rows.map((r) => (
                        <TableRow issue={r} />
                    ))}
                </tbody>
            </table>
        </div>

    </>
    )
}



