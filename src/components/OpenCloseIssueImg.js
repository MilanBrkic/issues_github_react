import React from 'react'

export default function OpenCloseIssueImg(props) {
    return (
        <img src={props.closed? '/closed.png': '/open.png'} className='image' alt={props.closed? 'closed':'open'}></img> 
    )
}
