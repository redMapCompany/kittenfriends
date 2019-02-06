import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSearchField, requestKittens } from '../actions';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchKittens.searchField,
		kittens: state.requestKittens.kittens,
		isPending: state.requestKittens.isPending
		//error: state.requestKittens.error
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestKittens: () => dispatch(requestKittens())
	}
}



class App extends Component {
	
	componentDidMount(){
		this.props.onRequestKittens();	
	}

	render() {
	
		const { searchField, onSearchChange, kittens, isPending } = this.props;
		const filteredKittens = kittens.filter(kitten => {
			return kitten.name.toLowerCase().includes(searchField.toLowerCase());
		})
			return (
		
		<div className='tc'>
			<h1 className='f1'>KittenFriends</h1>
			<SearchBox seachChange={onSearchChange}/>
			<Scroll>
				{ isPending?<h1>Loading</h1>:
				<ErrorBoundry>
					<CardList kittens={ filteredKittens } />	
				</ErrorBoundry>	
			}
			</Scroll>
		</div>
		
		);
		}
		
	}
	

	

export default connect(mapStateToProps, mapDispatchToProps)(App);
