function Snake({dots, dir}) {
	return (
		<div>

		{dots.map( (dot,i,row) =>
			{
				const style = {
					left: `${dot[0]}%`,
					top: `${dot[1]}%`
				};
				if(i+1===row.length) return (
					<div className={`snake-dot snake-head ${dir}`} key={i} style={style}>
						<div className="eye1"></div>
						<div className="eye2"></div>
					</div>
				)
				return (
					<div className={`snake-dot`} key={i} style={style}></div>
				)
			}
		)}
		</div>
	)
}

export default Snake