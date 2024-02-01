import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { LoaderComponent } from './loader.component';

const meta: Meta<LoaderComponent> = {
  component: LoaderComponent,
  title: 'LoaderComponent',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  render: (args: LoaderComponent) => ({
    props: {
      ...args,
    },
    template: `<app-loader></app-loader>`,
  }),
};
export default meta;
type Story = StoryObj<LoaderComponent>;

export const Default: Story = {
  args: {},
};
