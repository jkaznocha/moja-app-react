import React from 'react';
import classes from './Card.module.css';


 const Card =(props)=>{

		let styleFace = {
		position: "absolute",
		width: "400px",
		height: "400px",
		backfaceVisibility: "hidden",
        textAlign: "center"	
	}

	return(
			<div className={classes.card}>
				<div className={classes.front} style = {styleFace} >
					front
				</div>
				<div className={classes.back} style = {styleFace} >
					back
				</div>
			</div>

    )};

export default Card;