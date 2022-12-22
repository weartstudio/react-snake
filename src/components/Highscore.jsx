import React, { useState, useEffect } from 'react'
import { db } from '../hooks/firebase';
import {addDoc, collection, doc, getDocs} from "firebase/firestore"

function Highscore(props) {

	const [scores,setScores] = useState([]);
	const [name,setName] = useState('');
	const highscoreCollectionRef = collection(db,'highscore')

	useEffect(() => {
		getScores();
	}, [])

	const getScores = async () => {
		const data = await getDocs(highscoreCollectionRef);
		setScores(data.docs.map(doc=>({...doc.data(),id: doc.id})));
	}

	const handleSave = async () => {
		if(name != ''){
			await addDoc(highscoreCollectionRef,{name: name,score: props.game.snakeDots.length});
			getScores();
			setName('')
		}
	}

	return (
		<div className='gameover'>

			<div className="save">
				<p>Ebben a körben: {props.game.snakeDots.length}</p>
				<div className="input">
					<input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
					<input type="button" value='Beküldés' onClick={()=>handleSave()} />
				</div>
			</div>

			<div className="scores">
				<table>
					<tr><th>Név</th><th>Pont</th></tr>
					{scores
						.sort((a,b)=>(a.score>b.score ? -1 : 1))
						.map(doc=>(
							<tr>
							<td>{doc.name}</td>
							<td>{doc.score}</td>
						</tr>
					))}
				</table>
			</div>

			<button onClick={()=>props.setGame(props.initial)}>Új játék</button>

		</div>
	)
}

export default Highscore