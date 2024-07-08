import axios from "axios";

const produtosAPI = axios.create({ baseURL: 'http://localhost:3000' });

async function getProdutos() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
        throw new Error('Usuário não está logado.');
    }
    try {
        const response = await produtosAPI.get(`/users/${user.id}/products`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return [];
        } else {
            throw error;
        }
    }
}

async function addProduto(produto) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
        throw new Error('Usuário não está logado.');
    }
    try {
        produto.user_id = user.id;
        const response = await produtosAPI.post(`/users/${user.id}/products`, produto);
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function updateProduto(produto) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
        throw new Error('Usuário não está logado.');
    }
    try {
        produto.user_id = user.id;
        const response = await produtosAPI.put(`/users/${user.id}/products/${produto.id}`, produto);
        return response.data;
    } catch (error) {
        throw error;
    }
}

async function deleteProduto(produtoId) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
        throw new Error('Usuário não está logado.');
    }
    try {
        const response = await produtosAPI.delete(`/users/${user.id}/products/${produtoId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export {
    getProdutos,
    addProduto,
    updateProduto,
    deleteProduto
};
