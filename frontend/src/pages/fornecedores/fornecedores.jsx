import { useState, useEffect } from "react";
import { format, isValid } from 'date-fns';
import Menu from "../../components/menu/menu";
import Conteudo from "../../components/conteudo/conteudo";
import Cabecalho from "../../components/cabecalho/cabecalho";
import EditarIcone from "../../assets/icones/editar.png";
import ExcluirIcone from "../../assets/icones/excluir.png";
import TresPontosIcone from "../../assets/icones/tres-pontos.png";
import { Button, Modal, Form, Row, Col, Dropdown } from 'react-bootstrap';
import { getFornecedores, adicionarFornecedor, atualizarFornecedor, excluirFornecedor } from "../../services/fornecedorService";
import './fornecedores.css';

export default function Fornecedores() {
  const [showModal, setShowModal] = useState(false);
  const [fornecedores, setFornecedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [novoFornecedor, setNovoFornecedor] = useState({
    cnpj: '',
    company: '',
    email: '',
    contact: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postal_code: '',
    status: true,
    user_id: '',
    createdAt: '',
    updatedAt: ''
  });
  const [fornecedorSelecionado, setFornecedorSelecionado] = useState(null);

  useEffect(() => {
    async function fetchFornecedores() {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const fornecedoresData = await getFornecedores(user.id);
        setFornecedores(fornecedoresData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchFornecedores();
  }, []);

  const renderFornecedores = () => {
    if (loading) {
      return <tr><td colSpan="6">Carregando fornecedores...</td></tr>;
    }

    if (error) {
      return <tr><td colSpan="6">Erro ao carregar fornecedores.</td></tr>;
    }

    if (fornecedores.length === 0) {
      return <tr><td colSpan="6">Nenhum fornecedor encontrado.</td></tr>;
    }

    return fornecedores.map((fornecedor) => (
      <tr key={fornecedor.id}>
        <td>{fornecedor.company}</td>
        <td>{fornecedor.email}</td>
        <td>{fornecedor.contact}</td>
        <td>{isValid(new Date(fornecedor.updatedAt)) ? format(new Date(fornecedor.updatedAt), 'dd/MM/yyyy HH:mm:ss') : 'Data Inválida'}</td>
        <td>
          <div className={`status ${fornecedor.status ? 'estoque' : 'fora-estoque'}`}>
            {fornecedor.status ? 'Em estoque' : 'Fora de estoque'}
          </div>
        </td>
        <td>
          <Dropdown drop="start">
            <Dropdown.Toggle as="button" className="btn no-caret">
              <img src={TresPontosIcone} width="18" height="20" alt="Opções" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as="button" onClick={() => handleEditarFornecedor(fornecedor)}>
                <img className="me-2" src={EditarIcone} width="16" alt="Editar" />
                Editar
              </Dropdown.Item>
              <Dropdown.Item as="button" onClick={() => handleExcluirFornecedor(fornecedor.id)}>
                <img className="me-2" src={ExcluirIcone} width="16" alt="Excluir" />
                Excluir
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    ));
  };

  const handleAdicionarFornecedor = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    setNovoFornecedor({
      cnpj: '',
      company: '',
      email: '',
      contact: '',
      address: '',
      city: '',
      state: '',
      country: '',
      postal_code: '',
      status: true,
      user_id: user.id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFornecedorSelecionado(null);
  };

  const handleSubmitModal = async () => {
    try {
      if (!novoFornecedor.company || !novoFornecedor.email || !novoFornecedor.contact) {
        alert('Preencha todos os campos obrigatórios.');
        return;
      }

      const user = JSON.parse(localStorage.getItem('user'));

      if (fornecedorSelecionado) {
        novoFornecedor.updatedAt = new Date().toISOString();
        await atualizarFornecedor(user.id, fornecedorSelecionado.id, novoFornecedor);
        console.log('Fornecedor atualizado com sucesso!');
      } else {
        novoFornecedor.createdAt = new Date().toISOString();
        novoFornecedor.updatedAt = new Date().toISOString();
        await adicionarFornecedor(user.id, novoFornecedor);
        console.log('Novo fornecedor adicionado com sucesso!');
      }

      const fornecedoresAtualizados = await getFornecedores(user.id);
      setFornecedores(fornecedoresAtualizados);
    } catch (error) {
      console.error('Erro ao salvar fornecedor:', error);
    } finally {
      setShowModal(false);
      setFornecedorSelecionado(null);
    }
  };

  const handleEditarFornecedor = (fornecedor) => {
    setNovoFornecedor({
      cnpj: fornecedor.cnpj,
      company: fornecedor.company,
      email: fornecedor.email,
      contact: fornecedor.contact,
      address: fornecedor.address,
      city: fornecedor.city,
      state: fornecedor.state,
      country: fornecedor.country,
      postal_code: fornecedor.postal_code,
      status: fornecedor.status,
      user_id: fornecedor.user_id,
      createdAt: fornecedor.createdAt,
      updatedAt: fornecedor.updatedAt
    });

    setFornecedorSelecionado(fornecedor);
    setShowModal(true);
  };

  const handleExcluirFornecedor = async (fornecedorId) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      await excluirFornecedor(user.id, fornecedorId);
      const fornecedoresAtualizados = await getFornecedores(user.id);
      setFornecedores(fornecedoresAtualizados);
    } catch (error) {
      console.error('Erro ao excluir fornecedor:', error);
    }
  };

  return (
    <div>
      <Menu />
      <Conteudo>
        <Cabecalho titulo="Fornecedores" />
        <div className="conteudo-principal">
          <div className="tabela">
            <div className="header">
              <h2>Lista de Fornecedores</h2>
              <Button variant="primary" onClick={handleAdicionarFornecedor}>
                Adicionar fornecedor
              </Button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nome do fornecedor</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contato</th>
                  <th scope="col">Última atualização</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {renderFornecedores()}
              </tbody>
            </table>
          </div>
        </div>
      </Conteudo>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{fornecedorSelecionado ? 'Editar Fornecedor' : 'Adicionar Fornecedor'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>CNPJ</Form.Label>
                <Form.Control
                  type="text"
                  value={novoFornecedor.cnpj}
                  onChange={(e) => setNovoFornecedor({ ...novoFornecedor, cnpj: e.target.value })}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Empresa</Form.Label>
                <Form.Control
                  type="text"
                  value={novoFornecedor.company}
                  onChange={(e) => setNovoFornecedor({ ...novoFornecedor, company: e.target.value })}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={novoFornecedor.email}
                  onChange={(e) => setNovoFornecedor({ ...novoFornecedor, email: e.target.value })}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Contato</Form.Label>
                <Form.Control
                  type="text"
                  value={novoFornecedor.contact}
                  onChange={(e) => setNovoFornecedor({ ...novoFornecedor, contact: e.target.value })}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  type="text"
                  value={novoFornecedor.address}
                  onChange={(e) => setNovoFornecedor({ ...novoFornecedor, address: e.target.value })}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Cidade</Form.Label>
                <Form.Control
                  type="text"
                  value={novoFornecedor.city}
                  onChange={(e) => setNovoFornecedor({ ...novoFornecedor, city: e.target.value })}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Estado</Form.Label>
                <Form.Control
                  type="text"
                  value={novoFornecedor.state}
                  onChange={(e) => setNovoFornecedor({ ...novoFornecedor, state: e.target.value })}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>País</Form.Label>
                <Form.Control
                  type="text"
                  value={novoFornecedor.country}
                  onChange={(e) => setNovoFornecedor({ ...novoFornecedor, country: e.target.value })}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Código Postal</Form.Label>
                <Form.Control
                  type="text"
                  value={novoFornecedor.postal_code}
                  onChange={(e) => setNovoFornecedor({ ...novoFornecedor, postal_code: e.target.value })}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  value={novoFornecedor.status}
                  onChange={(e) => setNovoFornecedor({ ...novoFornecedor, status: e.target.value })}
                >
                  <option value="estoque">Em estoque</option>
                  <option value="fora-estoque">Fora de estoque</option>
                </Form.Control>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Control
                  type="hidden"
                  value={novoFornecedor.user_id}
                  readOnly
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Criado em</Form.Label>
                <Form.Control
                  type="text"
                  value={isValid(new Date(novoFornecedor.createdAt)) ? format(new Date(novoFornecedor.createdAt), 'dd/MM/yyyy HH:mm:ss') : 'Data Inválida'}
                  readOnly
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Atualizado em</Form.Label>
                <Form.Control
                  type="text"
                  value={isValid(new Date(novoFornecedor.updatedAt)) ? format(new Date(novoFornecedor.updatedAt), 'dd/MM/yyyy HH:mm:ss') : 'Data Inválida'}
                  readOnly
                />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSubmitModal}>
            {fornecedorSelecionado ? 'Salvar Alterações' : 'Adicionar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
