import React, { useState } from "react";
import './GetStarted.css';
import { Toaster } from 'react-hot-toast';
import { linkValidator } from "../functions/validator";
import { notify } from "../functions/validator";

function GetStarted(props) {
    const [value, setValue] = useState('');
    
    function handleClick() {
        let validate = linkValidator(value);
        if (validate === true){
            props.onClick();
            props.onChange(value);
        } 
        else {
                notify();
            }
    }

    function updateLink(event) {
        let newLink = event.target.value;
        setValue(newLink);
    }    

    return (
        <div className="center-content">
            <h1>Let's get started</h1>
            <h4>What's the link you want to shorten?</h4>
            <input type="text" id="link-input" name="link" placeholder="https://yourlink.domain" onChange={updateLink} />
            <input type="submit" id="generate-button" name="generate" value="Generate" onClick={handleClick} />
            <Toaster position="top-center" />
        </div>
    )
}

export default GetStarted;