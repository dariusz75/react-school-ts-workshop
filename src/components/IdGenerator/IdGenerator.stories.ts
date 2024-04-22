import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { IdGenerator } from './IdGenerator';

const meta = {
	title: 'Components/IdGenerator',
	component: IdGenerator,
} satisfies Meta<typeof IdGenerator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _IdGenerator: Story = {};
