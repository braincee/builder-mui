import { Stack } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <Stack {...props}/>
}

const config: ComponentInfo = {
    name: 'Stack',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'component',
            type: 'string',
        },
        {
            name: 'direction',
            type: 'text',
            enum: ['column-reverse', 'column', 'row-reverse', 'row'],
        },
        {
            name: 'spacing',
            type: 'number',
            helperText: 'Space between immediate children',
        },
        {
            name: 'useFlexGap',
            type: 'boolean',
        },
    ],

    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Item', options: { text: 'item 1' } },
        },
    ],
}

export default {
    component,
    ...config,
}

