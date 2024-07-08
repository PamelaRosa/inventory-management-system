import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "../pages/login/login";
import CriarConta from "../pages/criar-conta/criar-conta";
import Dashboard from "../pages/dashboard/dashboard";
import Pedidos from "../pages/pedidos/pedidos";
import Produtos from "../pages/produtos/produtos";
import Fornecedores from "../pages/fornecedores/fornecedores";
import ConfiguracaoPerfil from "../pages/configuracao-perfil/configuracao-perfil";
import Autenticado from "../components/autenticado/autenticado";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Autenticado><Dashboard /></Autenticado>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/criar-conta",
    element: <CriarConta />,
  },
  {
    path: "/dashboard",
    element: <Autenticado><Dashboard /></Autenticado>,
  },
  {
    path: "/pedidos",
    element: <Autenticado><Pedidos /></Autenticado>,
  },
  {
    path: "/produtos",
    element: <Autenticado><Produtos /></Autenticado>,
  },
  {
    path: "/fornecedores",
    element: <Autenticado><Fornecedores /></Autenticado>,
  },
  {
    path: "/configuracao-perfil",
    element: <Autenticado><ConfiguracaoPerfil /></Autenticado>,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
