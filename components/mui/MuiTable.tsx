import { Table } from '@mui/joy'
import type { ComponentInfo } from '@builder.io/sdk-react'
import type { JSX } from 'react'

function component(props: any): JSX.Element {
    return <Table {...props} />
}

const config: ComponentInfo = {
    name: 'Table',
    canHaveChildren: true,
    noWrap: true,
    inputs: [
        {
            name: 'borderAxis',
            type: 'text',
            enum: ['both', 'bothBetween', 'xBetween', 'yBetween', 'x', 'y', 'none'],
            defaultValue: 'xBetween',
        },
        {
            name: 'color',
            type: 'text',
            enum: ['primary', 'neutral', 'danger', 'success', 'warning', 'info'],
            defaultValue: 'neutral',
        },
        {
            name: 'disabled',
            type: 'boolean',
        },
        {
            name: 'hoverRow',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'noWrap',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'size',
            type: 'text',
            enum: ['sm', 'md', 'lg'],
            defaultValue: 'md',
        },
        {
            name: 'slotProps',
            type: 'object',
            defaultValue: {},
        },
        {
            name: 'stickyFooter',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'stickyHeader',
            type: 'boolean',
            defaultValue: 'false',
        },
        {
            name: 'stripe',
            type: 'text',
            enum: ['odd', 'even'],
        },
        {
            name: 'variant',
            type: 'text',
            enum: ['solid', 'soft', 'outlined', 'plain'],
            defaultValue: 'plain',
        },
    ],
    docsLink: "https://mui.com/joy-ui/react-table/"
}

export default {
    component,
    ...config,
}
