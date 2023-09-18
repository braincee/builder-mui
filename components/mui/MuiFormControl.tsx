import { FormControl } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <FormControl {...props}/>
}

const config: ComponentInfo = {
    name: 'FormControl',
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
            type: 'string,',
        },

        {
            name: 'disabled',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'error',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'orientation',
            type: 'string',
            enum: ['horizontal', 'vertical'],
            defaultValue: 'horizontal',
        },
        {
            name: 'required',
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
    ],
}

export default {
    component,
    ...config,
}
