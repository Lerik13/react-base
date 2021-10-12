import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
	const params = useParams()
	const [post, setPost] = useState({})
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, Error] = useFetching(async (id) => {
		const response = await PostService.getById(id)
		setPost(response.data)
	})
	const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id)
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostById(params.id)
		fetchComments(params.id)
	}, [])

	return (
		<div>
			<h1>Post Id: {params.id}</h1>
			{isLoading
				? <Loader/>
				: <div><h3>{post.id}. {post.title}</h3><div>{post.body}</div></div>
			}
			<h2>Comments</h2>
			{isComLoading
				? <Loader/>
				: <div>
					{comments.map(comm => 
						<div style={{marginTop: 15}}>
							<h5>{comm.email}</h5>
							<p>{comm.body}</p>
						</div>
					)}
				</div>
			}
		</div>
	);
};

export default PostIdPage;