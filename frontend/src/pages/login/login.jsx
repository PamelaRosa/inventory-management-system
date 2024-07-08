import LoginImg from '../../assets/imagens/login.png'
import PastaIcone from '../../assets/icones/pasta.png'
import './login.css'
import { Link } from 'react-router-dom'
import { api } from '../../api/api'
import { useState } from 'react'

export default function Login() {
  const [error, setError] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setError('')

    try {
      const email = event.target.email.value
      const password = event.target.password.value
      const response = await api.post('/users/login', { email, password })
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
    <div className="conteudo-login">
      <div className="coluna-imagem">
        <img src={LoginImg} height="500px" width="500px" />
      </div>
      <div className="coluna-conteudo">
        <h1 className="titulo">
          <img src={PastaIcone} />
          Inventário
        </h1>
        <h2>Entrar</h2>
        <form className="formulario" onSubmit={onSubmit}>
          <p className="label">Email</p>
          <input name="email" type="email" placeholder="Digite o seu e-mail" />
          <p className="label">Senha</p>
          <input name="password" type="password" placeholder="Digite a sua senha" />
          <p className="error">{error}</p>
          <button type="submit" className="btn btn-dark">Entrar</button>
          <br /><br />
          <p className="description"> Não tem uma conta?</p>
          <Link to="/criar-conta">Criar Conta</Link>
        </form>
      </div>
    </div>
  )
}