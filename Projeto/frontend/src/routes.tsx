import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ListPassageiros from './components/passageiro/ListPassageiroController';
import CreatePassageiro from './components/passageiro/CreatePassageiroController';
import UpdatePassageiro from './components/passageiro/UpdatePassageiroController';
import ListAeroporto from './components/aeroporto/ListAeroportoController';
import CreateAeroporto from './components/aeroporto/CreateAeroportoController';
import UpdateAeroporto from './components/aeroporto/UpdateAeroportoController';
import ListVoos from './components/voo/ListVooController';
import CreateVoo from './components/voo/CreateVooController';
import UpdateVoo from './components/voo/UpdateVooController';
import CreateReserva from './components/reserva/CreateReservaController';
import UpdateReserva from './components/reserva/UpdateReservaController';
import ListReserva from './components/reserva/ListReservaController';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/passageiros" element={<ListPassageiros />} />
        <Route path="/passageiros/create" element={<CreatePassageiro />} />
        <Route path="/passageiros/update/:id" element={<UpdatePassageiro/>} />
        <Route path="/aeroportos" element={<ListAeroporto />} />
        <Route path="/aeroportos/create" element={<CreateAeroporto />} />
        <Route path="/aeroportos/update/:id" element={<UpdateAeroporto/>} />
        <Route path="/voos" element={<ListVoos />} />
        <Route path="/voos/create" element={<CreateVoo />} />
        <Route path="/voos/update/:id" element={<UpdateVoo />} />
        <Route path="/reservas" element={<ListReserva />} />
        <Route path="/reservas/create" element={<CreateReserva />} />
        <Route path="/reservas/update/:id" element={<UpdateReserva />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;