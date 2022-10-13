import {Meta, StoryObj} from '@storybook/react'
import { Heading, Headingprops} from "./Heading";

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Gigi Lindinho',
        size: 'md',
    },
    argTypes:{
        size: {
            options: ['sm','md','lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }

} as Meta<Headingprops>

export const Default: StoryObj<Headingprops>={}

export const Small: StoryObj<Headingprops>={
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<Headingprops>={
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<Headingprops>={
    args: {
        asChild : true,
        children: (
            <h1>uma coisa bem nova e moderna</h1>
        )
    },

    argTypes: {
        children:{
            table:{
                disable: true,
            }
        },

        asChild:{
            table:{
                disable: true,
            }
        }
    }
}