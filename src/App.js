/* eslint-disable default-case */
import React, { useState, useEffect } from 'react'
import getRandomChoordinates from "./hooks/getRandomChoordinates";
import Snake from "./components/Snake";
import Food from "./components/Food";
import useInterval from './hooks/useInterval';
import Menu from './components/Menu';
import eatSuccess from './sounds/src_sounds_eat_success.wav';
import dirsound from './sounds/src_sounds_preview.wav';

const size = 4;

const initialState = {
  food: getRandomChoordinates(),
  speed: 200,
  direction: 'RIGHT',
  snakeDots: [
    [0,0],
    [size,0],
  ],
  over: false,
}

function App() {
  const [game,setGame] = useState(initialState);

  useEffect(() => {
    document.onkeydown = onKeyDown;
  },[])

  useEffect(()=>{
    checkIfOutOfBorders();
    checkIfCollapsed();
    checkIfEat();
  },[game.snakeDots])

	const onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        setGame((prev)=>({...prev, direction: 'UP'}));
        break;
      case 40:
        setGame((prev)=>({...prev, direction: 'DOWN'}));
        break;
      case 37:
        setGame((prev)=>({...prev, direction: 'LEFT'}));
        break;
      case 39:
        setGame((prev)=>({...prev, direction: 'RIGHT'}));
        break;
    }
		new Audio(dirsound).play();
  }

	const moveSnake = () => {
    var dots = [...game.snakeDots];
    var head = dots[dots.length - 1];

    switch (game.direction) {
      case 'RIGHT':
        head = [head[0] + size, head[1]];
        break;
      case 'LEFT':
        head = [head[0] - size, head[1]];
        break;
      case 'DOWN':
        head = [head[0], head[1] + size];
        break;
      case 'UP':
        head = [head[0], head[1] - size];
        break;
    }


    dots.push(head);
    dots.shift();
    setGame((prev)=>({...prev, snakeDots: dots}));
  }
  useInterval(moveSnake, game.speed);

	const checkIfOutOfBorders = () => {
    let head = game.snakeDots[game.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      onGameOver();
    }
  }

	const checkIfCollapsed = () => {
    let snake = [...game.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        onGameOver();
      }
    })
  }

  const checkIfEat = () => {
    let head = game.snakeDots[game.snakeDots.length - 1];
    let food = game.food;
    if (head[0] === food[0] && head[1] === food[1]) {
      setGame((prev)=>({...prev, food: getRandomChoordinates()}));
      enlargeSnake();
      increaseSpeed();
    }
  }

	const enlargeSnake = () => {
    let newSnake = [...game.snakeDots];
    newSnake.unshift([])
    setGame((prev)=>({...prev, snakeDots: newSnake}));
		new Audio(eatSuccess).play();
  }

	const increaseSpeed = () => {
		if (game.speed > 100) {
      setGame((prev)=>({...prev, speed: game.speed-10}));
    }
	}

	const onGameOver = () => {
    var sd = game.snakeDots;
    setGame(prev=>({...prev,snakeDots: sd, over: true}))
  }

  if(game.over){
    return <Menu game={game} setGame={setGame} initial={initialState} />
  }

  return (
    <div>
      <div className="game-area">
        <span>{game.snakeDots.length}</span>
        <Snake dots={game.snakeDots} dir={game.direction}/>
        <Food dot={game.food}/>
      </div>
      <div className="mobile">
        <button className='btnUp' onClick={()=>setGame(prev=>({...prev,direction: 'UP'}))}>&uarr;</button>
        <button className='btnLeft' onClick={()=>setGame(prev=>({...prev,direction: 'LEFT'}))}>&larr;</button>
        <button className='btnRight' onClick={()=>setGame(prev=>({...prev,direction: 'RIGHT'}))}>&rarr;</button>
        <button className='btnDown' onClick={()=>setGame(prev=>({...prev,direction: 'DOWN'}))}>&darr;</button>
      </div>
    </div>
  )

}

export default App