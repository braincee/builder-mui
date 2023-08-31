import { ListItemButton } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    const { children, ...rest } = props

    return <ListItemButton {...rest}>{children}</ListItemButton>
}

const config: ComponentInfo = {
    name: 'ListItemButton',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'autoFocus',
            type: 'boolean',
            defaultValue: 'false',
        },
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
            name: 'focusVisibleClassName',
            type: 'string',
        },
        {
            name: 'orientation',
            type: 'text',
            enum: ['horizontal', 'vertical'],
            defaultValue: 'horizontal',
        },
        {
            name: 'selected',
            type: 'boolean',
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
            component: { name: 'ListItemButton' },
        },
    ],
}

export default {
    component,
    ...config,
}
