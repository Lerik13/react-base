import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'Description'},
		{id: 2, title: 'JavaScript 2', body: 'Description 2'},
		{id: 3, title: 'JavaScript 3', body: 'Description 3'}
	]);

	const [posts2, setPosts2] = useState([
		{id: 1, title: 'Python', body: 'Description'},
		{id: 2, title: 'Python 2', body: 'Description 2'},
		{id: 3, title: 'Python 3', body: 'Description 3'}
	]);

	return (
		<div className="App">
			<PostList posts={posts} title="Posts about JS:" />
			<PostList posts={posts2} title="Posts about Python:" />
		</div>
	);
}

export default App;
