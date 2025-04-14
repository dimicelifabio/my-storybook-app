import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { within } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "select",
      options: [true, false, null],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "click me",
    onclick: () => alert("Clicked"),
  },
};

export const DisabledButton: Story = {
  args: {
    label: "Disabled Button",
    onclick: () => alert("This should not happen"),
    disabled: true,
  },
};

export const AutoDisable: Story = {
  args: {
    label: "Auto-disable for 5 seconds",
    onclick: () => alert("Operation completed after 5 seconds"),
    disabled: null,
  },
};

export const WithInteraction: Story = {
  args: {
    label: "Click me",
    onclick: () => alert("Button clicked!"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
  }
};