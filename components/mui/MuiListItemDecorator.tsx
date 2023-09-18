import { ListItemDecorator } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {

    return <ListItemDecorator {...props}/>
}


const config: ComponentInfo = {
    name: 'ListItemDecorator',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'components',
            type: 'string',
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
            component: { name: 'ListItemDecorator' },
        },
    ],
}

export default {
    component,
    ...config,
}
