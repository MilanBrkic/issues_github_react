import React, { useState } from 'react'
import {Link} from 'react-router-dom';

export default function TableRow(props) {
    const [issue, setIssue] = useState(props.issue);

    return (
        <tr>
            <td key={issue._id}>
                <p className='title'><Link to={`/issue/${issue._id}`} className='titleLink'>{issue.title}</Link></p>
                <p className='user'>Opened by {issue.user}</p>
            </td>
        </tr>
    )
}