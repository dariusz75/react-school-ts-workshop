import { ReactElement, useState } from 'react';

import { Button } from '../../ui';
import { Step1, Step2, Step3 } from './index';

export const FormWizard = () => {
	const steps: ReactElement[] = [<Step1 />, <Step2 />, <Step3 />];
	const [step, setStep] = useState(0);

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
