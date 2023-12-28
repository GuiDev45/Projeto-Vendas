import { Route, Routes } from "react-router-dom";
import Resumo from "./pages/Resumo";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Resumo />} />
      {/*<Route path="/vendas" element={<Vendas />} />*/}
    </Routes>
  );
}
