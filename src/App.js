import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'Description'},
		{id: 2, title: 'JavaScript 2', body: 'Description 2'},
		{id: 3, title: 'JavaScript 3', body: 'Description 3'}
	]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}
	// Get post from child component
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className="App">
			<PostForm create={createPost} />
			{posts.length // posts.length !== 0
				? <PostList remove={removePost} posts={posts} title="Posts about JS:" />
				: <h1 style={{textAlign: 'center'}}>No Posts</h1>
			}
			
		</div>
	);
}

export default App;
