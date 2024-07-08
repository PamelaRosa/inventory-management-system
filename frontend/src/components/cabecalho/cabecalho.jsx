import { Link } from 'react-router-dom'
import UsuarioIcone from '../../assets/icones/usuario.png'
import './cabecalho.css'

export default function Cabecalho(props) {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className="cabecalho">
      <div className="primeira-coluna">
        <h1>{props.titulo}</h1>
      </div>
      <div className="segunda-coluna">
        <div></div>
        <div className="perfil">
          <Link to="/configuracao-perfil">
            <img src={UsuarioIcone} width="30" height="30" />
            <div className="texto">
              <p className="nome">{user.name}</p>
              <p className="tipo-usuario">Perfil</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}