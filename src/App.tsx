import './App.css';

import { Text, Button } from './ui';
import {
	IdGenerator,
	RegistrationFormState,
	RegistrationFormRefs,
	RegistrationFormRefsCustomInput,
	RegistrationFormRefsHookForm,
	RegistrationFormValidated,
} from './components';

import { TestForm } from './components/RegistrationForm/TestForm';

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
			<RegistrationFormRefsHookForm />
			<RegistrationFormValidated />
			<TestForm />
			*/}
			<TestForm />
		</>
	);
}

export default App;
