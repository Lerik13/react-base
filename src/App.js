import React, { useEffect, useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount } from './utils/pages';
import { usePagination } from './hooks/usePagination';

function App() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const pagesArray = usePagination(totalPages)

	const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page)
		setPosts(response.data)
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit))
	})

	useEffect(() => {
		fetchPosts(limit, page)
	}, []);
	
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	// Get post from child component
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	const changePage = (page) => {
		setPage(page)
		fetchPosts(limit, page)
	}

	return (
		<div className="App">
			<button onClick={() => fetchPosts(limit, page)}>GET POSTS</button>
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
			{postError &&
				<h1>Error happened: {postError}</h1>
			}
			{ isPostsLoading
				? <div className="loader"><Loader /></div>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts:" />
			}
			<div className="page__wrapper">
				{pagesArray.map(p => 
					<span 
						onClick={() => changePage(p)}
						key={p} 
						className={p === page ? 'page page__current' : 'page'}
					>
						{p}
					</span>
				)}
			</div>
		</div>
	);
}

export default App;