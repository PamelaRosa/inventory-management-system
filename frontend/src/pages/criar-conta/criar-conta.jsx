import { Link } from 'react-router-dom'
import CriarContaImg from '../../assets/imagens/criarconta.png'
import './criar-conta.css'
import { useState } from 'react'
import { api } from '../../api/api'

export default function CriarConta() {
  const [error, setError] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setError('')

    try {
      const name = event.target.name.value
      const email = event.target.email.value
      const password = event.target.password.value
      const confirmPassword = event.target.confirmPassword.value

      if(password !== confirmPassword){
        setError('As senhas não conferem')
        return
      }

      const response = await api.post('/users/register', { name, email, password })
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
    <div className="conteudo-criarconta">
      <div className="coluna-conteudo">
        <form className="formulario" onSubmit={onSubmit}>
          <p className="description">Criar Conta</p>
          <p className="description">Nome completo</p>
          <input name="name" type="text" placeholder="Digite o seu nome completo" />
          <p className="description">E-mail</p>
          <input name="email" type="email" placeholder="Digite o seu e-mail" />
          <p className="description">Senha</p>
          <input name="password" type="password" placeholder="Digite a sua senha" />
          <p className="description">Confirmar a senha</p>
          <input name="confirmPassword" type="password" placeholder="Confirmar senha" />
          <p className="error">{error}</p>
          <button type="submit" className="btn btn-dark">Criar conta</button>
          <br /><br />
          <p className="description">Já tem uma conta?</p>
          <Link to="/login">Entrar</Link>
        </form>
      </div>
      <div className="coluna-imagem">
        <img src={CriarContaImg} />
      </div>
    </div >
  )
}