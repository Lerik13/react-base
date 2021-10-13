import React, { useEffect, useRef, useState } from 'react';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/MyModal/MyModal';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)
	const [totalPages, setTotalPages] = useState(0)
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const lastElement = useRef()
	const observer = useRef();
	
	const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page)
		setPosts([...posts,...response.data])
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit))
	})

	useEffect(() => {
		if (isPostsLoading) return;
		if (observer.current) observer.current.disconnect()

		var callback = function(entries, observer) {
			if (entries[0].isIntersecting && page < totalPages) { // don't work during hiding observing element
				console.log(page);
				setPage(page + 1)
			}
		}
		observer.current = new IntersectionObserver(callback)
		observer.current.observe(lastElement.current)
	}, [isPostsLoading]);

	useEffect(() => {
		fetchPosts(limit, page)
	}, [page]);
	
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
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts:" />
			<div ref={lastElement} style={{height: 20, background: 'red'}}/>
			{ isPostsLoading &&
				<div className="loader"><Loader /></div>
			}
			<Pagination
				page={page}
				changePage={changePage}
				totalPages={totalPages}
			/>
		</div>
	);
}

export default Posts;