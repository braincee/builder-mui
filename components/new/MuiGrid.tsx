import { Grid } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    const { children, ...rest } = props

    return <Grid {...rest}>{children}</Grid>
}

const config: ComponentInfo = {
    name: 'Grid',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'xs',
            type: 'number',
            helperText: 'viewpoint width',
        },
        {
            name: 'md',
            type: 'number',
            helperText: 'viewpoint width',
        },
        {
            name: 'sm',
            type: 'number',
            helperText: 'viewpoint width',
        },
        {
            name: 'spacing',
            type: 'number',
            helperText: 'Space between children',
        },
        {
            name: 'rowSpacing',
            type: 'number',
            helperText: 'Gap between rows',
        },
        {
            name: 'columnSpacing',
            type: 'number',
            helperText: 'Gap between rows',
        },
        {
            name: 'columns',
            type: 'number',
        },
        {
            name: 'container',
            type: 'boolean',
        },
        {
            name: 'direction',
            type: 'text',
            enum: ['row', 'row-reverse', 'column', 'column-reverse'],
        },
    ],
    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Item', options: { text: 'item' } },
        },
    ],
}

export default {
    component,
    ...config,
}