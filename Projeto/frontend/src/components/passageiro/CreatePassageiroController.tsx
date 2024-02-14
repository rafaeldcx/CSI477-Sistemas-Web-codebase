import { useState } from "react"
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreatePassageiro = () => {

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleNewPassageiro = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data ={
            nome,
            cpf,
            email
        };
        try{
            await api.post('/passageiros', data);
            alert('Passageiro cadastrado com sucesso!');
            navigate('/passageiros');
        } catch (error) {
            console.log(error);
            alert('Erro ao cadastrar o passageiro!');
        }
    }

    return(
        <div>
            <h3>Cadastro de passageiro: {nome} - {cpf} - {email}</h3>
            <form onSubmit={handleNewPassageiro}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" id="nome"  value={nome} onChange={e => setNome(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" name="cpf" id="cpf"  value={cpf} onChange={e => setCpf(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email"  value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    )
}

export default CreatePassageiro;