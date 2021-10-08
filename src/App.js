import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'Description'},
		{id: 2, title: 'zzz 2', body: 'aaa'},
		{id: 3, title: 'bbb 3', body: 'bbb'}
	]);
	const [selectedSort, setSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	function getSortedPosts() {
		console.log('getSortedPosts !');
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
		}
		return posts
	}
	const sortedPost = getSortedPosts()

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}
	// Get post from child component
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const sortPosts = (sort) => {
		setSelectedSort(sort)
	}

	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{margin: '15px 0'}} />
			<div>
				<MyInput
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
					placeholder="Search"
				/>
				<MySelect
					value={selectedSort}
					onChange={sortPosts}
					defaultValue="Sorting"
					options={[
						{value: 'title', name: 'by Name'},
						{value: 'body', name: 'by Description'}
					]}
				/>
			</div>
			{posts.length // posts.length !== 0
				? <PostList remove={removePost} posts={sortedPost} title="Posts about JS:" />
				: <h1 style={{textAlign: 'center'}}>No Posts</h1>
			}
			
		</div>
	);
}

export default App;
