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

app.use('/', express.static(join(__dirname, 'client')));
app.use('/node', express.static(join(__dirname, 'node_modules')));

io.on('connection', (socket) => {
	console.log('connection event', socket);

	socket.on('disconnect', () => {
		console.log('disconnect event');
	});
});

server.listen(port, () => {
	console.log('server starting');
});
