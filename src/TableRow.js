import React, { useState } from 'react'

export default function TableRow(props) {
    const [issue, setIssue] = useState(props.issue);

    return (
        <tr>
            <td key={issue._id}>
                <p className='title'>{issue.title}</p>
                <p className='user'>Opened by {issue.user}</p>
            </td>
        </tr>
    )
}