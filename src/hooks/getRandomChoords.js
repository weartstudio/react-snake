function getRandomChoords() {
	const min = 1;
	const max = 98;
	let x = Math.floor(Math.random() * (max - min + 1) + min);
	let y = Math.floor(Math.random() * (max - min + 1) + min);
	return [x,y];
}

export default getRandomChoords