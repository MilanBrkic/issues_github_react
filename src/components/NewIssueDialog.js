import { useState } from 'react';
import { useDialog } from 'react-st-modal';


export default function NewIssueDialog() {
    const dialog = useDialog();

    const [value, setValue] = useState({user:'', title:'', title:''});

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
            <input className='inputTextDialog'
                type="text"
                name='text'
                onChange={(e) => {
                    const v = value;
                    v.text = e.target.value
                    setValue(v);
                }}
            />
            <br/>
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

