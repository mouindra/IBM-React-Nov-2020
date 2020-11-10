import axios from "axios";

const endpoint = "http://localhost:3030/cartItems/";

function getAll(){
    return axios.get(endpoint)
        .then(response => response.data);
}

function getById(id){
    return axios.get(`${endpoint}/${id}`).then(response => response.data);
}

function save(cartData){
    if (cartData.id === 0){
        return axios.post(endpoint, cartData)
            .then(response => response.data);
    } else {
        return axios.put(`${endpoint}/${cartData.id}`, cartData)
            .then(response => response.data);
    }
}

function remove(cartData){
    return axios
      .delete(`${endpoint}/${cartData.id}`)
      .then(response => response.data);
}

export default {
    getAll,
    getById,
    save,
    remove
};
