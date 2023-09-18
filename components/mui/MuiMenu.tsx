import { Menu } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <Menu {...props}/>
}

const config: ComponentInfo = {
    name: 'Menu',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'color',
            type: 'text',
            enum: ['danger', 'info', 'neutral', 'primary', 'success', 'warning'],
        },
        {
            name: 'components',
            type: 'string',
        },
        {
            name: 'disablePortal',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'invertedColors',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'keepMounted',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'open',
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
            name: 'variant',
            type: 'text',
            enum: ['solid', 'soft', 'outlined', 'plain'],
        },
    ],
    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Menu' },
        },
    ],
}

export default {
    component,
    ...config,
}
