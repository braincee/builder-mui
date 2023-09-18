import type { JSX } from 'react'
import { Slider } from '@mui/joy'
import { Blocks, ComponentInfo } from '@builder.io/sdk-react'

function component(props: any): JSX.Element {
    const { children, endDecorator, ...rest } = props

    return (
        <Slider {...rest} endDecorator={<Blocks blocks={endDecorator} />}>
            {children}
        </Slider>
    )
}

const config: ComponentInfo = {
    name: 'Slider',
    canHaveChildren: false,
    inputs: [
        {
            name: 'aria-label',
            type: 'string',
        },
        {
            name: 'aria-valuetext',
            type: 'string',
        },
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
            name: 'defaultValue',
            type: 'string',
        },
        {
            name: 'disabled',
            type: 'boolean',
        },
        {
            name: 'disableSwap',
            type: 'boolean',
        },
        {
            name: 'isRtl',
            type: 'boolean',
        },
        // {
        //     name: 'marks',
        //     type: 'object',
        //     defaultValue: [],
        // },
        {
            name: 'max',
            type: 'number',
        },
        {
            name: 'min',
            type: 'number',
        },
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'orientation',
            type: 'text',
            enum: ['horizontal', 'vertical'],
        },
        {
            name: 'scale',
            type: 'number',
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
            name: 'step',
            type: 'number',
        },
        {
            name: 'tabIndex',
            type: 'number',
        },
        {
            name: 'track',
            type: 'text',
            enum: ['inverted', 'normal', 'false'],
        },
        {
            name: 'value',
            type: 'number',
        },
        {
            name: 'valueLabelDisplay',
            type: 'text',
            enum: ['auto', 'on', 'off'],
        },
        {
            name: 'variant',
            type: 'text',
            enum: ['solid', 'soft', 'outlined', 'plain'],
        },
    ],
}

export default {
    component,
    ...config,
}

