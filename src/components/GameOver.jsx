import React from 'react'
import go_img from '../img/game-over.png'

function GameOver({game,setGame,initial}) {
	return (
		<div className='game-area'>
			<div className="gameover">
				{game.over ? <img src={go_img} alt="" /> : ""}
				<p>Elért hosszúság: {game.snakeDots.length}</p>
				<div>
					<button onClick={()=>setGame(initial)}>Új játék</button>
					<button onClick={()=>setGame(initial)} style={{marginLeft:20}}>Highscore</button>
				</div>
			</div>
		</div>
	)
}

export default GameOver