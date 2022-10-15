import React from "react";
import './Footer.css';
import urlO from '../../img/rbl.svg';
import goqrme from '../../img/gqr.svg'

function Footer (props) {
    const state = props.state;

    const poweredBy = (<div className="powered">
    <h4>Powered by:</h4>
    <a href="https://urlo.in/" target="_blank"><img src={urlO} /></a>
    <div className="divider"></div>
    <a href="https://goqr.me/api/" target="_blank"><img src={goqrme} /></a>
    </div>)

    return (
        <div className="footer">
            {state === 3 && poweredBy}
            <div className="credits">
                <h4>Designed and developed by <a href="https://fjosue4.github.io/portfolio" target="_blank">Franklin Méndez</a>.</h4>
            </div>
        </div>
    )
}

export default Footer;