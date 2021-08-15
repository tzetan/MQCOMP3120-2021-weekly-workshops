import axios from 'axios';


const baseURL = "http://localhost:3001/units"

const getAll = () => {
    return axios.get(baseURL)
        .then(response => response.data)
}

const create = (newItem) => {
    return axios.post(baseURL, newItem)
        .then(response => response.data)
}

export default {getAll, create}