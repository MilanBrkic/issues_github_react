import React from 'react'

export default function OpenCloseIssueImg(props) {
    return (
        <>
        {console.log(props.closed)}
        <img src={props.closed? '/closed.png': '/open.png'} className='image' alt={props.closed? 'closed':'open'}></img> 
        </>
    )
}
