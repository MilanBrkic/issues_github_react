import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import OpenCloseIssueImg from './OpenCloseIssueImg';
import DeleteBtn from './DeleteBtn'

export default function TableRow(props) {
    const [issue, setIssue] = useState(props.issue);
    


    return (
        
        <tr>
            <td key={issue._id}>
                <span className='title-row'>
                    <p className='title'>
                        <OpenCloseIssueImg closed={issue.closed} />
                        <Link to={`/issue/${issue._id}`} className='titleLink'>{issue.title}</Link>
                    </p>
                    <DeleteBtn id={issue._id} onDelete={props.onDelete}/>
                </span>

                
                <p className='user'>Opened by {issue.user}</p>
            </td>
        </tr>
    )
}