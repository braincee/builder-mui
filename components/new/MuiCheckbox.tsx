import { Checkbox } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    const { children, ...rest } = props

    return <Checkbox {...rest}>{children}</Checkbox>
}

const config: ComponentInfo = {
    name: 'Checkbox',
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
            enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
        },
        {
            name: 'component',
            type: 'string',
        },
        {
            name: 'defaultChecked',
            type: 'boolean',
        },
        {
            name: 'disabled',
            type: 'boolean',
        },
        {
            name: 'disableIcon',
            type: 'boolean',
        },
        {
            name: 'indeterminate',
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
            type: 'string',
        },
        {
            name: 'value',
            type: 'string',
        },

        {
            name: 'variant',
            type: 'text',
            enum: ['solid', 'soft', 'outlined', 'plain'],
        },
    ],
}

export default {
    component,
    ...config,
}