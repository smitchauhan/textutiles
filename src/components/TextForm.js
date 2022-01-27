import React, { useState } from 'react';


export default function TextForm(props) {
    const uppercase = () => {
        let newText = text.toUpperCase()
        settext(newText)
    }

    const cleartext = () => {
        let newText = ''
        settext(newText)
    }
    const handleonchange = (event) => {
        settext(event.target.value)
    }
    const [text, settext] = useState("");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonchange} id="Mybox" rows="8" placeholder="Enter your text here"></textarea>
                </div>
                <button className="btn btn-dark mx-2" onClick={uppercase}> Convert to uppercase</button>
                <button className="btn btn-dark mx-2" onClick={cleartext}> Clear</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p> {text.split(" ").filter((element)=>{return element.length !==0}).length} Words And {text.length} Charecters</p>
                <p>{0.008 * text.split(" ").length} Minutes</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </>
    )
}