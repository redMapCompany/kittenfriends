import React from 'react';
import Card from './Card';

const CardList = ({ kittens }) => {
	/*if(true) {
		throw new Error('Nooo!');
	}*/
	return(
		<div>
			{
				kittens.map((user, i) => {
			return (
				<Card 
				key={i} 
				id={kittens[i].id} 
				name={kittens[i].name} 
				email={kittens[i].email}/>
					);
				})
			}
		</div>
	);
}
export default CardList;