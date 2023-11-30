import { useEffect } from 'react';

import './App.css';

function App() {
  

  const resizeIframe = (iframe: HTMLIFrameElement) => {
    iframe.height = iframe.contentWindow?.document.body.scrollHeight + "px";
  }

  const createFrameFAB = () => {
    return(
      <iframe src="https://www.lifestylecalculator.com/screencop28" className="w-screen" onLoad={(e) => resizeIframe(e.target as HTMLIFrameElement)} ></iframe>
    );
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 180000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      {createFrameFAB()}
    </div>
  )
}

export default App;
