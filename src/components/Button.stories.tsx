import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        variant: {
            options: ["primary", "secondary"],
            control: { type: "radio" },
        },
        disabled: {control: "boolean"},
        onClick: { action: "clicked" ,}
    }, 
    args: {
        children: "Click here", 
        variant: "primary", 
        disabled: false,
    }
};

export default meta; 

type Story = StoryObj< typeof Button>;

export const Primary: Story = {}; 
export const Secondary: Story = {
    args: {
        variant: "secondary"
    }
}
export const Disabled: Story = {
    args: {
        disabled: true
    }
}


