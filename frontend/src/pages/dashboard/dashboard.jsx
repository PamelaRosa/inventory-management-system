import { Line } from 'react-chartjs-2'
import Menu from "../../components/menu/menu";
import Conteudo from "../../components/conteudo/conteudo";
import Cabecalho from "../../components/cabecalho/cabecalho";
import CarteiraIcone from "../../assets/icones/carteira.png"
import UsuariosIcone from "../../assets/icones/usuarios.png"
import UsuarioIcone from "../../assets/icones/usuario.png"
import EstoqueIcone from "../../assets/icones/estoque.png"
import ForaEstoqueIcone from "../../assets/icones/fora-de-estoque.png"
import './dashboard.css'
import 'chart.js/auto'; // PRECISA PARA O GRAFICO FUNCIONAR


export default function Dashboard() {
  const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'jun'],
    datasets: [
      {
        label: 'Receitas',
        data: [300, 200, 300, 350, 380],
        borderColor: 'blue',
        backgroundColor: 'blue',
      },
      {
        label: 'Despesas',
        data: [160, 170, 320, 390, 200],
        borderColor: 'red',
        backgroundColor: 'red',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        align: 'center',
      },
    }
  };

  return (
    <div>
      <Menu />
      <Conteudo>
        <Cabecalho titulo="Dashboard" />
        <div className="row mt-4">
          <div className="col-md-9">
            <div className="row">
              <div className="col">
                <div className="card metrica">
                  <div className="me-3">
                    <img src={CarteiraIcone} width="24" height="24" />
                  </div>
                  <div>
                    <div className="titulo">Total de vendas</div>
                    <div className="valor">R$ 200.000,00</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card metrica">
                  <div className="me-3">
                    <img src={UsuariosIcone} width="24" height="24" />
                  </div>
                  <div>
                    <div className="titulo">Total de clientes</div>
                    <div className="valor">20</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card metrica">
                  <div className="me-3">
                    <img src={EstoqueIcone} width="24" height="24" />
                  </div>
                  <div>
                    <div className="titulo">Em estoque</div>
                    <div className="valor">300</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card metrica">
                  <div className="me-3">
                    <img src={ForaEstoqueIcone} width="24" height="24" />
                  </div>
                  <div>
                    <div className="titulo">Fora de estoque</div>
                    <div className="valor">10</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <Line data={data} options={options} />
            </div>
            <div className="card mt-3">
              <div className="produtos">
                <div className="titulo">
                  <h3>Produtos de melhor desempenho</h3>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Nᵒ</th>
                      <th scope="col">Nome do produto</th>
                      <th scope="col">Categoria</th>
                      <th scope="col">Status</th>
                      <th scope="col">Preço</th>
                      <th scope="col">Quantidade</th>
                      <th scope="col">Total</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Nome do produto</td>
                      <td>Categoria 1</td>
                      <td>
                        <div className="status estoque">
                          Em estoque
                        </div>
                      </td>
                      <td>R$ 20</td>
                      <td>10</td>
                      <td>R$ 200</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Nome do produto</td>
                      <td>Categoria 1</td>
                      <td>
                        <div className="status estoque">
                          Em estoque
                        </div>
                      </td>
                      <td>R$ 20</td>
                      <td>10</td>
                      <td>R$ 200</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Nome do produto</td>
                      <td>Categoria 1</td>
                      <td>
                        <div className="status estoque">
                          Em estoque
                        </div>
                      </td>
                      <td>R$ 20</td>
                      <td>10</td>
                      <td>R$ 200</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Nome do produto</td>
                      <td>Categoria 1</td>
                      <td>
                        <div className="status fora-estoque">
                          Fora de estoque
                        </div>
                      </td>
                      <td>R$ 20</td>
                      <td>10</td>
                      <td>R$ 200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card pedidos-recentes">
              <div className="titulo">
                <h3>Pedidos recentes</h3>
                <div>
                  <button type="button" className="btn btn-sm">Ver mais</button>
                </div>
              </div>
              <div className="pedidos">
                <div className="pedido">
                  <img src={UsuarioIcone} width="20" height="20" />
                  <div className="info">
                    <div className="nome">Usuário</div>
                    <div className="data">12:00</div>
                  </div>
                  <div className="valor">
                    R$ 100,00
                  </div>
                </div>
                <div className="pedido">
                  <img src={UsuarioIcone} width="20" height="20" />
                  <div className="info">
                    <div className="nome">Usuário</div>
                    <div className="data">12:00</div>
                  </div>
                  <div className="valor">
                    R$ 100,00
                  </div>
                </div>
                <div className="pedido">
                  <img src={UsuarioIcone} width="20" height="20" />
                  <div className="info">
                    <div className="nome">Usuário</div>
                    <div className="data">12:00</div>
                  </div>
                  <div className="valor">
                    R$ 100,00
                  </div>
                </div>
                <div className="pedido">
                  <img src={UsuarioIcone} width="20" height="20" />
                  <div className="info">
                    <div className="nome">Usuário</div>
                    <div className="data">12:00</div>
                  </div>
                  <div className="valor">
                    R$ 100,00
                  </div>
                </div>
                <div className="pedido">
                  <img src={UsuarioIcone} width="20" height="20" />
                  <div className="info">
                    <div className="nome">Usuário</div>
                    <div className="data">12:00</div>
                  </div>
                  <div className="valor">
                    R$ 100,00
                  </div>
                </div>
                <div className="pedido">
                  <img src={UsuarioIcone} width="20" height="20" />
                  <div className="info">
                    <div className="nome">Usuário</div>
                    <div className="data">12:00</div>
                  </div>
                  <div className="valor">
                    R$ 100,00
                  </div>
                </div>
                <div className="pedido">
                  <img src={UsuarioIcone} width="20" height="20" />
                  <div className="info">
                    <div className="nome">Usuário</div>
                    <div className="data">12:00</div>
                  </div>
                  <div className="valor">
                    R$ 100,00
                  </div>
                </div>
                <div className="pedido">
                  <img src={UsuarioIcone} width="20" height="20" />
                  <div className="info">
                    <div className="nome">Usuário</div>
                    <div className="data">12:00</div>
                  </div>
                  <div className="valor">
                    R$ 100,00
                  </div>
                </div>
                <div className="pedido">
                  <img src={UsuarioIcone} width="20" height="20" />
                  <div className="info">
                    <div className="nome">Usuário</div>
                    <div className="data">12:00</div>
                  </div>
                  <div className="valor">
                    R$ 100,00
                  </div>
                </div>
                <div className="pedido">
                  <img src={UsuarioIcone} width="20" height="20" />
                  <div className="info">
                    <div className="nome">Usuário</div>
                    <div className="data">12:00</div>
                  </div>
                  <div className="valor">
                    R$ 100,00
                  </div>
                </div>
                <div className="pedido">
                  <img src={UsuarioIcone} width="20" height="20" />
                  <div className="info">
                    <div className="nome">Usuário</div>
                    <div className="data">12:00</div>
                  </div>
                  <div className="valor">
                    R$ 100,00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Conteudo>
    </div>
  )
}