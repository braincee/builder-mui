import { RadioGroup } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    const { children, ...rest } = props

    return <RadioGroup {...rest}>{children}</RadioGroup>
}

const config: ComponentInfo = {
    name: 'RadioGroup',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'className',
            type: 'string',
        },
        {
            name: 'color',
            type: 'text',
            enum: ['danger', 'info', 'neutral', 'primary', 'success', 'warning'],
        },
        {
            name: 'component',
            type: 'string',
        },
        {
            name: 'defaultValue',
            type: 'string',
        },
        {
            name: 'disableIcon',
            type: 'boolean',
        },
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'orientation',
            type: 'text',
            enum: ['horizontal', 'vertical'],
            defaultValue: 'horizontal',
        },
        {
            name: 'overlay',
            type: 'boolean',
        },
        {
            name: 'size',
            type: 'text',
            enum: ['sm', 'md', 'lg'],
        },
        {
            name: 'slotProps',
            type: 'object',
            defaultValue: {},
        },
        {
            name: 'value',
            type: 'string',
        },

        {
            name: 'variant',
            type: 'text',
            enum: ['solid', 'soft', 'outlined', 'plain', 'outlined'],
        },
    ],

    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Radio', options: { text: 'RadioButton', type: 'outlined' } },
        },
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Radio', options: { text: 'RadioButton2', type: 'outlined' } },
        },
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Radio', options: { text: 'RadioButton3', type: 'outlined' } },
        },
    ],
}

export default {
    component,
    ...config,
}