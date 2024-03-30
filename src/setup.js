import { Composite, Engine, Runner } from "matter-js";
import { outerWalls } from "./borders.js";
import { generateMazeWalls } from "./maze.js";
import { goal, player } from "./objects.js";

// matter-js setup
const engine = Engine.create();
engine.gravity.y = 0;
// const render = Render.create({
// 	element: document.body,
// 	engine,
// 	options: {
// 		width: boardWidth,
// 		height: boardHeight,
// 		wireframes: false,
// 		background: '#939',
// 	},
// });

const maze = generateMazeWalls();

// Render the maze
Runner.run(engine);
// Render.run(render);
Composite.add(engine.world, outerWalls);
Composite.add(engine.world, maze);
Composite.add(engine.world, goal);
Composite.add(engine.world, player);

