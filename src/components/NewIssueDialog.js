import { useState } from 'react';
import { useDialog } from 'react-st-modal';


export default function NewIssueDialog() {
    const dialog = useDialog();

    const [value, setValue] = useState({user:'', title:'', text:'', file:[]});

    return (
        <div className='newIssueDialog'>
            <label htmlFor='user' className='labelDialog'>User:</label>
            <input className='inputTextDialog'
                type="text"
                name='user'
                onChange={(e) => {
                    const v = value;
                    v.user= e.target.value;
                    setValue(v);
                }}
            />
            <br />
            <label htmlFor='title'  className='labelDialog'>Title:</label>
            <input className='inputTextDialog'
                type="text"
                name='title'
                onChange={(e) => {
                    const v = value;
                    v.title = e.target.value
                    setValue(v);
                }}
            />
            <br />
            <label htmlFor='text'  className='labelDialog'>Text:</label>
            <textarea className='inputTextDialog textArea'
                type="text"
                name='text'
                onChange={(e) => {
                    const v = value;
                    v.text = e.target.value
                    setValue(v);
                }}
            />
            <br/>
            <input className='btn btnDialog fileupload' 
                type="file" 
                id="fileUpload" 
                multiple 
                onChange={(e)=>{
                    const v = value;
                    v.file = e.target.files;
                    setValue(v);
                }}
                />
            <button className='btn btnDialog'
                onClick={() => {
                    // Сlose the dialog and return the value
                    if(!value.user || !value.title || !value.text) alert('All fields must be filled');
                    else dialog.close(value);
                }}
            >
                Add
      </button>
        </div>
    );
}

