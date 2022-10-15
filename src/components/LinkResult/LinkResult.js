import React, { useState } from "react";
import { Icon } from "@iconify/react";
import './LinkResult.css';
import { Toaster } from "react-hot-toast";
import { copiedToClipboard } from "../functions/validator";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { animated, useSpring } from '@react-spring/web'

function LinkResult (props) {
    const [custom, setCustom] = useState(false);
    const [bgColor, setBgColor] = useState("fff");
    const [fgColor, setFgColor] = useState("000")
    const [size, setSize] = useState("140");
    const originalLink = props.originalLink;
    const shortLink = props.shortLink;
    const goqrAPI = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&bgcolor=${bgColor}&color=${fgColor}&data=${shortLink}.png`;

    const fade = useSpring({
        opacity: custom ? 1 : 0,
        y: custom ? 0 : -20,
      })

    function handleClick() {
            props.onClick();
    }

    function copyToClipboard() {
        // navigator.clipboard.writeText(shortLink);
        copiedToClipboard();
    }

    function updateBg(e) {
        let colorFull = e.target.value;
        let colorRegex = colorFull.replace(/^#/g, '');
        setBgColor(colorRegex)
    }

    function updateFg(e) {
        let colorFull = e.target.value;
        let colorRegex = colorFull.replace(/^#/g, '');
        console.log(colorRegex);
        setFgColor(colorRegex)
    }

    function changeCustom() {
        custom === false ? setCustom(true) : setCustom(false);
    }

    function updateSize(e) {
        setSize(e.target.value);
    }

    const customizer = (
        <animated.div style={fade} className="customize-qr">
            <h5>Background Hex Color</h5>
            <input type="text" className="custom-field" placeholder={bgColor} onChange={updateBg} />
            <h5>Foreground Hex Color</h5>
            <input type="text" className="custom-field" placeholder={fgColor} onChange={updateFg} />
        </animated.div>
    )

    return (
        <div className="center-content result-section">
            <h1>Your link is ready!</h1>
            <div className={`result ${custom ? 'open' : 'closed'}`}>
                <animated.div className="links-section">
                    <h5>Original link</h5>
                <input type="text" className="result-link" name="link" value={originalLink} disabled />
                    <h5>Shortened link</h5>
                        <div className="copy-container">
                            <input type="text" className="result-link" name="link" value={shortLink} disabled />
                            <CopyToClipboard text={shortLink}>
                            <Icon icon="akar-icons:copy" className="copy-icon" onClick={copyToClipboard}/>
                            </CopyToClipboard>
                        </div>
                </animated.div>
                <div className="qr-section">
                    <h5>Here's your QR</h5>
                    <img src={goqrAPI} />
                    <button className="customize" onClick={changeCustom}> <Icon icon="ci:settings-filled" className="settings-icon" /> {custom === false ? "Customize QR" : "Close settings"}</button>
                </div>
                {custom === true ? customizer : null}
            </div>

            <div className="download-section">
                <h5 className="size-text">Select QR size (px)</h5>
                <input type="number" min="10" className="custom-field" placeholder="Custom size" onChange={updateSize} />
                <a href={`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&bgcolor=${bgColor}&color=${fgColor}&data=${shortLink}`} target="_blank" download="shortQR.png" className="download-a"><button className="download"><Icon icon="bxs:cloud-download" className="download-icon" /> Download QR</button></a>
            </div>
            
            <input type="submit" id="generate-button" name="start-again" value="Got another link?" onClick={handleClick} />
            <Toaster position="top-center" />
        </div>
    )
}

export default LinkResult;