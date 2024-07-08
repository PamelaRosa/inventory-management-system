import './conteudo.css'

export default function Conteudo(props) {
  return (
    <div className="content-container">
      <div className="container-fluid">
        <div className="conteudo">
          {props.children}
        </div>
      </div>
    </div>
  )
}