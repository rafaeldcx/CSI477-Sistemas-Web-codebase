import { useEffect, useState } from "react"
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdatePassageiro = () => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        api.get(`/passageiros/${id}`).then(response => {
            setNome(response.data.nome);
            setCpf(response.data.cpf);
            setEmail(response.data.email);
        })
    }, [id]);

    const handleUpdatePassageiro = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            passageiro_id: parseInt(String(id)),
            nome,
            cpf,
            email
        };
        try {
            await api.put('/passageiros', data);
            alert('Passageiro atualizado com sucesso!');
            navigate('/passageiros');
        } catch (error) {
            console.log(error);
            alert('Erro ao atualizar o passageiro!');
        }
    }

    return (
        <div>
            <h3>Atualização de passageiro: {nome} - {cpf} - {email}</h3>
            <form onSubmit={handleUpdatePassageiro}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" name="cpf" id="cpf" value={cpf} onChange={e => setCpf(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    )
}

export default UpdatePassageiro;