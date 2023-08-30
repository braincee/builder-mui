import type { ComponentInfo } from '@builder.io/sdk-react'
import { Option } from '@mui/joy'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    return <Option {...props} />
}

const config: ComponentInfo = {
    name: 'Option',
    canHaveChildren: true,
    childRequirements: {
        message: 'You can only put Text',
        query: {
            'component.name': { $in: ['Text'] },
        },
    },
    inputs: [
        {
            name: 'color',
            type: 'text',
            enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
            defaultValue: 'neutral',
        },
        {
            name: 'component',
            type: 'string',
        },
        {
            name: 'disabled',
            type: 'boolean',
        },
        {
            name: 'label',
            type: 'string',
        },
        {
            name: 'slotProps',
            type: 'object',
            defaultValue: {},
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
            component: { name: 'Text', options: { text: 'Option 1' } },
        },
    ],
}

export default {
    component,
    ...config,
}
