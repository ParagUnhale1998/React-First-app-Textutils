import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        // alert('uppercase was clicked')
        let UpperCaseText = text.toUpperCase();
        setText(UpperCaseText)
        props.showAlert("Text Converted To UpperCase","success")
    }
    const handleOnChange = (event) => {
        // alert('OnChange was active')
        setText(event.target.value)
    }
    const handleLowerCaseClick = () => {
        let lowerCaseText = text.toLowerCase();
        setText(lowerCaseText)
        props.showAlert("Text Converted To LowerCase","success")
    }
    const handleClearText = () => {
        // alert('OnChange was active')
        setText("")
    }
    const handleCopyText = () => {
        var textarea = document.getElementById("myBox");
        textarea.select();
        navigator.clipboard.writeText(textarea.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Text Has Been Copied","success")
    }
    const [text, setText] = useState('')
    // text = 'new Text'; // wrong way to change the state text
    // setText('new Text'); // correct way to change the state text

    return (
        <>

            <h1 className='text-center mb-3 mt-1'>{props.heading}</h1>
            <div className="mb-4">
                <textarea className="form-control shadow" onChange={handleOnChange} value={text} id="myBox" rows="8" placeholder='Write Text'></textarea>
            </div>
            <div className=" btn-container container text-center">
                <button className="btn btn-primary mx-1 my-1 shadow" onClick={handleUpperCaseClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-1 my-1 shadow" onClick={handleLowerCaseClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-1 my-1 shadow" onClick={handleClearText}>Clear All Text</button>
                <button className="btn btn-primary shadow" onClick={handleCopyText}>Copy Text</button>
            </div>

            <div className="container text-center shadow rounded p-1 mt-4">
                <h2 className=''>Your Text Summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
            </div>
            <div className="container text-center shadow rounded p-1 mt-4">
                <h3>Preview Text</h3>
                <p>{text}</p>
            </div>


        </>
    )
}
