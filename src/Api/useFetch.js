import axios from 'axios'
import { useState, useEffect } from 'react'

// custom hook for performing GET request
const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true)
        const response = await axios.get(url)
        if (response.status === 200 || response.status === 304) {
          setData(response.data)
        }
      } catch (err) {
        console.log('error', err)
        throw err
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { loading, data }
}

export default useFetch
