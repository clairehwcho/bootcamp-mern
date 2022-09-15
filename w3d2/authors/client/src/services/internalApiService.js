import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000',
});

export const getAllAuthors = async () => {
    const res = await http.get('/');
    return res.data;
};

export const getAuthorById = async (id) => {
    const res = await http.get(`/${id}`);
    return res.data;
};

export const createAuthor = async (data) => {
    const res = await http.post('/new', data);
    return res.data;
}

export const updateAuthorById = async (id, data) => {
    const res = await http.put(`/edit/${id}`, data);
    return res.data;
}

export const deleteAuthorById = async (id) => {
    const res = await http.delete(`/delete/${id}`);
    return res.data;
}
