import { boardHeight, boardWidth, borderOptions } from "./options.js";

export const outerWalls = [
	Bodies.rectangle(boardWidth / 2, 0, boardWidth, 10, borderOptions),
	Bodies.rectangle(boardWidth / 2, boardHeight, boardWidth, 10, borderOptions),
	Bodies.rectangle(0, boardHeight / 2, 10, boardHeight, borderOptions),
	Bodies.rectangle(boardWidth, boardHeight / 2, 10, boardHeight, borderOptions),
];
