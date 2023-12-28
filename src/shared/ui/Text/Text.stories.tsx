import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};
export const OnlyText: Story = {
    args: {
        text: 'Text',
    },
};

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title',
    },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTextDark: Story = {
    args: {
        text: 'Text',
    },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
