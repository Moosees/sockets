import { Bodies } from "matter-js";
import { horizontalCells, horizontalSpacing, verticalCells, verticalSpacing } from "./options.js";

const create2dArray = (cols, rows, fill) => {
	return Array.from(Array(rows), () =>
		Array(cols).fill(fill)
	);
};

const generateStartingRoom = () => ({
	x: Math.floor(Math.random() * horizontalCells),
	y: Math.floor(Math.random() * verticalCells),
});

const canRoomBeVisited = (x, y, rooms) => {
	// check if room is out of bounds
	if (x <= 0 || x > horizontalCells || y <= 0 || y > verticalCells) return false;

	// check if room is already visited
	return !rooms[y][x];
};

const findValidAdjacentRooms = (x, y, rooms) => {
	const adjacentRooms = [];

	if (canRoomBeVisited(x, y - 1, rooms)) {
		adjacentRooms.push({ x, y: y - 1, direction: 'up' });
	}
	if (canRoomBeVisited(x + 1, y, rooms)) {
		adjacentRooms.push({ x: x + 1, y, direction: 'right' });
	}
	if (canRoomBeVisited(x, y + 1, rooms)) {
		adjacentRooms.push({ x, y: y + 1, direction: 'down' });
	}
	if (canRoomBeVisited(x - 1, y, rooms)) {
		adjacentRooms.push({ x: x - 1, y, direction: 'left' });
	}
	return adjacentRooms;
};

const breakWall = (nextRoom, horizontalWalls, verticalWalls) => {
	if (nextRoom.direction === 'up') {
		horizontalWalls[nextRoom.y][nextRoom.x] = false;
	}
	if (nextRoom.direction === 'right') {
		verticalWalls[nextRoom.y][nextRoom.x - 1] = false;
	}
	if (nextRoom.direction === 'down') {
		horizontalWalls[nextRoom.y - 1][nextRoom.x] = false;
	}
	if (nextRoom.direction === 'left') {
		verticalWalls[nextRoom.y][nextRoom.x] = false;
	}
};

const generateWalls = () => {
	const horizontalWallLayout = create2dArray(horizontalCells, verticalCells - 1, true);
	const horizontalWalls = [];

	horizontalWallLayout.forEach((row, y) => {
		row.forEach((wall, x) => {
			if (wall)
				horizontalWalls.push(
					Bodies.rectangle(
						horizontalSpacing * x + horizontalSpacing / 2,
						verticalSpacing * y + verticalSpacing,
						horizontalSpacing,
						8,
						wallOptions
					)
				);
		});
	});

	const verticalWallLayout = create2dArray(horizontalCells - 1, verticalCells, true);
	const verticalWalls = [];

	verticalWallLayout.forEach((row, y) => {
		row.forEach((wall, x) => {
			if (wall)
				verticalWalls.push(
					Bodies.rectangle(
						horizontalSpacing * x + horizontalSpacing,
						verticalSpacing * y + verticalSpacing / 2,
						8,
						verticalSpacing,
						wallOptions
					)
				);
		});
	});

	return { horizontalWalls, verticalWalls };
};

export const generateMazeWalls = () => {
	// generate a 2d array where we track what rooms are visited
	const rooms = create2dArray(horizontalCells, verticalCells, false);

	// create 2d arrays where all walls are true/built
	const { horizontalWalls, verticalWalls } = generateWalls();

	// generate a random room/cell
	const startingRoom = generateStartingRoom();

	// keep track of total and unvisited rooms so we know when to stop traversing
	const totalRooms = horizontalCells * verticalCells;
	let unvisitedRooms = totalRooms;

	// keep track of our path so we can backtrack when we hit a dead end
	const path = [startingRoom];

	// set starting room as visited and current room
	rooms[currentRoom.y][currentRoom.x] = true;
	let currentRoom = startingRoom;

	while (path.length && unvisitedRooms) {
		const adjacentRooms = findValidAdjacentRooms(currentRoom.x, currentRoom.y, rooms);

		if (adjacentRooms.length) {
			const direction = Math.floor(Math.random() * adjacentRooms.length);
			currentRoom = adjacentRooms[direction];

			breakWall(currentRoom, horizontalWalls, verticalWalls);

			path.push(currentRoom);

			rooms[currentRoom.y][currentRoom.x] = true;

			unvisitedRooms--;
		} else {
			path.pop();
			currentRoom = path[path.length - 1];
		}
	}

	return [...horizontalWalls, ...verticalWalls];
};
