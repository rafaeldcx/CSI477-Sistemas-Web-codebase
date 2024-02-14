import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { AeroportoInterface } from "../aeroporto/ListAeroportoController";

const CreateVoo = () => {
    const [numero_voo, setVoo] = useState(0);
    const [aeroporto_origem_id, setOrigemId] = useState(0);
    const [aeroporto_destino_id, setDestinoId] = useState(0);
    const [hora_partida, setHoraPartida] = useState('');
    const [hora_chegada, setHoraChegada] = useState('');
    const [aeroportos, setAeroportos] = useState<AeroportoInterface[]>([]);

    useEffect(() => {
        api.get('/aeroportos').then(response => {
            setAeroportos(response.data);
        });
    }, []);

    const navigate = useNavigate();
    const handleNewPartida = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (aeroporto_origem_id <= 0) {
            alert('Por favor, selecione uma origem válida.');
            return;
        }
        if (aeroporto_destino_id <= 0) {
            alert('Por favor, selecione um destino válido.');
            return;
        }
    
        const dataToSend = {
            numero_voo,
            aeroporto_origem_id,
            aeroporto_destino_id,
            hora_partida,
            hora_chegada
        };
    
        try {
            await api.post('/voos', dataToSend);
            alert('Voo cadastrado com sucesso!');
            navigate('/voos');
        } catch (error) {
            console.log(error);
            alert('Erro ao cadastrar o voo!');
        }
    };

    return (
        <div>
            <h3>Cadastro de partida: {numero_voo} - {aeroporto_origem_id} - {aeroporto_destino_id} - {hora_partida} - {hora_chegada}</h3>
            <form onSubmit={handleNewPartida}>
                <div>
                    <label htmlFor="Nvoo">Número do voo</label>
                    <input type="text" name="Nvoo" id="Nvoo" value={numero_voo} onChange={e => setVoo(parseInt(e.target.value))} />
                </div>
                <div>
                    <label htmlFor="origem">Aeroporto de origem</label>
                    <select name="origem" id="origem" value={aeroporto_origem_id.toString()} onChange={e => setOrigemId(parseInt(e.target.value))}>
                        <option value="0">Selecione</option>
                        {aeroportos.map(origem => (
                            <option key={origem.id} value={origem.id}>{origem.nome} - {origem.cidade} - {origem.pais}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="destino">Aeroporto de destino</label>
                    <select name="destino" id="destino" value={aeroporto_destino_id.toString()} onChange={e => setDestinoId(parseInt(e.target.value))}>
                        <option value="0">Selecione</option>
                        {aeroportos.map(destino => (
                            <option key={destino.id} value={destino.id}>{destino.nome} - {destino.cidade} - {destino.pais}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="hpartida">Hora de partida</label>
                    <input type="text" name="hpartida" id="hpartida" value={hora_partida} onChange={e => setHoraPartida(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="hchegada">Hora de chegada</label>
                    <input type="text" name="hchegada" id="hchegada" value={hora_chegada} onChange={e => setHoraChegada(e.target.value)} />
                </div>
                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
            </form>
        </div>
    );
};

export default CreateVoo;
