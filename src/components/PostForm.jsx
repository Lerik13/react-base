import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
	const [post, setPost] = useState({title: '', body: ''})

	const addNewPost = (e) => {
		e.preventDefault();
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost)
		setPost({title: '', body: ''})
	}

	return (
		<form>
			{/* Controlled Component */}
			<MyInput
				value={post.title}
				onChange={e => setPost({...post, title: e.target.value})}
				type="text"
				placeholder="Title of Post"
			/>
			<MyInput 
				value={post.body}
				onChange={e => setPost({...post, body: e.target.value})}
				type="text"
				placeholder="Description of Post"
			/>
			<MyButton onClick={addNewPost}>Create Post</MyButton>
		</form>
	);
};

export default PostForm;