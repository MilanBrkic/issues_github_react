import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import OpenCloseIssueImg from './OpenCloseIssueImg';

export default function TableRow(props) {
    const [issue, setIssue] = useState(props.issue);

    

    return (
        <tr>
            <td key={issue._id}>
                <p className='title'>
                    <OpenCloseIssueImg closed={issue.closed}/>
                    <Link to={`/issue/${issue._id}`} className='titleLink'>{issue.title}</Link>
                </p>
                    
                <p className='user'>Opened by {issue.user}</p>
            </td>
        </tr>
    )
}