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
        postIssue(issue)
            .then(res => {
                const r = rows.slice();
                r.push(res)
                setRows(r);
            })
            .catch(err => console.log(err))
    }
    
    function onDelete(id){
        const r = rows.slice();
        for(var i = 0;i<r.length;i++){
            if(r[i]._id===id){
                console.log(r[i]);
                const res = r.splice(i,1);
                console.log(res);
                break;
            }
        }
        console.log(r);
        setRows(r);
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
                                <TableRow issue={r} onDelete={onDelete}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}



