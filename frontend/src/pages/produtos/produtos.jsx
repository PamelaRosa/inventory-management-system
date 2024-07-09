import Menu from "../../components/menu/menu";
import Conteudo from "../../components/conteudo/conteudo";
import Cabecalho from "../../components/cabecalho/cabecalho";
import EditarIcone from "../../assets/icones/editar.png";
import ExcluirIcone from "../../assets/icones/excluir.png";
import TresPontosIcone from "../../assets/icones/tres-pontos.png";
import { Button, Modal, Form, Row, Col, Dropdown } from 'react-bootstrap';
import './produtos.css';
import { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import { getProdutos, addProduto, updateProduto, deleteProduto } from "../../services/produtoService";
import { getCategorias } from "../../services/categoriaService";

export default function Produtos() {
  const [showModal, setShowModal] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const produtosData = await getProdutos();
        setProdutos(produtosData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    async function fetchCategorias() {
      try {
        const categoriasData = await getCategorias();
        setCategorias(categoriasData);
      } catch (error) {
        setError(error);
      }
    }

    fetchProdutos();
    fetchCategorias();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setProdutoSelecionado(null);
  };

  const handleSalvar = async () => {
    const camposObrigatorios = ['name', 'brand', 'cnpj', 'status', 'unit_price','unit_promotional_price','quantity', 'description'];
    const camposValidos = camposObrigatorios.every(campo => produto[campo]);

    if (!camposValidos) {
      toast.warn('Por favor, preencha todos os campos obrigatórios.', { autoClose: 5000 });
      return;
    }

    var selectCategory = document.getElementById('category');
    var selectedIndex = selectCategory.selectedIndex;
    var selectedOption = selectCategory.options[selectedIndex];
    const produto = {
      id: produtoSelecionado?.id,
      name: document.getElementById('name').value,
      brand: document.getElementById('brand').value,
      category: selectedOption.text,
      description: document.getElementById('description').value,
      quantity: document.getElementById('quantity').value,
      unit_price: document.getElementById('unit_price').value,
      unit_promotional_price: document.getElementById('unit_promotional_price').value,
      status: document.getElementById('status').value === 'true',
      category_id: selectedOption.value,
      cnpj: document.getElementById('cnpj').value.replace(/[^\d]/g, '')
    };

    try {
      if (produtoSelecionado) {
        await updateProduto(produto);
        toast.success('Produto atualizado com sucesso!', { autoClose: 10000 });
      } else {
        await addProduto(produto);
        toast.success('Produto criado com sucesso!', { autoClose: 10000 });
      }
      const produtosData = await getProdutos();
      setProdutos(produtosData);
    } catch (error) {
      toast.error('Não foi possível salvar o produto. Verifique os dados e tente novamente.', { autoClose: 10000 });
    } finally {
      handleCloseModal();
    }
  };

  const handleEditar = (produto) => {
    setProdutoSelecionado(produto);
    setShowModal(true);
  };

  const handleAdicionar = () => {
    setShowModal(true);
    setProdutoSelecionado(null);
  };

  const handleExcluir = async (produtoId) => {
    try {
      await deleteProduto(produtoId);
      const produtosData = await getProdutos();
      setProdutos(produtosData);
      toast.success('Produto excluído com sucesso!', { autoClose: 10000 });
    } catch (error) {
      toast.error('Erro ao excluir produto', { autoClose: 10000 });
      console.error('Erro ao excluir pedido:', error);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Menu />
      <Conteudo>
        <Cabecalho titulo="Produtos" />
        <div className="conteudo-principal">
          <div className="tabela">
            <div className="header">
              <h2>Lista de Produtos</h2>
              <button type="button" className="btn btn-primary" onClick={handleAdicionar}>
                Adicionar produto
              </button>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID Produto</th>
                  <th scope="col">Data</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Fornecedor</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {produtos.length === 0 ? (
                  <tr>
                    <td className="text-center" colSpan="8">Nenhum registro encontrado.</td>
                  </tr>
                ) : (
                  produtos.data.map((produto) => (
                    <tr key={produto.id}>
                      <th scope="row">{produto.id}</th>
                      <td>{new Date(produto.createdAt).toLocaleDateString()}</td>
                      <td>{produto.name}</td>
                      <td>{produto.category}</td>
                      <td>{produto.cnpj}</td>
                      <td>{produto.quantity}</td>
                      <td>
                        <div className={`status ${produto.status ? 'estoque' : 'fora-estoque'}`}>
                          {produto.status ? 'Em estoque' : 'Fora de estoque'}
                        </div>
                      </td>
                      <td>
                        <Dropdown drop="start">
                          <Dropdown.Toggle as="button" className="btn no-caret">
                            <img src={TresPontosIcone} width="18" height="20" alt="Opções" />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item as="li" onClick={() => handleEditar(produto)}>
                              <img className="me-2" src={EditarIcone} width="16" alt="Editar" />
                              Editar
                            </Dropdown.Item>
                            <Dropdown.Item as="li" onClick={() => handleExcluir(produto.id)}>
                              <img className="me-2" src={ExcluirIcone} width="16" alt="Excluir" />
                              Excluir
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
          <Modal.Title>{produtoSelecionado ? 'Editar Produto' : 'Adicionar Produto'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Nome</Form.Label>
                <Form.Control id="name" type="text" defaultValue={produtoSelecionado ? produtoSelecionado.name : ''} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Fornecedor</Form.Label>
                <Form.Control id="cnpj" type="text" defaultValue={produtoSelecionado ? produtoSelecionado.cnpj : ''} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Marca</Form.Label>
                <Form.Control id="brand" type="text" defaultValue={produtoSelecionado ? produtoSelecionado.brand : ''} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Categoria</Form.Label>
                <Form.Select id="category" defaultValue={produtoSelecionado ? produtoSelecionado.category : ''}>
                  <option>{produtoSelecionado ? produtoSelecionado.category : 'Selecione...'}</option>
                  {categorias.map((categoria) => (
                    <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Preço</Form.Label>
                <Form.Control id="unit_price" type="text" defaultValue={produtoSelecionado ? produtoSelecionado.unit_price : ''} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Preço Promocional</Form.Label>
                <Form.Control id="unit_promotional_price" type="text" defaultValue={produtoSelecionado ? produtoSelecionado.unit_promotional_price : ''} />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Quantidade</Form.Label>
                <Form.Control id="quantity" type="number" defaultValue={produtoSelecionado ? produtoSelecionado.quantity : ''} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Status</Form.Label>
                <Form.Select id="status" defaultValue={produtoSelecionado ? produtoSelecionado.status.toString() : ''}>
                  <option>Selecione...</option>
                  <option value="true">Em estoque</option>
                  <option value="false">Fora de estoque</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Descrição</Form.Label>
                <Form.Control id="description" as="textarea" defaultValue={produtoSelecionado ? produtoSelecionado.description : ''} />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancelar</Button>
          <Button variant="primary" onClick={handleSalvar}>{produtoSelecionado ? 'Salvar Alterações' : 'Salvar'}</Button>
        </Modal.Footer>
      </Modal>
      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={10000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

    </div>
  );
}
