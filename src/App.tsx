import './App.css';

import { Text, Button } from './ui';

function App() {
	return (
		<>
			<Text>Some text...</Text>
			<Button label='Click me' onClick={() => alert('test')} />
		</>
	);
}

export default App;
