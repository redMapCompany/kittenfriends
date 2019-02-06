import React from 'react';

const SearchBox = ({ searchfield, seachChange }) => {
	return (
		<div className='pa2'>
			<input 
			className='pa3 ba b--green bg-lightest-blue'
			type='search' 
			plaseholder='search kittens' 
			onChange={seachChange}
			/>
		</div>
	);
}
export default SearchBox;