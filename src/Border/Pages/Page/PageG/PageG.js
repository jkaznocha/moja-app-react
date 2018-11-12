import React from 'react';
import classes from './PageG.module.css';
import Card from './Card/Card';

const Page = (props) => {

	return(
		<div className = {classes.container}>
			<Card/>
		</div>
    )
};

export default Page;