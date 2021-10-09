import React, { useEffect, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';
import PostService from './API/PostService';

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

	useEffect(() => {
		fetchPosts()
	}, []);
	
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	async function fetchPosts() {
		const posts = await PostService.getAll()
		setPosts(posts)
	}
	// Get post from child component
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className="App">
			<button onClick={fetchPosts}>GET POSTS</button>
			<MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
				Create new Post
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{margin: '15px 0'}} />
			<PostFilter 
				filter={filter}
				setFilter={setFilter} 
			/>
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts:" />
		</div>
	);
}

export default App;