import './App.css';

import { Text, Button } from './ui';
import {
	IdGenerator,
	RegistrationFormState,
	RegistrationFormRefs,
} from './components';

function App() {
	return (
		<>
			{/* <IdGenerator />
			<Text>Some text...</Text>
			<Button label='Click me' onClick={() => alert('test')} /> 
			<RegistrationFormState /> */}
			<RegistrationFormRefs />
		</>
	);
}

export default App;
