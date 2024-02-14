import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

export interface PassageiroInterface {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    created_at: string;
    updated_at: string;
}

const ListPassageiros = () => {
    const [passageiros, setPassageiros] = useState<PassageiroInterface[]>([]);

    useEffect(() => {
        const fetchPassageiros = async () => {
            try {
                const response = await api.get('/passageiros');
                setPassageiros(response.data);
            } catch (error) {
                console.error("Erro ao buscar passageiros:", error);
                alert('Erro ao carregar a lista de passageiros!');
            }
        };

        fetchPassageiros();
    }, []);

    const handleDeletePassageiro = async (id: number) => {
        if(!window.confirm("Deseja realmente excluir este passageiro?")) {
            return;
        }
        try{
            await api.delete('/passageiros', {
                data:{
                    id
                }
            });
            alert('Passageiro excluído com sucesso!');
            setPassageiros(passageiros.filter(passageiro => passageiro.id !== id));
        } catch (error) {
            console.log(error);
            alert('Erro ao excluir o passageiro!');
        }
    }

    return (
        <div>
            <h3>Lista de passageiros</h3>
            <div>
                <Link to="/passageiros/create">Inserir novo passageiro</Link>
            </div>
            <div>
                <Link to="/">Voltar para a página inicial</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Email</th>
                        <th>Criado em</th>
                        <th>Atualizado em</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {passageiros.map(passageiro => (
                        <tr key={passageiro.id}>
                            <td>{passageiro.id}</td>
                            <td>{passageiro.nome}</td>
                            <td>{passageiro.cpf}</td>
                            <td>{passageiro.email}</td>
                            <td>{new Date(passageiro.created_at).toLocaleDateString()}</td>
                            <td>{new Date(passageiro.updated_at).toLocaleDateString()}</td>
                            <td>
                                <Link to={`/passageiros/update/${passageiro.id}`}>Atualizar</Link>
                                <button onClick={() => handleDeletePassageiro(passageiro.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListPassageiros;
