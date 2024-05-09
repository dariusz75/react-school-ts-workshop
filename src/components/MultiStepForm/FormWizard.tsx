import { type ChangeEventHandler, ReactElement, useState } from 'react';

import { Button } from '../../ui';
import { Step1, Step2, Step3 } from './index';

type RegistrationFormData = {
	firstName: string;
	surname: string;
	dob: string;
	hobby: string;
};

const defaultFormState: RegistrationFormData = {
	firstName: '',
	surname: '',
	dob: '',
	hobby: '',
};

export const FormWizard = () => {
	const [step, setStep] = useState(0);
	const [formData, setFormData] = useState(defaultFormState);

	const updateForm: ChangeEventHandler<HTMLInputElement> = (e) => {
		const id = e.target.id;
		const value = e.target.value;

		console.log('id is: ', id);
		console.log('value is: ', value);

		setFormData({
			...formData,
			[id]: value,
		});

		console.log('formData is: ', formData);
	};

	const steps: ReactElement[] = [
		<Step1 {...formData} updateForm={updateForm} />,
		<Step2 {...formData} updateForm={updateForm} />,
		<Step3 {...formData} updateForm={updateForm} />,
	];

	const handlePrev = () => {
		if (step > 0) {
			setStep((prevStep) => prevStep - 1);
		}
		console.log('prev', step);
	};

	const handleNext = () => {
		if (step < steps.length - 1) {
			setStep((prevStep) => prevStep + 1);
		}

		console.log('next', step);
	};

	return (
		<section className='inline-flex flex-col'>
			<div>{`${step + 1}/${steps.length}`}</div>
			{steps[step]}
			<div>
				<Button
					label='<< PREV'
					size='small'
					onClick={handlePrev}
					disabled={step === 0}
				/>
				<Button
					label='NEXT >>'
					size='small'
					onClick={handleNext}
					disabled={step === 2}
				/>
			</div>
		</section>
	);
};
