import axios from 'axios';


const baseURL = "/api/units"
                            
const getAll = () => {
    return axios.get(baseURL)
        .then(response => response.data)
}

const create = (newItem) => {
    return axios.post(baseURL, newItem)
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

export default { getAll, create, deleteUnit }