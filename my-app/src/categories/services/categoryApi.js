import axios from "axios";

const endpoint = "http://localhost:3030/categories/";

function getAll(){
    return axios.get(endpoint)
        .then(response => response.data);
}

function getById(id){
    return axios.get(`${endpoint}/${id}`).then(response => response.data);
}

function save(categoryData){
    if (categoryData.id === 0){
        return axios.post(endpoint, categoryData)
            .then(response => response.data);
    } else {
        return axios.put(`${endpoint}/${categoryData.id}`, categoryData)
            .then(response => response.data);
    }
}

function remove(categoryData){
    return axios
      .delete(`${endpoint}/${categoryData.id}`)
      .then(response => response.data);
}


export default {
    getAll,
    getById,
    save, 
    remove
};
