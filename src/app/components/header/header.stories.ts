import { RouterTestingModule } from '@angular/router/testing';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  component: HeaderComponent,
  title: 'HeaderComponent',
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
  render: (args: HeaderComponent) => ({
    props: {
      ...args,
    },
    template: `<app-header ${argsToTemplate(args)}></app-header>`,
  }),
};
export default meta;
type Story = StoryObj<HeaderComponent>;

export const Default: Story = {
  args: {
    showTitles: false,
    leftTitle: 'LeftTitle',
    rightTitle: 'RightTitle',
  },
};

export const showTitles: Story = {
  args: {
    ...Default.args,
    showTitles: true,
  },
};
