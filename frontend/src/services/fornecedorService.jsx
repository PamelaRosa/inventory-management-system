import axios from "axios";

const fornecedoresAPI = axios.create({ baseURL: 'http://localhost:3000' });

async function getFornecedores(userId) {
    try {
        const response = await fornecedoresAPI.get(`/users/${userId}/suppliers`);
        return response.data.data; // Retornando apenas o array de fornecedores
    } catch (error) {
        if (error.response && error.response.status === 404) {
            // Retorna um array vazio se a resposta for "not found"
            return [];
        } else {
            throw error;
        }
    }
}

async function adicionarFornecedor(userId, novoFornecedor) {
    try {
        const response = await fornecedoresAPI.post(`/users/${userId}/suppliers`, novoFornecedor);
        return response.data; // Retornando o fornecedor adicionado
    } catch (error) {
        console.error('Erro ao adicionar fornecedor:', error);
        throw error;
    }
}

async function atualizarFornecedor(userId, fornecedorId, dadosFornecedor) {
    try {
        const response = await fornecedoresAPI.put(`/users/${userId}/suppliers/${fornecedorId}`, dadosFornecedor);
        return response.data; // Retornando o fornecedor atualizado
    } catch (error) {
        console.error('Erro ao atualizar fornecedor:', error);
        throw error;
    }
}

async function excluirFornecedor(userId, fornecedorId) {
    try {
        await fornecedoresAPI.delete(`/users/${userId}/suppliers/${fornecedorId}`);
    } catch (error) {
        console.error('Erro ao excluir fornecedor:', error);
        throw error;
    }
}

export {
    getFornecedores,
    adicionarFornecedor,
    atualizarFornecedor,
    excluirFornecedor
};
