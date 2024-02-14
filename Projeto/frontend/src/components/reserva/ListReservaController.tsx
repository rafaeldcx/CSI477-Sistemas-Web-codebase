import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface ReservaInterface {
    id: number;
    nome_reserva: number;
    voo_id: number;
    passageiro_id: number;
    data: string;
    created_at: string;
    updated_at: string;
}

interface PassageiroInterface {
    id: number;
    nome: string;
}

interface VooInterface {
    id: number;
    numero_voo: number;
}

export const ListReserva = () => {
    const [reservas, setReservas] = useState<ReservaInterface[]>([]);
    const [passageiros, setPassageiros] = useState<{ [key: number]: PassageiroInterface }>({});
    const [voos, setVoos] = useState<{ [key: number]: VooInterface }>({});
    
    useEffect(() => {
        const fetchDados = async () => {
            try {
                const [respostaReservas, respostaPassageiros, respostaVoos] = await Promise.all([
                    api.get('/reservas'),
                    api.get('/passageiros'),
                    api.get('/voos'),
                ]);

                setReservas(respostaReservas.data);
                
                const passageirosObj = respostaPassageiros.data.reduce((obj: { [key: number]: PassageiroInterface }, item: PassageiroInterface) => {
                    obj[item.id] = item;
                    return obj;
                }, {});
                setPassageiros(passageirosObj);

                const voosObj = respostaVoos.data.reduce((obj: { [key: number]: VooInterface }, item: VooInterface) => {
                    obj[item.id] = item;
                    return obj;
                }, {});
                setVoos(voosObj);

            } catch (error) {
                console.error("Erro ao carregar dados:", error);
                alert('Erro ao carregar as informações das reservas!');
            }
        };
        
        fetchDados();
    }, []);

    
    const handleDeleteReserva = async (id: number) => {
        if(!window.confirm("Deseja realmente excluir esta reserva?")) {
            return;
        }
        try{
            await api.delete('/reservas', {
                data:{
                    reserva_id: id
                }
            });
            alert('Reserva excluído com sucesso!');
            setReservas(reservas.filter(reserva => reserva.id !== id));
        } catch (error) {
            console.log(error);
            alert('Erro ao excluir a reserva!');
        }
    }

    return (
        <div>
            <h3>Lista de reservas</h3>
            <div>
                <Link to="/reservas/create">Inserir nova reserva</Link>
            </div>
            <div>
                <Link to="/">Voltar para a página inicial</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome da reserva</th>
                        <th>Número do voo</th>
                        <th>Passageiro</th>
                        <th>Data da reserva</th>
                        <th>Criado em</th>
                        <th>Atualizado em</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {reservas.map(reserva => (
                        <tr key={reserva.id}>
                            <td>{reserva.id}</td>
                            <td>{reserva.nome_reserva}</td>
                            <td>{voos[reserva.voo_id]?.numero_voo}</td>
                            <td>{passageiros[reserva.passageiro_id]?.nome}</td>
                            <td>{new Date(reserva.data).toLocaleDateString()}</td>
                            <td>{new Date(reserva.created_at).toLocaleDateString()}</td>
                            <td>{new Date(reserva.updated_at).toLocaleDateString()}</td>
                            <td>
                                <Link to={`/reservas/update/${reserva.id}`}>Atualizar</Link>
                                <button onClick={() => handleDeleteReserva(reserva.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListReserva;
