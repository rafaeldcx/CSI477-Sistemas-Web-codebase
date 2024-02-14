import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <h2>Agendador de passagens de voo</h2>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/passageiros">Passageiros</Link></li>
                <li><Link to="/reservas">Reservas</Link></li>
                <li><Link to="/voos">Voos</Link></li>
                <li><Link to="/aeroportos">Aeroportos</Link></li>
            </ul>
        </div>
    )
}

export default Menu
