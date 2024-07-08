import axios from "axios";

const categoriasAPI = axios.create({ baseURL: 'http://localhost:3000' });

async function getCategorias() {
    try {
        const response = await categoriasAPI.get('/categories');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        throw error;
    }
}

export {
    getCategorias
}
