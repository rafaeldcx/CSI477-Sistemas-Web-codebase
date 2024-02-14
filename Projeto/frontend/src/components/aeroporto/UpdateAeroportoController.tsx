import { useEffect, useState } from "react"
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

const UpdateAeroporto = () => {

    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [pais, setPais] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        api.get(`/aeroportos/${id}`).then(response => {
            setNome(response.data.nome);
            setCidade(response.data.cpf);
            setPais(response.data.email);
        })
    }, [id]);

    const handleUpdateAeroporto = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            aeroporto_id: parseInt(String(id)),
            nome,
            cidade,
            pais
        };
        try {
            await api.put('/aeroportos', data);
            alert('Aeroporto atualizado com sucesso!');
            navigate('/aeroportos');
        } catch (error) {
            console.log(error);
            alert('Erro ao atualizar o aeroporto!');
        }
    }

    return (
        <div>
            <h3>Atualização de aeroporto: {nome} - {cidade} - {pais}</h3>
            <form onSubmit={handleUpdateAeroporto}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome" value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" name="cidade" id="cidade" value={cidade} onChange={e => setCidade(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="pais">País</label>
                    <input type="text" name="pais" id="pais" value={pais} onChange={e => setPais(e.target.value)} />
                </div>
                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    )
}

export default UpdateAeroporto;