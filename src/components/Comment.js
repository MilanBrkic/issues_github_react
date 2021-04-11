import React from 'react'

export default function Comment(props) {
    return (
        <div  className='specific_issue_div'>
            <table className='comment'>
                <thead>
                    <tr>
                        <th className='InIssue'>By: <span className='username'>{props.comment.user}</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='InIssue'>
                            {props.comment.text}
                        </td>
                    </tr>
                </tbody>
            </table>
         </div>
    )
}
