import go_img from '../img/game-over.png'

function GameOver(props) {
	return (
		<div className="gameover">
			{props.game.over ? <img src={go_img} alt="" /> : ""}
			<p>Elért hosszúság: {props.game.snakeDots.length}</p>
			<div>
				<button onClick={()=>props.setGame(props.initial)}>Új játék</button>
				<button onClick={()=>props.setHighscore(true)} style={{marginLeft:20}}>Highscore</button>
			</div>
		</div>
	)
}

export default GameOver