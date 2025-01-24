/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react"

export default function TextForm(props) {
    const handleUpClick =  () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase" , "success");
    }

    const handleloClick =  () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase" , "success");

    }

    const handleclear =  () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text has been cleared" , "success");

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');

  return (
    <>
    <div style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1> {props.heading}</h1>
        <div className="mb-3"  >
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white'  , color: props.mode ==='dark' ? 'white' : '#042743'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length===0 } type="submit" className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
        <button  disabled={text.length===0 } type="submit" className="btn btn-primary mx-2" onClick={handleloClick} >Convert to LowerCase</button>
        <button disabled={text.length===0 } type="submit" className="btn btn-primary mx-2" onClick={handleclear} >Clear text</button>

    </div>

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}> 
        <h2>YOUR TEXT SUMMERY </h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length } minutes read</p>
        <h2>Priveiw</h2>
        <p>{text.length>0 ? text: 'enter something in the textbox'}</p>

    </div>

    </>
  );
};

