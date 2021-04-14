import TableRow from './TableRow'
import React, { useState, useEffect } from 'react'
import NewIssueBtn from './NewIssueBtn'
import { postIssue } from '../api/APIPost'
import { getAllIssues } from '../api/APIGet';


export default function Table(props) {
    const [rows, setRows] = useState([]);
    const [fetched, setFetched] = useState(() => false);

    useEffect(() => {
        getAllIssues()
            .then(res => {
                setRows(res);
                setFetched(true);
            })
            .catch((err) => console.log(err))
    }, [])

    function addIssue(issue) {
        issue.file = [];
        postIssue(issue)
            .then(res => {
                console.log(res)
                const r = rows.slice();
                r.push(res)
                setRows(r);
            })
            .catch(err => console.log(err))
    }

    if (!fetched) {
        return (
            <div>
                Loading...
            </div>
        )
    }
    else {
        return (
            <>
                <NewIssueBtn handleOnClick={addIssue} />
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
}



