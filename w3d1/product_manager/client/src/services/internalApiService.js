import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000',
});

export const getAllProducts = async () => {
    const res = await http.get('/');
    return res.data;
};

export const getProductById = async (id) => {
    const res = await http.get(`/${id}`);
    return res.data;
};

export const createProduct = async (data) => {
    const res = await http.post('/', data);
    return res.data;
}

export const updateProductById = async (id, data) => {
    const res = await http.put(`/${id}/edit`, data);
    return res.data;
}

export const deleteProductById = async (id) => {
    const res = await http.delete(`/${id}/delete`);
    return res.data;
}
