import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000',
});

export const getAllPlayers = async () => {
    const res = await http.get('/players/list');
    return res.data;
};

export const getPlayerById = async (id) => {
    const res = await http.get(`/players/${id}`);
    return res.data;
};

export const createPlayer = async (data) => {
    const res = await http.post('/players/addplayer', data);
    return res.data;
}

export const updatePlayerById = async (id, data) => {
    const res = await http.put(`/players/${id}/edit`, data);
    return res.data;
}

export const deletePlayerById = async (id) => {
    const res = await http.delete(`/players/${id}/delete`);
    return res.data;
}
