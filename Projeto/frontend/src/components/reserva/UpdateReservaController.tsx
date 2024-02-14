import { useEffect, useState } from "react"
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { PassageiroInterface } from "../passageiro/ListPassageiroController";
import { VooInterface } from "../voo/ListVooController";

const UpdateReserva = () => {

    const [nome_reserva, setNome] = useState('');
    const [voo_id, setVooId] = useState(0);
    const [passageiro_id, setPassageiroId] = useState(0);
    const [data, setData] = useState('');
    const [voos, setVoos] = useState<VooInterface[]>([]);
    const [passageiros, setPassageiros] = useState<PassageiroInterface[]>([]);


    const navigate = useNavigate();
    const { id } = useParams();

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

    useEffect(() => {
        api.get(`/reservas/${id}`).then(response => {
            setNome(response.data.nome);
            setVooId(response.data.voo_id);
            setPassageiroId(response.data.passageiro_id);
        })
    }, [id]);

    const handleUpdateReserva = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const dataToSend = {
            reserva_id: parseInt(String(id)),
            nome_reserva,
            voo_id,
            passageiro_id,
            data,
        };
        try {
            await api.put('/reservas', dataToSend);
            alert('Reserva atualizada com sucesso!');
            navigate('/reservas');
        } catch (error) {
            console.log(error);
            alert('Erro ao atualizar a reserva!');
        }
    }

    return (
        <div>
            <h3>Atualização de reserva: {nome_reserva} - {voo_id} - {passageiro_id} - {data}</h3>
            <form onSubmit={handleUpdateReserva}>
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
                <button type="submit">Atualizar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    )
}

export default UpdateReserva;