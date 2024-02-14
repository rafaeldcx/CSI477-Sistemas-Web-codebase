import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface VooInterface {
    id: number;
    numero_voo: number;
    aeroporto_origem_id: number;
    aeroporto_destino_id: number;
    hora_partida: string;
    hora_chegada: string;
    created_at: string;
    updated_at: string;
}

interface AeroportoInterface {
    id: number;
    nome: string;
    cidade: string;
    pais: string;
}

export const ListVoos = () => {
    const [voos, setVoos] = useState<VooInterface[]>([]);
    const [aeroportos, setAeroportos] = useState<{ [key: number]: AeroportoInterface }>({});
    
    useEffect(() => {
        const fetchDados = async () => {
            try {
                const respostaVoos = await api.get('/voos');
                setVoos(respostaVoos.data);

                const respostaAeroportos = await api.get('/aeroportos');
                const aeroportosObj = respostaAeroportos.data.reduce((obj: { [key: number]: AeroportoInterface }, aeroporto: AeroportoInterface) => {
                    obj[aeroporto.id] = aeroporto;
                    return obj;
                }, {});
                setAeroportos(aeroportosObj);
            } catch (error) {
                console.error("Erro ao carregar dados:", error);
                alert('Erro ao carregar as informações!');
            }
        };
        
        fetchDados();
    }, []);

    const handleDeleteVoo = async (id: number) => {
        if(!window.confirm("Deseja realmente excluir este voo?")) {
            return;
        }
        try{
            await api.delete('/voos', {
                data:{
                    voo_id: id
                }
            });
            alert('Voo excluído com sucesso!');
            setVoos(voos.filter(voo => voo.id !== id));
        } catch (error) {
            console.log(error);
            alert('Erro ao excluir o voo!');
        }
    }

    return (
        <div>
            <h3>Lista de voos</h3>
            <div>
                <Link to="/voos/create">Inserir novo voo</Link>
            </div>
            <div>
                <Link to="/">Voltar para a página inicial</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Número do voo</th>
                        <th>Aeroporto de origem</th>
                        <th>Aeroporto de destino</th>
                        <th>Hora de partida</th>
                        <th>Hora de chegada</th>
                        <th>Criado em</th>
                        <th>Atualizado em</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {voos.map(voo => (
                        <tr key={voo.id}>
                            <td>{voo.id}</td>
                            <td>{voo.numero_voo}</td>
                            <td>{aeroportos[voo.aeroporto_origem_id]?.nome} - {aeroportos[voo.aeroporto_origem_id]?.cidade}</td>
                            <td>{aeroportos[voo.aeroporto_destino_id]?.nome} - {aeroportos[voo.aeroporto_destino_id]?.cidade}</td>
                            <td>{new Date(voo.hora_partida).toLocaleDateString()}</td>
                            <td>{new Date(voo.hora_chegada).toLocaleDateString()}</td>
                            <td>{new Date(voo.created_at).toLocaleDateString()}</td>
                            <td>{new Date(voo.updated_at).toLocaleDateString()}</td>
                            <td><Link to={`/voos/update/${voo.id}`}>Atualizar</Link></td>
                            <td><button onClick={() => handleDeleteVoo(voo.id)}>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListVoos;
