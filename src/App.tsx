import './App.css';

import { Text, Button } from './ui';
import {
	IdGenerator,
	RegistrationFormState,
	RegistrationFormRefs,
	RegistrationFormRefsCustomInput,
} from './components';

function App() {
	return (
		<>
			{/*
			<Text>Some text...</Text>
			<Button label='Click me' onClick={() => alert('test')} />
			<IdGenerator />
			<RegistrationFormState />
			<RegistrationFormRefs />
			<RegistrationFormRefsCustomInput />
			*/}
			<RegistrationFormRefs />
		</>
	);
}

export default App;
