import { cn } from "@/app/utils";
import { ComponentProps, forwardRef } from "react"
import { tv, VariantProps } from 'tailwind-variants';

const buttonStyles = tv({
    base: "w-full rounded-md font-semibold focus:outline-none disabled:cursor-not-allowed",
    variants: {
        varient: {
            solid: "",
            outline: "border-2",
            ghost: "transiton-colors duration-300"
        },
        size: {
            sm: "px-4 py-2 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg"
        },
        colorSchema: {
            primary: "text-white"
        }
    },
    compoundVariants: [
        {
            varient: "solid",
            colorSchema: "primary",
            className: "bg-primary-500 hover:bg-primary-600"
        },
        {
            varient: "outline",
            colorSchema: "primary",
            className: "text-primary-600 border-primary-500 bg-transparent hover:bg-primary-100"
        },
        {
            varient: "ghost",
            colorSchema: "primary",
            className: "text-primary-600 bg-transparent hover:bg-primary-100"
        },
    ],
    defaultVariants: {
        varient: "solid",
        size: "md",
        colorSchema: "primary"
    }
})

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({varient, size, colorSchema, className, ...props }, ref) => {
    return (
        <button ref={ref} className={cn(buttonStyles({varient, size, colorSchema, className}))} {...props} />
    )
})
