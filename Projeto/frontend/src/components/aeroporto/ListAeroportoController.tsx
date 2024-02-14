import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface AeroportoInterface {
    id: number;
    nome: string;
    cidade: string;
    pais: string;
    created_at: string;
    updated_at: string;
}

const ListAeroporto = () => {
    const [aeroportos, setAeroportos] = useState<AeroportoInterface[]>([]);

    useEffect(() => {
        const fetchAeroportos = async () => {
            try {
                const response = await api.get('/aeroportos');
                setAeroportos(response.data);
            } catch (error) {
                console.error("Erro ao buscar aeroportos:", error);
                alert('Erro ao carregar a lista de aeroportos!');
            }
        };

        fetchAeroportos();
    }, []);

    const handleDeleteAeroporto = async (id: number) => {
        if (!window.confirm("Deseja realmente excluir este aeroporto?")) {
            return;
        }
        try {
            await api.delete('/aeroportos', {
                data: {
                    id
                }
            });
            alert('Aeroporto excluído com sucesso!');
            setAeroportos(aeroportos.filter(aeroporto => aeroporto.id !== id));
        } catch (error) {
            console.log(error);
            alert('Erro ao excluir o aeroporto!');
        }
    }

    return (
        <div>
            <h3>Lista de aeroportos</h3>
            <div>
                <Link to="/aeroportos/create">Inserir novo passageiro</Link>
            </div>
            <div>
                <Link to="/">Voltar para a página inicial</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Cidade</th>
                        <th>País</th>
                        <th>Criado</th>
                        <th>Alterado</th>
                        <th>Atualizar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {aeroportos.map(aeroporto => (
                        <tr key={aeroporto.id}>
                            <td>{aeroporto.id}</td>
                            <td>{aeroporto.nome}</td>
                            <td>{aeroporto.cidade}</td>
                            <td>{aeroporto.pais}</td>
                            <td>{new Date(aeroporto.created_at).toLocaleDateString()}</td>
                            <td>{new Date(aeroporto.updated_at).toLocaleDateString()}</td>
                            <td><Link to={`/aeroportos/update/${aeroporto.id}`}>Atualizar</Link></td>
                            <td><button onClick={() => handleDeleteAeroporto(aeroporto.id)}>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListAeroporto;
