import Cookies from 'js-cookie';
import './App.css';

function App() {
  Cookies.remove('sessionToken');
  const resizeIframe = (iframe: HTMLIFrameElement) => {
    iframe.height = iframe.contentWindow?.document.body.scrollHeight + "px";
  }
  const createFrameFAB = () => {
    return(
      <iframe src="https://www.lifestylecalculator.com/doconomy" className="w-screen" onLoad={(e) => resizeIframe(e.target as HTMLIFrameElement)} ></iframe>
    );
  }
  return (
    <div className="container">
      {createFrameFAB()}
    </div>
  )
}

export default App;
