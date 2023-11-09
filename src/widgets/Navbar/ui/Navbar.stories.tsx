import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],

};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
    args: {

    },
};
Primary.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear: Story = {
    args: {
    },
};

export const Outline: Story = {
    args: {
    },
};
