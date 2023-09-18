import { Radio } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <Radio {...props}/>
}

const config: ComponentInfo = {
    name: 'Radio',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'checked',
            type: 'boolean',
        },
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
            name: 'disabled',
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
            name: 'overlay',
            type: 'boolean',
        },
        {
            name: 'readOnly',
            type: 'boolean',
        },
        {
            name: 'required',
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
            component: { name: 'Radio', options: { text: 'Radio Button', type: 'outlined' } },
        },
    ],
}

export default {
    component,
    ...config,
}