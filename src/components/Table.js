import TableRow from './TableRow'
import React, { useState , useEffect} from 'react'
import NewIssueBtn from './NewIssueBtn'
import {postIssue} from '../api/APIPost'

export default function Table(props) {
    const [rows, setRows] = useState(() => props.rows);

    function addIssue(issue){
        issue.file = [];
        postIssue(issue)
            .then(res=>{
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    

    return (
        <>
        <NewIssueBtn handleOnClick={addIssue}/>

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



