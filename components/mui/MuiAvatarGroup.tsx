import { AvatarGroup } from '@mui/joy'
import { ComponentInfo } from '@builder.io/sdk-react'
import * as React from 'react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    return <AvatarGroup {...props}/>
}

const config: ComponentInfo = {
    name: 'AvatarGroup',
    noWrap: true,
    canHaveChildren: true,
    childRequirements: {
        message: 'You can only put Avatars',
        query: {
          'component.name': { $in: ['Avatar'] },
        },
    },
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
            name: 'src',
            type: 'string',
        },
        {
            name: 'srcSet',
            type: 'string',
        },
        {
            name: 'variant',
            type: 'text',
            enum: ['outlined', 'plain', 'soft', 'solid'],
        },
    ],
    defaultChildren: [
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Avatar' },
        },
        {
            '@type': '@builder.io/sdk:Element',
            component: { name: 'Avatar' },
        },
    ],
}

export default {
    component,
    ...config,
}