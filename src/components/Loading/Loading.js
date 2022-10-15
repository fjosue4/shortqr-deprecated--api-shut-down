import React, { useEffect, useState } from "react";
import './Loading.css';
import { TailSpin } from 'react-loader-spinner';

const urlOAPI = "https://api.urlo.in/api/short-url";

function Loading (props) {
    const [shortLink, setShortLink] = useState("");
    const originalLink = props.originalLink;

    useEffect(() => {
        (async () => {
        const shortener = await fetch(urlOAPI, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({originalUrl: originalLink})
        });
        const content = await shortener.json();
        setShortLink(content.data.shortUrl);
      })();
  }, [])

  useEffect(()=> {
    props.onChange(shortLink);
  },[shortLink])

    console.log('original ' + originalLink);
    return (
        <div className="center-content processing">
            <h1>We're processing your link...</h1>
            <input type="text" id="link-input-locked" name="link" value={originalLink} disabled />
            <h3>Estimate: 10-15 seconds.</h3>
            <div className="spinner">
                <TailSpin
                    padding="200"
                    height="80"
                    width="80"
                    color="#262840"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            </div>
        </div>
    )
}

export default Loading;