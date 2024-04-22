import './App.css';

import { Text, Button } from './ui';
import { IdGenerator } from './components';

function App() {
	return (
		<>
			<IdGenerator />
			<Text>Some text...</Text>
			<Button label='Click me' onClick={() => alert('test')} />
		</>
	);
}

export default App;
