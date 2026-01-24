import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ShortURLComponent from './components/ShortURLComponent';
import TooManyRequests from './components/TooManyRequests';

function App ()
{
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState();

  useEffect((() => {
    axios.get('https://url-shortner-backend.yashvs34.me');
  }), []);

  return (
    <div className='body'>
      <div className='title'>
        URL Shrink
      </div>

      <div className='detail-container'>
        <input type="text" className='input-area' placeholder='Paste the URL here' onChange={(event) => {
          setUrl(event.target.value);
        }}/>

        <div className='button' onClick={async () => {
          try
          {
            const response1 = await axios.post('https://url-shortner-backend.yashvs34.me/shorten', { url : url });
            setResponse(response1);
          }
          catch (error)
          {
            setResponse(error.response);
          }

        }}>
          Shorten URL
        </div>
      </div>
      
        <div>
          {response ? ((response.status === 429) ? <TooManyRequests/> : <ShortURLComponent shortUrl={response.data.shortUrl} message={response.data.message} />) : <></>}
        </div>
    </div>
  )
}

export default App
