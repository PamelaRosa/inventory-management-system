import axios from "axios";

const itemPedidoAPI = axios.create({ baseURL: 'http://localhost:3000' });

async function getItensPedido(id) {
    try {
        const response = await itemPedidoAPI.get(`/itemOrder/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar itens do pedido:', error);
        throw error;
    }
}

export {
    getItensPedido
}
