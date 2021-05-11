import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:2121/',
})

export default instance