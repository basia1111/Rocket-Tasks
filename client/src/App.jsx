import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('')

  const fetchMessage = async () => {
    try{
      const response = await axios.get('http://localhost:3000/api')
      setMessage(m => response.data.message)
    } catch(err) {
      setMessage(m => 'error')
    }
  }

  useEffect(() => {
    fetchMessage()
  }, [])

  return (
    <h1>{message}</h1>
  )
}

export default App
