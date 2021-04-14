import React from 'react'

export default function TableIssue(props) {

    function getImageUrl(url) {
        return 'http://localhost:3000/api/issues/uploads/' + url;
    }
    return (
        <div className='issues_div'>
            <table className='issues'>
                <thead>
                    <tr>
                        <th className='InIssue'>By: <span className='username'>{props.issue.user}</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='InIssue'>
                            {props.issue.text}<br/>
                            {props.issue.file.map(file => {
                                return (<img className='inIssueImage' src={getImageUrl(file)} alt={file}/>)
                            })}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
