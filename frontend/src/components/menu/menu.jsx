import { Link, useLocation } from 'react-router-dom'
import PastaIcone from '../../assets/icones/pasta.png'
import LampadaIcone from '../../assets/icones/lampada.png'
import CarrinhoIcone from '../../assets/icones/carrinho.png'
import ProdutoIcon from '../../assets/icones/produto.png'
import Fornecedores from '../../assets/icones/fornecedores.png'
import './menu.css'

export default function Menu() {
  const { pathname } = useLocation()

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <img src={PastaIcone} width="24" height="24" /> Inventário
      </div>
      <ul className="sidebar-navigation">
        <li>
          <Link to={"/dashboard"} className={pathname === "/dashboard" && "active"}>
            <img src={LampadaIcone} width="20" height="20" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to={"/pedidos"} className={pathname === "/pedidos" && "active"}>
            <img src={CarrinhoIcone} width="20" height="20" />
            Pedidos
          </Link>
        </li>
        <li>
          <Link to="/produtos" className={pathname === "/produtos" && "active"}>
            <img src={ProdutoIcon} width="20" height="20" />
            Produtos
          </Link>
        </li>
        <li>
          <Link to="/fornecedores" className={pathname === "/fornecedores" && "active"}>
            <img src={Fornecedores} width="20" height="20" />
            Fornecedores
          </Link>
        </li>
      </ul>
    </div >
  )
}