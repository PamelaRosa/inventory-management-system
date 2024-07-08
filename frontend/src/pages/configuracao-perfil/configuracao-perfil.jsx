import UsuarioIcone from "../../assets/icones/usuario.png"
import Menu from "../../components/menu/menu";
import Conteudo from "../../components/conteudo/conteudo";
import Cabecalho from "../../components/cabecalho/cabecalho";
import './configuracao-perfil.css'
import { useState } from "react";
import { api } from "../../api/api";

export default function ConfiguracaoPerfil() {
  const [error, setError] = useState('')

  const logout = () => {
    localStorage.removeItem('user')
    window.location.replace('/login')
  }

  const user = JSON.parse(localStorage.getItem('user'))

  const onSubmit = async (event) => {
    event.preventDefault()
    setError('')

    try {
      const name = event.target.name.value
      const email = event.target.email.value
      const password = event.target.password.value
      const confirmPassword = event.target.confirmPassword.value

      if (password !== confirmPassword) {
        setError('As senhas não conferem')
        return
      }

      const response = await api.put(`/users/${user.id}`, { name, email, password })
      if (response.data.user) {
        localStorage.setItem('user', JSON.stringify(response.data.user))
        window.location.replace('/')
      }
    } catch (error) {
      const apiError = error.response?.data?.message
      if (apiError) {
        setError(apiError)
      } else {
        setError('Ocorreu um erro.')
      }
    }
  }

  return (
    <div>
      <Menu />
      <Conteudo>
        <Cabecalho titulo="Configuração Perfil" />
        <div className="conteudo-principal">
          <div className="foto">
            <div className="foto-conteudo">
              <div className="foto-perfil">
                <img src={UsuarioIcone} width="100" height="100" />
              </div>
              {user.name}
              <br />
              <br />
              <div className="btn btn-primary btn-sm" onClick={logout}>Sair</div>
            </div>
          </div>
          <form className="formulario" onSubmit={onSubmit}>
            <div className="formulario-conteudo">
              <p className="label">Nome</p>
              <input className="input" name="name" type="text" defaultValue={user.name} placeholder="Digite seu nome completo" />
              <p className="label">E-mail</p>
              <input className="input" name="email" type="email" defaultValue={user.email} placeholder="Digite seu e-mail" />
              <p className="label">Redefinir Senha</p>
              <input className="input" name="password" type="password" placeholder="Digite uma nova senha" />
              <p className="label">Confirme sua Senha</p>
              <input className="input" name="confirmPassword" type="password" placeholder="Digite novamente sua senha" />
              <br />
              <p className="error">{error}</p>
              <div className="formulario-btns">
                <button type="submit" className="btn btn-primary">Salvar</button>
              </div>
            </div>
          </form>
        </div>
      </Conteudo>
    </div >
  )
}