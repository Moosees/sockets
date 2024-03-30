export const boardWidth = 800;
export const boardHeight = 800;
export const horizontalCells = Math.floor(width / 125);
export const verticalCells = Math.floor(height / 125);
export const horizontalSpacing = width / horizontalCells;
export const verticalSpacing = height / verticalCells;
export const playerVelocity = 5;

export const borderOptions = {
	isStatic: true,
	label: 'border',
	render: {
		fillStyle: '#000',
	},
};

export const wallOptions = {
	isStatic: true,
	label: 'wall',
	render: {
		fillStyle: '#333',
	},
};

export const goalOptions = { isStatic: true, label: 'goal', render: { fillStyle: '#5c5' } };

export const playerOptions = {
	label: 'player',
	friction: 0.05,
	frictionAir: 0.005,
	render: { fillStyle: '#f0f' },
};
