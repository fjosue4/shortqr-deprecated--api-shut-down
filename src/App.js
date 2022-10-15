import { useEffect, useState } from 'react';
import './App.css';
import './responsive.css';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import LinkResult from './components/LinkResult/LinkResult';
import Loading from './components/Loading/Loading';
import NavBar from './components/NavBar/NavBar';
import { Toaster } from 'react-hot-toast';
import { notifyTimeout } from "./components/functions/validator";

function App() {
  const [state, setState] = useState(1);
  const [link, setLink] = useState("");
  const [shortLink, setShortLink] = useState("");

  function updateState() {
    state === 1 ? setState(2) : setState(1);
    setShortLink("");
  }

  function updateLink(value) {
    setLink(value);
  }

  useEffect(() => {
    if(state === 2) {
    const timeout = setTimeout(function() {
      notifyTimeout();
    }, 15000);
    return () => clearTimeout(timeout)}
  }, [state])

  useEffect(() => {
    if(state === 2) {
    const timeout = setTimeout(function() {
      setState(3);
    }, 2000);
    return () => clearTimeout(timeout)}
  }, [shortLink])

  function updateShortLink(value){
    setShortLink(value);
  }

  return (
    <div className="App">
      <NavBar />
      { state === 1 && <GetStarted onClick={updateState} onChange={updateLink} />}
      { state === 2 && <Loading originalLink={link} onChange={updateShortLink} />}
      <Toaster position="top-center" />
      { state === 3 && <LinkResult originalLink={link} shortLink={shortLink} onClick={updateState} />}
      <Footer state={state} />
    </div>
  );
}


export default App;
