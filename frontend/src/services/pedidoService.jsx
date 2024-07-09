import axios from "axios";

const baseURL = axios.create({ baseURL: 'http://localhost:3000' });

async function getPedidos() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
        throw new Error('Usuário não está logado.');
    }
    try {
        const response = await baseURL.get(`/users/${user.id}/orders`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            // Retorna um array vazio se a resposta for "not found"
            return [];
        } else {
            throw error;
        }
    }
}

async function getItensPedido(id) {
    try {
        const response = await baseURL.get(`/itemOrder/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar itens do pedido:', error);
        throw error;
    }
}

async function createPedido(pedido) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
        throw new Error('Usuário não está logado.');
    }
    try {
        const response = await baseURL.post(`/users/${user.id}/orders`, {
            user_id: user.id,
            cnpj: pedido.cnpj,
            client: pedido.cliente,
            client_email: pedido.client_email,
            delivery_date: pedido.delivery_date,
            status: pedido.status,
            items: pedido.items.map(item => ({
                product_id: item.product_id,
                quantity: item.quantity
            }))
        });

        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            // Retorna um array vazio se a resposta for "not found"
            return [];
        }
        console.error('Erro ao criar pedido:', error);
        throw error;
    }
}

async function updatePedido(pedidoId, pedido) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
        throw new Error('Usuário não está logado.');
    }
    try {
        const response = await baseURL.put(`/users/${user.id}/orders/${pedidoId}`, {
            user_id: user.id,
            cnpj: pedido.cnpj,
            client: pedido.cliente,
            client_email: pedido.client_email,
            delivery_date: pedido.delivery_date,
            status: pedido.status,
            items: pedido.items.map(item => ({
                product_id: item.product_id,
                quantity: item.quantity
            }))
        });

        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar pedido:', error);
        throw error;
    }
}

export {
    getPedidos,
    getItensPedido,
    createPedido,
    updatePedido
}
