import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import ShortURLComponent from './components/ShortURLComponent'
import TooManyRequests from './components/TooManyRequests'

function App() {
  const [url, setUrl] = useState("")
  const [response, setResponse] = useState(null)

  // Just to wake up backend (Render sleep issue)
  useEffect(() => {
    axios.get('https://url-shortner-ar5p.onrender.com')
      .then(() => console.log("Backend reachable"))
      .catch(() => console.log("Backend not reachable"))
  }, [])

  const handleShorten = async () => {
    console.log("Button clicked, URL:", url)

    if (!url) {
      alert("Please enter a URL")
      return
    }

    try {
      const res = await axios.post(
        'https://url-shortner-ar5p.onrender.com/shorten',
        { originalUrl: url }
      )

      console.log("Backend response:", res.data)

      setResponse({
        status: res.status,
        data: {
          shortUrl: res.data.shortUrl,
          message: "Short URL generated successfully"
        }
      })

    } catch (err) {
      console.error("API error:", err)

      setResponse({
        status: err.response?.status || 500,
        data: {
          message: "Something went wrong"
        }
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
          onChange={(e) => setUrl(e.target.value)}
        />

        {/* ONLY CHANGE THAT FIXES EVERYTHING */}
        <button
          type="button"
          className='button'
          onClick={handleShorten}
        >
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
