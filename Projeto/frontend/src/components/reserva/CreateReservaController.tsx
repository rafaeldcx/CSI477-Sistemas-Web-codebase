import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { VooInterface } from "../voo/ListVooController";
import { PassageiroInterface } from "../passageiro/ListPassageiroController";

const CreateReserva = () => {
    const [nome_reserva, setNome] = useState('');
    const [voo_id, setVooId] = useState(0);
    const [passageiro_id, setPassageiroId] = useState(0);
    const [data, setData] = useState('');
    const [voos, setVoos] = useState<VooInterface[]>([]);
    const [passageiros, setPassageiros] = useState<PassageiroInterface[]>([]);

    useEffect(() => {
        api.get('/voos').then(response => {
            setVoos(response.data);
        });
    }, []);

    useEffect(() => {
        api.get('/passageiros').then(response => {
            setPassageiros(response.data);
        });
    }, []);

    const navigate = useNavigate();
    const handleNewReserva = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (voo_id <= 0) {
            alert('Por favor selecione um voo válido.');
            return;
        }
        if (passageiro_id <= 0) {
            alert('Por favor selecione um passageiro válido.');
            return;
        }
    
        const dataToSend = {
            nome_reserva,
            voo_id,
            passageiro_id,
            data,
        };
    
        try {
            await api.post('/reservas', dataToSend);
            alert('Reserva cadastrado com sucesso!');
            navigate('/reservas');
        } catch (error) {
            console.log(error);
            alert('Erro ao cadastrar a reserva!');
        }
    };

    return (
        <div>
            <h3>Cadastro de reserva: {nome_reserva} - {voo_id} - {passageiro_id} - {data}</h3>
            <form onSubmit={handleNewReserva}>
                <div>
                    <label htmlFor="nome">Nome da reserva</label>
                    <input type="text" name="nome" id="nome" value={nome_reserva} onChange={e => setNome(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="nvoo">Número do Voo</label>
                    <select name="nvoo" id="nvoo" value={voo_id.toString()} onChange={e => setVooId(parseInt(e.target.value))}>
                        <option value="0">Selecione</option>
                        {voos.map(voo => (
                            <option key={voo.id} value={voo.id}>{voo.numero_voo}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="passageiro">Passageiro</label>
                    <select name="passageiro" id="passageiro" value={passageiro_id.toString()} onChange={e => setPassageiroId(parseInt(e.target.value))}>
                        <option value="0">Selecione</option>
                        {passageiros.map(passageiro => (
                            <option key={passageiro.id} value={passageiro.id}>{passageiro.nome}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="data">Data da reseva</label>
                    <input type="text" name="data" id="data" value={data} onChange={e => setData(e.target.value)} />
                </div>

                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    );
};

export default CreateReserva;
