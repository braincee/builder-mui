import { CircularProgress } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <CircularProgress {...props}/>
}


const config: ComponentInfo = {
    name: 'CircularProgress',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'color',
            type: 'text',
            enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
        },
        {
            name: 'component',
            type: 'string',
        },
        {
            name: 'determinate',
            type: 'boolean',
            defaultValue: 'false',
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
            name: 'thickness',
            type: 'number',
        },
        {
            name: 'value',
            type: 'number',
        },
        {
            name: 'variant',
            type: 'text',
            enum: ['solid', 'soft', 'outlined', 'plain'],
        },
    ],

    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Icon' },
        },
    ],
}

export default {
    component,
    ...config,
}
