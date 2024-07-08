import { Navigate } from 'react-router-dom'

export default function Autenticado(props) {
    if (!localStorage.getItem('user')) {
        return <Navigate to="/login" />
    }

    return props.children
}