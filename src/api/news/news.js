import { api } from "../api";

const getNews = async (params) => {
    try {
        const response = await api.get('/news', { params });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const createNews = async (payload) => {
    const response = await api.post('/news', payload);
    return response.data;
}

const updateNews = async (id, payload) => {
    const response = await api.patch(`/news/${id}`, payload);
    return response.data;
}

const deleteNews = async (id) => {
    const response = await api.delete(`/news/${id}`);
    return response.data;
}

export { getNews, createNews, updateNews, deleteNews }
