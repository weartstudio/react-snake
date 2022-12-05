import { useState, useEffect, useMemo } from "react";
import getRandomChoords from "./hooks/getRandomChoords";
import Snake from "./components/Snake";
import Food from "./components/Food";

function App() {

  const [snake, setSnake] = useState([
		[0,0],
		[2,0],
		[4,0]
	]);
	const [food, setFood] = useState(getRandomChoords());
	const [direction, setDirection] = useState('RIGHT');

  useEffect(()=>handleDirection(), []);

	const handleDirection = () => {
		window.addEventListener('keydown', e => {
			e.key === 'ArrowUp' && setDirection('UP');
			e.key === 'ArrowDown' && setDirection('DOWN');
			e.key === 'ArrowLeft' && setDirection('LEFT');
			e.key === 'ArrowRight' && setDirection('RIGHT');
		});
	}

  return (
    <div className='game-area'>

			<Snake dots={snake} />
			<Food dot={food} />

		</div>
  )
}

export default App
