import axios from 'axios';


const baseURL = "/api/units"
                            
const getAll = () => {
    return axios.get(baseURL)
        .then(response => response.data)
}

const create = (newItem, user) => {
    
    if (!user) {
        return new Promise((res) => res(null))
    }

    const config = {headers: {Authorization: "Bearer " + user.token}}
    
    return axios.post(baseURL, newItem, config)
        .then(response => response.data)
}

const deleteUnit = (unit) => {
    return axios.delete(baseURL + "/" + unit.id, unit)
        .then(response => response.data)
}

// const update = (unit) => {
//     return axios.put(baseURL + "/" + unit.id, unit)
//         .then (response => response.data)
// }

const login = ({username, password}) => {
    return axios.post('/api/login', {username, password})
        .then(response => response.data)
}

export default { getAll, create, deleteUnit, login }