import { Meta, StoryObj } from "@storybook/react"
import { Button } from "./index"

const meta: Meta<typeof Button> = {
    title: "Components/Button",
    component: Button,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
}

export default meta;

type Story = StoryObj<typeof meta>

// export const Default: Story = {
//     args: {
//         children: "Button",
//         varient: "solid",
//         size: "md",
//         colorSchema: "primary"
//     }
// }

export const Solid: Story = {
    args: {
        varient: "solid",
        children: "Button"
    }
}

export const Outline: Story = {
    args: {
        varient: "outline",
        children: "Button"
    }
}

export const Ghost: Story = {
    args: {
        varient: "ghost",
        children: "Button"
    }
}
