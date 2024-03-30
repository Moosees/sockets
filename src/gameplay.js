import { Events } from "matter-js";

Events.on(engine, 'collisionStart', (e) => {
	e.pairs.forEach(({ bodyA, bodyB }) => {
		const labels = [bodyA.label, bodyB.label];

		if (labels.includes('player') && labels.includes('goal')) {
			// winGame();
			console.log('Game over');
		}
	});
});

// const winGame = () => {
// 	engine.world.bodies.forEach((body) => {
// 		if (body.label === 'wall') {
// 			Body.setStatic(body, false);
// 		}
// 	});
// 	currentVelocity = 20;
// 	Events.off(engine, 'collisionStart');

// 	Body.setVelocity(player, { x: -20, y: -20 });
// 	Body.scale(player, 2, 2);
// 	Body.setMass(player, 50);
// 	Body.set(player, { friction: 0.01, frictionAir: 0.001 });
// };

// document.addEventListener('keydown', (e) => {
// 	const { x, y } = player.velocity;

// 	switch (e.keyCode) {
// 		// Up
// 		case 87:
// 		case 38:
// 			Body.setVelocity(player, { x, y: y - currentVelocity });
// 			break;

// 		// Right
// 		case 68:
// 		case 39:
// 			Body.setVelocity(player, { x: x + currentVelocity, y });
// 			break;

// 		// Down
// 		case 83:
// 		case 40:
// 			Body.setVelocity(player, { x, y: y + currentVelocity });
// 			break;

// 		// Left
// 		case 65:
// 		case 37:
// 			Body.setVelocity(player, { x: x - currentVelocity, y });
// 			break;

// 		default:
// 			break;
// 	}
// });
