import {Meta, StoryObj} from '@storybook/react'
import { Buttom, Buttomprops} from "./Buttom";

export default {
    title: 'Components/Buttom',
    component: Buttom,
    args: {
        children: 'Create account',
        size: 'md',
    },
    argTypes:{}

} as Meta<Buttomprops>

export const Default: StoryObj<Buttomprops>={}
