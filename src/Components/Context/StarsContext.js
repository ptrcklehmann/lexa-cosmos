import { createContext } from 'react';
import useFetch from '../../Api/useFetch'

export default function StarsContext() {
    const { loading, data } = useFetch('http://localhost:8000/stars')
    const Stars = createContext(data)
    console.log(Stars)
    return Stars
}
