import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import { Text, Button } from '../../ui';

export const IdGenerator = () => {
	const [id, setId] = useState(uuidv4());
	const handleGenerateId = () => {
		setId(uuidv4());
	};

	return (
		<>
			<Text>{id}</Text>
			<Button label='Refresh' onClick={handleGenerateId} />
		</>
	);
};
