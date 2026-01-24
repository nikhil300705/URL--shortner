import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ShortURLComponent from './components/ShortURLComponent'
import TooManyRequests from './components/TooManyRequests'

function App() {
  const [url, setUrl] = useState("")
  const [response, setResponse] = useState(null)

  useEffect(() => {
    axios.get('https://url-shortner-ar5p.onrender.com')
      .then(() => console.log("Backend reachable"))
      .catch(err => console.error("Backend not reachable", err))
  }, [])

  const handleShorten = async () => {
    console.log("CLICKED. URL =", url)

    if (!url.trim()) {
      alert("Please enter a URL")
      return
    }

    try {
      const res = await axios.post(
        'https://url-shortner-ar5p.onrender.com/shorten',
        { originalUrl: url }
      )

      console.log("RESPONSE:", res.data)

      setResponse({
        status: res.status,
        data: {
          shortUrl: res.data.shortUrl,
          message: "Short URL generated successfully"
        }
      })
    } catch (err) {
      console.error("ERROR:", err)
      setResponse({
        status: err.response?.status || 500,
        data: { message: "Something went wrong" }
      })
    }
  }

  return (
    <div className='body'>
      <div className='title'>URL Shrink</div>

      <div className='detail-container'>
        <input
          type="text"
          className='input-area'
          placeholder='Paste the URL here'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        {/* 🔥 REAL BUTTON — SAME CSS */}
        <button className='button' onClick={handleShorten}>
          Shorten URL
        </button>
      </div>

      <div>
        {response && (
          response.status === 429
            ? <TooManyRequests />
            : <ShortURLComponent
                shortUrl={response.data.shortUrl}
                message={response.data.message}
              />
        )}
      </div>
    </div>
  )
}

export default App
