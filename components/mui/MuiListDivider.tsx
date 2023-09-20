import { ListDivider } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <ListDivider {...props}/>
}

const config: ComponentInfo = {
    name: 'ListDivider',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'components',
            type: 'string',
        },
        {
            name: 'inset',
            type: 'string',
            enum: ['context', 'gutter', 'startDecorator', 'startContent', 'string'],
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
            component: { name: 'List' },
        },
    ],
    docsLink: "https://mui.com/joy-ui/api/list-divider/"
}

export default {
    component,
    ...config,
}
