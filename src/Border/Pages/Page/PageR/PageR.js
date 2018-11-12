import React from 'react';
import classes from './PageR.module.css';
import Card from './Card/Card';

const Page = (props) => {

	return(
		<div className = {classes.container}>
			<Card/>
		</div>
    )
};

export default Page;