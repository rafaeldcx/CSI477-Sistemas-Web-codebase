import express from 'express';
import cors from "cors";
import { passageiroRoutes } from './src/routes/passageiros.js';
import { reservaRoutes } from './src/routes/reservas.js';
import { aeroportoRoutes } from './src/routes/aeroporto.js';
import { vooRoutes } from './src/routes/voo.js';

const server = express();
const PORT = 4900;

// Middleware para analisar o corpo das requisições JSON
server.use(express.json());
server.use(cors());

// Routes
server.get('/', (request, response) => {
    response.json({
        message: 'Status: Server is running.'
    });
});

server.use(passageiroRoutes);
server.use(reservaRoutes);
server.use(aeroportoRoutes);
server.use(vooRoutes);

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`);
});
