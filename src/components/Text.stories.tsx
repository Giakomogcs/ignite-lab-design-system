import {Meta, StoryObj} from '@storybook/react'
import { Text, Textprops} from "./Text";

export default {
    title: 'Components/Text',
    component: Text,
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

} as Meta<Textprops>

export const Default: StoryObj<Textprops>={}

export const Small: StoryObj<Textprops>={
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<Textprops>={
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<Textprops>={
    args: {
        asChild : true,
        children: (
            <p>uma coisa bem nova e moderna</p>
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