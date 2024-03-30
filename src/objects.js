import { Bodies } from "matter-js";
import { boardHeight, boardWidth, goalOptions, horizontalSpacing, playerOptions, verticalSpacing } from "./options.js";

export const goal = Bodies.rectangle(
	boardWidth - horizontalSpacing / 2,
	boardHeight - verticalSpacing / 2,
	horizontalSpacing * 0.9,
	verticalSpacing * 0.9,
	goalOptions
);

export const player = Bodies.circle(
	horizontalSpacing / 2,
	verticalSpacing / 2,
	Math.min(horizontalSpacing, verticalSpacing) * 0.3,
	playerOptions
);
