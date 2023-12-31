import { ListItem } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <ListItem {...props}/>
}

const config: ComponentInfo = {
    name: 'ListItem',
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
            name: 'nested',
            type: 'boolean',
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
            component: { name: 'List', options: {text: "Item"} },
        },
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Item', options: {text: "Item 1"} },
        },
    ],
    docsLink: "https://mui.com/joy-ui/api/list-item/"
}

export default {
    component,
    ...config,
}
