import  { useState, useEffect } from "react";
import { Button, Modal, Form, Row, Col, Dropdown } from 'react-bootstrap';
import Menu from "../../components/menu/menu";
import Conteudo from "../../components/conteudo/conteudo";
import Cabecalho from "../../components/cabecalho/cabecalho";
import EditarIcone from "../../assets/icones/editar.png";
import ExcluirIcone from "../../assets/icones/excluir.png";
import TresPontosIcone from "../../assets/icones/tres-pontos.png";
import { getPedidos, createPedido, updatePedido, getItensPedido } from "../../services/pedidoService";
import './pedidos.css';

export default function Pedidos() {
  const [showModal, setShowModal] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);
  const [novoPedido, setNovoPedido] = useState({
    cliente: '',
    client_email: '',
    status: '',
    total_amount: 0,
    order_date: '',
    delivery_date: ''
  });
  const [itensPedido, setItensPedido] = useState([{ product_id: '', product: '', quantity: 1 }]);

  useEffect(() => {
    async function fetchPedidos() {
      try {
        const response = await getPedidos();
        setPedidos(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        // setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPedidos();
  }, []);

  useEffect(() => {
    async function fetchItensPedido(idPedido) {
      if (!idPedido) return;
      try {
        const response = await getItensPedido(idPedido);
        setItensPedido(response.data);
      } catch (error) {
        console.error('Erro ao buscar itens do pedido:', error);
      }
    }

    if (pedidoSelecionado) {
      fetchItensPedido(pedidoSelecionado.id);
    } else {
      setItensPedido([]);
    }
  }, [pedidoSelecionado]);

  const handleCloseModal = () => {
    setShowModal(false);
    setPedidoSelecionado(null);
    setNovoPedido({
      cliente: '',
      client_email: '',
      status: '',
      total_amount: 0,
      order_date: '',
      delivery_date: ''
    });
    setItensPedido([{ product_id: '', product: '', quantity: 1 }]);
  };

  const handleSalvar = async () => {
    const camposObrigatorios = ['cliente', 'client_email', 'status', 'delivery_date'];
    const camposValidos = camposObrigatorios.every(campo => novoPedido[campo]);

    if (!camposValidos) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const itensValidos = itensPedido.every(item => item.product_id && item.quantity);

    if (!itensValidos) {
      alert('Por favor, preencha todos os campos de produtos.');
      return;
    }

    setShowModal(false);
    setPedidoSelecionado(null);
    try {
      if (pedidoSelecionado) {
        await updatePedido(pedidoSelecionado.id, novoPedido, itensPedido);
      } else {
        await createPedido(novoPedido, itensPedido);
      }

      const updatedPedidos = await getPedidos();
      setPedidos(Array.isArray(updatedPedidos.data) ? updatedPedidos.data : []);
    } catch (error) {
      console.error('Erro ao salvar o pedido:', error);
    } finally {
      handleCloseModal();
    }
  };

  const handleEditar = (pedido) => {
    setPedidoSelecionado(pedido);
    setNovoPedido({
      cliente: pedido.client,
      client_email: pedido.client_email,
      status: pedido.status,
      total_amount: pedido.total_amount,
      order_date: pedido.order_date,
      delivery_date: pedido.delivery_date
    });
    setShowModal(true);
  };

  const handleAdicionar = () => {
    setShowModal(true);
    setPedidoSelecionado(null);
  };

  const handleAddItem = () => {
    setItensPedido([...itensPedido, { product_id: '', product: '', quantity: 1 }]);
  };

  const handleRemoveItem = (index) => {
    const newItens = [...itensPedido];
    newItens.splice(index, 1);
    setItensPedido(newItens);
  };

  const handleItemChange = (index, field, value) => {
    const newItens = [...itensPedido];
    newItens[index][field] = value;
    setItensPedido(newItens);
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Menu />
      <Conteudo>
        <Cabecalho titulo="Pedidos" />
        <div className="conteudo-principal">
          <div className="tabela">
            <div className="header">
              <h2>Pedidos Recentes</h2>
              <button type="button" className="btn btn-primary" onClick={handleAdicionar}>
                Adicionar pedido
              </button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID Pedido</th>
                  <th scope="col">Data do Pedido</th>
                  <th scope="col">Cliente</th>
                  <th scope="col">Email do Cliente</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>

              <tbody>
                {pedidos.length === 0 ? (
                  <tr>
                  <td className="text-center" colSpan="8">Nenhum registro encontrado.</td>
                </tr>
                )
                  : (
                    pedidos.map((pedido) => (
                      <tr key={pedido.id}>
                        <th scope="row">{pedido.id}</th>
                        <td>{new Date(pedido.order_date).toLocaleDateString()}</td>
                        <td>{pedido.client}</td>
                        <td>{pedido.client_email}</td>
                        <td>
                          <div className={`status ${pedido.status === "pending" ? "pendente" : pedido.status === "shipped" ? "enviado" : "nao-enviado"}`}>
                            {pedido.status === "pending" ? "Pendente" : pedido.status === "shipped" ? "Enviado" : "Cancelado"}
                          </div>
                        </td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle as="button" className="btn no-caret">
                              <img src={TresPontosIcone} width="18" height="20" alt="Opções" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => handleEditar(pedido)}>
                                <img src={EditarIcone} alt="Editar" /> Editar
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => console.log("Excluir pedido", pedido.id)}>
                                <img src={ExcluirIcone} alt="Excluir" /> Excluir
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    ))
                  )}

              </tbody>

            </table>
          </div>
        </div>
      </Conteudo>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{pedidoSelecionado ? "Editar Pedido" : "Adicionar Pedido"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Cliente</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do cliente"
                value={novoPedido.cliente}
                onChange={(e) => setNovoPedido({ ...novoPedido, cliente: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email do Cliente</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email do cliente"
                value={novoPedido.client_email}
                onChange={(e) => setNovoPedido({ ...novoPedido, client_email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={novoPedido.status}
                onChange={(e) => setNovoPedido({ ...novoPedido, status: e.target.value })}
              >
                <option value="">Selecione um status</option>
                <option value="pending">Pendente</option>
                <option value="shipped">Enviado</option>
                <option value="cancelled">Cancelado</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Data de Entrega</Form.Label>
              <Form.Control
                type="date"
                value={novoPedido.delivery_date}
                onChange={(e) => setNovoPedido({ ...novoPedido, delivery_date: e.target.value })}
              />
            </Form.Group>
            <hr />
            <h5>Itens do Pedido</h5>
            {itensPedido.map((item, index) => (
              <Row key={index} className="mb-3">
                <Col>
                  <Form.Group>
                    <Form.Label>Produto</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ID do produto"
                      value={item.product_id}
                      onChange={(e) => handleItemChange(index, 'product_id', e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Quantidade"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col xs="auto" className="d-flex align-items-end">
                  <Button variant="danger" onClick={() => handleRemoveItem(index)}>Remover</Button>
                </Col>
              </Row>
            ))}
            <Button variant="primary" onClick={handleAddItem}>Adicionar Item</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancelar</Button>
          <Button variant="primary" onClick={handleSalvar}>Salvar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
