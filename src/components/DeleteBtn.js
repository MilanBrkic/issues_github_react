import React from 'react'
import { Confirm } from 'react-st-modal';
import {deleteOne} from '../api/APIDelete';

export default function DeleteBtn(props) {
    return (
        <acronym title='Delete issue' 
        className='acron'>
            <button className='btn btn-delete'
                onClick={async()=>{
                    const result = await Confirm('','Are you sure you want to delete the issue?');

                    if(result){
                        deleteOne(props.id);
                        props.onDelete(props.id);
                    }
                    
                }}>
                X
            </button>
        </acronym>
    )
}
