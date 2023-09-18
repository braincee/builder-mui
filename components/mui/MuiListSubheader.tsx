import { ListSubheader } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <ListSubheader {...props}/>
}


const config: ComponentInfo = {
    name: 'ListSubheader',
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
            name: 'slotProps',
            type: 'object',
            defaultValue: {},
        },
        {
            name: 'sticky',
            type: 'boolean',
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
            component: { name: 'ListSubheader' },
        },
    ],
}

export default {
    component,
    ...config,
}
