import React, { useState, useRef } from 'react';
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

	const bodyInputRef = useRef(); // to get access to Uncontrolled component

	const addNewPost = (e) => {
		e.preventDefault();
		console.log(title);
		console.log(bodyInputRef.current.value);
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
				<input ref={bodyInputRef} type="text"/>
 				<MyInput 
					ref={bodyInputRef}
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
