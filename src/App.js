import React from 'react';
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {

	return (
		<div className="App">
			<PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}} />
			<PostItem post={{id: 2, title: 'Node JS', body: 'Description 2'}} />
			<PostItem post={{id: 3, title: 'PHP', body: 'Description 3'}} />
		</div>
	);
}

export default App;
