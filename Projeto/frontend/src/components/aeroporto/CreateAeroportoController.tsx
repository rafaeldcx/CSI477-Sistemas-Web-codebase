import { useState } from "react"
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateAeroporto = () => {

    const [nome, setNome] = useState('');
    const [cidade, setCidade] = useState('');
    const [pais, setPais] = useState('');
    const navigate = useNavigate();

    const handleNewAeroporto = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!nome.trim() || !cidade.trim() || !pais.trim()) {
            return alert('Por favor, preencha todos os campos.');
        }

        const data = { nome, cidade, pais };
        try {
            await api.post('/aeroportos', data);
            alert('Aeroporto cadastrado com sucesso!');
            console.log('Aeroporto cadastrado com sucesso!');
            navigate('/aeroportos');
        } catch (error) {
            console.error(error);
            alert('Erro ao cadastrar o aeroporto!');
        }
    };

    return(
        <div>
            <h3>Cadastro de aeroporto: {nome} - {cidade} - {pais}</h3>
            <form onSubmit={handleNewAeroporto}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome"  value={nome} onChange={e => setNome(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="cidade">Cidade</label>
                    <input type="text" name="cidade" id="cidade"  value={cidade} onChange={e => setCidade(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="pais">País</label>
                    <input type="text" name="pais" id="pais"  value={pais} onChange={e => setPais(e.target.value)}/>
                </div>
                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    )
}

export default CreateAeroporto;