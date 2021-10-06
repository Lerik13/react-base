import React, { useState } from 'react';

function App() {
	const [likes, setLikes] = useState(5)
	const [value, setValue] = useState('Default text')

	return (
		<div className="App">
			<h1>{likes}</h1>
			<h1>{value}</h1>
			<input 
				type="text"
				value={value}
				onChange={event => setValue(event.target.value)}
			/>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
}

export default App;
