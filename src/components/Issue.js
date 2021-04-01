import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import {  getIssue } from '../api/APIGet';
import OpenCloseIssueImg from './OpenCloseIssueImg';

export default function Issue() {
    const [issue, setIssue] = useState();
    const [fetched,setFetched] = useState(false);
    const {id} = useParams();

    useEffect(()=>{
        getIssue(id).then((res)=>{
            setIssue(res);
            setFetched(true);
            
        })
        .catch((err)=>{console.log(err);})
    },[])

    if(!fetched){
        return(
            <div>
                Loading...
            </div>
        )
    }
    return (
        <div className='issue'>
            <h1>{issue.title} <OpenCloseIssueImg closed={issue.closed}/></h1>
            <p>{issue.text}</p>
            <p>{issue.user}</p>
        </div>
    )
}
