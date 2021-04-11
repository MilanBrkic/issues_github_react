import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import {  getAllIssues, getIssue } from '../api/APIGet';
import Comment from './Comment';
import OpenCloseIssueImg from './OpenCloseIssueImg';
import TableIssue from './TableIssue';

export default function Issue() {
    const [issue, setIssue] = useState();
    const [fetched,setFetched] = useState(false);
    const {id} = useParams();
    var row = 3;

    useEffect(()=>{
        getIssue(id).then((res)=>{
            setIssue(res);
            setFetched(true);
            
        })
        .catch((err)=>{console.log(err);})
    },[])

    function h3Comments(){
        if(issue.comment!=0) return (<h3>Comments:</h3>)
    }

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
            <TableIssue issue={issue}/>
            {h3Comments()}
            
            {issue.comment.map(comment=>{
                return <Comment comment={comment}/>
            })}
        </div>
    )
}
