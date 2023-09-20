import { CardContent } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <CardContent {...props}/>
}

const config: ComponentInfo = {
    name: 'CardContent',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'component',
            type: 'string',
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
            component: { name: 'Card', options: {text: "Card 1"} },
        },
    ],
    docsLink: "https://mui.com/joy-ui/api/card-content/"
}

export default {
    component,
    ...config,
}