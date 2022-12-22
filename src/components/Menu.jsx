import { useState } from 'react'
import GameOver from './GameOver'
import Highscore from './Highscore'

function Menu(props) {

	const [highscore,setHighscore] = useState(false)

	return (
		<div className='game-area'>
			{highscore ?
				<Highscore game={props.game} setGame={props.setGame} initial={props.initial} />
			:
				<GameOver game={props.game} setGame={props.setGame} initial={props.initial} setHighscore={setHighscore} />
			}
		</div>
	)
}

export default Menu