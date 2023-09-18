import { Divider } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <Divider {...props}/>
}

const config: ComponentInfo = {
    name: 'Divider',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'component',
            type: 'string',
        },
        {
            name: 'inset',
            type: 'text',
            enum: ['none', 'context', 'string'],
        },
        {
            name: 'orientation',
            type: 'text',
            enum: ['horizontal', 'vertical'],
            defaultValue: 'horizontal',
        },
        {
            name: 'slotProps',
            type: 'object',
            defaultValue: {},
        },
    ],
    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Text', options: { text: 'Value' } },
        },
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Chip', options: { text: 'Value' } },
        },
    ],
}

export default {
    component,
    ...config,
}

