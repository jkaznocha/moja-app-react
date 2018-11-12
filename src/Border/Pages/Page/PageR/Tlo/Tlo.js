import React from 'react';
import classes from './Tlo.module.css';


 const Tlo =(props)=>{

	let styleFace = {
		position: "absolute",
		width: "400px",
		height: "400px",
		backfaceVisibility: "hidden",
        textAlign: "center"	
	}

	return(
			<div className={classes.card}>
				<div className={classes.front} style = {styleFace} onClick={this.changecard} >
					front
				</div>
				<div className={classes.back} style = {styleFace} >
					back
				</div>
			</div>

    )};

export default Tlo;