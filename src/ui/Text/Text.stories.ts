import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Text } from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'UI/Text',
	component: Text,
	tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Hello World!',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Hi there!',
	},
};
