import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { Welcome } from './Components/Welcome/Welcome';
import PostList from './Components/PostList/PostList';

class App extends Component { //antes era una clase funcional (con function)
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((posts) =>
				this.setState({
					posts: [...posts],
				})
			);
	}
	render() {
		const { posts } = this.state;
		return (
			<div className='App'>
				{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
				<Welcome />
				<PostList posts={posts} />
			</div>
		);
	}
}

export default App;
