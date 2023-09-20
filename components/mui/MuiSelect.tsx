import type { ComponentInfo } from '@builder.io/sdk-react'
import type { JSX } from 'react'
import { Blocks } from '@builder.io/sdk-react'
import { Select } from '@mui/joy'

function component(props: any): JSX.Element {
    const { children, startDecorator, endDecorator, ...rest } = props

    return (
        <Select
            {...rest}
            startDecorator={
                <Blocks
                    blocks={startDecorator}
                    parent={props.builderBlock && props.builderBlock.id}
                    path={'component.options.startDecorator'}
                />
            }
            endDecorator={
                <Blocks
                    blocks={endDecorator}
                    parent={props.builderBlock && props.builderBlock.id}
                    path={'component.options.endDecorator'}
                />
            }
        >
            {children}
        </Select>
    )
}

const config: ComponentInfo = {
    name: 'Select',
    noWrap: true,
    canHaveChildren: true,
    inputs: [
        {
            name: 'autoFocus',
            type: 'boolean',
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
            name: 'defaultListboxOpen',
            type: 'boolean',
        },
        {
            name: 'defaultValue',
            type: 'text',
        },
        {
            name: 'disabled',
            type: 'boolean',
        },
        {
            name: 'endDecorator',
            type: 'blocks',
            hideFromUI: true,
            helperText: 'This is an editable region.',
            defaultValue: [
                {
                    '@type': '@builder.io/sdk:Element',
                    component: {
                        name: 'Icon',
                        options: {
                            name: 'Edit',
                        },
                    },
                    responsiveStyles: {
                        large: {
                            // Styles for the editable section
                        },
                    },
                },
            ],
        },
        {
            name: 'indicator',
            type: 'blocks',
            hideFromUI: true,
            helperText: 'This is an editable region.',
            defaultValue: [
                {
                    '@type': '@builder.io/sdk:Element',
                    component: {
                        name: 'Box',
                        options: {},
                    },
                    responsiveStyles: {
                        large: {
                            // Styles for the editable section
                        },
                    },
                },
            ],
        },
        {
            name: 'listboxId',
            type: 'string',
        },
        {
            name: 'listboxOpen',
            type: 'bool',
        },
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'placeholder',
            type: 'string',
        },
        {
            name: 'required',
            type: 'bool',
        },
        {
            name: 'size',
            type: 'text',
            enum: ['sm', 'md', 'lg'],
        },
        {
            name: 'startDecorator',
            type: 'blocks',
            hideFromUI: true,
            helperText: 'This is an editable region.',
            defaultValue: [
                {
                    '@type': '@builder.io/sdk:Element',
                    component: {
                        name: 'Icon',
                        options: {
                            name: 'Edit',
                        },
                    },
                    responsiveStyles: {
                        large: {
                            // Styles for the editable section
                        },
                    },
                },
            ],
        },
        {
            name: 'value',
            type: 'text',
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
            component: {
                name: 'Option',
                options: {
                    value: 'opt-1',
                },
            },
            children: [
                {
                    '@type': '@builder.io/sdk:Element',
                    component: { name: 'Text', options: { text: 'Option 1' } },
                },
            ],
        },
        {
            '@type': '@builder.io/sdk:Element',
            component: {
                name: 'Option',
                options: {
                    value: 'opt-2',
                },
            },
            children: [
                {
                    '@type': '@builder.io/sdk:Element',
                    component: { name: 'Text', options: { text: 'Option 2' } },
                },
            ],
        },
        {
            '@type': '@builder.io/sdk:Element',
            component: {
                name: 'Option',
                options: {
                    value: 'opt-3',
                },
            },
            children: [
                {
                    '@type': '@builder.io/sdk:Element',
                    component: { name: 'Text', options: { text: 'Option 3' } },
                },
            ],
        },
    ],
    docsLink: "https://mui.com/joy-ui/react-select/"
}

export default {
    component,
    ...config,
}
