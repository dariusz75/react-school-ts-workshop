import './App.css';

import { Text, Button } from './ui';
import { IdGenerator } from './components';
import { RegistrationFormState } from './components/RegistrationForm/RegistrationFormState';

function App() {
	return (
		<>
			{/* <IdGenerator />
			<Text>Some text...</Text>
			<Button label='Click me' onClick={() => alert('test')} /> */}
			<RegistrationFormState />
		</>
	);
}

export default App;
