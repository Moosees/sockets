import express from 'express';
import { createServer } from 'node:http';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
let connectedClients = [];

app.use('/', express.static(join(__dirname, 'client')));
app.use('/node', express.static(join(__dirname, 'node_modules')));

io.on('connection', (socket) => {
	connectedClients.push(socket.id);
	console.log(`${socket.id} connected`);

	socket.on('disconnect', () => {
		connectedClients = connectedClients.filter(id => id !== socket.id);
		console.log(`${socket.id} disconnected`);
	});
});

server.listen(port, () => {
	console.log('server starting');
});
