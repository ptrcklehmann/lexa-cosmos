import axios from 'axios'
import { useState, useEffect } from "react";

// custom hook for performing GET request
const useFetch = (url, initialValue) => {
    const [data, setData] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async function () {
            try {
                setLoading(true);
                const response = await axios.get(url);
                if (response.status === 200  || response.status === 304) {
                    console.log(response.data)
                    setData(response.data);
                }
            } catch (error) {
                throw error;
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);
    console.log(data)
    return { loading, data }  ;
};

export default useFetch;