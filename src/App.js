import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'Description'},
		{id: 2, title: 'JavaScript 2', body: 'Description 2'},
		{id: 3, title: 'JavaScript 3', body: 'Description 3'}
	]);

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	const addNewPost = (e) => {
		e.preventDefault();

		const newPost = {
			id: Date.now(),
			title,
			body
		}
		setPosts([...posts, newPost])
		setTitle('')
		setBody('')
	}

	return (
		<div className="App">
			<form>
				{/* Controlled Component */}
				<MyInput
					value={title}
					onChange={e => setTitle(e.target.value)}
					type="text"
					placeholder="Title of Post"
				/>
 				<MyInput 
					value={body}
					onChange={e => setBody(e.target.value)}
					type="text"
					placeholder="Description of Post"
				/>
				<MyButton onClick={addNewPost}>Create Post</MyButton>
			</form>
			<PostList posts={posts} title="Posts about JS:" />
		</div>
	);
}

export default App;
