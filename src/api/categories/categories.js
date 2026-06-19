import { api } from "../api";

const getCategories = async () => {
    try {
        const response = await api.get('/categories');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getCategoryById = async (id) => {
    try {
        const response = await api.get(`/news_by_categ/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const createCategory = async (payload) => {
    const response = await api.post('/categories', payload);
    return response.data;
}

const updateCategory = async (id, payload) => {
    const response = await api.patch(`/categories/${id}`, payload);
    return response.data;
}

const deleteCategory = async (id) => {
    const response = await api.delete(`/categories/${id}`);
    return response.data;
}

export { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory };
