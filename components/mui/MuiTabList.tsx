import { TabList } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <TabList {...props}/>
}

const config: ComponentInfo = {
    name: 'TabList',
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
            name: 'disableUnderline',
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
            name: 'sticky',
            type: 'string',
            enum: ['bottom', 'top'],
            defaultValue: 'top',
        },
        {
            name: 'tabFlex',
            type: 'number',
        },
        {
            name: 'indicatorPlacement',
            type: 'string',
            enum: ['bottom', 'left', 'right', 'top'],
            defaultValue: 'right',
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
            component: { name: 'Tab' },
        },
    ],
    docsLink: "https://mui.com/joy-ui/api/tab-list/"
}


export default {
    component,
    ...config,
}
