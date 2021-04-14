import React from 'react'
import { CustomDialog } from 'react-st-modal';
import NewIssueDialog from './NewIssueDialog.js'
import { useState } from 'react';

export default function NewIssueBtn(props) {
    return (
            <button className='addBtn'  onClick={async () => {
          const result = await CustomDialog(
            <NewIssueDialog />,
            {
              title: 'Add New Issue',
              showCloseIcon: true,
            }
          );
          if(result) props.handleOnClick(result);
        }}>New issue</button>
    )
}
